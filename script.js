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
		ctx.lineWidth = 4;
		ctx.strokeText("ericw31415.github.io", c.width / 2, 100);
		ctx.fillStyle = "white";
		ctx.fillText("ericw31415.github.io", c.width / 2, 100);
		
		//Draw start button
		ctx.rect(c.width / 2 - 125, c.height / 2 - 50, 250, 100);
		ctx.stroke();
		ctx.fillStyle = "blue";
		ctx.fillRect(c.width / 2 - 125, c.height / 2 - 50, 250, 100);
		
		//Draw start button text
		ctx.textBaseline = "middle";
		ctx.strokeText("START", c.width / 2, c.height / 2);
		ctx.fillStyle = "white";
		ctx.fillText("START", c.width / 2, c.height / 2);
	}
};