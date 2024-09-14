interface INavigationItem {
	name: string;
	link?: string;
	subItems?: INavigationItem[];
}

export const navigationItem: INavigationItem[] = [
	{
		name: 'Правила торговли',
		link: '/',
	},
	{
		name: 'Топ трейдеры',
		link: '/',
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
