import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const color01 = '#ffa2ff'; // Black
export const color02 = '#9bddeb'; // blue
export const color03 = 'lightgrey'; // purple

let theme = createTheme();

// A custom theme for this app
theme = createTheme({
    palette: {
        primary: {
            main: color01,
        },
        secondary: {
            main: color02,
        },
        grey: {
            '100': color03,
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            'Poppins',
        ].join(','),
        h1: {
            fontWeight: 900,
            fontSize: 80,
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 48,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 64,
            },
            wordBreak: 'break-word',
        },
        h2: {
            fontWeight: 600,
            fontSize: 64,
            letterSpacing: '-0.03em',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 40,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 56,
            },
            wordBreak: 'break-word',
        },
        h3: {
            wordBreak: 'break-word',
        },
        h4: {
            fontWeight: 500
        },
        subtitle1: {
            fontWeight: 300,
            fontSize: 28,
            lineHeight: 1,
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 24,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 32,
            },
        },
        subtitle2: {
            color: 'black',
            fontWeight: 800,
            fontSize: 24,
            lineHeight: 1,
            letterSpacing: '-0.5px',
            marginBottom: '16px',
            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: 24,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: 24,
            },
        },
        body1: {
            fontWeight: 300,
            letterSpacing: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    'borderRadius': 24,
                    'background': color02,
                    'color': '#ffffff',
                    'padding': '16px 32px',
                    'border': 0,
                    '&:hover': {
                        border: 0,
                        background: color01,
                    },
                },
            },
        },
        MuiImageListItem: {
            styleOverrides: {
                masonry: {
                    borderRadius: 12,
                    overflow: 'hidden',
                    [":hover img"]: {
                        transform: 'scale(1.2)',
                        transition: '.3s ease-in-out',
                    }
                },
            },
        },
    },
});

export default theme;
