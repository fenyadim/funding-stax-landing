'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import { LangSwitcher } from '@/features/lang-switcher';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { Button } from '@/shared/ui';

export const Header = () => {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case 'light':
			src = '/logo-light.png';
			break;
		case 'dark':
			src = '/logo-dark.png';
			break;
		default:
			src = '/logo-light.png';
			break;
	}

	return (
		<header className=''>
			<div className='flex justify-between items-center gap-8 py-5 container'>
				<Link href='/'>
					<Image
						src={src}
						alt='Funding stax'
						width={170}
						height={71}
						priority={true}
					/>
				</Link>
				<nav>
					<ul className='flex gap-8 *:font-medium'>
						<li>
							<Button variant='link' asChild>
								<Link href='/'>Правила торговли</Link>
							</Button>
						</li>
						<li>
							<Button variant='link' asChild>
								<Link href='/'>Топ трейдеры</Link>
							</Button>
						</li>
						<li>
							<Button variant='link' asChild>
								<Link href='/'>Связаться с нами</Link>
							</Button>
						</li>
						<li>
							<Button variant='link' asChild>
								<Link href='/'>Больше</Link>
							</Button>
						</li>
					</ul>
				</nav>
				<LangSwitcher />
				<ThemeSwitcher />
				<Button asChild>
					<Link href='/'>Buy challenge</Link>
				</Button>
				<Button variant='outline' asChild>
					<Link href='/'>Dashboard</Link>
				</Button>
			</div>
		</header>
	);
};
