'use client';

import { useTranslations } from 'next-intl';

import { Wrapper } from '@/entities/home';
import { SocialButtons } from '@/entities/social-buttons';
import { Link } from '@/i18n/routing';
import { Button } from '@/shared/ui';

export const HomePage = () => {
	const t = useTranslations('home');

	return (
		<section className='container'>
			<div className='bg-[#F4F7F8] dark:bg-transparent p-8 rounded-3xl grid grid-cols-2 gap-6'>
				<div>
					<div className='mb-14'>
						<h1 className='text-6xl leading-[87px] font-bold mb-6'>
							{t('Ваш путь к финансовой свободе')}
							<span className='bg-gradient-to-r from-gradient-from to-gradient-to text-transparent bg-clip-text'>
								{t('начинается здесь')}
							</span>
						</h1>
						<p className='text-xl leading-7'>
							{t(
								'Мы в Funding Stax Prop Firm предлагаем вам уникальную возможность торговать на финансовых рынках, используя наш капитал',
							)}
						</p>
					</div>
					<div className='flex items-center gap-14'>
						<Button className='text-xl py-7' variant='accent' asChild>
							<Link href='/'>Buy challenge {'>>>'}</Link>
						</Button>
						<SocialButtons />
					</div>
				</div>
				<div className='flex-auto justify-self-end'>
					<Wrapper />
				</div>
			</div>
		</section>
	);
};
