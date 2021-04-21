import { IStackTokens, Stack } from '@fluentui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '~layouts/ContainerLayout'

const stackTokens: IStackTokens = { childrenGap: 16 }

export default function Profile(): JSX.Element {
	const router = useRouter()
	const { pid } = router.query

	useEffect(() => {
		console.log('pid', pid)
	}, [pid])

	return (
		<Layout title={`Profile Page ${pid}`}>
			<span>
				Profile Page
			</span>
		</Layout>
	)
}
