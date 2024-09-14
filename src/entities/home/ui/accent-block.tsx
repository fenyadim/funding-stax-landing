import { cn } from '@/shared/lib/utils';
import { Card } from '@/shared/ui';

interface IAccentBlock {
	className?: string;
}

export const AccentBlock = ({ className }: IAccentBlock) => {
	return (
		<Card
			className={cn(
				'flex flex-col gap-3 bg-secondary w-fit p-9 rounded-3xl shadow-solid !shadow-accent',
				className,
			)}
		>
			<h3 className='text-3xl font-medium text-secondary-foreground'>
				<span className='text-accent'>+ $</span> 8 665.69
			</h3>
			<p className='text-secondary-foreground/30'>Выплата успешно зачислена!</p>
		</Card>
	);
};
