import { cn } from '@/shared/lib/utils';
import { Card, Odometer } from '@/shared/ui';

interface ISecondBlock {
	className?: string;
}

export const SecondBlock = ({ className }: ISecondBlock) => {
	return (
		<Card
			className={cn(
				'flex flex-col gap-3 bg-secondary w-fit p-9 rounded-3xl shadow-solid !shadow-accent',
				className,
			)}
		>
			<div className='flex gap-2'>
				<span className='text-accent text-3xl font-bold'>+ $</span>
				<Odometer
					value={8665}
					size='1.875rem'
					fontFamily='var(--font-raleway)'
					color='hsl(var(--secondary-foreground))'
				/>
			</div>
			<p className='text-secondary-foreground/30'>Выплата успешно зачислена!</p>
		</Card>
	);
};
