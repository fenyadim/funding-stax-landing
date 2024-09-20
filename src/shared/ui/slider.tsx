'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex w-full touch-none select-none items-center',
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className='relative grid grid-cols-7 h-5 w-full grow overflow-hidden rounded-full bg-[#F4F7F8] dark:bg-secondary'>
			{Array(7)
				.fill(0)
				.map((_, index) => (
					<span className='block border-r last:bg-red' key={index}></span>
				))}
			<SliderPrimitive.Range className='absolute h-full bg-accent' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className='block h-7 w-7 rounded-full border-[5px] border-accent bg-primary dark:bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
	</SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
