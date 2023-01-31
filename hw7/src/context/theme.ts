import { link } from "fs";
import React, { useContext, useState } from "react";
type IThemeContext = {
    theme?: string;
    changeThemeFunction?: () => void
}

export const ThemeContext = React.createContext<IThemeContext>({})


export const useInitThemeContext = () => {
    const [theme, setTheme] = useState('light')
    const changeThemeFunction = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    } 
    return {
        theme: theme,
        changeThemeFunction: changeThemeFunction
    }
}


export const useThemeContext = () => useContext(ThemeContext)