/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { DetailsList, DetailsListLayoutMode, IColumn, IDetailsListProps } from '@fluentui/react'
import cx from 'classnames'
import { useCallback } from 'react'
import useWindowSize from '~hooks/useWindowSize'
import ComponentProps from '~types/ComponentProps'
import IconButton from '../IconButton'

export interface DetailsListProps extends ComponentProps {
	title?: string
	onRenderRow?: IDetailsListProps['onRenderRow']
	columns?: IColumn[]
	items?: unknown[]
	layoutMode?: number
	onItemClicked?: (any) => void
	responsive?: boolean
	topMargin?: boolean
	className?: string
	onAdd?: () => void
	addLabel?: string
}

export default function List({
	title,
	onRenderRow,
	columns,
	items,
	layoutMode = DetailsListLayoutMode.justified,
	onItemClicked,
	className,
	topMargin = true,
	responsive = true,
	onAdd,
	addLabel
}: DetailsListProps): JSX.Element {
	const { isLG } = useWindowSize()

	const handleAddClick = useCallback(() => {
		onAdd()
	}, [onAdd])

	return (
		<div className={cx(topMargin && 'mt-5', className)}>
			<div className='d-flex justify-content-between'>
				{!!title && <h3>{title}</h3>}
				{!!onAdd && (
					<IconButton
						icon='CircleAdditionSolid'
						onClick={handleAddClick}
						text={!!addLabel ? addLabel : 'Add'}
					/>
				)}
			</div>
			<DetailsList
				isHeaderVisible={!responsive ? true : isLG}
				items={items}
				columns={columns}
				setKey='set'
				layoutMode={layoutMode}
				checkboxVisibility={2}
				onItemInvoked={item => onItemClicked?.(item)}
				onRenderRow={onRenderRow}
				useReducedRowRenderer={true} // TODO: this reduces re-render, but could cause issues later
			/>
		</div>
	)
}
