/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { DetailsRow, IDetailsRowProps } from '@fluentui/react'
import cx from 'classnames'
import Link from 'next/link'
import useWindowSize from '~hooks/useWindowSize'
import ComponentProps from '~types/ComponentProps'
import CardRowFooter from '~ui/CardRowFooter'
import ShortString from '~ui/ShortString'
import getItemFieldValue from '~utils/getItemFieldValue'
import styles from './index.module.scss'

export interface CardRowProps extends ComponentProps {
	item?: IDetailsRowProps
	title?: string
	layout?: Record<string, unknown>
	titleLink?: string
	body?: string | JSX.Element
	bodyLimit?: number
	mb?: boolean
	footNotes?: string[] | JSX.Element[]
	// TODO: define actions
	actions?: (() => void)[]
}

/**
 * A responsive Row that turns into a Card!
 *
 * @param param0
 * @returns CardRow should ONLY be used in ~ui/DetailsList
 */
const CardRow = ({
	item,
	title,
	titleLink,
	body,
	bodyLimit,
	mb = true,
	footNotes,
	actions
}: CardRowProps): JSX.Element => {
	const { isLG } = useWindowSize()
	const header = getItemFieldValue(title, item)
	const bodyIsString = typeof body === 'string'
	const _body = bodyIsString ? getItemFieldValue(body as string, item) : body

	if (isLG) return <DetailsRow {...item} />
	else
		return (
			<div className={cx(styles.cardRow, 'p-3', mb && 'mb-3')}>
				{header && titleLink && (
					<Link href={titleLink}>
						<a>
							<h4>{header}</h4>
						</a>
					</Link>
				)}
				{header && !titleLink && <h4>{header}</h4>}
				{bodyIsString ? <ShortString text={_body as string} limit={bodyLimit} /> : _body}

				<CardRowFooter footNotes={footNotes} actions={actions} item={item} />
			</div>
		)
}

export default CardRow
