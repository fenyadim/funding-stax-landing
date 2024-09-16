'use client';

import { cn } from '@/shared/lib/utils';
import {
  Card,
  Odometer
} from '@/shared/ui';


interface IChart {
  className?: string;
}

export const Chart = ({ className }: IChart) => {
  const beforeClass = 'before:content-[url("/chart.svg")] before:block before:absolute before:bottom-0 before:left-0 before:right-0 before:overflow-hidden before:animate-move-in'

  return (
    <Card
      className={cn(
        'relative border-none bg-secondary rounded-[60px] shadow-none h-72 w-[486px] overflow-hidden after:content-[""] after:block after:w-2 after:h-2 after:rounded-full after:absolute after:bottom-[9.2rem] after:right-[2.9rem] after:opacity-0 after:outline after:outline-accent after:bg-secondary after:animate-fade-in after:transition after:delay-2000', beforeClass,
        className,
      )}
    >
      <div className='absolute pt-10 pl-10 top-0 left-0 bg-secondary z-10'>
        <p className='text-secondary-foreground/30 mb-2'>Баланс счета</p>
        <div className='flex gap-2'>
          <span className='text-accent text-2xl'>$</span>
          <Odometer
            value={100665}
            size='2.4rem'
            fontFamily='var(--font-raleway)'
            color='hsl(var(--secondary-foreground))'
            className='font-semibold'
          />
        </div>
      </div>

    </Card>
  );
};
