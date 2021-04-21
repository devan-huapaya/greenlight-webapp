import CRC from '~ui/CRC'
import DefaultLayout, {DefaultLayoutProps} from '~layouts/Default'

export interface ContainerLayoutProps extends DefaultLayoutProps {
	title?: string
}

export default function ContainerLayout({ children, title, showNav }: ContainerLayoutProps): JSX.Element {
	return (
		<>
			<DefaultLayout showNav={showNav}>
				<CRC>
					<>
						{title && <h1 className='mt-5'>{title}</h1>}

						{children}
					</>
				</CRC>
			</DefaultLayout>
		</>
	)
}