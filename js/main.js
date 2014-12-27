//Global Functions
$(document).ready(function () {
	 //initialize the sectionsHandler object with the section shown @ page load
	 sectionsHandler.initialize('choosing');

	 //listener for section change, that shoot a change for sectionHandler
	 $('.comp-section').on('click',function(){
	 	sectionsHandler.change($(this).data('section'));
	 	setSection($(this).data('section'));
	 });

	 $(".contact-btn").on('click', function(){
	 	var section= $(this).parent().parent().attr('id');
	 	console.log(section);
		switch (section) {
		    case 'video':
		        $(".contact-us-video-off").hide();
			 	$("#main-section").addClass("overlay");
			 	$("#contact-us-page").show("slow");
		        break;
		    case 'web':
		    	$(".contact-us-web-off").hide();
			 	$("#main-section").addClass("overlay");
			 	$("#contact-us-page").show("slow");
		        console.log(section);
		        break;
		    case 'development':
		    	$(".contact-us-dev-off").hide();
			 	$("#main-section").addClass("overlay");
			 	$("#contact-us-page").show("slow");
		        console.log(section);
		        break;     
		    case 'graphic':
		        $(".contact-us-graph-off").hide();
			 	$("#main-section").addClass("overlay");
			 	$("#contact-us-page").show("slow");
		        console.log(section);
		        setSection(section);
		        break;
		    case 'promotional':
		        $(".contact-us-obj-off").hide();
			 	$("#main-section").addClass("overlay");
			 	$("#contact-us-page").show("slow");
		        console.log(section);
		        break;
		}

	 });
	 $(".contact-btn-close").on('click', function(){
	 	var lastSectionSelected=$(this).parent().attr('class');
	 	console.log(lastSectionSelected);
	 	console.log("lastSectionSelected");
		$("#main-section").removeClass("overlay");
		$("#contact-us-page").hide();
		$(".contact-us-"+lastSectionSelected+"-off").show();
	 });/*
	 $(".overlay").on('click', function(){
		 	console.log("click overlay");
			$("#main-section").removeClass("overlay");
			$("#contact-us-page").hide();
			$(".contact-us-video-off").show();
	 });*/
	function setSection(sec){
		console.log("sec");
		console.log(sec);
		$('#wrapper').find('#contact-us-page').removeClass().addClass(sec);
	}
});
