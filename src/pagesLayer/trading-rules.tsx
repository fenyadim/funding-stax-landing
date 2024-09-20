import { useTranslations } from 'next-intl';

import { RulesAccordion } from '@/entities/trading-rules';
import {
	Block,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/shared/ui';

export const TradingRulesPage = () => {
	const t = useTranslations('trading-rules');

	//TODO: Сделать отдельный компонент в entities Breadcrumb
	return (
		<div className='container'>
			<Breadcrumb className='mb-8'>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className='text-primary'>
							Правила торговли
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<Block title={t('title')} accentTitle={t('accent')}>
				<RulesAccordion />
			</Block>
		</div>
	);
};
