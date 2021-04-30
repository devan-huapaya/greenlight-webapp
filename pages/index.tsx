import { GetStaticProps } from 'next'
import Layout from '~layouts/ContainerLayout'
import Dashboard from '~layouts/Dashboard'
import PageProps from '~types/PageProps'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const ret = { props: { copy: {} } }

	try {
		// TODO: Move this logic into a util... it will need to be called on every page... or move it to _app.tsx?
		const intlResponse: { default: any } = await import(`../intl/${locale}.json`)
		ret.props.copy = intlResponse.default
	} catch (error) {
		console.log('error', error)
	}

	return ret
}

export default function Home({ copy }: PageProps): JSX.Element {
	console.log('copy', copy)

	return (
		<Layout>
			<Dashboard />
		</Layout>
	)
}
