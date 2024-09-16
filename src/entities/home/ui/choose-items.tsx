import Image from 'next/image';

import { IChooseData } from '../model/choose-data';

interface IChooseItems extends IChooseData {
	className?: string;
}

export const ChooseItems = ({ title, description, imgSrc }: IChooseItems) => {
	return (
		<div className='dark:bg-gradient-to-r dark:from-gradient-from dark:to-gradient-to dark:rounded-3xl dark:p-[1px]'>
			<div className='h-full w-full relative bg-accent pb-40 min-[520px]:pb-10 py-10 px-8 rounded-3xl min-h-[280px] shadow-block shadow-secondary/15 dark:bg-zinc-800 dark:shadow-none'>
				<h3 className='text-lg min-[520px]:text-2xl font-semibold mb-5'>
					{title}
				</h3>
				<p className='text-base min-[520px]:text-lg text-foreground/80 font-normal min-[520px]:w-3/5'>
					{description}
				</p>
				<Image
					className='absolute -bottom-[1px] right-1/2 translate-x-1/2 min-[520px]:translate-x-0 min-[520px]:right-5'
					src={imgSrc}
					alt={title}
					width={188}
					height={210}
				/>
			</div>
		</div>
	);
};
