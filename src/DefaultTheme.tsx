import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#FF8C42', // Custom primary color (Orange)
      light: '#FFB070', // Optional: lighter shade of primary
      dark: '#C65E00',  // Optional: darker shade of primary
      contrastText: '#FFFFFF', // White text on primary color
    },
    secondary: {
      main: '#9c27b0', // Default secondary color (Purple)
    },
    error: {
      main: '#d32f2f', // Default error color (Red)
    },
    warning: {
      main: '#ffa726', // Default warning color (Orange)
    },
    info: {
      main: '#0288d1', // Default info color (Blue)
    },
    success: {
      main: '#2e7d32', // Default success color (Green)
    },
    background: {
      default: '#f5f5f5', // Light gray background for the page
      paper: '#ffffff',   // White background for paper components
    },
    text: {
      primary: '#333333', // Dark gray text for primary content
      secondary: '#666666', // Lighter gray for secondary text
    },
  },
  typography: {
    allVariants: {
      fontFamily: '"Noto Sans Hebrew", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h1: {
      fontFamily: '"Noto Sans Hebrew", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Noto Sans Hebrew", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Noto Sans Hebrew", "Roboto", "Helvetica", "Arial", sans-serif',
      textTransform: 'none', // Disable uppercase for buttons
      fontSize: '1rem', // Default font size for buttons
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transform: 'scaleX(-1)', // Prevent all icons from flipping globally
          marginRight: "0.5rem"
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none', // Disable uppercase for buttons globally
          '&:hover': {
            backgroundColor: '#ffffff', // Darker primary color
            border: '1px solid #FF8C42', // Border on hover
            color: "#FF8C42",
            
          },
        },
      },
    },
  },
});

export default theme;
