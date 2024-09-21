export interface IRouteProps {
	link: string;
	name: string;
}

export enum AppRoutes {
	HOME = 'home',
	TRADING_RULES = 'trading-rules',
	TOP_TRADERS = 'top-traders',
	CONTACT_US = 'contact-us',
	BLOG = 'blog',
	AFFILIATE_PORTAL = 'affiliate-portal',
	FAQ = 'faq',
}

export const routeConfig: Record<AppRoutes, IRouteProps> = {
	[AppRoutes.HOME]: {
		link: '/',
		name: 'Главная',
	},
	[AppRoutes.TRADING_RULES]: {
		link: '/trading-rules',
		name: 'Правила торговли',
	},
	[AppRoutes.TOP_TRADERS]: {
		link: '/top-traders',
		name: 'Топ трейдеры',
	},
	[AppRoutes.CONTACT_US]: {
		link: '/contact-us',
		name: 'Связаться с нами',
	},
	[AppRoutes.BLOG]: {
		link: '/blog',
		name: 'Блог',
	},
	[AppRoutes.AFFILIATE_PORTAL]: {
		link: '/affiliate-portal',
		name: 'Affiliate Portal',
	},
	[AppRoutes.FAQ]: {
		link: '/faq',
		name: 'Вопрос-ответ',
	},
};
