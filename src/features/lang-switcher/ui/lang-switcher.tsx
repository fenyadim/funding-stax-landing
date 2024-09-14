import { useLocale } from 'next-intl';
import Image from 'next/image';

import { LangSelect } from '@/features/lang-switcher/ui/lang-select';
import { SelectItem } from '@/shared/ui';

import { langsData } from '../model/langs';

export const LangSwitcher = () => {
	const locale = useLocale();

	return (
		<LangSelect defaultValue={locale}>
			{langsData.map(({ key, iconSrc, value }) => (
				<div className='relative' key={key}>
					<SelectItem className='capitalize' key={key} value={key}>
						<div className='flex gap-3 items-center justify-start xl:mr-2'>
							<Image
								src={iconSrc}
								alt={value}
								width={28}
								height={28}
								className='w-5 h-5 sm:w-7 sm:h-7'
							/>
							<span className='2xl:block hidden'>{value}</span>
						</div>
					</SelectItem>
					<span className='2xl:hidden block text-start absolute left-16 top-1/2 -translate-y-1/2 z-0'>
						{value}
					</span>
				</div>
			))}
		</LangSelect>
	);
};
