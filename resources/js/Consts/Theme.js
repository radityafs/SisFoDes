import { createTheme } from "@mui/material/styles";

const isDarkMode = localStorage.getItem("theme") === "dark";

const theme = {
    light: createTheme({
        palette: {
            mode: "light",
        },
    }),
    dark: createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#181821",
            },

            primary: {
                main: "#9a9cab",
            },

            secondary: {
                main: "#9a9cab",
            },
        },
        props: {
            MuiTextField: {
                variant: "outlined",
            },
        },
    }),
};

const selectTheme = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: isDarkMode ? "#181821" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: isDarkMode ? "#181821" : "#fff",
        color: isDarkMode ? "#fff" : "#000",

        "&:hover": {
            backgroundColor: isDarkMode ? "#181821" : "#fff",
        },
    }),

    singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: isDarkMode ? "#fff" : "#000",
    }),
};

const dropzoneTheme = {
    background: isDarkMode ? "#181821" : "#fff",
};

const useTheme = () => {
    return isDarkMode ? theme.dark : theme.light;
};

export { theme, selectTheme, dropzoneTheme, isDarkMode, useTheme };
