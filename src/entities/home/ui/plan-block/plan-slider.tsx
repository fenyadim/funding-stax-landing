import { cn } from '@/shared/lib/utils';
import { Slider } from '@/shared/ui';

const values = ['5k', '10k', '25k', '50k', '100k', '200k'];

export const PlanSlider = ({ className }: { className?: string }) => {
	return (
		<div className={cn('', className)}>
			<div>
				<h3 className='text-primary text-xl mb-5 font-medium'>Баланс</h3>
			</div>
			<Slider defaultValue={[1]} step={1} max={7} />
			<div className='grid grid-cols-7 justify-items-end mt-2'>
				{values.map((items) => (
					<p className='translate-x-1/2 font-medium' key={items}>
						<span className='text-primary'>$ </span>
						{items}
					</p>
				))}
			</div>
		</div>
	);
};
