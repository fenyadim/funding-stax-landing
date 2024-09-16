'use client';

import { useMountingStatus } from '@/shared/hooks/useMountingStatus';
import { Skeleton, ToggleImage } from '@/shared/ui';

import { AccentBlock } from './accent-block';
import { Chart } from './chart';
import { SecondBlock } from './second-block';

export const Wrapper = () => {
	const { isMounted } = useMountingStatus();

	if (!isMounted)
		return <Skeleton className='h-[375px] w-[648px] bg-secondary/20' />;

	return (
		<div className='relative h-[375px] md:w-[648px] flex justify-end'>
			<Chart />
			<SecondBlock className='absolute bottom-9 left-0' />
			<AccentBlock className='absolute bottom-[20rem] md:bottom-3 right-5' />
			<ToggleImage
				lightImgSrc='/icons/average.svg'
				darkImgSrc='/icons/average-dark.svg'
				alt='Average icon'
				width={72}
				height={64}
				className='absolute right-[250px] bottom-0 hidden hidden:block'
			/>
			<ToggleImage
				lightImgSrc='/icons/payouts.svg'
				darkImgSrc='/icons/payouts-dark.svg'
				alt='Payouts icon'
				width={102}
				height={77}
				className='absolute right-6 bottom-8 md:left-12 md:top-12'
			/>
		</div>
	);
};
