import { useTranslations } from 'next-intl';

import { FaqAccordion } from '@/entities/faq';
import { Block } from '@/shared/ui';

export const FaqPage = () => {
	const t = useTranslations('faq');

	const keyTranslations = Array(16)
		.fill(0)
		.map((_, index) => `q-${index + 1}`);

	const firstHalf = keyTranslations.slice(0, keyTranslations.length / 2);
	const secondHalf = keyTranslations.slice(keyTranslations.length / 2);

	return (
		<Block
			title={t('title')}
			accentTitle={t('accent')}
			className='grid md:grid-cols-2 gap-6'
		>
			<FaqAccordion keys={firstHalf} />
			<FaqAccordion keys={secondHalf} />
		</Block>
	);
};
