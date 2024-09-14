import { AccentBlock } from './accent-block';
import { Chart } from './chart';

export const Wrapper = () => {
	return (
		<div className='relative'>
			<Chart className='z-0' />
			<AccentBlock className='absolute -bottom-20 -left-20 z-10' />
		</div>
	);
};
