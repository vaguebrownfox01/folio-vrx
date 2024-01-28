'use client';

import { useEffect } from 'react';

export const ReportView: React.FC<{ pagename: string; slug: string }> = ({
	pagename: page,
	slug,
}) => {
	useEffect(() => {
		fetch('/api/incr', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ page, slug }),
		});
	}, [slug]);

	return null;
};
