'use client';

import { cn } from '@/shared/lib/utils';
import { Card, Odometer } from '@/shared/ui';

interface IAccentBlock {
	className?: string;
}

export const AccentBlock = ({ className }: IAccentBlock) => {
	return (
		<Card
			className={cn(
				'flex flex-col items-center gap-2 bg-accent w-fit p-3 rounded-3xl',
				className,
			)}
		>
			<div className='flex gap-2'>
				<span className='text-4xl text-secondary font-bold'>$</span>
				<Odometer
					value={2350}
					size='2.25rem'
					fontFamily='var(--font-raleway)'
					color='hsl(var(--secondary))'
				/>
			</div>
			<p className='text-base text-secondary font-medium'>Средняя выплата</p>
		</Card>
	);
};
