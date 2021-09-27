import getAdaPrice from '../api/getAdaPrice';
import getEpochDetails from '../api/getEpochDetails';
import getStakingHistory from '../api/getStakingHistory';
import AdaRewards from '../types/AdaRewards';
import StakingReward from '../types/StakingReward';
import unixTimestampeToDatetime from '../utils/unixToDateTime';

const calculateStakingRewards = async (rewardsAddress: string, setErrorMessage: (message: string) => void): Promise<AdaRewards[]> => {
	return await getStakingHistory(rewardsAddress)
		.then(resp => resp.data)
		.then(stakingHistory => {
			return stakingHistory.map(async function getEpochEndTime(stakingReward: StakingReward) {
				const rewardPayDate = await getEpochDetails(stakingReward.epoch+1).then(resp => resp.data.start_time).catch(err => setErrorMessage(err.response.data.message));
				const adaPriceOnPayDate = await getAdaPrice(unixTimestampeToDatetime(rewardPayDate)).then(resp => resp.data.market_data.current_price.aud).catch(err => setErrorMessage(err.response.data.message));

				return {epoch: stakingReward.epoch, amount: parseInt(stakingReward.amount), reward_pay_date: rewardPayDate, price: adaPriceOnPayDate};
			});
		})
		.catch(err => setErrorMessage(err.response.data.message));
};

export default calculateStakingRewards;