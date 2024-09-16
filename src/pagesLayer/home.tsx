import { useTranslations } from 'next-intl';

import { HomeButtons } from '@/entities/home';
import { ToggleImage } from '@/shared/ui';

export const HomePage = () => {
	const t = useTranslations('home');

	return (
		<section className='container'>
			<div className='sm:bg-[#F4F7F8] dark:bg-transparent sm:p-8 rounded-3xl flex flex-col xl:grid xl:grid-cols-[2fr_648px] justify-items-center items-center gap-7 md:gap-6'>
				<div className='flex flex-col gap-14'>
					<div>
						<h1 className='text-3xl leading-10 sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[70px] font-bold mb-6'>
							{t('Ваш путь к финансовой свободе')}
							<span className='bg-gradient-to-r from-gradient-from to-gradient-to text-transparent bg-clip-text'>
								{t('начинается здесь')}
							</span>
						</h1>
						<p className='text-base sm:text-lg lg:text-xl leading-7'>
							{t(
								'Мы в Funding Stax Prop Firm предлагаем вам уникальную возможность торговать на финансовых рынках, используя наш капитал',
							)}
						</p>
					</div>
					<HomeButtons className='hidden xl:flex' />
				</div>
				<div className='relative w-full h-[267px] sm:h-[375px]'>
					<ToggleImage
						lightImgSrc='/home/main.svg'
						darkImgSrc='/home/main-dark.svg'
						lightMobileImgSrc='/home/main-mobile.svg'
						darkMobileImgSrc='/home/main-dark-mobile.svg'
						alt='Main image'
						fill
						className='object-contain'
					/>
				</div>
				<HomeButtons className='flex xl:hidden' />
			</div>
		</section>
	);
};
