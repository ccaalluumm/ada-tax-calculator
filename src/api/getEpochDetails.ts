import axios, { AxiosResponse } from 'axios';

const getEpochDetails = async (epoch: string): Promise<AxiosResponse> => {
	return axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/epochs/${epoch}`, {
		headers: {
			project_id: '5k4f6Bkg2T1VVgnRMYMwD69KCemDBpwU' 
		}
	});
};

export default getEpochDetails;
