import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Wrapper } from '@/entities/home';
import { SocialButtons } from '@/entities/social-buttons';
import { Button } from '@/shared/ui';

export const HomePage = () => {
	const t = useTranslations('home');

	return (
		<section className='container'>
			<div className='bg-[#F4F7F8] dark:bg-transparent p-8 rounded-3xl grid grid-cols-[2fr_1fr] gap-6'>
				<div>
					<div className='mb-14'>
						<h1 className='text-6xl leading-[87px] font-bold mb-6'>
							{t('Ваш путь к финансовой свободе')}
							<span className='bg-gradient-to-r from-gradient-from to-gradient-to text-transparent bg-clip-text'>
								{t('начинается здесь')}
							</span>
						</h1>
						<p className='text-xl leading-7 w-10/12'>
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
				<Wrapper />
			</div>
		</section>
	);
};
