/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '~store'
import type RequestType from '~types/Request'

const fakeMyRequests = [
	{
		firstName: 'firstname',
		lastName: 'lastname',
		fullName: 'Firstname Lastname',
		request: 'Short request :)',
		timeRemaining: '23',
		status: 'Not Started',
		id: 1
	},
	{
		firstName: 'firstname2',
		lastName: 'lastname2',
		fullName: 'Firstname Lastname2',
		request:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl sapien, ornare ut bibendum eu, fermentum ut dolor. Nam a purus nulla. Sed facilisis velit eget risus pharetra commodo. Nullam congue aliquet enim at vulputate. Suspendisse accumsan dui eu ornare ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur pellentesque ligula eu iaculis posuere. Proin accumsan ante sed sem interdum, et convallis nulla laoreet. Nulla sodales malesuada nulla, sed elementum turpis elementum at.',
		timeRemaining: '23',
		status: 'InProgress',
		id: 2
	}
]

export interface MyRequestType {
	isLoading: boolean
	data: RequestType[]
}

export const slice = createSlice({
	name: 'myRequests',
	initialState: {
		isLoading: false,
		data: fakeMyRequests
	},
	reducers: {
		set: (state, action) => {
			state.data = action.payload
		}
	}
})

// Export actions
export const { set } = slice.actions

/**
 * Add async and dynamic actions here
 */

/**
 * Add getters here
 */
// TODO: Add type for myRequests getter
export const getMyRequests = (state: RootState): RequestType[] => state.myRequests.data

// Export reducer
export default slice.reducer
