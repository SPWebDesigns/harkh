/**
 * This object contains all the animations of each of the sections.
 * Each section in turn is an object with two methods: build & unbuild
 * Each method returns a promise that must be fulfilled by executing the function sectionsHandler.resolvePromise() when the animation are completed successfully
 * 
 * @returns {Object} An object with 1 object for each section
 */
var animations = (function(){

	var choosing = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#choosing', 0.1, {display: 'block'})
				.fromTo('#choosing', 2, {alpha:0}, {alpha: 1, onComplete: sectionsHandler.resolvePromise});
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#choosing', 2, {alpha:0})
				.to('#choosing', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var development = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#development', 0.1, {display: 'block'})
				.fromTo('#development', 2, {alpha:0}, {alpha: 1, onComplete: sectionsHandler.resolvePromise});
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#development', 2, {alpha:0})
				.to('#development', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var video = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#video', 0.1, {display: 'block'})
				.fromTo('#video', 2, {alpha:0}, {alpha: 1})
				.fromTo('#video .img-videoproductions', 2, {left:-75}, {left: 75, onComplete: sectionsHandler.resolvePromise});
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#video', 2, {alpha:0})
				.to('#video', 0.1, {display:'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var web = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#web', 0.1, {display: 'block'})
				.fromTo('#web', 2, {alpha:0}, {alpha: 1, onComplete: sectionsHandler.resolvePromise});
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#web', 2, {alpha:0})
				.to('#web', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var graphic = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#graphic', 0.1, {display: 'block'})
				.fromTo('#graphic', 2, {alpha:0}, {alpha: 1, onComplete: sectionsHandler.resolvePromise});
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#graphic', 2, {alpha:0})
				.to('#graphic', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var promotional = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#promotional', 0.1, {display: 'block'})
				.fromTo('#promotional', 2, {alpha:0}, {alpha: 1, onComplete: sectionsHandler.resolvePromise});
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#promotional', 2, {alpha:0})
				.to('#promotional', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	return {
		choosing: choosing,
		development: development,
		video: video,
		web: web,
		graphic: graphic,
		promotional: promotional
	}

})();