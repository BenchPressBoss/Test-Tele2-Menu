import { useEffect, useState } from 'react'

export const useResponsive = (breakpoint: number) => {
	const [isWide, setIsWide] = useState<boolean>(window.innerWidth >= breakpoint)

	useEffect(() => {
		const handleResize = () => {
			setIsWide(window.innerWidth >= breakpoint)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [breakpoint])

	return isWide
}
