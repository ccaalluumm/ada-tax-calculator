import axios, { AxiosResponse } from 'axios';

const getEpochDetails = async (epoch: string): Promise<AxiosResponse> => {
	return axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/epochs/${epoch}`, {
		headers: {
			project_id: process.env.REACT_APP_BLOCKFROST_API_KEY
		}
	});
};

export default getEpochDetails;
