import { Button } from '@/shared/ui';

export default function Home() {
	return (
		<div className='p-20'>
			<h2>Home</h2>
			<Button>Default</Button>
			<Button variant='accent'>Accent</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='outline'>Outline</Button>
		</div>
	);
}
