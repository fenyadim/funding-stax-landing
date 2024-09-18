'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';

import { commentsData } from '../../model/comments-data';

import { CommentsItem } from './comments-item';

interface ICommentsCarousel {
	isReverse?: boolean;
	className?: string;
}

export const CommentsCarousel = ({
	isReverse,
	className,
}: ICommentsCarousel) => {
	return (
		<Carousel
			opts={{
				loop: true,
				skipSnaps: true,
			}}
			className={className}
			plugins={[
				AutoScroll({
					// playOnInit: true,
					stopOnInteraction: false,
					stopOnFocusIn: false,
					direction: isReverse ? 'backward' : 'forward',
				}),
			]}
		>
			<CarouselContent>
				{commentsData.map((items, index) => (
					<CarouselItem
						className='basis-full lg:basis-1/2 xl:basis-1/3 min-[2000px]:basis-1/4 pl-10'
						key={index}
					>
						<CommentsItem {...items} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
