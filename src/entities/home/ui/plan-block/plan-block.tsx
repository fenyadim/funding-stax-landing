'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Block } from '@/shared/ui';

import { PlanSelect } from './plan-select';
import { PlanTable } from './plan-table';

export const PlanBlock = () => {
	const t = useTranslations('home');
	const [step, setStep] = useState(1);

	const onToggleStep = (value: number) => {
		setStep(value);
	};

	return (
		<Block
			title={t('plan-block.title')}
			accentTitle={t('plan-block.accent')}
			description={t('plan-block.description')}
			className='flex flex-col gap-5'
		>
			<PlanSelect step={step} onToggleStep={onToggleStep} />
			<div className='grid grid-cols-[2fr_1fr] gap-24'>
				<PlanTable />
			</div>
		</Block>
	);
};
