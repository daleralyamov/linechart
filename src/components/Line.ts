export default function Line(
	ctx: CanvasRenderingContext2D,
	coords: number[][],
	strokeStyle = "#ff0000"
) {
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.lineJoin = "round";
	ctx.strokeStyle = strokeStyle;
	for (const [x, y] of coords) {
		ctx.lineTo(x, y);
	}
	ctx.stroke();
	ctx.closePath();
}
