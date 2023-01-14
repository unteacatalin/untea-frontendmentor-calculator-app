import { createTheme } from '@mui/material/styles';

/* BACKGROUNDS */

/* Very dark desaturated blue (main background): hsl(222, 26%, 31%) */
/* Very dark desaturated blue (toggle background, keypad background): hsl(223, 31%, 20%) */
/* Very dark desaturated blue (screen background): hsl(224, 36%, 15%) */

/* KEYS */

/* Desaturated dark blue (key background): hsl(225, 21%, 49%) */
/* Desaturated dark blue (key shadow): hsl(224, 28%, 35%) */
/* Red (key background, toggle): hsl(6, 63%, 50%) */
/* Dark red (key shadow): hsl(6, 70%, 34%) */
/* Light grayish orange (key background): hsl(30, 25%, 89%) */
/* Grayish orange (key shadow): hsl(28, 16%, 65%) */

/* TEXT */

/* Very dark grayish blue: hsl(221, 14%, 31%) */
/* White: hsl(0, 0%, 100%) */

export default createTheme({
  palette: {
    common: {
      bg1: 'hsl(223, 31%, 20%)',
      keys11: 'hsl(225, 21%, 59%)',
      keys1: 'hsl(225, 21%, 49%)',
      keys2: 'hsl(224, 28%, 35%)',
      keys31: 'hsl(6, 63%, 60%)',
      keys3: 'hsl(6, 63%, 50%)',
      keys4: 'hsl(6, 70%, 34%)',
      keys51: 'hsl(30, 23%, 95%)',
      keys5: 'hsl(30, 25%, 89%)',
      keys6: 'hsl(28, 16%, 65%)',
      text_numbers: 'hsl(221, 14%, 31%)',
      text_switch: 'hsl(0, 0%, 100%)',
      text_del: 'hsl(0, 0%, 100%)',
      text_reset: 'hsl(0, 0%, 100%)',
      text_eq: 'hsl(0, 0%, 100%)',
      text_src: 'hsl(0, 0%, 100%)',
    },
    primary: {
      main: 'hsl(222, 26%, 31%)',
    },
    secondary: {
      main: 'hsl(224, 36%, 15%)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
