import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

import { ThemeProvider } from './theme-provider';

export async function RootProvider({ children }: { children: ReactNode }) {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			<ThemeProvider attribute='class'>{children}</ThemeProvider>
		</NextIntlClientProvider>
	);
}
