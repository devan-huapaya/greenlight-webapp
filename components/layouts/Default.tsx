import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import NavBar from '~components/ui/NavBar'
import { getAuthUser } from '~store/slices/auth'
import CP from '~types/componentProps'
import ActionBar from '~ui/ActionBar'

export interface DefaultLayoutProps extends CP {
	showNav?: boolean
}

export default function DefaultLayout({
	children,
	showNav = true
}: DefaultLayoutProps): JSX.Element {
	const router = useRouter()
	const auth = useSelector(getAuthUser)

	useEffect(() => {
		if (!auth.signedIn && !auth.loading && router.route !== '/login') {
			void router.push('/login')
		}
	}, [auth.signedIn, auth.loading, router.pathname, router])

	return (
		<>
			<ActionBar />
			{showNav && <NavBar />}

			{children}
		</>
	)
}
