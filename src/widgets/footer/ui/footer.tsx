import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { AddressBlock } from '@/entities/address-block';
import { SocialButtons } from '@/entities/social-buttons';
import { Navigation } from '@/widgets/header/ui/navigation';

export const Footer = () => {
	const t = useTranslations('footer');

	return (
		<footer className='bg-zinc-800 pt-10'>
			<div className='container flex flex-col gap-5 pb-6'>
				<div className='flex justify-center lg:justify-start'>
					<Image
						src='/logo-dark.svg'
						alt='Funding stax'
						width={230}
						height={97}
					/>
				</div>
				<div className='flex flex-wrap gap-10 justify-center lg:justify-start 2xl:justify-between'>
					<div className='flex flex-col gap-8'>
						<p className='text-base font-light text-secondary-foreground/40 pt-5 max-w-[780px]'>
							RISK DISCLOSURE: * All information provided on this site is
							intended solely for the educational purposes related to trading on
							financial markets and does not serve in any way as a specific
							investment recommendation, investment advice, business
							recommendation, investment opportunity analysis or similar general
							recommendation or general advice in relation to the trading of
							financial instruments. COVEFUNDED does not provide any of the
							investment services listed in this site. The information on this
							site is not directed at residents in any country or jurisdiction
							where such distribution or use would be contrary to local laws or
							regulations. COVE FUNDED is not a broker and does not accept
							deposits. Then offered technical solution for the COVEFUNDED
							platforms and data feed is powered by the third-party liquidity
							providers.
						</p>
						<div className='flex flex-col md:flex-row gap-10 items-center'>
							<SocialButtons />
							<Link
								className='text-accent hover:underline'
								href='mailto:support@fundingstax.com'
							>
								support@fundingstax.com
							</Link>
							<Link
								className='text-secondary-foreground/80 hover:text-accent text-base font-normal'
								href='#'
							>
								{t('politics')}
							</Link>
						</div>
					</div>
					<div>
						<h3 className='px-4 pb-2 text-secondary-foreground'>
							{t('links')}
						</h3>
						<Navigation
							classNameItems='text-secondary-foreground/80 hover:text-accent'
							orientation='vertical'
						/>
					</div>
					<AddressBlock />
				</div>
			</div>
			<div>
				<p className='text-secondary-foreground/30 text-base uppercase border-t border-secondary-foreground/20 w-full text-center py-2'>
					© Funding Stax. All rights Reserved 2024. Licensing
				</p>
			</div>
		</footer>
	);
};
