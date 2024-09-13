import Image from 'next/image';
import Link from 'next/link';

import { LangSwitcher } from '@/features/lang-switcher';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { Button } from '@/shared/ui';
import { BurgerMenu } from '@/widgets/header/ui/burger-menu';

import { Navigation } from './navigation';

export const Header = () => {
	return (
		<header className=''>
			<div className='flex justify-between items-center gap-5 py-5 container'>
				<Link href='/'>
					<Image
						src='/logo-light.svg'
						alt='Funding stax'
						width={170}
						height={71}
						priority={true}
						className='block dark:hidden'
					/>
					<Image
						src='/logo-dark.svg'
						alt='Funding stax'
						width={170}
						height={71}
						priority={true}
						className='hidden dark:block'
					/>
				</Link>
				<div className='flex gap-4 md:gap-6 lg:gap-8'>
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
