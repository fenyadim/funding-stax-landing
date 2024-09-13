import Image from 'next/image';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui';

import { langsData } from '../model/langs';

export const LangSwitcher = () => {
	return (
		<Select>
			<SelectTrigger className='flex-auto capitalize 2xl:max-w-[120px] max-w-[75px] '>
				<SelectValue placeholder='EN' />
			</SelectTrigger>
			<SelectContent className='dark:shadow-none dark:border dark:border-foreground/10'>
				{langsData.map(({ key, iconSrc, value }) => (
					<div className='relative' key={key}>
						<SelectItem className='capitalize' key={key} value={key}>
							<div className='flex gap-3 items-center justify-start xl:mr-2'>
								<Image src={iconSrc} alt={value} width={28} height={28} />
								<span className='2xl:block hidden'>{value}</span>
							</div>
						</SelectItem>
						<span className='2xl:hidden block text-start absolute left-16 top-1/2 -translate-y-1/2 z-0'>
							{value}
						</span>
					</div>
				))}
			</SelectContent>
		</Select>
	);
};
