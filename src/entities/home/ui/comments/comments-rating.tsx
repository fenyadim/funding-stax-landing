import { Star } from 'lucide-react';

interface ICommentsRating {
	ratingCount: number;
}

export const CommentsRating = ({ ratingCount }: ICommentsRating) => {
	const emptyStars = Array(ratingCount).fill(0);

	return (
		<div className='flex'>
			{emptyStars.map((_, index) => (
				<Star className='stroke-star fill-star' key={index} />
			))}
		</div>
	);
};
