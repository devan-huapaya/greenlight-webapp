/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react'
import ComponentProps from '~types/ComponentProps'

export interface ListProps extends ComponentProps {
	title?: string
	onRenderItemColumn?: () => JSX.Element
	columns?: IColumn[]
	items?: unknown[]
	layoutMode?: number
	onItemClicked?: (any) => void
}

export default function List({
	title,
	onRenderItemColumn,
	columns,
	items,
	layoutMode = DetailsListLayoutMode.justified,
	onItemClicked
}: ListProps): JSX.Element {
	return (
		<>
			{title && <h3>{title}</h3>}

			<DetailsList
				items={items}
				columns={columns}
				setKey='set'
				layoutMode={layoutMode}
				checkboxVisibility={2}
				onItemInvoked={item => onItemClicked?.(item)}
				onRenderItemColumn={onRenderItemColumn}
				className='locationDetailsList'
			/>
		</>
	)
}
