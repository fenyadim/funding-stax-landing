'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AppRoutes, routeConfig } from '@/shared/config/route';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/shared/ui';

export const BreadcrumbsElement = () => {
	const t = useTranslations('navigation');
	const path = usePathname();

	const pathname = path.slice(1) as AppRoutes;

	return (
		<Breadcrumb className='container mb-8'>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href='/'>{t(routeConfig[AppRoutes.HOME].name)}</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className='text-primary'>
						{t(routeConfig[pathname].name)}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
