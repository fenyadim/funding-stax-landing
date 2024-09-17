import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { SocialButtons } from '@/entities/social-buttons';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

export const Banner = () => {
	const t = useTranslations('banner');

	return (
		<section
			className={cn(
				'relative overflow-hidden container text-accent-foreground w-full bg-gradient-to-r from-bannerGradient-from via-bannerGradient-via to-bannerGradient-to rounded-2xl p-12',
				'after:absolute after:content-[url("/bg-banner.svg")] after:inset-0',
			)}
		>
			<div className='relative flex flex-col gap-4 z-10'>
				<Image
					src='/logo-banner.svg'
					alt='Funding stax'
					width={230}
					height={97}
					className='sm:absolute sm:top-0 sm:right-0 self-center'
				/>
				<h2 className='text-2xl sm:text-3xl font-semibold text-center sm:text-left sm:w-2/3 xl:w-full'>
					{t('title')}
				</h2>
				<p className='text-center text-base sm:text-lg sm:text-left sm:w-2/3'>
					{t('description')}
				</p>
				<div className='flex flex-col items-stretch sm:items-start sm:flex-row gap-5 sm:gap-24 mt-4'>
					<Button className='rounded-full h-full' variant='secondary' asChild>
						<Link href='#'>Buy challenge</Link>
					</Button>
					<SocialButtons className='self-center' />
				</div>
			</div>
		</section>
	);
};
