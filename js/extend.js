CanvasRenderingContext2D.prototype.borderText = function(text, x, y) {
	ctx.save();
	ctx.lineWidth = ctx.borderWidth * 2;
	ctx.strokeText(text, x, y);
	ctx.fillText(text, x, y);
	ctx.restore();
}

CanvasRenderingContext2D.prototype.borderRect = function(x, y, width, height) {
	ctx.save();
	ctx.lineWidth = ctx.borderWidth * 2;
	ctx.rect(x, y, width, height);
	ctx.stroke();
	ctx.fillRect(x, y, width, height);
	ctx.restore();
}