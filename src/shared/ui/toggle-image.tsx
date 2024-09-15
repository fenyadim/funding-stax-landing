import Image, { ImageProps } from 'next/image';

import { cn } from '@/shared/lib/utils';

interface IToggleImage extends Omit<ImageProps, 'src'> {
	lightImgSrc: string;
	darkImgSrc: string;
	priority?: boolean;
}

export const ToggleImage = ({
	className,
	lightImgSrc,
	darkImgSrc,
	alt,
	...otherProps
}: IToggleImage) => {
	return (
		<>
			<Image
				src={lightImgSrc}
				alt={alt}
				className={cn('block dark:hidden', className)}
				{...otherProps}
			/>
			<Image
				src={darkImgSrc}
				alt={alt}
				className={cn('hidden dark:block', className)}
				{...otherProps}
			/>
		</>
	);
};
