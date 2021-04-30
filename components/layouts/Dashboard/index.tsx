/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyRequestsList from '~lists/MyRequestsList'
import NavigatorsList from '~lists/NavigatorsList'
import { getAuthUser } from '~slices/auth'
import { loadMyRequests } from '~store/slices/myRequests'
import { loadNavigators } from '~store/slices/navigators'
import type ComponentProps from '~types/ComponentProps'
interface DashboardProps extends ComponentProps {
	title?: string
}

export default function Dashboard({}: DashboardProps): JSX.Element {
	const auth = useSelector(getAuthUser)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadMyRequests())
		dispatch(loadNavigators())
	}, [dispatch])

	if (!auth.signedIn) {
		return null
	}

	return (
		<>
			<MyRequestsList />
			<NavigatorsList />
			<MyRequestsList title='Requests' />
		</>
	)
}
