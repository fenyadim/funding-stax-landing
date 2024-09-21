import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/ui';

interface IBlogCard {
	title: string;
	description: string;
	link: string;
	imageSrc: string;
}

export const BlogCard = ({ title, description, imageSrc, link }: IBlogCard) => {
	const t = useTranslations('blog');

	return (
		<div className='bg-accordion p-5 rounded-xl h-fit w-fit flex flex-col gap-4'>
			<Image src={imageSrc} alt={title} width={433} height={226} />
			<h3 className='text-xl font-medium'>{title}</h3>
			<p className='text-base font-light'>{description}</p>
			<Button className='w-[250px]' asChild>
				<Link href={link}>
					{t('read-more')}
					<ArrowRight className='ml-2' />
				</Link>
			</Button>
		</div>
	);
};
