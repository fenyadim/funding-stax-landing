import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui';

export const LangSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, themes, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleChange = useCallback(
		(value: string) => {
			setTheme(value);
		},
		[setTheme],
	);

	if (!mounted) {
		return null;
	}

	return (
		<Select onValueChange={handleChange}>
			<SelectTrigger className='w-min flex-1 capitalize'>
				<SelectValue placeholder={resolvedTheme} />
			</SelectTrigger>
			<SelectContent
				className={cn({
					'shadow-none border border-foreground/10': resolvedTheme === 'dark',
				})}
			>
				{themes.map((theme) => (
					<SelectItem className='capitalize' key={theme} value={theme}>
						{theme}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
