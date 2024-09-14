'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui';

export const HomePage = () => {
	const t = useTranslations('home');

	return (
		<div className='p-20'>
			<h2>{t('title')}</h2>
			<Button>Default</Button>
			<Button variant='accent'>Accent</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='outline'>Outline</Button>
		</div>
	);
};
