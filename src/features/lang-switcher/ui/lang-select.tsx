'use client';

import { ReactNode, useTransition } from 'react';

import { Locale } from '@/i18n/config';
import { useMountingStatus } from '@/shared/hooks/useMountingStatus';
import { setUserLocale } from '@/shared/service/locale';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	Skeleton,
} from '@/shared/ui';

interface ILangSelect {
	children: ReactNode;
	defaultValue: string;
}

export const LangSelect = ({ children, defaultValue }: ILangSelect) => {
	const [, startTransition] = useTransition();
	const { isMounted } = useMountingStatus();

	const onSelectChange = (value: string) => {
		const locale = value as Locale;
		startTransition(() => {
			setUserLocale(locale);
		});
	};

	if (!isMounted)
		return <Skeleton className='w-[60px] sm:w-[75px] 2xl:w-[120px] ' />;

	return (
		<Select defaultValue={defaultValue} onValueChange={onSelectChange}>
			<SelectTrigger className='flex-auto capitalize 2xl:max-w-[120px] max-w-[75px]'>
				<SelectValue placeholder='EN' />
			</SelectTrigger>
			<SelectContent className='dark:shadow-none dark:border dark:border-foreground/10'>
				{children}
			</SelectContent>
		</Select>
	);
};
