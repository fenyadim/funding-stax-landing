'use client';

import { mean } from 'd3-array';
import { Area, AreaChart, CartesianGrid, ReferenceDot, XAxis } from 'recharts';

import { cn } from '@/shared/lib/utils';
import { Card, CardContent, ChartConfig, ChartContainer } from '@/shared/ui';

interface IInitialChartData {
	month: string;
	desktop: number;
}

const initialChartData: IInitialChartData[] = [
	{ month: '', desktop: 40 },
	{ month: 'January', desktop: 30 },
	{ month: 'February', desktop: 50 },
	{ month: 'March', desktop: 20 },
	{ month: 'April', desktop: 40 },
	{ month: 'May', desktop: 70 },
	{ month: 'June', desktop: 50 },
	{ month: '', desktop: 70 },
];

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--accent))',
	},
} satisfies ChartConfig;

interface IChart {
	className?: string;
}

export const Chart = ({ className }: IChart) => {
	return (
		<Card
			className={cn(
				'relative border-none bg-secondary rounded-3xl shadow-none h-72 w-[486px] overflow-hidden',
				className,
			)}
		>
			<div className='absolute pt-6 pl-6 top-0 left-0 bg-secondary z-10'>
				<p className='text-secondary-foreground/30'>Баланс счета</p>
				<h3 className='text-4xl text-secondary-foreground font-semibold'>
					<span className='text-accent text-2xl'>$</span> 100 665.69
				</h3>
			</div>
			<CardContent className='h-full p-0'>
				<ChartContainer className='h-full w-full' config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={initialChartData}
						margin={{
							top: 10,
							bottom: 10,
						}}
					>
						<defs>
							<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#BAFF66' stopOpacity={0.8} />
								<stop offset='95%' stopColor='#BAFF66' stopOpacity={0} />
							</linearGradient>
						</defs>
						<CartesianGrid
							vertical={true}
							horizontal={true}
							strokeDasharray='3 3'
							horizontalPoints={[100, 150, 200, 250]}
							className='!stroke-accent/20'
						/>
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
							tick={{ fontSize: 14 }}
						/>
						{mean && (
							<ReferenceDot
								{...mean}
								r={10}
								fill='hsl(var(--secondary))'
								stroke='#BAFF66'
								strokeWidth={3}
								x='May'
								y={70}
							/>
						)}
						<Area
							dataKey='desktop'
							type='linear'
							fill='url(#colorPv)'
							fillOpacity={0.4}
							stroke='#BAFF66'
							strokeWidth={2}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
