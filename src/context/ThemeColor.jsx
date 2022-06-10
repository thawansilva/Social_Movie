import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#333", ui: "#c22c2c", bg: "#eee" },
    dark: { syntax: "#eee", ui: "#c22c2c", bg: "#333" },
  });

  const useTheme = () => {
    const isLightTheme = theme.isLightTheme;
    const colorTheme = theme.isLightTheme ? theme.light : theme.dark;
    return { colorTheme, isLightTheme };
  };
  const toggleTheme = () => {
    setTheme((prevState) => {
      return {
        ...theme,
        isLightTheme: !prevState.isLightTheme,
      };
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, useTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
