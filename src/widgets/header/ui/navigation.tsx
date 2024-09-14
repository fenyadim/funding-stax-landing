import { useTranslations } from 'next-intl';
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
import { navigationItem } from '@/widgets/header/model/navItem';

interface INavigation {
	orientation: 'vertical' | 'horizontal';
	className?: string;
}

export const Navigation = ({ orientation, className }: INavigation) => {
	const t = useTranslations('navigation');

	return (
		<NavigationMenu orientation={orientation} className={className}>
			<NavigationMenuList>
				{navigationItem.map(({ name, link, subItems }) => (
					<NavigationMenuItem key={name}>
						{!subItems ? (
							<Link href={link as string} legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									{t(name)}
								</NavigationMenuLink>
							</Link>
						) : (
							<>
								<NavigationMenuTrigger
									className={cn('hidden hover:bg-transparent', {
										flex: orientation === 'horizontal',
									})}
								>
									{t(name)}
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
												{t(subItemName)}
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
												{t(subItemName)}
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
