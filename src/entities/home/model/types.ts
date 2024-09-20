export interface ITableData {
	maxDailyLimit: number;
	maxLimit: number;
	goalFirstStage?: number;
	goalSecondStage: number;
	minDays: number;
	fee: number;
}

type BalanceType = {
	oneStep: ITableData;
	twoStep: ITableData;
};

export interface ITable {
	values: {
		[key in keyof ITableData]: string;
	};
	[key: number]: BalanceType;
}
