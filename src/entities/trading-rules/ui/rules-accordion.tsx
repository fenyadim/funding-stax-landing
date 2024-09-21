'use client';

import { useState } from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
} from '@/shared/ui';

import { rulesData } from '../model/rules-data';
import { Phases, RulesTitle } from '../model/types';

export const RulesAccordion = () => {
	const [phase, setPhase] = useState<Phases>(Phases.ONE);

	const handleClick = (value: Phases) => () => setPhase(value);

	return (
		<div className='flex flex-col gap-8'>
			<div className='flex gap-3 flex-wrap'>
				<Button
					variant={phase === 'one-phase' ? 'default' : 'secondary'}
					onClick={handleClick(Phases.ONE)}
				>
					One phase
				</Button>
				<Button
					variant={phase === 'two-phase' ? 'default' : 'secondary'}
					onClick={handleClick(Phases.TWO)}
				>
					Two phase
				</Button>
			</div>
			<Accordion
				className='flex flex-col gap-4 bg-accordion p-6 rounded-3xl'
				type='single'
				collapsible
			>
				{Object.keys(rulesData).map((title) => (
					<AccordionItem
						key={title}
						className='bg-background py-2 px-5 rounded-3xl border-none'
						value={title}
					>
						<AccordionTrigger>{title}</AccordionTrigger>
						<AccordionContent>
							{rulesData[title as RulesTitle][phase]}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};
