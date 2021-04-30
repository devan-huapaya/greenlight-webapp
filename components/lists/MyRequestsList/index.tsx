/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { IColumn } from '@fluentui/react'
import { useSelector } from 'react-redux'
import useWindowSize from '~hooks/useWindowSize'
import { getMyRequests } from '~store/slices/myRequests'
import RequestType from '~types/Request'
import CardRow from '~ui/CardRow'
import DetailsList, { DetailsListProps } from '~ui/DetailsList'
import MultiActionButton from '~ui/MultiActionButton'
import ShortString from '~ui/ShortString'

export interface MyRequestsProps extends DetailsListProps {
	requests: RequestType[]
}

export default function MyRequests(): JSX.Element {
	const myRequests = useSelector(getMyRequests)
	const { isXL, isXXL } = useWindowSize()
	const myRequestsColumns: IColumn[] = [
		{
			key: 'nameCol',
			name: 'Name',
			fieldName: 'fullName',
			minWidth: 100,
			maxWidth: 200
		},
		{
			key: 'requestCol',
			name: 'Request',
			fieldName: 'request',
			isMultiline: true,
			minWidth: 300,
			onRender: function onRequestRender(item: Record<string, any>) {
				return <ShortString text={item.request} limit={isXXL ? 80 : isXL ? 64 : 24} />
			}
		},
		{
			key: 'timeRemainingCol',
			name: 'Time Remaining',
			fieldName: 'timeRemaining',
			minWidth: 150
		},
		{
			key: 'statusCol',
			name: 'Status',
			fieldName: 'status',
			minWidth: 200
		},
		{
			key: 'actionCol',
			name: '',
			fieldName: 'action',
			minWidth: 100,
			onRender: function actionRender() {
				return (
					<div className='w-100 d-flex justify-content-end'>
						<MultiActionButton />
					</div>
				)
			}
		}
	]

	const handleNewRequest = () => {
		console.log('new request')
	}

	return (
		<DetailsList
			title='My Requests'
			items={myRequests}
			columns={myRequestsColumns}
			onAdd={handleNewRequest}
			onRenderRow={props => {
				// TODO: resolve this lint issue
				/* eslint-disable */
				const id = (props.item as { id: number })?.id ? props.item.id : ''
				return (
					<CardRow
						item={props}
						title='fullName'
						// TODO: this should probably just be included as a link returned from the server
						// es
						titleLink={`/profile/${id}`}
						body='request'
						bodyLimit={90}
						footNotes={['timeRemaining', 'status']}
						actions={[() => {}]}
					/>
				)
			}}
			addLabel='Add Request'
		/>
	)
}
