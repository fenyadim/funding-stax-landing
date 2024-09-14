import Image from 'next/image';

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
		iconSrc: '/socials/inst.svg',
		alt: 'Instagram',
	},
	{
		iconSrc: '/socials/x.svg',
		alt: 'X',
	},
];

export const SocialButtons = () => {
	return (
		<div className='flex gap-4'>
			{socialItems.map(({ alt, iconSrc }) => (
				<Button
					key={alt}
					variant='icon'
					size='icon'
					className='border-none bg-zinc-800 hover:bg-zinc-800/90 p-3'
				>
					<Image src={iconSrc} alt={alt} width={25} height={25} />
				</Button>
			))}
		</div>
	);
};
