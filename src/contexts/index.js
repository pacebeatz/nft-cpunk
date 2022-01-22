import { PunkProvider } from './PunkContext';
import { ThemeProvider } from './ThemeContext';

export default function Providers({ children }){
    return (
        <ThemeProvider>
            <PunkProvider>
                {children}
            </PunkProvider>
        </ThemeProvider>
    )
}