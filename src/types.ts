export type Data = {
	columns: (string | number)[][];
	types: {
		[key in string]: "line" | "x";
	};
	names: {
		[key in string]: string;
	};
	colors: {
		[key in string]: string;
	};
};

