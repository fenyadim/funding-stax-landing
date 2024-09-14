'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import { useMountingStatus } from '@/shared/hooks/useMountingStatus';
import { Button, Skeleton } from '@/shared/ui';

export const ThemeSwitcher = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const { isMounted } = useMountingStatus();

	const handleToggle = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	}, [resolvedTheme, setTheme]);

	if (!isMounted)
		return (
			<div>
				<Skeleton className='w-[42px] h-[42px] rounded-xl' />
			</div>
		);

	return (
		<Button variant='icon' size='icon' onClick={handleToggle}>
			{resolvedTheme === 'light' ? (
				<Moon className='fill-foreground text-foreground group-hover:fill-primary group-hover:text-primary' />
			) : (
				<Sun className='fill-foreground' />
			)}
		</Button>
	);
};
