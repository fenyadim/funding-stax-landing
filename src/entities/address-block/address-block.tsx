import Image from 'next/image';

export const AddressBlock = () => {
	return (
		<div className='bg-secondary p-5 rounded-3xl h-fit max-w-[300px]'>
			<Image
				src='/flags/en-big.png'
				alt='English flag'
				width={79}
				height={68}
			/>
			<p className='text-secondary-foreground font-light'>
				53 EARDLEY CRESCENT, LONDON,ENGLAND SW5 9JT
				<br /> CAPITAL STAX LTD
				<br /> Company Number 15884218
			</p>
		</div>
	);
};
