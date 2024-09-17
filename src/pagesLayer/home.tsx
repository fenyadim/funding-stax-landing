import { Banner } from '@/entities/banner';
import { ChooseUs, MainBanner, StartNow } from '@/entities/home';

export const HomePage = () => {
	return (
		<>
			<MainBanner />
			<ChooseUs />
			<StartNow />
			<Banner />
		</>
	);
};
