import axios, { AxiosResponse } from 'axios';

const getStakingHistory = async (rewardsAddress: string): Promise<AxiosResponse> => {
	return axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/accounts/${rewardsAddress}/rewards`, {
		headers: {
			project_id: '5k4f6Bkg2T1VVgnRMYMwD69KCemDBpwU'
		}
	});
};

export default getStakingHistory;
