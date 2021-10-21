import { financialYears } from '../constants';
import AdaRewards from '../types/AdaRewards';

const filterEpoch = (reward: AdaRewards, year: string) => {
	const epoch = parseInt(reward.epoch);
	const firstEpoch = financialYears[year].first_epoch;
	const lastEpoch = financialYears[year].last_epoch;
	return (epoch >= firstEpoch && epoch <= lastEpoch);
};

const filterRewardsByFinancialYear = (year: string, rewards: AdaRewards[]): AdaRewards[] => {
	return rewards.filter(reward => filterEpoch(reward, year));
};

export default filterRewardsByFinancialYear;
