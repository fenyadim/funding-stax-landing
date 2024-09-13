import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/shared/ui';

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
				name: 'Блок',
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

interface INavigation {
	orientation: 'vertical' | 'horizontal';
	className?: string;
}

export const Navigation = ({ orientation, className }: INavigation) => {
	return (
		<NavigationMenu orientation={orientation} className={className}>
			<NavigationMenuList>
				{navigationItem.map(({ name, link, subItems }) => (
					<NavigationMenuItem key={name}>
						{!subItems ? (
							<Link href={link as string} legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									{name}
								</NavigationMenuLink>
							</Link>
						) : (
							<>
								<NavigationMenuTrigger
									className={cn('hidden hover:bg-transparent', {
										flex: orientation === 'horizontal',
									})}
								>
									{name}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									{subItems.map(({ name: subItemName, link }) => (
										<Link
											key={subItemName}
											href={link as string}
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{subItemName}
											</NavigationMenuLink>
										</Link>
									))}
								</NavigationMenuContent>
								<div
									className={cn('hidden', {
										'flex flex-col': orientation === 'vertical',
									})}
								>
									{subItems.map(({ name: subItemName, link }) => (
										<Link
											key={subItemName}
											href={link as string}
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{subItemName}
											</NavigationMenuLink>
										</Link>
									))}
								</div>
							</>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
