import React, {useState, useEffect} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'

const ThemeSelector: React.FC<{className?: string}> = ({className}) => {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const theme = localStorage.getItem('theme')
		if (theme) {
			setIsDark(theme === 'dark')
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
		if (isDark) {
			document.documentElement.classList.add('dark')
		}
	}, [isDark])

	return (
		<div className={`flex flex-row items-center justify-center ${className}`}>
			<button
				className='flex flex-row items-center justify-center space-x-2 text-catalina-blue-900'
				onClick={() => setIsDark(isDark => !isDark)}
			>
				{isDark ? (
					<>
						<FaMoon className='w-5 h-5' />
						<span>Dark</span>
					</>
				) : (
					<>
						<FaSun className='w-5 h-5' />
						<span>Light</span>
					</>
				)}
			</button>
		</div>
	)
}

export default ThemeSelector
