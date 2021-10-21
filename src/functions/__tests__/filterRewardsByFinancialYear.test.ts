import filterRewardsByFinancialYear from '../filterRewardsByFinancialYear';

test('should filter out epochs after financial year', () => {
	const mockAdaRewards = [
		{
			epoch: '276',
			amount: 1,
			reward_pay_date: 1234,
			price: 2
		}
	];

	expect(filterRewardsByFinancialYear('2021', mockAdaRewards)).toStrictEqual([]);
});

test('should filter out eppochs before financial year', () => {
	const mockAdaRewards = [
		{
			epoch: '202',
			amount: 1,
			reward_pay_date: 1234,
			price: 2
		}
	];

	expect(filterRewardsByFinancialYear('2021', mockAdaRewards)).toStrictEqual([]);
});

test('should filter in epochs during the financial year', () => {
	const mockAdaRewards = [
		{
			epoch: '203',
			amount: 1,
			reward_pay_date: 1234,
			price: 2
		}
	];

	expect(filterRewardsByFinancialYear('2021', mockAdaRewards)).toStrictEqual([
		{
			epoch: '203',
			amount: 1,
			reward_pay_date: 1234,
			price: 2
		}
	]);
});
