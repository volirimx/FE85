import React, { useContext, useState } from "react";

type ThemeContext = {
  theme?: string;
  changeThemeFunc?: () => void;
};

export const ThemeContext = React.createContext<ThemeContext>({});

export const useInitThemeContext = () => {
  const [theme, setTheme] = useState("light");

  const changeThemeFunc = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return {
    theme: theme,
    changeThemeFunc: changeThemeFunc,
  };
};

export const useThemeContext = () => useContext(ThemeContext);
