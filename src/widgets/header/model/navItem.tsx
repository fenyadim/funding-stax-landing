import { Crown } from 'lucide-react';

interface INavigationItem {
	name: string;
	link?: string;
	subItems?: INavigationItem[];
	Icon?: JSX.Element;
}

export const navigationItem: INavigationItem[] = [
	{
		name: 'Правила торговли',
		link: '/trading-rules',
	},
	{
		name: 'Топ трейдеры',
		link: '/',
		Icon: <Crown className='text-amber-500' />,
	},
	{
		name: 'Связаться с нами',
		link: '/',
	},
	{
		name: 'Больше',
		subItems: [
			{
				name: 'Блог',
				link: '/',
			},
			{
				name: 'Affiliate Portal',
				link: '/',
			},
			{
				name: 'Вопрос-ответ',
				link: '/',
			},
		],
	},
];
