type Theme = 'light' | 'dark';

type ColorTokens = {
    [key: number]: string;
};

type BackgroundTokens = {
    light: string;
    main: string;
    dark: string;
};

type Tokens = {
    grey: ColorTokens;
    primary: ColorTokens;
    secondary: ColorTokens;
    tertiary: { 500: string };
    background: BackgroundTokens;
};

export const tokens: Tokens = {
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

export const tokensDark: Tokens = {
    grey: {
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000",
    },
    primary: {
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        50: "#f0f0f0",
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
    },
    tertiary: {
        500: "#8884d8",
    },
    background: {
        light: "#f2f2f2", // light background
        main: "#f9f9f9",  // main background for light mode
        dark: "#1b1b1b",  // dark background
    },
};

// function that reverses the color palette
function reverseTokens(tokens: Tokens): Tokens {
    const reversedTokens: Tokens = {
        grey: {},
        primary: {},
        secondary: {},
        tertiary: { 500: tokens.tertiary[500] },
        background: {
            light: tokens.background.light,
            main: tokens.background.main,
            dark: tokens.background.dark,
        },
    };

    Object.entries(tokens).forEach(([key, val]) => {
        if (typeof val === 'object' && key !== 'background' && key !== 'tertiary') {
            const reversedObj: ColorTokens = {};
            const entries = Object.entries(val);
            for (let i = 0; i < entries.length; i++) {
                reversedObj[+entries[i][0]] = entries[entries.length - 1 - i][1];
            }
            reversedTokens[key as keyof Omit<Tokens, 'background' | 'tertiary'>] = reversedObj;
        }
    });

    return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const getThemeSettings = (mode: Theme) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[400],
                        light: tokensDark.primary[400],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[300],
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.background.dark,
                        alt: tokensDark.background.main,
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensLight.primary[400],
                        light: tokensLight.primary[400],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensLight.secondary[300],
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensLight.grey[500],
                    },
                    background: {
                        default: tokensDark.background.light,
                        alt: tokensDark.background.main,
                    },
                }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
