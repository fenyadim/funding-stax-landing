import { useTranslations } from 'next-intl';

import { chooseData } from '@/entities/home/model/choose-data';
import { ChooseItems } from '@/entities/home/ui/choose-items';

export const ChooseUs = () => {
	const t = useTranslations('home');

	return (
		<section>
			<div className='container'>
				<h2 className='text-4xl font-semibold mb-12'>
					{t('Почему')}
					<span className='text-primary'>{t('выбирают нас?')}</span>
				</h2>
				<div className='grid lg:grid-cols-2 gap-10'>
					{chooseData.map(({ title, description, imgSrc }) => (
						<ChooseItems
							key={title}
							title={t(title)}
							description={t(description)}
							imgSrc={imgSrc}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
