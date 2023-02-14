import React, {useContext, useState} from "react";

interface IThemeContextProps {
    theme?: string;
    changeTheme?: () => void;
}

export const ThemeContext = React.createContext<IThemeContextProps>({});

export const InitThemeContext = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = (): void => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return { theme, changeTheme };
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}