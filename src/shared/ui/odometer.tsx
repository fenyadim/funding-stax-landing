'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/utils';

interface IOdometer {
	value: number;
	duration?: number;
	size?: string;
	color?: string;
	fontFamily?: string;
	className?: string;
}

export const Odometer = ({
	value,
	duration = 1000,
	size = '3rem',
	color = 'white',
	fontFamily = 'sans-serif',
	className,
}: IOdometer) => {
	const [currentValue, setCurrentValue] = useState<string | number>(
		Array(value.toString().length).fill('0').join(''),
	);

	const valueArray = (currentValue + '').split('');

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setCurrentValue(value);
		}, 500);
		return () => clearTimeout(timeoutId);
	}, [value]);

	return (
		<div
			className={cn('flex justify-center overflow-hidden font-bold', className)}
			style={{ height: size, fontSize: size, lineHeight: size }}
		>
			{valueArray.map((val, idx) => (
				<div
					key={idx}
					className={cn('transition-all duration-1000 ease-out', {
						'mr-1.5': idx === valueArray.length - 4,
					})}
					style={{
						color: color,
						fontFamily: fontFamily,
						marginTop: `calc( -${val}em `,
						transition: `${duration}ms all`,
						transitionDelay: `${((currentValue + '').split('').length - idx) * 20}ms`,
					}}
				>
					<div className='transition-all duration-1000 ease-out' data-val='0'>
						0
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='1'>
						1
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='2'>
						2
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='3'>
						3
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='4'>
						4
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='5'>
						5
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='6'>
						6
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='7'>
						7
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='8'>
						8
					</div>
					<div className='transition-all duration-1000 ease-out' data-val='9'>
						9
					</div>
				</div>
			))}
		</div>
	);
};
