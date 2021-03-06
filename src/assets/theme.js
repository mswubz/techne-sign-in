import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    MuiCssBaseline: {
        styleOverrides: `
            @font-face {
                font-family: 'Joan';
                font-style: sans-serif;
                font-display: swap;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Joan&display=swap)
            }
         `,
      },
    typography: {
        fontFamily: 'Joan', 
        h1: {
            fontSize: '72px',
            fontWeight: '600',
            color: '#3D325F'
  
          }, 
        h2: {
        fontSize: '36px'
        },
        h3: {
        fontSize: '28px'
        },
        h4: {
        fontSize: '48px'
        },
        h5: {
        fontSize: '30px'
        },
        caption: {
        fontSize: '26px'
        },
        subtitle1: {
        fontSize: '22px',
        fontWeight: '300'
        }, 
        subtitle2: {
        fontSize: '16px',
        fontWeight: '300'
        },
        button: {
        fontSize: '24px',
        textTransform: 'none;',
        }
    },
    status: {
    danger: '#e53e3e',
    },
    palette: {
    primary: {
        main: '#33312E',
    },
    },
});

export default theme;