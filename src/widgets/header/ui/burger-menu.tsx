'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
	const [open, setOpen] = useState(false);

	if (!isMounted)
		return (
			<div>
				<Skeleton className='w-[42px] h-[42px] rounded-xl xl:hidden' />
			</div>
		);

	const handleClose = () => setOpen(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
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
				<Navigation orientation='vertical' onCloseModal={handleClose} />
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
