import { useTranslations } from 'next-intl';

import { Block } from '@/shared/ui';

import { chooseData } from '../../model/choose-data';
import { ChooseItems } from '../choose-items';

export const ChooseUs = () => {
	const t = useTranslations('home');

	return (
		<Block
			title={t('Почему')}
			accentTitle={t('выбирают нас?')}
			className='grid lg:grid-cols-2 gap-10'
		>
			{chooseData.map(({ title, description, imgSrc }) => (
				<ChooseItems
					key={title}
					title={t(title)}
					description={t(description)}
					imgSrc={imgSrc}
				/>
			))}
		</Block>
	);
};
