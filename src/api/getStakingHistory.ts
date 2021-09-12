import axios, { AxiosResponse } from 'axios';

const getStakingHistory = async (rewardsAddress: string): Promise<AxiosResponse> => {
	return axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/accounts/${rewardsAddress}/rewards`, {
		headers: {
			project_id: process.env.REACT_APP_BLOCKFROST_API_KEY
		}
	});
};

export default getStakingHistory;
