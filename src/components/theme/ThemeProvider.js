import React, { useEffect, useState, createContext } from "react";
import { LightTheme, DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Start with dark mode as the default
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        // Store the theme preference in localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
