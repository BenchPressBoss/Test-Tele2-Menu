import cn from 'clsx'
import { NavLink } from 'react-router-dom'
import styles from './NavLinks.module.scss'

type navLinksProps = {
	text?: string
	to: string
	logo?: string
	onClick?: () => void
	alt?: string
}

function NavLinks({ text, to, logo, onClick, alt }: navLinksProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				cn(styles.link, { [styles.active]: isActive })
			}
			onClick={onClick}
		>
			{logo && <img src={logo} alt={alt} />}
			{text && <p>{text}</p>}
		</NavLink>
	)
}

export default NavLinks
