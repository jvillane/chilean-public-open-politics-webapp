import { createMuiTheme } from '@material-ui/core';
import shadows from './shadows';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3c44b1'
    },
    grey: {
      300: '#fefefe',
      A100: '#f8f9ff'
    },
    secondary: {
      main: '#4191ff'
    },
    error: {
      main: '#f83245'
    },
    success: {
      main: '#1bc943'
    },
    info: {
      main: '#11c5db'
    },
    warning: {
      main: '#f4772e'
    },
    contrastThreshold: 3,
    tonalOffset: 0.1
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1100,
      xl: 1381
    }
  },
  shape: {
    borderRadius: 0.2
  },
  overrides: {
    MuiTab: {
      root: {
        fontWeight: 'bold'
      }
    },
    MuiButton: {
      sizeSmall: {
        padding: '6px 20px',
        fontSize: 14
      },
      outlinedSizeSmall: {
        padding: '6px 20px',
        fontSize: 14
      },
      textSizeSmall: {
        padding: '6px 20px',
        fontSize: 14
      },
      outlined: {
        padding: '10px 22px',
        fontSize: 14
      },
      text: {
        padding: '10px 22px',
        fontSize: 14
      },

      sizeLarge: {
        padding: '16px 28px',
        fontSize: 16
      },
      outlinedSizeLarge: {
        padding: '16px 28px',
        fontSize: 16
      },
      textSizeLarge: {
        padding: '16px 28px',
        fontSize: 16
      },

      root: {
        textTransform: 'none',
        fontWeight: 'normal',
        padding: '10px 22px',
        fontSize: 14
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#070919',
        padding: '8px 16px',
        fontSize: '13px'
      },
      arrow: {
        color: '#070919'
      }
    }
  },
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    fontSize: 14
  },
  shadows
});

export default MuiTheme;
