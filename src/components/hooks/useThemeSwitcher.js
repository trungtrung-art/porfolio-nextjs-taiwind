import { THEME_DARK, THEME_LIGHT } from '@/common/contants'
import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefer-color-scheme: dark)'
    const [mode, setMode] = useState('')

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem('theme')

        function handleChange() {
            if (userPref) {
                let check = userPref === THEME_DARK ? 'dark' : 'light'
                setMode(check)
                if (check === THEME_DARK) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            } else {
                let check = mediaQuery.matches === THEME_DARK ? 'dark' : 'light'
                setMode(check)
                if (check === THEME_DARK) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }

        handleChange()

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if (mode === THEME_DARK) {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        }

        if (mode === THEME_LIGHT) {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher