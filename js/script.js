var c = document.getElementById("game");
var ctx = c.getContext("2d");

window.addEventListener("resize", resize);

var Game = {
	aspectRatio: 16 / 9,
	fps: 30,
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
		ctx.fillStyle = "blue";
		ctx.borderRect(c.width / 2 - 125 * Game.scaleFactor, c.height / 2 + 50 * Game.scaleFactor, 250 * Game.scaleFactor, 100 * Game.scaleFactor);
		
		//Draw start button text
		ctx.textBaseline = "middle";
		ctx.fillStyle = "white";
		ctx.font = "bold " + (40 * Game.scaleFactor) + "px Ubuntu";
		ctx.borderText("START", c.width / 2, c.height / 2 + 100 * Game.scaleFactor);
	}
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
	Game.draw();
}

syncSetTimeout(resize, 1000, function() {
	toggleVisible("loading", "game");
});