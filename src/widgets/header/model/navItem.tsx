import { Crown } from 'lucide-react';

import { AppRoutes, IRouteProps, routeConfig } from '@/shared/config/route';

interface INavigationItem extends Partial<IRouteProps> {
	subItems?: INavigationItem[];
	Icon?: JSX.Element;
}

export const navigationItem: INavigationItem[] = [
	routeConfig[AppRoutes.TRADING_RULES],
	{
		...routeConfig[AppRoutes.TOP_TRADERS],
		Icon: <Crown className='text-amber-500' />,
	},
	routeConfig[AppRoutes.CONTACT_US],
	{
		name: 'Больше',
		subItems: [
			routeConfig[AppRoutes.AFFILIATE_PORTAL],
			routeConfig[AppRoutes.BLOG],
			routeConfig[AppRoutes.FAQ],
		],
	},
];
