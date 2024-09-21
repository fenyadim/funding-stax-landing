import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/shared/ui';
import { navigationItem } from '@/widgets/header/model/navItem';

interface INavigation {
	orientation: 'vertical' | 'horizontal';
	className?: string;
	classNameItems?: string;
	onCloseModal?: () => void;
}

export const Navigation = ({
	orientation,
	className,
	classNameItems,
	onCloseModal,
}: INavigation) => {
	const t = useTranslations('navigation');

	return (
		<NavigationMenu orientation={orientation} className={className}>
			<NavigationMenuList>
				{navigationItem.map(({ name, link, subItems, Icon }) => (
					<NavigationMenuItem key={name}>
						{!subItems ? (
							<Link
								className={cn(
									navigationMenuTriggerStyle(),
									classNameItems,
									'gap-2',
								)}
								href={link as string}
								onClick={onCloseModal}
							>
								{t(name)}
								{Icon && Icon}
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
											className={cn(
												navigationMenuTriggerStyle(),
												classNameItems,
											)}
											href={link as string}
											onClick={onCloseModal}
										>
											{t(subItemName)}
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
											className={cn(
												navigationMenuTriggerStyle(),
												classNameItems,
											)}
											href={link as string}
											onClick={onCloseModal}
										>
											{t(subItemName)}
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
