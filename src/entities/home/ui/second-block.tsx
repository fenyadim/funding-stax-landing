import { cn } from '@/shared/lib/utils';
import { Card, Odometer } from '@/shared/ui';

interface ISecondBlock {
  className?: string;
}

export const SecondBlock = ({ className }: ISecondBlock) => {
  return (
    <Card
      className={cn(
        'flex flex-col gap-3 bg-secondary w-fit py-9 px-7 rounded-3xl shadow-solid !shadow-accent',
        className,
      )}
    >
      <div className='flex gap-2'>
        <span className='text-accent text-3xl font-semibold'>+ $</span>
        <Odometer
          value={8665}
          size='2rem'
          fontFamily='var(--font-raleway)'
          color='hsl(var(--secondary-foreground))'
          className='font-semibold'
        />
      </div>
      <p className='text-secondary-foreground/30 text-base'>Выплата успешно зачислена!</p>
    </Card>
  );
};
