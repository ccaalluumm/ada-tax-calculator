const unixTimestampGetYear = (timestamp: number): number => {
	const milliseconds = timestamp * 1000;
	const dateObject = new Date(milliseconds);
	return dateObject.getFullYear();
};

export default unixTimestampGetYear;
