'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';

import { useMountingStatus } from '@/shared/hooks/useMountingStatus';
import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	Skeleton,
} from '@/shared/ui';

import { Navigation } from './navigation';

export const BurgerMenu = () => {
	const { isMounted } = useMountingStatus();

	if (!isMounted)
		return (
			<div>
				<Skeleton className='w-[42px] h-[42px] rounded-xl xl:hidden' />
			</div>
		);

	return (
		<Sheet>
			<SheetTrigger className='block xl:hidden' asChild>
				<Button variant='icon' size='icon'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle hidden>Navigation menu</SheetTitle>
					<SheetDescription hidden>
						Select the page you want to go
					</SheetDescription>
				</SheetHeader>
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
