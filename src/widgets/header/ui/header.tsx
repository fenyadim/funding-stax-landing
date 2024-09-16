import Link from 'next/link';

import { LangSwitcher } from '@/features/lang-switcher';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { Button } from '@/shared/ui';
import { ToggleImage } from '@/shared/ui/toggle-image';

import { BurgerMenu } from './burger-menu';
import { Navigation } from './navigation';

export const Header = () => {
	return (
		<header className=''>
			<div className='flex justify-between items-center py-5 container'>
				<Link href='/' className='flex-1'>
					<ToggleImage
						lightImgSrc='/logo-light.svg'
						darkImgSrc='/logo-dark.svg'
						alt='Funding stax'
						width={170}
						height={71}
						priority={true}
					/>
				</Link>
				<div className='flex gap-4 md:gap-5 lg:gap-6'>
					<Navigation className='hidden xl:block' orientation='horizontal' />
					<LangSwitcher />
					<ThemeSwitcher />
					<div className='gap-4 hidden md:flex'>
						<Button asChild>
							<Link href='/'>Buy challenge</Link>
						</Button>
						<Button variant='outline' asChild>
							<Link href='/'>Dashboard</Link>
						</Button>
					</div>
					<BurgerMenu />
				</div>
			</div>
		</header>
	);
};
