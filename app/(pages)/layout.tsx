import { ReactNode } from 'react';

import { Banner } from '@/entities/banner';
import { BreadcrumbsElement } from '@/entities/breadcrumbs';

export default function LayoutPages({ children }: { children: ReactNode }) {
	return (
		<section>
			<BreadcrumbsElement />
			<div className='flex flex-col gap-16 sm:gap-24 mb-16 sm:mb-24'>
				{children}
				<Banner />
			</div>
		</section>
	);
}
