import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

interface ISocialItems {
	iconSrc: string;
	alt: string;
}

const socialItems: ISocialItems[] = [
	{
		iconSrc: '/socials/tg.svg',
		alt: 'Telegram',
	},
	{
		iconSrc: '/socials/x.svg',
		alt: 'X',
	},
	{
		iconSrc: '/socials/inst.svg',
		alt: 'Instagram',
	},
];

export const SocialButtons = ({ className }: { className?: string }) => {
	return (
		<div className={cn('flex gap-4', className)}>
			{socialItems.map(({ alt, iconSrc }) => (
				<Button
					key={alt}
					variant='icon'
					size='icon'
					className='border-none bg-secondary hover:bg-secondary/90 p-3'
				>
					<Image src={iconSrc} alt={alt} width={25} height={25} />
				</Button>
			))}
		</div>
	);
};
