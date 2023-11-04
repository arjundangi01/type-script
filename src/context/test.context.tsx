import React, { createContext, ReactNode,useState } from 'react'
// import { createContext } from 'react';
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC <ThemeContextProviderProps> = ({ children }) => {
  const [theme,setTheme] = useState()
  return (
    <ThemeContext.Provider value={theme} > {children} </ThemeContext.Provider>
  )
}

export default ThemeContextProvider