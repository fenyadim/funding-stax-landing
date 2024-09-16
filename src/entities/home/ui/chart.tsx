'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { Card, Odometer } from '@/shared/ui';

interface IChart {
	className?: string;
}

export const Chart = ({ className }: IChart) => {
	const afterClass =
		'after:content-[""] after:block after:w-2 after:h-2 after:rounded-full after:absolute after:bottom-[9.2rem] after:right-[2.9rem] after:opacity-0 after:outline after:outline-accent after:bg-secondary after:animate-fade-in after:transition after:delay-2000';

	return (
		<Card
			className={cn(
				'relative border-none bg-secondary rounded-[40px] sm:rounded-[60px] shadow-none h-[194px] sm:h-72 w-full flex sm:w-[486px] overflow-hidden',
				// beforeClass,
				afterClass,
				className,
			)}
		>
			<div className='absolute pt-7 pl-7 sm:pt-10 sm:pl-10 top-0 left-0'>
				<p className='text-sm text-secondary-foreground/30 mb-2'>
					Баланс счета
				</p>
				<div className='flex gap-2'>
					<span className='text-accent text-base sm:text-2xl'>$</span>
					<Odometer
						value={200665}
						size='2.4rem'
						fontFamily='var(--font-raleway)'
						color='hsl(var(--secondary-foreground))'
						className='font-semibold !text-lg !leading-[1.125rem] !h-[1.125rem] sm:!text-4xl sm:!leading-[2.25rem] sm:!h-[2.25rem]'
					/>
				</div>
			</div>
			<Image
				src='/chart.svg'
				alt='Chart'
				fill
				className='object-contain object-bottom'
			/>
		</Card>
	);
};
