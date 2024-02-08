import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  
    palette: {
        mode: 'light',
        primary: {
          main: '#0c3f5c',
        },
        secondary: {
          main: '#ededef',
        },
        
      },
      typography:{
        fontFamily:[
           'Raleway', 
           'sans-serif',
        ].join(','),
      }
});

export default theme;
