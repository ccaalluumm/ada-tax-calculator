import AdaRewards from '../types/AdaRewards';
import unixTimestampGetYear from '../utils/unixTimestampGetYear';

const filterRewardsByYear = (year: string, rewards: AdaRewards[]): AdaRewards[] => {
	return rewards.filter(reward => unixTimestampGetYear(reward.reward_pay_date) === parseInt(year));
};

export default filterRewardsByYear;
