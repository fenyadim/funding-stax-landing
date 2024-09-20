import { Banner } from '@/entities/banner';
import { ChooseUs, CommentsBlock, MainBanner, StartNow } from '@/entities/home';

export const HomePage = () => {
	return (
		<>
			<MainBanner />
			<ChooseUs />
			<StartNow />
			<Banner />
			{/* TODO: Доделать PlanBlock */}
			{/*<PlanBlock />*/}
			<CommentsBlock />
		</>
	);
};
