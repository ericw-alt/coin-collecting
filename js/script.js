var c = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("resize", resize);
document.addEventListener("contextmenu", e => e.preventDefault());
c.addEventListener("click", canvasClick);
c.addEventListener("mousemove", canvasMouseMove);

//---#Definition section start#---//
var Game = {
	//Graphics-related
	aspectRatio: 16 / 9,
	fps: 30,
	
	//Object related
	rects: [], //Fill with data for rectangular fields; order is [x, y, width, height]
	switches: {
		onStart: true,
		onStartHover: false
	},
	
	//Drawing function
	draw: function() {
		//Draw title
		ctx.fillStyle = "#7B7B7B";
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.textAlign = "center";
		ctx.font = "bold " + (50 * Game.scaleFactor) + "px Ubuntu";
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.borderWidth = 2 * Game.scaleFactor;
		ctx.borderText("ericw31415.github.io", c.width / 2, 125 * Game.scaleFactor);
		
		//Draw start button
		if (Game.switches.onStartHover) {
			ctx.fillStyle = "#2030FF";
		} else {
			ctx.fillStyle = "blue";
		}
		ctx.borderRect(...fetchRect(0));
		
		//Draw start button text
		ctx.textBaseline = "middle";
		ctx.fillStyle = "white";
		ctx.font = "bold " + (40 * Game.scaleFactor) + "px Ubuntu";
		ctx.borderText("START", c.width / 2, c.height / 2 + 100 * Game.scaleFactor);
		requestAnimationFrame(Game.draw);
	},
	loop: null
};

function resize() {
	var newWidth =  window.innerWidth;
	var newHeight =  window.innerHeight;
	var newAspectRatio = newWidth / newHeight;
	
	//Pillarboxing and letterboxing
	if (newAspectRatio > Game.aspectRatio) {
		c.width = newHeight * Game.aspectRatio;
		c.height = newHeight;
	} else {
		c.width = newWidth;
		c.height = newWidth / Game.aspectRatio;
	}
	
	Game.scaleFactor = c.width / 1200;
	//Don't forget to update Game.objects; it's not passed by reference
	Game.rects = [
		[
			c.width / 2 - 125 * Game.scaleFactor,
			c.height / 2 + 50 * Game.scaleFactor,
			250 * Game.scaleFactor,
			100 * Game.scaleFactor,
		] //Start button
	];
	requestAnimationFrame(Game.draw);
}

//---#Data fetch & validate section start#---//
function canvasClick(e) {
	if (Game.switches.onStart) {
		if ((e.offsetX > c.width / 2 - 125 * Game.scaleFactor && e.offsetX < c.width / 2 + 125 * Game.scaleFactor) && (e.offsetY > c.height / 2 + 50 * Game.scaleFactor && e.offsetY < c.height / 2 + 150 * Game.scaleFactor)) {
			Game.switches.onStart = !Game.switches.onStart;
			alert("Clicked start button!");
		}
	}
}
function canvasMouseMove(e) {
	c.style.cursor = "default";
	if (Game.switches.onStart) {
		if ((e.offsetX > c.width / 2 - 125 * Game.scaleFactor && e.offsetX < c.width / 2 + 125 * Game.scaleFactor) && (e.offsetY > c.height / 2 + 50 * Game.scaleFactor && e.offsetY < c.height / 2 + 150 * Game.scaleFactor)) {
			Game.switches.onStartHover = true;
			c.style.cursor = "pointer";
		} else {
			Game.switches.onStartHover = false;
			c.style.cursor = "default";
		}
	}
}

function fetchRect(num) {
	return Game.rects[num];
}
//---#Data fetch & validate section end#---//
//---#Definition section end#---//

//Loading screen hack
sleep(1000).then(() => {
	resize();
	toggleVisible("loading", "game");
});
