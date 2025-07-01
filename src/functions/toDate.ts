export default function toDate(timestamp: number) {
	const shortMonth = [
		"Jan",
		"Fab",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];

	const date = new Date(timestamp);

	return `${shortMonth[date.getMonth()]} ${date.getDate()}`;
}
