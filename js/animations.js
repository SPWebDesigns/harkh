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
				.to('#development', 0.1, {display: 'block', alpha:1})

				.fromTo('.sign-dev', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-dev', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#development .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#development .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#development .btn-graph', 0.2, {scale:1},1)

				.fromTo('#development .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#development .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#development .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#development .btn-dev-main', 0.3, {left:-295, top:-270}, {left:210, top:0},0.1)

				.fromTo('#development .btn-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#development .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#development .btn-web', 0.2, {scale:1},0.9)

				.fromTo('#development .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#development .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#development .btn-video', 0.2, {scale:1},1)

				.fromTo('#development .img-augmentedreality', 0.2, {left:-450}, {left:80},0.1)
				.fromTo('#development .img-mobileapps', 0.2, {top:-325}, {top:215},0.3)
				.fromTo('#development .img-videogames', 0.2, {left:780}, {left:295},0.5)
				.fromTo('#development .img-software', 0.2, {left:-450}, {left:110},0.7)

				.fromTo('#development .btn-augmentedreality', 0.2, {left:-370,top:250}, {left:155,top:133},0.5)
				.fromTo('#development .btn-mobileapps', 0.2, {left:770,top:-190}, {left:295,top:190},0.3)
				.fromTo('#development .btn-videogames', 0.2, {left:770,top:635}, {left:370,top:355},0.1)
				.fromTo('#development .btn-software', 0.2, {left:-340,top:575}, {left:215,top:445},0.3)


				.fromTo('#development .contact-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#development .contact-dev', 1, {scale:0.05}, {scale:1.3},0.4)
				.to('#development .contact-dev', 0.2, {alpha:1, scale:1,onComplete: sectionsHandler.resolvePromise},1.6);
		},
		unbuild: function() {
			var tl = new TimelineMax();
			tl

				.fromTo('.sign-dev', 0.6, {alpha:1}, {alpha: 0},0.1)

				.fromTo('#development .btn-graph', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#development .btn-graph', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#development .btn-obj', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#development .btn-obj', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#development .btn-dev-main', 0.3, {left:210, top:10}, {left:-295, top:-270},0.1)

				.fromTo('#development .btn-web', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#development .btn-web', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#development .btn-video', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#development .btn-video', 0.6, {scale:1}, {scale:0.05},0.3)

				.to('#development .img-augmentedreality', 0.2, {left:780},0.1)
				.to('#development .img-mobileapps', 0.2, {top:745},0.3)
				.to('#development .img-videogames', 0.2, {left:-390},0.4)
				.to('#development .img-software', 0.2, {left:780},0.7)

				.to('#development .btn-augmentedreality', 0.2, {left:765},0.2)
				.to('#development .btn-mobileapps', 0.2, {left:-320},0.4)
				.to('#development .btn-videogames', 0.2, {left:-330},0.5)
				.to('#development .btn-software', 0.2, {left:780},0.7)
				

				.fromTo('#development .contact-dev', 0.4, {alpha:1}, {alpha:0},0.4)

				.to('#development', 0.1, {alpha:0})
				.to('#development', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var video = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#video', 0.1, {display: 'block', alpha:1})
				
				.fromTo('.sign-video', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-video', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#video .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#video .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#video .btn-graph', 0.2, {scale:1},1)

				.fromTo('#video .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#video .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#video .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#video .btn-video-main', 0.3, {left:-370, top:270}, {left:210, top:0},0.1)

				.fromTo('#video .btn-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#video .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#video .btn-web', 0.2, {scale:1},0.9)

				.fromTo('#video .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#video .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#video .btn-dev', 0.2, {scale:1},1)

				.fromTo("#video .img-2d3danimations", 0.3, {top:-410},{top:325, left:145},0.1)
				.fromTo("#video .img-commercials", 0.2, {left:-490},{left:240, top:200},0.3)
				.fromTo("#video .img-videoproductions", 0.2, {left:775},{left:75, top:150},0.1)

				.fromTo("#video .btn-2d3danimations", 0.2, {top:815},{top:380, left:325},0.4)
				.fromTo("#video .btn-commercials", 0.3, {left:780},{left:350, top:175},0.4)
				.fromTo("#video .btn-videoproductions", 0.2, {left:-360},{left:195, top:130},0.5)

				.fromTo('#video .contact-video', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#video .contact-video', 1, {scale:0.05}, {scale:1.3},0.4)
				.to('#video .contact-video', 0.2, {alpha:1, scale:1,onComplete: sectionsHandler.resolvePromise},1.6);
				
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl

				.fromTo('.sign-video', 0.6, {alpha:1}, {alpha: 0},0.1)

				.fromTo('#video .btn-graph', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#video .btn-graph', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#video .btn-obj', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#video .btn-obj', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#video .btn-video-main', 0.3, {left:210, top:10}, {left:-370, top:270},0.1)

				.fromTo('#video .btn-web', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#video .btn-web', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#video .btn-dev', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#video .btn-dev', 0.6, {scale:1}, {scale:0.05},0.3)

				.to("#video .img-2d3danimations", 0.4, {top:0, left:-500},0.1)
				.to("#video .img-commercials", 0.4, {left:0, top:-420},0.3)
				.to("#video .img-videoproductions", 0.2, {left:715, top:780},0.1)

				.to("#video .btn-2d3danimations", 0.4, {top:815, left:-360},0.5)
				.to("#video .btn-commercials", 0.3, {left:780, top:-250},0.5)
				.to("#video .btn-videoproductions", 0.5, {left:-360,top:600},0.2)

				.fromTo('#video .contact-video', 0.4, {alpha:1}, {alpha:0},0.3)

				.to('#video', 0.1, {alpha:0})
				.to('#video', 0.1, {display:'none', onComplete: sectionsHandler.resolvePromise});

		}
	};


	var web = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#web', 0.1, {display: 'block', alpha:1})

				.fromTo('.sign-web', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-web', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#web .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#web .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#web .btn-graph', 0.2, {scale:1},1)

				.fromTo('#web .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#web .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#web .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#web .btn-web-main', 0.3, {left:210, top:-270}, {left:210, top:0},0.1)

				.fromTo('#web .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#web .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#web .btn-dev', 0.2, {scale:1},0.9)

				.fromTo('#web .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#web .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#web .btn-video', 0.2, {scale:1},1)

				.fromTo("#web .img-web", 0.6, {alpha:0},{alpha:1},0.1)

				.fromTo("#web .btn-seopositioning", 0.2, {left:780},{left:305},0.1)
				.fromTo("#web .btn-webdevelopment", 0.2, {left:-360},{left:75},0.3)
				.fromTo("#web .btn-hosting", 0.2, {left:780},{left:370},0.5)
				.fromTo("#web .btn-ecommerce", 0.2, {left:-370},{left:100},0.7)

				.fromTo('#web .contact-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#web .contact-web', 1, {scale:0.05}, {scale:1.3},0.4)
				.to('#web .contact-web', 0.2, {alpha:1, scale:1,onComplete: sectionsHandler.resolvePromise},1.6);
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl

				.fromTo('.sign-web', 0.6, {alpha:1}, {alpha: 0},0.1)

				.fromTo('#web .btn-graph', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#web .btn-graph', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#web .btn-obj', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#web .btn-obj', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#web .btn-web-main', 0.3, {left:210, top:10}, {left:210, top:-270},0.1)

				.fromTo('#web .btn-dev', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#web .btn-dev', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#web .btn-video', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#web .btn-video', 0.6, {scale:1}, {scale:0.05},0.3)

				.to("#web .img-web", 0.5, {alpha:0},0.1)

				.to("#web .btn-seopositioning", 0.2, {left:780},0.1)
				.to("#web .btn-webdevelopment", 0.2, {left:-360},0.3)
				.to("#web .btn-hosting", 0.2, {left:780},0.5)
				.to("#web .btn-ecommerce", 0.2, {left:-370},0.7)

				.fromTo('#web .contact-web', 0.4, {alpha:1}, {alpha:0},0.3)

				.to('#web', 0.1, {alpha:0})
				.to('#web', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};


	var graphic = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#graphic', 0.1, {display: 'block', alpha:1})

				.fromTo('.sign-graph', 0.2, {alpha:0}, {alpha: 1},0.1)
				.from('.sign-graph', 0.8, {top:-435, ease:Quad.easeInOut}, 0.1)

				.fromTo('#graphic .btn-web', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#graphic .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#graphic .btn-web', 0.2, {scale:1},1)

				.fromTo('#graphic .btn-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#graphic .btn-obj', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#graphic .btn-obj', 0.2, {scale:1},0.9)

				.fromTo('#graphic .btn-graph-main', 0.3, {left:505, top:-270}, {left:210, top:0},0.1)

				.fromTo('#graphic .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#graphic .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#graphic .btn-dev', 0.2, {scale:1},0.9)

				.fromTo('#graphic .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#graphic .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#graphic .btn-video', 0.2, {scale:1},1)

				.fromTo("#graphic .img-graph", 0.4, {top:-610},{top:90},0.1)

				.fromTo("#graphic .btn-posters", 0.7, {top:815},{top:170},0.1)
				.fromTo("#graphic .btn-illustrations", 0.7, {top:815},{top:245},0.3)
				.fromTo("#graphic .btn-logos", 0.7, {top:815},{top:300},0.5)
				.fromTo("#graphic .btn-brochures", 0.7, {top:815},{top:400},0.7)
	
				.fromTo('#graphic .contact-graph', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#graphic .contact-graph', 1, {scale:0.05}, {scale:1.3},0.4)
				.to('#graphic .contact-graph', 0.2, {alpha:1, scale:1,onComplete: sectionsHandler.resolvePromise},1.6);
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.fromTo('.sign-graph', 0.6, {alpha:1}, {alpha: 0},0.1)

				.fromTo('#graphic .btn-web', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#graphic .btn-web', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#graphic .btn-obj', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#graphic .btn-obj', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#graphic .btn-graph-main', 0.3, {left:210, top:10}, {left:505, top:-270},0.1)

				.fromTo('#graphic .btn-dev', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#graphic .btn-dev', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#graphic .btn-video', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#graphic .btn-video', 0.6, {scale:1}, {scale:0.05},0.3)

				.to("#graphic .img-graph", 0.6, {top:-610},0.2)

				.to("#graphic .btn-posters", 0.7, {top:815},0.1)
				.to("#graphic .btn-illustrations", 0.7, {top:815},0.3)
				.to("#graphic .btn-logos", 0.7, {top:815},0.5)
				.to("#graphic .btn-brochures", 0.7, {top:815},0.7)

				.fromTo('#graphic .contact-graph', 0.4, {alpha:1}, {alpha:0},0.3)

				.to('#graphic', 0.1, {alpha:0})
				.to('#graphic', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};
//
	var promotional = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#promotional', 0.1, {display: 'block', alpha:1})

				.fromTo('.sign-obj', 0.2, {alpha:0}, {alpha: 1},0.1)

				.fromTo('#promotional .btn-graph', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#promotional .btn-graph', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#promotional .btn-graph', 0.2, {scale:1},1)

				.fromTo('#promotional .btn-web', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#promotional .btn-web', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#promotional .btn-web', 0.2, {scale:1},0.9)

				.fromTo('#promotional .btn-obj-main', 0.3, {left:790, top:270}, {left:210, top:0},0.1)

				.fromTo('#promotional .btn-dev', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#promotional .btn-dev', 0.4, {scale:0.05}, {scale:1.3},0.4)
				.to('#promotional .btn-dev', 0.2, {scale:1},0.9)

				.fromTo('#promotional .btn-video', 0.6, {alpha:0}, {alpha: 1},0.5)
				.fromTo('#promotional .btn-video', 0.4, {scale:0.05}, {scale:1.3},0.5)
				.to('#promotional .btn-video', 0.2, {scale:1},1)

				.fromTo("#promotional .img-personalizedobjects", 0.4, {left:780},{scale:1,left:265, ease:Back.easeOut},0.2)
				.fromTo("#promotional .img-merchandising", 0.4, {left:-480},{scale:1,left:40, ease:Back.easeOut},0.3)
				.fromTo("#promotional .img-corporategifts", 0.4, {left:775},{scale:1,left:295, ease:Back.easeOut},0.5)

				.fromTo("#promotional .btn-personalizedobjects", 0.4, {left:780},{scale:1,left:180, ease:Back.easeOut},0.2)
				.fromTo("#promotional .btn-merchandising", 0.4, {left:-370},{scale:1,left:170, ease:Back.easeOut},0.3)
				.fromTo("#promotional .btn-corporategifts", 0.4, {left:770},{scale:1,left:270, ease:Back.easeOut},0.5)


				.fromTo('#promotional .contact-obj', 0.6, {alpha:0}, {alpha: 1},0.4)
				.fromTo('#promotional .contact-obj', 1, {scale:0.05}, {scale:1.3},0.4)
				.to('#promotional .contact-obj', 0.2, {alpha:1, scale:1,onComplete: sectionsHandler.resolvePromise},1.6);
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.fromTo('.sign-obj', 0.6, {alpha:1}, {alpha: 0},0.1)

				.fromTo('#promotional .btn-graph', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#promotional .btn-graph', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#promotional .btn-web', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#promotional .btn-web', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#promotional .btn-obj-main', 0.3, {left:210, top:10}, {left:-295, top:-270},0.1)

				.fromTo('#promotional .btn-dev', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#promotional .btn-dev', 0.6, {scale:1}, {scale:0.05},0.3)

				.fromTo('#promotional .btn-video', 0.6, {alpha:1}, {alpha: 0},0.5)
				.fromTo('#promotional .btn-video', 0.6, {scale:1}, {scale:0.05},0.3)

				.to("#promotional .img-personalizedobjects", 0.7, {scale: 0},0.2)
				.to("#promotional .img-merchandising", 0.7,{scale: 0},0.3)
				.to("#promotional .img-corporategifts", 0.7, {scale: 0},0.4)

				.to("#promotional .btn-personalizedobjects", 0.7, {scale: 0},0.2)
				.to("#promotional .btn-merchandising", 0.7,{scale: 0},0.3)
				.to("#promotional .btn-corporategifts", 0.7, {scale: 0},0.4)

				.fromTo('#promotional .contact-obj', 0.4, {alpha:1}, {alpha:0},0.3)

				.to('#promotional', 0.1, {alpha:0})
				.to('#promotional', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};
	var contact = {
		build: function() {
			var tl = new TimelineMax();
			tl
				.to('#contact', 0.1, {display: 'block', alpha:1})

				.fromTo('#contact .poster', 0.3, {left: 55, top: -390}, {left: 55, top: 35},0.1)
				.fromTo('#contact .cartel', 0.4, {left: -610, top: 570}, {left: 15, top: 190},0.2)
				.fromTo('#contact .submit', 0.4, {alpha:0}, {alpha:1, onComplete: sectionsHandler.resolvePromise},0.7)
				.fromTo('#contact .branch', 0.3, {left: 430, top: 815}, {left: 430, top: 380},0.3)
				.fromTo('#contact .btn-contact-promotional', 0.2, {left: 790, top: 475}, {left: 425, top: 485},0.5)
				.fromTo('#contact .btn-contact-web', 0.2, {left: 790, top: 370}, {left: 425, top: 370},0.5)
				.fromTo('#contact .btn-contact-video', 0.2, {left: 790, top: 395}, {left: 425, top: 425},0.6)
				.fromTo('#contact .btn-contact-development', 0.2, {left: 790, top: 424}, {left: 350, top: 455},0.6)
				.fromTo('#contact .btn-contact-graphic', 0.2, {left: 790, top: 437}, {left: 340, top: 395},0.6);
		},

		unbuild: function() {
			var tl = new TimelineMax();
			tl
				.to('#contact .poster', 0.1, {left: 55, top: -390},0.1)
				.to('#contact .cartel', 0.4, {left: -610, top: 570},0.3)
				.to('#contact .submit', 0.4, {alpha:0}, {alpha:1},0.8)
				.to('#contact .branch', 0.3, {left: 790, top: 815},0.4)
				.to('#contact .btn-contact-promotional', 0.2, {left: 790, top: 475},0.5)
				.to('#contact .btn-contact-web', 0.2, {left: 790, top: 370},0.1)
				.to('#contact .btn-contact-video', 0.2, {left: 790, top: 395},0.2)
				.to('#contact .btn-contact-development', 0.2, {left: 790, top: 424},0.3)
				.to('#contact .btn-contact-graphic', 0.2, {left: 790, top: 437},0.4)

				.to('#contact', 0.1, {alpha:0})
				.to('#contact', 0.1, {display: 'none', onComplete: sectionsHandler.resolvePromise});
		}
	};

	return {
		choosing: choosing,
		development: development,
		video: video,
		web: web,
		graphic: graphic,
		promotional: promotional,
		contact: contact
	}

})();