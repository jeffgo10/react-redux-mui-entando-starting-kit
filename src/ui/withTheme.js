import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const SPACING_UNIT = 16;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ebf1f4',
      main: '#02589e',
      dark: '#00306f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#ccc',
      contrastText: '#000',
    },
    spacing: {
      unit: SPACING_UNIT,
    },
  },
  typography: {
    useNextVariants: true,
  },
  classes: {
    shell: {
      root: {
        flexGrow: 1,
        minHeight: '100vh',
      },
      headToolbar: {
        paddingLeft: SPACING_UNIT,
        paddingRight: SPACING_UNIT,
      },
    },
    flex: {
      flexGrow: 1,
    },
    wholebtmcont: {
      flex: 1,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

function withTheme(Component) {
  function WithTheme(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithTheme;
}

export default withTheme;
