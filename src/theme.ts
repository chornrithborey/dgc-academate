import { createTheme } from '@mui/material/styles';

export const theme = (backgroundColor: string = '#ffffff') =>
  createTheme({
    palette: {
      background: { default: backgroundColor },
      primary: {
        main: '#3BB2D9',
      },
      secondary: {
        main: '#FF4081',
      },
      success: {
        main: '#DDFFF3',
      },
      info: {
        main: '#C8E4FA',
      },
      error: {
        main: '#FFEFEF',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
      },
    },
    typography: {
      fontFamily: 'Lato, sans-serif',
      h5: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
      },
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '5px',
          },
          containedPrimary: {
            color: 'white',
            backgroundColor: '#3BB2D9',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: 'none',
          },
          root: {
            backgroundColor: '#3BB2D9',
            width: '0px',
            borderRight: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#333333',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            textAlign: 'left',
            marginTop: '1rem',
          },
        },
      },
    },
  });