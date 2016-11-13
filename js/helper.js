function toggleVisible() {
	var args = arguments;
	
	for (var i = 0; i < args.length; i++) {
		if (document.getElementById(args[i]).style.visibility == "hidden") {
			document.getElementById(args[i]).style.visibility = "visible";
		} else {
			document.getElementById(args[i]).style.visibility = "hidden";
		}
	}
}

function syncSetTimeout(func, ms, callback) {
	(function sync(done) {
		if (!done) {
			setTimeout(function() {
				eval("(" + func + ")();");
				sync(true);
			}, ms);
			return;
		}
		eval("(" + callback + ")();");
	})();
}

//Extend CanvasRenderingContext2D
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