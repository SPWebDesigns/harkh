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
				.to(".btn-developments", 0.3, {top:-280},0.2)
				.to("#choosing .btn-video", 0.3, {left:-320},0.4)
				.to(".btn-graphicdesign", 0.3, {left:790},0.3)
				.to("#choosing .btn-web", 0.3, {left:790},0.4)
				.to(".btn-promotionalobjects", 0.3, {top:795},0.5)
				.to(".img-developments", 0.3, {top:795, left:790},0.8)
				.to("#choosing .img-video", 0.3, {top:795},0.7)
				.to(".img-graphicdesign", 0.3, {top:795, left:0},0.5)
				.to("#choosing .img-web", 0.3, {top:-435},0.6)
				.to(".img-promotionalobjects", 0.3, {left:795},0.7)
				.to('#choosing', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var development = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#development', 0.1, {display: 'block'})

				.fromTo('.sign-dev', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-dev', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#development .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#development .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#development .btn-graph', 0.2, {scale:1},1)

				.fromTo('#development .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#development .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#development .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#development .btn-dev-main', 0.6, {alpha:0}, {alpha: 1},0.3)
				.fromTo('#development .btn-dev-main', 0.4, {scale:0.05}, {scale:1.3},0.3)
				.to('#development .btn-dev-main', 0.2, {scale:1.1},0.8)

				.fromTo('#development .btn-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#development .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#development .btn-web', 0.2, {scale:1},0.9)

				.fromTo('#development .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#development .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#development .btn-video', 0.2, {scale:1},1)
				//.fromTo('#development', 2, {alpha:0}, {alpha: 1, onComplete: sectionsHandler.resolvePromise});
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
				
				.fromTo('.sign-video', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-video', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#video .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#video .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#video .btn-graph', 0.2, {scale:1},1)

				.fromTo('#video .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#video .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#video .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#video .btn-video-main', 0.6, {alpha:0}, {alpha: 1},0.3)
				.fromTo('#video .btn-video-main', 0.4, {scale:0.05}, {scale:1.3},0.3)
				.to('#video .btn-video-main', 0.2, {scale:1.1},0.8)

				.fromTo('#video .btn-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#video .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#video .btn-web', 0.2, {scale:1},0.9)

				.fromTo('#video .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#video .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#video .btn-dev', 0.2, {scale:1},1)

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

				.fromTo('.sign-web', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-web', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#web .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#web .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#web .btn-graph', 0.2, {scale:1},1)

				.fromTo('#web .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#web .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#web .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#web .btn-web-main', 0.6, {alpha:0}, {alpha: 1},0.3)
				.fromTo('#web .btn-web-main', 0.4, {scale:0.05}, {scale:1.3},0.3)
				.to('#web .btn-web-main', 0.2, {scale:1.1},0.8)

				.fromTo('#web .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#web .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#web .btn-dev', 0.2, {scale:1},0.9)

				.fromTo('#web .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#web .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#web .btn-video', 0.2, {scale:1},1)

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

				.fromTo('.sign-graph', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-graph', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#graphic .btn-web', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#graphic .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#graphic .btn-web', 0.2, {scale:1},1)

				.fromTo('#graphic .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#graphic .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#graphic .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#graphic .btn-graph-main', 0.6, {alpha:0}, {alpha: 1},0.3)
				.fromTo('#graphic .btn-graph-main', 0.4, {scale:0.05}, {scale:1.3},0.3)
				.to('#graphic .btn-graph-main', 0.2, {scale:1.1},0.8)

				.fromTo('#graphic .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#graphic .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#graphic .btn-dev', 0.2, {scale:1},0.9)

				.fromTo('#graphic .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#graphic .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#graphic .btn-video', 0.2, {scale:1},1)

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

				.fromTo('.sign-obj', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-obj', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#promotional .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#promotional .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#promotional .btn-graph', 0.2, {scale:1},1)

				.fromTo('#promotional .btn-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#promotional .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#promotional .btn-web', 0.2, {scale:1},0.9)

				.fromTo('#promotional .btn-obj-main', 0.6, {alpha:0}, {alpha: 1},0.3)
				.fromTo('#promotional .btn-obj-main', 0.4, {scale:0.05}, {scale:1.3},0.3)
				.to('#promotional .btn-obj-main', 0.2, {scale:1.1},0.8)

				.fromTo('#promotional .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#promotional .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#promotional .btn-dev', 0.2, {scale:1},0.9)

				.fromTo('#promotional .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#promotional .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#promotional .btn-video', 0.2, {scale:1},1)

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