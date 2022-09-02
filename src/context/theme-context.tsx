import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { styled, getThemeClassName } from '../../stitches.config';

type ThemeContextModel = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>
}

const StyledWrapper = styled('div', {
  backgroundColor: '$primaryBackground',
  color: "$primary",
  transition: '$themeChange',
  minHeight: '100%'
})

// Create Context object.
const ThemeContext = createContext<ThemeContextModel | null>(null)

// Export Provider.
export function ThemeProvider({ children }: { children: React.ReactNode, }) {

  const [theme, setTheme] = useState<string>('base');
  const themeClassName = getThemeClassName(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledWrapper
        className={themeClassName}
      >
        {children}
      </StyledWrapper>
    </ThemeContext.Provider>
  )
}

// Export useContext Hook.
export function useThemeContext() {
  const themeValues = useContext(ThemeContext);

  if (themeValues === undefined || themeValues === null) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return themeValues;
}
