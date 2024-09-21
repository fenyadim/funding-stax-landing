import { ReactNode } from 'react';

export enum RulesTitle {
	RECOMMENDATIONS = '1. Recommendations',
	TRADING_BEHAVIOUR_AND_RULES = '2. Trading Behaviour and Rules',
	TRADING_INSTRUMENTS = '3. Trading Instruments',
	ACCOUNT = '4. Account',
	PAYOUTS_AND_PROFIT_SPLIT = '5. Payouts & Profit Split',
	SCALING_UP = '6. Scaling Up',
	REFUNDS = '7. Refunds',
	INACTIVITY = '8. Inactivity',
	ADDRESS = '9. IP Address',
}

export enum Phases {
	ONE = 'one-phase',
	TWO = 'two-phase',
}

export type IRulesData = {
	[key in RulesTitle]: {
		[key in Phases]: ReactNode;
	};
};
