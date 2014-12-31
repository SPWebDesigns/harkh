<?php

namespace ResearchSquare\ResearchSquare\Infrastructure;

use Doctrine\Common;
use Doctrine\ORM;
use Needcaffeine\Slim\Extras as SlimExtras;
use Pimple;
use ResearchSquare\AreaOfStudy;
use ResearchSquare\ClientAdapter;
use ResearchSquare\Identity;
use ResearchSquare\ResearchSquare\Ui\Controller;
use ResearchSquare\ResearchSquare\Ui\Form;
use ResearchSquare\ResearchSquare\Ui\Twig\Extension as TwigExtension;
use ResearchSquare\Scholarship;
use ResearchSquare\Session;

class Container extends Pimple\Container
{
    public function __construct()
    {
        parent::__construct();

        $sessionConfig = require 'config/session.local.php';
        $this->register(new Session\SessionProvider($sessionConfig['session']));

        $identityConfig = require 'config/identity.local.php';
        $config = require 'config/local.php';
        // @codeCoverageIgnoreStart
        if (isset($config['identity'])) {
            $identityConfig['client_id'] = $config['identity']['client_id'];
            $identityConfig['client_secret'] = $config['identity']['client_secret'];
        }
        // @codeCoverageIgnoreEnd
        $this->register(new Identity\IdentityProvider($identityConfig));

        $this->errorHandling();
        $this->persistence();
        $this->middleware();
        $this->controllers();
    }

    /**
     * @codeCoverageIgnore
     */
    public function errorHandling()
    {
        // Our own fancy error handler
        set_error_handler(function ($errno, $errstr, $errfile = null, $errline = null, $errcontext = null) {
            switch ($errno) {
                // Catch "Catchable fatal error"s
                case E_RECOVERABLE_ERROR:
                    throw new \ErrorException($errstr, $errno, 0, $errfile, $errline);
                    break;
                // use the default error handler
                default:
                    return false;
                    break;
            }
        });
    }

    /**
     * @codeCoverageIgnore
     */
    protected function persistence()
    {
        $this['EntityManager'] = function ($container) {
            $dbParams = $container['config']['doctrine'];

            // More configuration!
            $paths = array('../src/Domain/Model');
            $proxyDir = '../data/DoctrineORMModule/Proxy';
            $isDevMode = $container['config']['slim']['debug'];

            // Event manager
            $evm = new Common\EventManager();
            $tablePrefix = new DoctrineExtensions\DatabasePrefix(
                $container['config']['doctrine']['dbname'],
                $container['config']['doctrine']['prefix']
            );
            $evm->addEventListener(ORM\Events::loadClassMetadata, $tablePrefix);

            $config = ORM\Tools\Setup::createAnnotationMetadataConfiguration(
                $paths,
                $isDevMode,
                $proxyDir
            );

            return ORM\EntityManager::create($dbParams, $config, $evm);
        };

        $this['Scholarship'] = function ($container) {
            $rpcAdapter = new ClientAdapter\Rpc\JsonRpcAdapter(
                $container['config']['scholarship']['url']
            );

            if ($user = $container['Session']->get('user')) {
                $rpcAdapter->authenticate($user);
            }

            return $rpcAdapter;
        };

        $this['Engagement'] = function ($container) {
            return new ClientAdapter\Rpc\JsonRpcAdapter(
                $container['config']['engagement']['url']
            );
        };

        $this['AreaOfStudy'] = function ($container) {
            return new AreaOfStudy\AvailableAreaOfStudyRepositoryFactory(
                new AreaOfStudy\Client(
                    new ClientAdapter\Rest\GuzzleAdapter($container['config']['common']['url'])
                )
            );
        };
    }

    /**
     * We create these handlers outside of the bootstrap so that we don't
     * instantiate unnecessary views or middleware globally. For example,
     * API routes don't need Twig to be instantiated, and non-API routes
     * don't need the json middleware.
     * @codeCoverageIgnore
     */
    protected function middleware()
    {
        $this['FormServiceManager'] = function ($c) {
            $smConfigurator = new Form\ServiceManagerConfigurator();

            return $smConfigurator->createServiceManager([
                'form_elements' => [
                    'factories' => [
                    ],
                    'invokables' => [
                        'Form\SearchForm' => 'ResearchSquare\ResearchSquare\Ui\Form\SearchForm',
                    ],
                ],
                'validators' => [
                    'invokables' => [
                    ],
                ],
                'service_manager' => [
                    'services' => [
                        'pimple' => $this,
                    ],
                ],
            ]);
        };

        $this['NonApiHandler'] = function ($c) {
            return function () use ($c) {
                $app = $c['app'];
                $fsm = $c['FormServiceManager'];
                $session = $c['Session'];

                $user = array();
                if ($session->get('user')) {
                    $user = $session->get('user');
                }

                $view = new \Slim\Views\Twig();
                $view->parserOptions = $c['config']['slim'];
                $view->parserExtensions = array(
                    new \Slim\Views\TwigExtension(),
                    new TwigExtension\App($user),
                    new TwigExtension\Form($fsm),
                );
                $app->view($view);

                $app->configureMode('development', function () {
                    error_reporting(-1);
                    ini_set('display_errors', 1);
                    ini_set('display_startup_errors', 1);
                });
            };
        };

        $this['ApiHandler'] = function ($c) {
            return function () use ($c) {
                $app = $c['app'];

                $app->view(new SlimExtras\Views\ApiView($c['config']['slim']['debug']));
                $app->add(new SlimExtras\Middleware\ApiMiddleware($c['config']['slim']['debug']));
            };
        };
    }

    protected function controllers()
    {
        $serviceContainer = new ServiceContainer($this);

        // Define controllers.
        $this['AuthenticationController'] = function () use ($serviceContainer) {
            return new Controller\AuthenticationController($serviceContainer);
        };
        $this['DataController'] = function () use ($serviceContainer) {
            return new Controller\DataController($serviceContainer);
        };
        $this['IndexController'] = function () use ($serviceContainer) {
            return new Controller\IndexController($serviceContainer);
        };
        $this['JournalListsController'] = function () use ($serviceContainer) {
            return new Controller\JournalListsController($serviceContainer);
        };
        $this['JournalsController'] = function () use ($serviceContainer) {
            return new Controller\JournalsController($serviceContainer);
        };
        $this['ResearchersController'] = function () use ($serviceContainer) {
            return new Controller\ResearchersController($serviceContainer);
        };
        $this['SourceController'] = function () use ($serviceContainer) {
            return new Controller\SourceController($serviceContainer);
        };
        $this['SurveyController'] = function () use ($serviceContainer) {
            return new Controller\SurveyController($serviceContainer);
        };
    }
}
