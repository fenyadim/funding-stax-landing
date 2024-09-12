'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/shared/ui';

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleToggle = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	}, [resolvedTheme, setTheme]);

	if (!mounted) {
		return null;
	}

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
