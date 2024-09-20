import { Button } from '@/shared/ui';

import { PlanSlider } from './plan-slider';

interface IPlanSelect {
	step: number;
	onToggleStep: (value: number) => void;
}

export const PlanSelect = ({ step, onToggleStep }: IPlanSelect) => {
	const handleClick = (value: number) => () => {
		onToggleStep(value);
	};

	return (
		<div className='flex gap-32 items-center w-full'>
			<div>
				<Button
					variant={step !== 1 ? 'secondary' : 'default'}
					onClick={handleClick(1)}
				>
					One step
				</Button>
				<Button
					variant={step !== 2 ? 'secondary' : 'default'}
					onClick={handleClick(2)}
				>
					Two step
				</Button>
			</div>
			<PlanSlider className='w-[672px]' />
		</div>
	);
};
