import { useEffect, useState } from 'react';

export const useMountingStatus = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return {
		isMounted: mounted,
	};
};
