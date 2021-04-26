import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '~layouts/ContainerLayout'

export default function Profile(): JSX.Element {
	const router = useRouter()
	const { pid } = router.query

	useEffect(() => {
		console.log('pid', pid)
	}, [pid])

	return (
		<Layout title={`Profile Page ${pid}`}>
			<span>Profile Page</span>
		</Layout>
	)
}
