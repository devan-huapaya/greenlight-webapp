/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { useSelector } from 'react-redux'
import MyRequestsList from '~lists/MyRequestsList'
import NavigatorsList from '~lists/NavigatorsList'
import RequestList from '~lists/RequestList'
import { getAuthUser } from '~slices/auth'
import type ComponentProps from '~types/ComponentProps'
interface DashboardProps extends ComponentProps {
	title?: string
}

export default function Dashboard({}: DashboardProps): JSX.Element {
	const auth = useSelector(getAuthUser)

	if (!auth.signedIn) {
		return null
	}

	return (
		<>
			<MyRequestsList />
			<NavigatorsList />
			<RequestList />
		</>
	)
}
