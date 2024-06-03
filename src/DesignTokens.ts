type Theme = 'light' | 'dark';

export const tokens = {
    grey: {
        100: "#f0f0f3",
        200: "#e1e2e7",
        300: "#d1d3da",
        400: "#c2c5ce",
        500: "#b3b6c2",
        600: "#8f929b",
        700: "#6b6d74",
        800: "#48494e",
        900: "#242427",
    },
    primary: {
        100: "#d0fcf4",
        200: "#a0f9e9",
        300: "#71f5de",
        400: "#41f2d3",
        500: "#12efc8",
        600: "#0ebfa0",
        700: "#0b8f78",
        800: "#076050",
        900: "#043028",
    },
    secondary: {
        100: "#fcf0dd",
        200: "#fae1bb",
        300: "#f7d299",
        400: "#f5c377",
        500: "#f2b455",
        600: "#c29044",
        700: "#916c33",
        800: "#614822",
        900: "#302411",
    },
    tertiary: {
        500: "#8884d8",
    },
    background: {
        light: "#b2b2b2", // light background
        main: "#f9f9f9",  // main background for light mode
        dark: "#1b1b1b",  // dark background
    },
};

// Additional tokens if needed for text colors, etc.
export const textTokens = {
    light: {
        primary: "#000000",
        secondary: "#242427",
    },
    dark: {
        primary: "#ffffff",
        secondary: "#b3b6c2",
    },
};

// mui theme settings
export const getThemeSettings = (mode: Theme) => ({
    palette: {
        mode,
        primary: {
            ...tokens.primary,
            main: tokens.primary[500],
            light: tokens.primary[400],
        },
        secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
        },
        tertiary: {
            ...tokens.tertiary,
        },
        grey: {
            ...tokens.grey,
            main: tokens.grey[500],
        },
        background: {
            default: mode === 'dark' ? tokens.background.dark : tokens.background.light,
            paper: mode === 'dark' ? tokens.background.main : tokens.grey[100],
        },
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
        },
        h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
        },
        h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: 800,
            color: mode === 'dark' ? tokens.grey[200] : tokens.grey[700],
        },
        h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: mode === 'dark' ? tokens.grey[300] : tokens.grey[600],
        },
        h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: mode === 'dark' ? tokens.grey[500] : tokens.grey[500],
        },
        h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: mode === 'dark' ? tokens.grey[700] : tokens.grey[900],
        },
    },
});
