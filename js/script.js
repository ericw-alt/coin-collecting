var c, ctx;

function init() {
	c = document.getElementById("game");
	ctx = c.getContext("2d");
	resize();
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resize);

function resize() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	
	Game.draw();
}

var Game = {
	fps: 30,
	draw: function() {
		//Draw title
		ctx.fillStyle = "#7B7B7B";
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.textAlign = "center";
		ctx.font = "bold 40px Ubuntu";
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.borderWidth = 2;
		ctx.borderText("ericw31415.github.io", c.width / 2, 100);
		
		//Draw start button
		ctx.fillStyle = "blue";
		ctx.borderRect(c.width / 2 - 125, c.height / 2 - 50, 250, 100);
		
		//Draw start button text
		ctx.textBaseline = "middle";
		ctx.fillStyle = "white";
		ctx.borderText("START", c.width / 2, c.height / 2);
	}
};