import { IStackTokens, Stack } from '@fluentui/react'
import Layout from '~layouts/ContainerLayout'
import Counter from '~ui/Counter'

const stackTokens: IStackTokens = { childrenGap: 40 }

export default function Home(): JSX.Element {
	return (
		<Layout title="Dashboard">
			<Stack tokens={stackTokens}>
				<h3 className="mb-3">Directory Page</h3>
				<span>Dynamic page rendering test:</span>
				<Counter />
			</Stack>
		</Layout>
	)
}
