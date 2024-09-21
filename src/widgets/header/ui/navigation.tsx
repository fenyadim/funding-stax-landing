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
	classNameItems?: string;
}

export const Navigation = ({
	orientation,
	className,
	classNameItems,
}: INavigation) => {
	const t = useTranslations('navigation');

	return (
		<NavigationMenu orientation={orientation} className={className}>
			<NavigationMenuList>
				{navigationItem.map(({ name, link, subItems, Icon }) => (
					<NavigationMenuItem key={name}>
						{!subItems ? (
							<Link href={link as string} legacyBehavior passHref>
								<NavigationMenuLink
									className={cn(
										navigationMenuTriggerStyle(),
										classNameItems,
										'gap-2',
									)}
								>
									{t(name)}
									{Icon && Icon}
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
								<NavigationMenuContent className='flex flex-col'>
									{subItems.map(({ name: subItemName, link }) => (
										<Link
											key={subItemName}
											href={link as string}
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className={cn(
													navigationMenuTriggerStyle(),
													classNameItems,
												)}
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
												className={cn(
													navigationMenuTriggerStyle(),
													classNameItems,
												)}
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
