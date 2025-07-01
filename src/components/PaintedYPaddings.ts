import { DPI_HEIGHT, DPI_WIDHT, PADDING } from "../constants.js";

export default function PaintedYPaddings(ctx: CanvasRenderingContext2D) {
	ctx.beginPath();
	ctx.fillStyle = "#FEF1F1";
	ctx.fillRect(0, 0, DPI_WIDHT, PADDING);
	ctx.fillRect(0, DPI_HEIGHT - PADDING, DPI_WIDHT, PADDING);
	ctx.closePath();
}
