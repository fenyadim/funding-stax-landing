import Image from 'next/image';
import Link from 'next/link';

import { SocialButtons } from '@/entities/social-buttons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

interface IHomeButtons {
	className?: string;
}

export const HomeButtons = ({ className }: IHomeButtons) => {
	return (
		<div
			className={cn(
				'flex flex-wrap items-center justify-center xl:justify-start xl:justify-self-start gap-6 sm:gap-14',
				className,
			)}
		>
			<Button
				className='text-base sm:text-xl py-6 sm:py-7'
				variant='accent'
				asChild
			>
				<Link href='/'>
					Buy challenge
					<Image
						src='/icons/arrow.svg'
						alt='Arrow'
						width={40}
						height={28}
						className='ml-2'
					/>
				</Link>
			</Button>
			<SocialButtons />
		</div>
	);
};
