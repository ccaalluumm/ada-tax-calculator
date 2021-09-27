import FinancialYear from '../types/FinancialYear';

const financialYears: Record<string, FinancialYear> = {
	'2021': {
		start_date: new Date('July 01, 2020'),
		end_date: new Date('June 30, 2021'),
	},
	'2022': {
		start_date: new Date('July 01, 2021'),
		end_date: new Date('June 30, 2022'),
	}
};

export { financialYears };
