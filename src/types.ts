export type Data = {
	columns: (string | number)[][];
	types: {
		[key in string]: "line" | "x";
	};
	names: {
		[key in string]: "line" | "x";
	};
	colors: {
		[key in string]: string;
	};
};
