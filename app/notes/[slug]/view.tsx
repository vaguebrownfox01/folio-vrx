'use client'

import { useEffect } from 'react'

export const ReportView: React.FC<{ page: string, slug: string }> = ({ page, slug }) => {
	useEffect(() => {
		fetch('/api/incr', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ page, slug }),
		})
	}, [page, slug])

	return null
}
