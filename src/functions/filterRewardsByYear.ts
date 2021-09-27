import { financialYears } from '../constants';
import AdaRewards from '../types/AdaRewards';
import unixTimestampeToDatetime from '../utils/unixToDateTime';

const filterRewardsByFinancialYear = (year: string, rewards: AdaRewards[]): AdaRewards[] => {
	return rewards.filter(reward => unixTimestampeToDatetime(reward.reward_pay_date) >= financialYears[year].start_date && unixTimestampeToDatetime(reward.reward_pay_date) <= financialYears[year].end_date);
};

export default filterRewardsByFinancialYear;
