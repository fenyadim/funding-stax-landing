import { useTranslations } from 'next-intl';

import { RulesAccordion } from '@/entities/trading-rules';
import { Block } from '@/shared/ui';

export const TradingRulesPage = () => {
	const t = useTranslations('trading-rules');

	return (
		<Block title={t('title')} accentTitle={t('accent')}>
			<RulesAccordion />
		</Block>
	);
};
