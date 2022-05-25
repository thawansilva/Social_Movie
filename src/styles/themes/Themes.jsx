import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: false,
    light: { syntax: "#ddd", ui: "#ff3c3c", bg: "#333" },
    dark: { syntax: "#333", ui: "#ff3c3c", bg: "#ddd" },
  });

  const toggleTheme = () => {
    setTheme((prevState) => {
      return {
        ...theme,
        isLightTheme: !prevState.isLightTheme,
      };
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
