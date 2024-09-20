import { ITable } from './types';

export const plansData: ITable = {
	values: {
		maxDailyLimit: 'Max дневной лимит потерь',
		maxLimit: 'Max лимит потерь',
		goalFirstStage: 'Цель на этапе 1',
		goalSecondStage: 'Цель на этапе 2',
		minDays: 'Min кол-во дней торговли',
		fee: 'Единовременная комиссия',
	},
	5000: {
		oneStep: {
			maxDailyLimit: 5,
			maxLimit: 10,
			goalFirstStage: 8,
			goalSecondStage: 5,
			minDays: 5,
			fee: 55,
		},
		twoStep: {
			maxDailyLimit: 5000,
			maxLimit: 500,
			goalSecondStage: 500,
			minDays: 4,
			fee: 55,
		},
	},
	10000: {
		oneStep: {
			maxDailyLimit: 5,
			maxLimit: 10,
			goalFirstStage: 8,
			goalSecondStage: 5,
			minDays: 5,
			fee: 55,
		},
		twoStep: {
			maxDailyLimit: 10000,
			maxLimit: 1000,
			goalSecondStage: 1000,
			minDays: 4,
			fee: 55,
		},
	},
};
