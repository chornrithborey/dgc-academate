# dgc-academate
This is a frontend application for the Academate project, built using React. It provides a user interface for managing academic-related tasks and data.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the unit test & integration test.

### `yarn playwright test` 

Launches the e2e test

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

The project structure is as follows:

```
dgc/academate-frontend/
src/
├── __tests__/           # Test files
├── components/          # Reusable components
│   ├── Buttons/         # Button components
│   ├── Cards/           # Card components
│   ├── Modals/          # Modal components
│   ├── Tables/          # Table components
│   └── ...              # Other components
├── layouts/             # Layout components
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   ├── score/           # Score management pages
│   ├── students/        # Student management pages
│   └── ...              # Other pages
├── utils/               # Utility functions
├── App.tsx              # Main application component
├── index.tsx            # Entry point
├── theme.ts             # Theme customization
└── ...                  # Other files
```

## Theme Customization
The theme is customized using Material-UI's createTheme function. You can find the theme configuration in src/theme.ts.

```
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
          root: {
            borderRadius: '0px',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          },
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
            borderRadius: '12px',
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
  ```

