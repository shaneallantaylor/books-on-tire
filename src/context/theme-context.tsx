import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type ThemeContextModel = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>
}


// Create Context object.
const ThemeContext = createContext<ThemeContextModel | null>(null)

// Export Provider.
export function ThemeProvider({ children }: { children: React.ReactNode, }) {

  const [theme, setTheme] = useState<string>('base');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
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
