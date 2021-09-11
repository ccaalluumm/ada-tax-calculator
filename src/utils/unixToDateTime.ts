const unixTimestampeToDatetime = (timestamp: number): Date => {
	const milliseconds = timestamp * 1000;
	const dateObject = new Date(milliseconds);
	return dateObject;
};

export default unixTimestampeToDatetime;
