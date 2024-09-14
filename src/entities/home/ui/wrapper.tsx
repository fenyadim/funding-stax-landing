import { AccentBlock } from './accent-block';
import { Chart } from './chart';

export const Wrapper = () => {
	return (
		<div className='relative'>
			<Chart />
			<AccentBlock className='absolute -bottom-20 -left-20' />
		</div>
	);
};
