import React, { SetStateAction, createContext, useMemo } from "react";
import useTheme from "@/components/visx/hooks/useTheme";



export const ThemeContext = createContext<{
    theme: Record<string, string>;
    themes: Record<string, Record<string, string>>;
    setTheme: React.Dispatch<SetStateAction<{ background: string; primary: string; secondary: string; accent: string; neutral: string; "base-100": string; info: string; success: string; warning: string; error: string; }>>;
    themeName: 'LIGHT' | 'DARK' | 'CUPCAKE';
}>({ theme: {}, themes: {}, setTheme: () => { }, themeName: 'LIGHT' })

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { themes, theme, themeName, setTheme } = useTheme('DARK')

    const value = useMemo(() => ({ themes, theme, setTheme, themeName }), [themes, theme, setTheme, themeName]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}