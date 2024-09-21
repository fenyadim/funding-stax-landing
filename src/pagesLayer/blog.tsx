import { useTranslations } from 'next-intl';

import { BlogCard } from '@/entities/blog';
import { Block } from '@/shared/ui';

// interface IBlogData {
// 	title: string;
// 	imageSrc: string;
// 	description: string;
// 	link: string;
// }

export const BlogPage = () => {
	const t = useTranslations('blog');

	return (
		<Block
			title={t('title')}
			accentTitle={t('accent')}
			description={t('description')}
			className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'
		>
			<BlogCard
				title={t('what-card.title')}
				description={t('what-card.description')}
				link='#'
				imageSrc='/blog/what-image.png'
			/>
			<BlogCard
				title={t('why-card.title')}
				description={t('why-card.description')}
				link='#'
				imageSrc='/blog/why-image.png'
			/>
		</Block>
	);
};
