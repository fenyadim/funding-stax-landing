import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui';

import { rulesData } from '../model/rules-data';

export const RulesAccordion = () => {
	return (
		<Accordion
			className='flex flex-col gap-4 bg-accordion p-6 rounded-3xl'
			type='single'
			collapsible
		>
			{rulesData.map(({ title, body }) => (
				<AccordionItem
					key={title}
					className='bg-background py-2 px-5 rounded-3xl border-none'
					value={title}
				>
					<AccordionTrigger>{title}</AccordionTrigger>
					<AccordionContent>{body}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};
