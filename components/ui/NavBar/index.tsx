import cx from 'classnames'
import Link from 'next/link'
import type CP from '~types/componentProps'
import CRC from '~ui/CRC'
import styles from './index.module.scss'

const links = [{
	link: '/',
	label: 'Home'
}, {
	link: '/requests',
	label: 'Requests'
}, {
	link: '/directory',
	label: 'Directory'
}, {
	link: '/notifications',
	label: 'Notifications'
}, {
	link: '/about',
	label: 'About'
}]
export default function NavBar({}: CP): JSX.Element {
	return (
		<div
			className={'d-flex justify-content-between align-items-center pt-5'}
		>
			<CRC>
				<div className='d-flex justify-content-between align-items-center'>
					{links.map((link ) => (
						<Link href={link.link}>
							<a className=''>{link.label}</a>
						</Link>
					))}
				</div>
			</CRC>
		</div>
	)
}
