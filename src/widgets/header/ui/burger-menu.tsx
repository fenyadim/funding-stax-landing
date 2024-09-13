'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button, Sheet, SheetContent, SheetTrigger } from '@/shared/ui';

import { Navigation } from './navigation';

export const BurgerMenu = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	//TODO: Добавить Loader
	if (!mounted) return null;

	return (
		<Sheet>
			<SheetTrigger className='block xl:hidden'>
				<Button variant='icon' size='icon'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Navigation orientation='vertical' />
				<div className='mt-7 gap-4 flex flex-col md:hidden'>
					<Button asChild>
						<Link href='/'>Buy challenge</Link>
					</Button>
					<Button variant='outline' asChild>
						<Link href='/'>Dashboard</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
};
