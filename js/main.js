//Global Functions
$(document).ready(function () {
	 //initialize the sectionsHandler object with the section shown @ page load
	 sectionsHandler.initialize('choosing');


	 //listener for section change, that shoot a change for sectionHandler
	 $('.comp-section').on('click',function(){
	 	sectionsHandler.change($(this).data('section'));
	 	if($(this).data('section')!=='contact'){ 
	 		setSection($(this).data('section'));//Set the section for show the correct contact form
	 	}
	 });
	
	function setSection(sec){
		$('#wrapper').find('#contact').removeClass().addClass(sec);
		$('#wrapper').find('#gallery-page, #gallery-page-graph, #gallery-page-video').removeClass().addClass(sec);
		setTimeout(function() {
	      $('#contact .poster').css('background-image', 'url("img/contact-us/poster-'+sec+'.png")');
	      	$('body').css('background-image','url("/static/img/b1_left.png")');
		}, 1000);
	}
	function resetForm(){
		$("#contact input, #contact textarea").val("");
	}
	
	/*--- Gallery Page ---*/
	var texts= 
	{
  		'augmentedreality': 'We have all the expertise needed in the new and upcoming AR world. We can develop an AR app specifically for your company. We also provide content managing and hosting services in order to assure an easy solution for your creative team if they want to explore state of the art advertising.',
  		'mobileapps':'Any idea can become an app. We provide Development, Design, Sys Admin, QA and Every Service Needed in order to meterialize your concepts and vision. Our consulting department will guide you to reach the best and faster solution to your needs.',
  		'videogames':'We develop mostly two kinds of Video Games: -Promotional: Advertising using Games is a long-standing practice in the Video Game industry. Various methods have been used to integrate advertising into Video Games to advertise products, organizations or viewpoints. -Educational: These are Games explicitly designed with educational purposes, or which have incidental or secondary educational value.',
  		'software':'When your business starts growing you need different tools to help you automate processes in order to respond faster and better to the increasing demands. Our Development team can create and customize a Software solution which will be able to perform complex operations based on your company’s specific needs.',
  		'seopositioning':'If you want to launch your website presence today you can contact us and we will guide you through the possibilities of SEO positioning. Our services include: Rank reporting, analysis of keyword use, inbound links and internal links structures, plus white-label sharing.',
  		'webdevelopment':'Our programmers work side by side with the designers in order to reach a faster solution for your company. The Web team is always searching and playing with every possible different technique, style and language in the production and maintenance of Web Sites.',
  		'hosting':'Many of our services need the plus of a reliable Hosting space. Over the years we have invested in researching solutions in order to provide a secure environment for your business technical needs. The Hosting service is for Apps, Software, Video Games, Web, etc., developed exclusively by any of the Harkh Departments.',
  		'ecommerce':'The Harkh Web Department has a specific section dedicated exclusively to e-commerce. Shopping Cart, Design, Security, Currency, and everything your site needs to provide this service and extend your business.',

	};
	var graphicImg= 
	{
  		'brochures': '<li><img src="img/gallery/graphic/brochures/01.jpg"/></li> <li><img src="img/gallery/graphic/brochures/02.jpg"/></li><li><img src="img/gallery/graphic/brochures/03.jpg"/></li><li><img src="img/gallery/graphic/brochures/04.jpg"/></li><li><img src="img/gallery/graphic/brochures/05.jpg"/></li><li><img src="img/gallery/graphic/brochures/06.jpg"/></li>',
		'illustrations': '<li><img src="img/gallery/graphic/illustrations/01.jpg"/></li><li><img src="img/gallery/graphic/illustrations/02.jpg"/></li><li><img src="img/gallery/graphic/illustrations/03.jpg"/></li><li><img src="img/gallery/graphic/illustrations/04.jpg"/></li><li><img src="img/gallery/graphic/illustrations/05.jpg"/></li><li><img src="img/gallery/graphic/illustrations/06.jpg"/></li>',
  		'logos': '<li><img src="img/gallery/graphic/logos/01.jpg"/></li> <li><img src="img/gallery/graphic/logos/02.jpg"/></li> <li><img src="img/gallery/graphic/logos/03.jpg"/></li><li><img src="img/gallery/graphic/logos/04.jpg"/></li><li><img src="img/gallery/graphic/logos/05.jpg"/></li><li><img src="img/gallery/graphic/logos/06.jpg"/></li>',
  		'posters': '<li><img src="img/gallery/graphic/posters/01.jpg"/></li><li><img src="img/gallery/graphic/posters/02.jpg"/></li><li><img src="img/gallery/graphic/posters/03.jpg"/></li><li><img src="img/gallery/graphic/posters/04.jpg"/></li><li><img src="img/gallery/graphic/posters/05.jpg"/></li><li><img src="img/gallery/graphic/posters/06.jpg"/></li>'		
	};
	$(".btn-videoproductions, .btn-commercials, .btn-2d3danimations, .btn-augmentedreality, .btn-mobileapps, .btn-videogames, .btn-software, .btn-seopositioning, .btn-webdevelopment, .btn-hosting, .btn-ecommerce, .btn-posters, .btn-illustrations, .btn-logos, .btn-brochures, .btn-personalizedobjects, .btn-merchandising, .btn-corporategifts").on('click', function(){
	 	var section= $(this).parent().attr('id');
	 	$('#'+section).css('opacity','0.3');
	 	$("#main-section").addClass("overlay");
	 	btn_class= $(this).attr('class');
	 	var id_gallery_video= btn_class.substring(4);
	 	console.log("section: "+section);
	 	console.log("id_gallery_video: "+id_gallery_video);
	 	setDevandWebGallery(section, id_gallery_video);
	 	setObjandGraph(section, id_gallery_video);
	 	setVideo(section, id_gallery_video);
	 	
	});

	$(".gallery-btn-close").on('click', function(){
	 	var lastSectionSelected=$(this).parent().attr('class');
	 	$('#'+lastSectionSelected).css('opacity','1');
		$("#main-section").removeClass("overlay");
		console.log("lastSectionSelected: "+lastSectionSelected);
		if(lastSectionSelected != 'video'){
			var gallery_off = new TimelineMax();
			gallery_off
		 		.fromTo($(this).parent(), 0.4, {scale:1}, {scale:0},0.2)
		 		.fromTo($(this).parent(), 0.2, {display: 'block'}, {display: 'none'},0.1);
	 	}
	 	else{
	 		var gallery_off = new TimelineMax();
			gallery_off
		 		.fromTo($(this).parent(), 0.4, {alpha:1}, {alpha:0},0.2)
		 		.fromTo($(this).parent(), 0.2, {display: 'block'}, {display: 'none'},0.4);
	 	}
	});

	function setDevandWebGallery(section, id_frame){
		if (section =="development" || section == "web" ){
			$('#gallery-page .gallery-content').html('');
			$('#gallery-page').css('background-image', 'url("img/frames/frame_software.jpg")');
			$('#gallery-page .gallery-content').html(texts[id_frame]);
			var gallery_in = new TimelineMax();
		    gallery_in
		 		.fromTo('#gallery-page', 0.4, {scale:0}, {scale:1},0.2)
		 		.fromTo('#gallery-page', 0.1, {display: 'none'}, {display: 'block'},0.1);
			
		 	
		}
	}
	function setObjandGraph(section, id_frame){
		if (section =="graphic" || section =="promotional"){
			console.log("graphic if fffff");
			var j=0;
			
			$( "#gallery-page-graph img" ).each(function() {
				j++;
				var replace_src='img/gallery/'+section+'/'+id_frame+'/0'+j+'.jpg';
				$(this).attr("src",replace_src);
			});
	      	var gallery_in = new TimelineMax();
	      	gallery_in
		 		.fromTo('#gallery-page-graph', 0.4, {scale:0}, {scale:1},0.2)
		 		.fromTo('#gallery-page-graph', 0.2, {display: 'none'}, {display: 'block'},0.1);
		}
	}
	function setVideo(section, id_frame){
		if (section =="video" ){
			var src_value= 'img/gallery/video/'+id_frame+'.mp4';
			$('#gallery-page-video .gallery-content #video-emb').attr('src',src_value);
			var gallery_in = new TimelineMax();
		 	gallery_in
		 		.fromTo('#gallery-page-video', 0.4, {alpha:0}, {alpha:1},0.2)
		 		.fromTo('#gallery-page-video', 0.2, {display: 'none'}, {display: 'block'},0.1);
		}
	}
	/*--- Hover Effects*/
	 var contact = new TimelineMax();
	 var btns = new TimelineMax();
	 $( ".contact-btn" )
		.mouseover(function() {
			contact
				.to(".contact-btn",0.3,{scale:1.2});
		})
		.mouseout(function() {
			contact
				.to(".contact-btn",0.3,{scale:1});
	});
	$( ".btn-developments, .btn-video, .btn-web, .btn-dev, .btn-graph, .btn-obj, .btn-graphicdesign, .btn-promotionalobjects, .btn-videoproductions, .btn-commercials, .btn-2d3danimations, .btn-augmentedreality, .btn-mobileapps, .btn-videogames, .btn-software, .btn-seopositioning, .btn-webdevelopment, .btn-hosting, .btn-ecommerce, .btn-posters, .btn-illustrations, .btn-logos, .btn-brochures, .btn-personalizedobjects, .btn-merchandising, .btn-corporategifts,.submit,.btn-contact-promotional,.btn-contact-web,.btn-contact-video,.btn-contact-graphic,.btn-contact-development " )
		.mouseover(function() {
			$(this).css('cursor','pointer');
			btns
				.to(this,0.2,{scale:1.1});
		})
		.mouseout(function() {
			btns
				.to(this,0.2,{scale:1});
	});



	$('#slider').anythingSlider({

	    // *********** Appearance ***********
	    // Theme name; choose from: minimalist-round, minimalist-square,
	    // metallic, construction, cs-portfolio
	    theme: 'metallic',
	    // Set mode to "horizontal", "vertical" or "fade"
	    // (only first letter needed); replaces vertical option
	    mode: 'horizontal',
	    // If true, the entire slider will expand to fit the parent element
	    expand: false,
	    // If true, solitary images/objects in the panel will expand to
	    // fit the viewport
	    resizeContents: true,
	    // Set this value to a number and it will show that many slides at once
	    showMultiple: false,
	    // Anything other than "linear" or "swing" requires the easing plugin
	    easing: "swing",

	    // If true, builds the forwards and backwards buttons
	    buildArrows: true,
	    // If true, builds a list of anchor links to link to each panel
	    buildNavigation: false,
	    // If true, builds the start/stop button
	    buildStartStop: false,

	    // Append forward arrow to a HTML element
	    // (jQuery Object, selector or HTMLNode), if not null
	    appendFowardTo: null,
	    // Append back arrow to a HTML element
	    // (jQuery Object, selector or HTMLNode), if not null
	    appendBackTo: null,
	    // Append controls (navigation + start-stop) to a HTML element
	    // (jQuery Object, selector or HTMLNode), if not null
	    appendControlsTo: null,
	    // Append navigation buttons to a HTML element
	    // (jQuery Object, selector or HTMLNode), if not null
	    appendNavigationTo: null,
	    // Append start-stop button to a HTML element
	    // (jQuery Object, selector or HTMLNode), if not null
	    appendStartStopTo: null,

	    // If true, side navigation arrows will slide out on
	    // hovering & hide @ other times
	    toggleArrows: false,
	    // if true, slide in controls (navigation + play/stop button)
	    // on hover and slide change, hide @ other times
	    toggleControls: false,

	    // Start button text
	    startText: "Start",
	    // Stop button text
	    stopText: "Stop",
	    // Link text used to move the slider forward
	    // (hidden by CSS, replaced with arrow image)
	    forwardText: "&raquo;",
	    // Link text used to move the slider back
	    // (hidden by CSS, replace with arrow image)
	    backText: "&laquo;",
	    // Class added to navigation & start/stop button
	    // (text copied to title if it is hidden by a negative text indent)
	    tooltipClass: 'tooltip',

	    // if false, arrows will be visible, but not clickable.
	    enableArrows: true,
	    // if false, navigation links will still be visible, but not clickable.
	    enableNavigation: true,
	    // if false, the play/stop button will still be visible, but not
	    // clickable. Previously "enablePlay"
	    enableStartStop: true,
	    // if false, keyboard arrow keys will not work for this slider.
	    enableKeyboard: true,

	    // *********** Navigation ***********
	    // This sets the initial panel
	    startPanel: 1,
	    // Amount to go forward or back when changing panels.
	    changeBy: 1,
	    // Should links change the hashtag in the URL?
	    hashTags: false,
	    // if false, the slider will not wrap
	    infiniteSlides: false,
	    // Details at the top of the file on this use (advanced use)
	    navigationFormatter: function(index, panel) {
	        // This is the default format (show just the panel index number)
	        return "" + index;
	    },
	    // Set this to the maximum number of visible navigation tabs;
	    // false to disable
	    navigationSize: false,

	    // *********** Slideshow options ***********
	    // If true, the slideshow will start running; replaces "startStopped" option
	    autoPlay: false,
	    // If true, user changing slides will not stop the slideshow
	    autoPlayLocked: false,
	    // If true, starting a slideshow will delay advancing slides; if false, the slider will immediately advance to the next slide when slideshow starts
	    autoPlayDelayed: false,
	    // If true & the slideshow is active, the slideshow will pause on hover
	    pauseOnHover: true,
	    // If true & the slideshow is active, the  slideshow will stop on the last page. This also stops the rewind effect  when infiniteSlides is false.
	    stopAtEnd: false,
	    // If true, the slideshow will move right-to-left
	    playRtl: false,

	    // *********** Times ***********
	    // How long between slideshow transitions in AutoPlay mode (in milliseconds)
	    delay: 3000,
	    // Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds).
	    resumeDelay: 15000,
	    // How long the slideshow transition takes (in milliseconds)
	    animationTime: 600,
	    // How long to pause slide animation before going to the desired slide (used if you want your "out" FX to show).
	    delayBeforeAnimate  : 0,

	    // *********** Callbacks ***********
	    // Callback before the plugin initializes
	    onBeforeInitialize: function(e, slider) {},
	    // Callback when the plugin finished initializing
	    onInitialized: function(e, slider) {},
	    // Callback on slideshow start
	    onShowStart: function(e, slider) {},
	    // Callback after slideshow stops
	    onShowStop: function(e, slider) {},
	    // Callback when slideshow pauses
	    onShowPause: function(e, slider) {},
	    // Callback when slideshow unpauses - may not trigger
	    // properly if user clicks on any controls
	    onShowUnpause: function(e, slider) {},
	    // Callback when slide initiates, before control animation
	    onSlideInit: function(e, slider) {},
	    // Callback before slide animates
	    onSlideBegin: function(e, slider) {},
	    // Callback when slide completes - no event variable!
	    onSlideComplete: function(slider) {},
	    // Callback when slider resizes
	    onSliderResize: function(e, slider) {},

	    // *********** Interactivity ***********
	    // Event used to activate forward arrow functionality
	    // (e.g. add jQuery mobile's "swiperight")
	    clickForwardArrow: "click",
	    // Event used to activate back arrow functionality
	    // (e.g. add jQuery mobile's "swipeleft")
	    clickBackArrow: "click",
	    // Events used to activate navigation control functionality
	    clickControls: "click focusin",
	    // Event used to activate slideshow play/stop button
	    clickSlideshow: "click",

	    // *********** Video ***********
	    // If true & the slideshow is active & a youtube video
	    // is playing, it will pause the autoplay until the video
	    // is complete
	    resumeOnVideoEnd: true,
	    // If true the video will resume playing (if previously
	    // paused, except for YouTube iframe - known issue);
	    // if false, the video remains paused.
	    resumeOnVisible: true,
	    // If your slider has an embedded object, the script will
	    // automatically add a wmode parameter with this setting
	    addWmodeToObject: "opaque",
	    // return true if video is playing or false if not - used
	    // by video extension
	    isVideoPlaying: function(base) {
	        return false;
	    }

	});













});
