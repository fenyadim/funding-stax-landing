'use client';

import { useMountingStatus } from '@/shared/hooks/useMountingStatus';
import { Skeleton, ToggleImage } from '@/shared/ui';

import { AccentBlock } from './accent-block';
import { Chart } from './chart';
import { SecondBlock } from './second-block';

export const Wrapper = () => {
	const { isMounted } = useMountingStatus();

	if (!isMounted)
		return <Skeleton className='h-[375px] w-[500px] bg-secondary/20' />;

	return (
		<div className='relative h-[375px]'>
			<Chart />
			<SecondBlock className='absolute bottom-0 -left-28' />
			<AccentBlock className='absolute -bottom-1 right-3' />
			<ToggleImage
				lightImgSrc='/icons/average.svg'
				darkImgSrc='/icons/average-dark.svg'
				alt='Average icon'
				width={72}
				height={64}
				className='absolute right-[185px] bottom-0'
			/>
			<ToggleImage
				lightImgSrc='/icons/payouts.svg'
				darkImgSrc='/icons/payouts-dark.svg'
				alt='Payouts icon'
				width={102}
				height={77}
				className='absolute -left-28 top-0'
			/>
		</div>
	);
};
