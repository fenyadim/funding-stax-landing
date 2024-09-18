import { CommentsRating } from '@/entities/home/ui/comments/comments-rating';

export interface ICommentsItem {
	title: string;
	description: string;
	ratingCount: number;
}

export const CommentsItem = ({
	title,
	description,
	ratingCount,
}: ICommentsItem) => {
	return (
		<div className='dark:bg-gradient-to-r dark:from-gradient-from/40 dark:to-gradient-to/40 dark:rounded-3xl dark:p-[1px] h-full'>
			<div className='flex flex-col gap-6 h-full w-full relative overflow-hidden bg-accent py-10 px-8 rounded-3xl dark:bg-zinc-800'>
				<div className='flex gap-8'>
					<h3 className='text-xl min-[500px]:text-2xl font-semibold'>
						{title}
					</h3>
					<CommentsRating ratingCount={ratingCount} />
				</div>
				<p className='font-normal text-base min-[500px]:text-lg'>
					{description}
				</p>
			</div>
		</div>
	);
};
