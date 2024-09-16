import Image, { ImageProps } from 'next/image';

import { cn } from '@/shared/lib/utils';

interface IToggleImage extends Omit<ImageProps, 'src'> {
	lightImgSrc: string;
	darkImgSrc: string;
	lightMobileImgSrc?: string;
	darkMobileImgSrc?: string;
	priority?: boolean;
}

export const ToggleImage = ({
	className,
	lightImgSrc,
	darkImgSrc,
	darkMobileImgSrc,
	lightMobileImgSrc,
	alt,
	...otherProps
}: IToggleImage) => {
	if (darkMobileImgSrc && lightMobileImgSrc) {
		return (
			<>
				<Image
					src={lightImgSrc}
					alt={alt}
					className={cn('hidden sm:block dark:hidden', className)}
					{...otherProps}
				/>
				<Image
					src={darkImgSrc}
					alt={alt}
					className={cn('hidden sm:dark:block', className)}
					{...otherProps}
				/>
				<Image
					src={lightMobileImgSrc}
					alt={alt}
					className={cn('block sm:hidden dark:hidden', className)}
					{...otherProps}
				/>
				<Image
					src={darkMobileImgSrc}
					alt={alt}
					className={cn('hidden sm:hidden dark:block', className)}
					{...otherProps}
				/>
			</>
		);
	}

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
