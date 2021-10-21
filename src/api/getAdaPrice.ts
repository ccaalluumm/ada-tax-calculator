import axios, { AxiosResponse } from 'axios';

function mapToApiDate(date: string): string {
	return `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(0, 4)}`;
};

const getAdaPrice = async (date: Date): Promise<AxiosResponse> => {
	const correctDate = mapToApiDate(date.toISOString());
	return axios.get('https://api.coingecko.com/api/v3/coins/cardano/history', {
		params: {
			date: correctDate,
		}
	});
};

export default getAdaPrice;
