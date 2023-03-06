import { createContext, useState, useContext } from 'react'

import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

interface IThemeContext {
  toggleTheme(): void
  theme: ITheme
}

interface ITheme {
  title: string

  colors: {
    primary: string
    secondary: string
    tertiary: string

    white: string
    black: string
    gray: string

    success: string
    info: string
    warning: string
  }
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ITheme>(dark)

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
    } else {
      setTheme(dark)
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// function useTheme({}: IThemeContext) {
//   const context = useContext(ThemeContext)

//   return context
// }
