import Image from 'next/image';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/ui';

import { ITable } from '../../model/types';

interface IPlanTable {
	data?: ITable;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PlanTable = ({ data }: IPlanTable) => {
	return (
		<Table className='bg-secondary rounded-3xl'>
			<TableHeader>
				<TableRow>
					<TableHead>
						<Image
							src='/logo-dark.svg'
							alt='Funding flex'
							width={130}
							height={59}
						/>
					</TableHead>
					<TableHead className='text-center'>
						One step
						<span className='block text-center'>Challenge</span>
					</TableHead>
					<TableHead className='text-center'>
						Two step
						<span className='block text-center'>Funded</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className='font-medium'>INV001</TableCell>
					<TableCell className='text-center'>Paid</TableCell>
					<TableCell className='text-center'>Credit Card</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};
