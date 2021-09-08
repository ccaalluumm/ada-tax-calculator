import axios from 'axios';
import EpochReward from '../types/EpochReward';

const getRewardsHistroy = (rewardsAddress: string): EpochReward[] | void  => {
	axios.get(`https://cardano-mainnet.blockfrost.io/api/v0/accounts/${rewardsAddress}/rewards`, {
		headers: {
			project_id: '5k4f6Bkg2T1VVgnRMYMwD69KCemDBpwU'
		}
	})
		.then(response => {
			return response.data as EpochReward[];
		})
		.catch(error => {
			console.log(error);
		});
};

export default getRewardsHistroy;
