import { useTranslations } from 'next-intl';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui';

interface IFaqAccordion {
	keys: string[];
}

export const FaqAccordion = ({ keys }: IFaqAccordion) => {
	const t = useTranslations('faq.questions');

	return (
		<Accordion className='flex flex-col gap-6 w-full' type='single' collapsible>
			{keys.map((key) => (
				<AccordionItem
					className='bg-accordion py-2 px-4 border-none rounded-xl w-full'
					value={key}
					key={key}
				>
					<AccordionTrigger className='text-primary font-semibold text-start'>
						{t(`${key}.question`)}
					</AccordionTrigger>
					<AccordionContent className='text-sm sm:text-base text-foreground/70'>
						{t(`${key}.answer`)}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};
