import React, { useEffect, useState, createContext } from "react";
import { LightTheme, DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialMode = () => {
        if (typeof localStorage === "undefined") return "dark"; // Default to dark mode if no localStorage
        const savedMode = localStorage.getItem("theme");
        return savedMode ? savedMode : "dark"; // Use saved mode or default to dark
    };

    const [theme, setTheme] = useState(getInitialMode());

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme); // Store theme preference in localStorage
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
