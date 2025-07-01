import { DPI_HEIGHT } from "../constants.js";
import toDate from "../functions/toDate.js";

export default function xAxis(
	ctx: CanvasRenderingContext2D,
	data: (string | number)[],
	xRation: number
) {
	const colsCount = 6;
	const step = Math.round(data.length / colsCount);

	ctx.beginPath();
	for (let i = 1; i < data.length; i += step) {
		const text = toDate(Number(data[i]));
		const x = i * xRation;
		ctx.fillText(text, x, DPI_HEIGHT - 10);
	}
	ctx.closePath();
}
