import { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

interface IBlock {
	title: string;
	accentTitle: string;
	description?: string;
	children: ReactNode;
	isWrappedContainer?: boolean;
	className?: string;
}

export const Block = ({
	children,
	description,
	title,
	accentTitle,
	isWrappedContainer = true,
	className,
}: IBlock) => {
	return (
		<section>
			<div className='container'>
				<div className='flex flex-col gap-5 mb-12'>
					<h2 className={cn('text-4xl font-semibold')}>
						{title}
						<span className='text-primary'>{accentTitle}</span>
					</h2>
					{description && <p className='w-full md:w-2/3'>{description}</p>}
				</div>
				{isWrappedContainer && <div className={className}>{children}</div>}
			</div>
			{!isWrappedContainer && <div className={className}>{children}</div>}
		</section>
	);
};
