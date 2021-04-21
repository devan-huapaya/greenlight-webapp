import { IStackTokens, Stack } from '@fluentui/react'
import Link from 'next/link'
import Layout from '~layouts/ContainerLayout'
import Counter from '~ui/Counter'

const stackTokens: IStackTokens = { childrenGap: 40 }

export default function Home(): JSX.Element {
	return (
		<Layout>
			<h3 className='mt-5'>
				My Requests
			</h3>
			<h3 className='mt-5'>
				Requests
			</h3>
		</Layout>
	)
}
