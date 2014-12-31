//Global Functions
$(document).ready(function () {
	 //initialize the sectionsHandler object with the section shown @ page load
	 sectionsHandler.initialize('choosing');

	 //listener for section change, that shoot a change for sectionHandler
	 $('.comp-section').on('click',function(){
	 	sectionsHandler.change($(this).data('section'));
	 	setSection($(this).data('section'));//Set the section for show the correct contact form
	 });

	 $(".contact-btn").on('click', function(){
	 	var section= $(this).parent().parent().attr('id');
	 	$("#main-section").addClass("overlay");
	 	$("#contact-us-page").css('background-image', 'url(img/contact-us/contact-us-'+section+'.png)');
		$("#contact-us-page").show("slow");
		$(".contact-us-"+section+"-off").hide();
		resetForm();
	 });
	 $(".contact-btn-close").on('click', function(){
	 	var lastSectionSelected=$(this).parent().attr('class');
		$("#main-section").removeClass("overlay");
		$("#contact-us-page").hide();
		$(".contact-us-"+lastSectionSelected+"-off").show();
	 });
	
	function setSection(sec){
		$('#wrapper').find('#contact-us-page').removeClass().addClass(sec);
		$('#wrapper').find('#gallery-page').removeClass().addClass(sec);
	}
	function resetForm(){
		$("#contact-us-page input, #contact-us-page textarea").val("");
	}
	/*--- Gallery Page ---*/
	
	
	$(".btn-videoproductions, .btn-commercials, .btn-2d3danimations, .btn-augmentedreality, .btn-mobileapps, .btn-videogames, .btn-software, .btn-seopositioning, .btn-webdevelopment, .btn-hosting, .btn-ecommerce, .btn-posters, .btn-illustrations, .btn-logos, .btn-brochures, .btn-personalizedobjects, .btn-merchandising, .btn-corporategifts").on('click', function(){
	 	var section= $(this).parent().parent().attr('id');
	 	console.log("section video: "+section);
	 	$('#'+section).css('opacity','0.3');
	 	$("#main-section").addClass("overlay");
	 	$("#gallery-page").css('background-image', 'url(img/contact-us/contact-us-'+section+'.png)');
	 	var gallery_in = new TimelineMax();
	 	gallery_in
	 		.fromTo('#gallery-page', 0.4, {scale:0}, {scale:1},0.2)
	 		.fromTo('#gallery-page', 0.2, {display: 'none'}, {display: 'block'},0.1);
		
	});
	$(".gallery-btn-close").on('click', function(){
	 	var lastSectionSelected=$(this).parent().attr('class');
	 	$('#'+lastSectionSelected).css('opacity','1');
		$("#main-section").removeClass("overlay");
		console.log("before gallery none");
		var gallery_off = new TimelineMax();
		gallery_off
	 		.fromTo('#gallery-page', 0.4, {scale:1}, {scale:0},0.2)
	 		.fromTo('#gallery-page', 0.2, {display: 'block'}, {display: 'none'},0.1);
	 	console.log("after gallery none");
	 });

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
	$( ".btn-developments, .btn-video, .btn-web, .btn-dev, .btn-graph, .btn-obj, .btn-graphicdesign, .btn-promotionalobjects, .btn-videoproductions, .btn-commercials, .btn-2d3danimations, .btn-augmentedreality, .btn-mobileapps, .btn-videogames, .btn-software, .btn-seopositioning, .btn-webdevelopment, .btn-hosting, .btn-ecommerce, .btn-posters, .btn-illustrations, .btn-logos, .btn-brochures, .btn-personalizedobjects, .btn-merchandising, .btn-corporategifts,.submit " )
		.mouseover(function() {
			$(this).css('cursor','pointer');
			btns
				.to(this,0.2,{scale:1.1});
		})
		.mouseout(function() {
			btns
				.to(this,0.2,{scale:1});
	});
});
