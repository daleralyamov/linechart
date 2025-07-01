import { Data } from "../types";

export default function computeBoundaries({ columns, types }: Data) {
	let yMin = Infinity;
	let yMax = -Infinity;

	columns.forEach((column) => {
		if (typeof column[0] === "string" && types[column[0]] !== "line") return;

		column.forEach((value) => {
			if (typeof value !== "number") return;
			if (yMin > value) yMin = value;
			if (yMax < value) yMax = value;
		});
	});

	return { yMin, yMax };
}
