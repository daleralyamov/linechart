import { PADDING, ROWS_COUNT, VIEW_HEIGHT, VIEW_WIDTH } from "../constants.js";

export default function yAxis(ctx: CanvasRenderingContext2D, yMax: number) {
	ctx.beginPath();

	const step = VIEW_HEIGHT / ROWS_COUNT;
	const textStep = yMax / ROWS_COUNT;

	ctx.strokeStyle = "#bbb";
	ctx.font = "normal 20px Helvetica, sans-serif";
	ctx.fillStyle = "#96a2aa";

	for (let i = ROWS_COUNT; i >= 1; i--) {
		const y = step * i;
		const text = Math.round(yMax - textStep * i).toString();
		ctx.fillText(text, 5, y + PADDING - 10);
		ctx.moveTo(0, y + PADDING);
		ctx.lineTo(VIEW_WIDTH, y + PADDING);
	}

	ctx.stroke();
	ctx.closePath();
}
