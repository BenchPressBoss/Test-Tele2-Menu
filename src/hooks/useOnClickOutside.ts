import { useEffect } from 'react'

export const useOnClickOutside = (
	ref: React.RefObject<HTMLElement>,
	isOpen: boolean,
	onClose: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen, ref, onClose])
}
