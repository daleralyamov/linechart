import {
	DPI_HEIGHT,
	DPI_WIDHT,
	HEIGHT,
	PADDING,
	VIEW_HEIGHT,
	VIEW_WIDTH,
	WIDTH
} from "../constants.js";
import computeBoundaries from "../functions/computeBoundaries.js";
import { Data } from "../types.js";
import Line from "./Line.js";
import xAxis from "./xAxis.js";
import yAxis from "./yAxis.js";

export default function Chart(canvas: HTMLCanvasElement, data: Data) {
	const ctx = canvas.getContext("2d")!;
	canvas.style.width = WIDTH + "px";
	canvas.style.height = HEIGHT + "px";
	canvas.width = DPI_WIDHT;
	canvas.height = DPI_HEIGHT;

	const { yMax } = computeBoundaries(data);
	const yRation = VIEW_HEIGHT / yMax;
	const xRation = VIEW_WIDTH / (data.columns[0].length - 2);

	const yData = data.columns.filter((column) => data.types[column[0]] === "line");
	const xData = data.columns.filter((column) => data.types[column[0]] === "x")[0];

	/* PaintedYPaddings(ctx); */
	yAxis(ctx, yMax);
	xAxis(ctx, xData, xRation);

	yData.forEach((column) => {
		const name = column[0];
		const coords = column
			.slice(1)
			.map((y, i) => [
				Math.floor(i * xRation),
				Math.floor(DPI_HEIGHT - PADDING - Number(y) * yRation)
			]);
		Line(ctx, coords, data.colors[name]);
	});
}
