// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = (backgroundColor: string = '#ffffff') =>
  createTheme({
    colorSchemes : {

    },
    palette: {
      background: { default: backgroundColor },
      primary: {
        main: '#3BB2D9',
      },
      success: {
        main: '#DDFFF3'
      },
      error: {
        main: '#FFEFEF'
      },
    },
    typography: {
      fontFamily: 'Lato, sans-serif',
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
            bgcolor: '#3BB2D9',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: "none", 
          },
          root: {
            backgroundColor: '#3BB2D9',
            width: '0px',
            borderRight: "none",
   
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

    },
  });