/**
 * This object manage the animations for section changes
 * 
 * @returns {Object} An object with 3 methods: initialize, change and resolvePromise
 */
var sectionsHandler = (function(){
	/**
	 * Stores the name of the section currently being displayed
	 * 
	 *  @private
	 */
	var currentSection;

	/**
	 * Stores the name of the section to be displayed when triggered a request for change of section
	 * 
	 *  @private
	 */
	var newSection;

	/**
	 * A deferred object that is responsible for managing the promises
	 * 
	 *  @private
	 */
	var defer = $.Deferred();

	/**
	 * Set the currentSection with the section shown @ page load
	 * 
	 *  @public
	 *  @constructs
	 *  @param {String} _currentSection name of the initial section shown @ page load
	 */
	var initialize = function(_currentSection) {
		currentSection = _currentSection;
	};

	/**
	 * This method runs when there are a request for change of section.
	 * It manages the animations for unbuild and build of each section.
	 * Through promises, when the current section ends to unbuild, triggers the build animation of the new section.
	 * 
	 *  @public
	 *  @param {String} _newSection name of the section to be loaded
	 */
	var change = function(_newSection) {
		newSection = _newSection;
		defer =  $.Deferred();
		animations[currentSection].unbuild();
		defer.then(function() {
			currentSection = newSection;
			animations[newSection].build();
		});
	};

	/**
	 * This method solves the promise of deferred object
	 * 
	 *  @public
	 */
	var resolvePromise = function() {
		defer.resolve();
	};

	return {
		initialize: initialize,
		change: change,
		resolvePromise: resolvePromise
	}
})();