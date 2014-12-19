/**
 * This object manage the animations for section changes
 * 
 * @returns {Object} An object with 2 methods: initialize and change
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
	 * Set the currentSection with the section shown @ page load
	 * 
	 *  @public
	 *  @constructs
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
	 */
	var change = function(_newSection) {
		newSection = _newSection;
		animations[currentSection].unbuild().then(function() {
			currentSection = newSection;
			animations[newSection].build();
		});
	};

	return {
		initialize: initialize,
		change: change
	}
})();