//Global Functions
$(document).ready(function () {
	 //initialize the sectionsHandler object with the section shown @ page load
	 sectionsHandler.initialize('choosing');

	 //listener for section change, that shoot a change for sectionHandler
	 $('.comp-section').on('click',function(){
	 	sectionsHandler.change($(this).data('section'));
	 });
});
