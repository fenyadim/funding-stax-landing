import { useTranslations } from 'next-intl';

import { CommentsCarousel } from '@/entities/home/ui/comments/comments-carousel';
import { Block } from '@/shared/ui';

export const CommentsBlock = () => {
	const t = useTranslations('home');

	return (
		<Block
			title={t('comments.title')}
			accentTitle={t('comments.accent')}
			description={t('comments.description')}
			isWrappedContainer={false}
			className='flex flex-col gap-10'
		>
			<CommentsCarousel />
			<CommentsCarousel isReverse />
		</Block>
	);
};
