var animationHome = (function(){
	
	var play = function animation() {
		//Welcome Animation
	    //Sets the number of colums of the spreadsheet 
	    var welcomeSrpite = new SteppedEase(27);// Sets the number of colums of the spreadsheet 4;

	    //Main TimeLine
	    //Instantiate a TimelineLite
	    var tl = new TimelineMax();
	    //Bullet 1
	    //Character Sit Animation. 880value is the width of a frame on the spreadsheet * number of colums = 220*4=880
	    tl
		//.to("#welcome", 3, {backgroundPosition: '-' + 27783 + 'px 0px', ease: welcomeSrpite, repeat: 7}, 0.2)
		.to("#welcome", 2.5, {backgroundPosition: '-' + 13889 + 'px 0px', ease: welcomeSrpite}, 0)
		.to("#welcome", 2.3, {right:"225px",ease:Power0.easeIn}, 0)
		.to("#welcome",  0, {backgroundPosition: '-' + 13377 + 'px 0px', ease: welcomeSrpite}, 2.3)
		.to("#harkhLogo", 0.2, {display:"block",ease:Power0.easeIn}, 2)
		.to("#btn-welcome", 0.2, {left:"295px",ease:Power0.easeIn}, 2.6)
		.to("#btn-bienvenido", 0.2, {right:"305px",ease:Power0.easeIn}, 2.6);
		//.addLabel("stop", 3)// Stop
	};

	return {
		play: play
	}
})();