import Image from 'next/image';

import { SocialButtons } from '@/entities/social-buttons';
import { Navigation } from '@/widgets/header/ui/navigation';

export const Footer = () => {
	return (
		<footer className='bg-zinc-800 pt-10'>
			<div className='container flex flex-col gap-5'>
				<Image
					src='/logo-dark.svg'
					alt='Funding stax'
					width={230}
					height={97}
				/>
				<div className='grid grid-cols-[2fr_1fr_auto] gap-8'>
					<p className='text-base font-light text-secondary-foreground/60 pt-5'>
						RISK DISCLOSURE: * All information provided on this site is intended
						solely for the educational purposes related to trading on financial
						markets and does not serve in any way as a specific investment
						recommendation, investment advice, business recommendation,
						investment opportunity analysis or similar general recommendation or
						general advice in relation to the trading of financial instruments.
						COVEFUNDED does not provide any of the investment services listed in
						this site. The information on this site is not directed at residents
						in any country or jurisdiction where such distribution or use would
						be contrary to local laws or regulations. COVE FUNDED is not a
						broker and does not accept deposits. Then offered technical solution
						for the COVEFUNDED platforms and data feed is powered by the
						third-party liquidity providers.
					</p>
					<div>
						<h3 className='px-4 pb-2'>Полезные ссылки</h3>
						<Navigation orientation='vertical' />
					</div>
				</div>
				<div>
					<SocialButtons />
				</div>
			</div>
		</footer>
	);
};
