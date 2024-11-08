import { useOnClickOutside } from '@hooks/useOnClickOutside.ts'
import { useResponsive } from '@hooks/useResponsiveHeader.ts'
import burger from '@icons/burger.svg'
import close from '@icons/close.svg'
import logo from '@icons/logo.svg'
import notes from '@icons/notes.svg'
import { routeConfig } from '@routes/PageRoutesConfig.tsx'
import NavLinks from '@ui/navLinks/NavLinks.tsx'
import { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'

function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const isWide = useResponsive(1221)
	useOnClickOutside(menuRef, isOpen, () => setIsOpen(false))

	const handleBurgerClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsOpen(!isOpen)
	}

	const handleLinkClick = () => isOpen && setIsOpen(false)

	useEffect(() => {
		if (isWide) setIsOpen(false)
	})
	return (
		<header>
			<div className={styles.topHeader}>
				<div className={styles.logoBlock}>
					<NavLinks to={routeConfig.home} logo={logo} alt='logo' />
					{isOpen ? (
						<>
							{!isWide && (
								<button onClick={handleBurgerClick}>
									<img src={close} alt='close' />
								</button>
							)}
						</>
					) : (
						<div className={styles.burgerBlock}>
							<img src={notes} alt='notes' className={styles.notesImg} />
							<button
								onClick={handleBurgerClick}
								className={styles.burgerButton}
							>
								<img src={burger} alt='burger' />
							</button>
						</div>
					)}
				</div>
			</div>

			{(isOpen || isWide) && (
				<div className={styles.bottomHeader} ref={menuRef}>
					<nav>
						<ul className={styles.ul}>
							<li className={styles.li}>
								{routeConfig.getLinks().map(link => (
									<NavLinks
										to={link.path}
										text={link.label}
										key={link.path}
										onClick={handleLinkClick}
									/>
								))}
							</li>
						</ul>
					</nav>
				</div>
			)}
		</header>
	)
}

export default Header
