/**
 * This object contains all the animations of each of the sections.
 * Each section in turn is an object with two methods: build & unbuild
 * Each method returns a promise that must be fulfilled by executing the function fufilled() when the animation are completed successfully
 * 
 * @returns {Object} An object with 1 object for each section
 */
var animations = (function(){

	var choosing = {
		build: function() {
			return new Promise(function (fulfill, reject) {
				var tl = new TimelineMax();
				//animation here
			});
		},

		unbuild: function() {
			return new Promise(function (fulfill, reject) {
				console.log('desarmar choosing');
				var tl = new TimelineMax();
				tl
					.to('#choosing .img-developments', 2, {left: -105})
					.to('#choosing', 1, {display: 'none', onComplete:fulfill});
			});
		}
	};

	var video = {
		build: function() {
			return new Promise(function (fulfill, reject) {
				console.log('arma video');
				var tl = new TimelineMax();
				tl
					.to('#video', 0.5, {display: 'block'})
					.fromTo('#video', 2, {alpha:0}, {alpha: 1})
					.fromTo('#video .img-videoproductions', 2, {left:-75}, {left: 75, onComplete:fulfill});
			});
		},

		unbuild: function() {
			return new Promise(function (fulfill, reject) {
				var tl = new TimelineMax();
				//animation here
			});
		}
	};

	return {
		choosing: choosing,
		video: video
	}

})();