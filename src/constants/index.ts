import FinancialYear from '../types/FinancialYear';

// @TODO: Confirm the exact last epoch for FY 2022
const financialYears: Record<string, FinancialYear> = {
	'2021': {
		start_date: new Date('July 01, 2020'),
		end_date: new Date('June 30, 2021'),
		first_epoch: 203,
		last_epoch: 275
	},
	'2022': {
		start_date: new Date('July 01, 2021'),
		end_date: new Date('June 30, 2022'),
		first_epoch: 276,
		last_epoch: 348
	}
};

export { financialYears };
