import Header from './header/Header'
import styles from './Layout.module.scss'

type LayoutProps = {
	children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<div className={styles.mainBlock}>{children}</div>
			</main>
		</div>
	)
}

export default Layout
