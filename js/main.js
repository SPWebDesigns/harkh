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
		console.log("sec");
		console.log(sec);
		$('#wrapper').find('#contact-us-page').removeClass().addClass(sec);
	}
	function resetForm(){
		$("#contact-us-page input, #contact-us-page textarea").val("");
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
	$( ".btn-developments, .btn-video, .btn-web, .btn-dev, .btn-graph, .btn-obj, .btn-graphicdesign, .btn-promotionalobjects, .submit" )
		.mouseover(function() {
			btns
				.to(this,0.2,{scale:1.1});
		})
		.mouseout(function() {
			btns
				.to(this,0.2,{scale:1});
	});
});
