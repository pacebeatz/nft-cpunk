import { createContext, useCallback, useState } from "react";
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState('dark');

    const handleToggleTheme = useCallback(() => {
        setSelectedTheme(oldState =>
            oldState === 'dark' ? 'light' : 'dark');
    }, []);
  
    return (
        <ThemeContext.Provider 
            value={{
                selectedTheme,
                handleToggleTheme
            }}
        >
            <SCThemeProvider theme={themes[selectedTheme]}>
                {children}
            </SCThemeProvider>
        </ThemeContext.Provider>
    )
}