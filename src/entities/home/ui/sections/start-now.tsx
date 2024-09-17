import { MoveUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/ui';

export const StartNow = () => {
	const t = useTranslations();
	const keyTranslation = 'home';

	return (
		<section>
			<div className='container sm:bg-[#F4F7F8] dark:bg-transparent sm:p-8 rounded-3xl flex flex-col xl:grid xl:grid-cols-[2fr_648px] justify-items-center items-center gap-7 md:gap-6'>
				<Image
					src='/home/dashboard.svg'
					alt='Dashboard'
					width={628}
					height={398}
					className='justify-self-start hidden min-[500px]:block'
				/>
				<div className='relative block min-[500px]:hidden w-full h-[200px] rounded-3xl overflow-hidden'>
					<Image
						src='/home/dashboard-mobile.svg'
						alt='Dashboard'
						fill
						className='justify-self-start object-cover'
					/>
				</div>
				<div className='flex flex-col gap-7 min-[500px]:gap-5'>
					<h2 className='text-2xl min-[500px]:text-3xl font-semibold leading-[34px] min-[500px]:leading-[39px]'>
						{t(`${keyTranslation}.start-now.title`)}
						<span className='text-primary'>
							{t(`${keyTranslation}.start-now.accent`)}
						</span>
					</h2>
					<p className='text-base leading-7 min-[500px]:text-lg'>
						{t(`${keyTranslation}.start-now.description`)}
					</p>
					<div className='flex flex-col min-[500px]:flex-row gap-5'>
						<Button asChild>
							<Link href='#'>
								{t(`${keyTranslation}.start-now.accent-button`)}
								<MoveUpRight className='ml-2' />
							</Link>
						</Button>
						<Button variant='outline' asChild>
							<Link href='#'>{t('dashboard')}</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
