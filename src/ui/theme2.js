import { createTheme } from '@mui/material/styles';

/* BACKGROUNDS */

/* Light gray (main background): hsl(0, 0%, 90%) */
/* Grayish red (toggle background, keypad background): hsl(0, 5%, 81%) */
/* Very light gray (screen background): hsl(0, 0%, 93%)   */

/* KEYS */

/* Dark moderate cyan (key background): hsl(185, 42%, 37%) */
/* Very dark cyan (key shadow): hsl(185, 58%, 25%) */
/* Dark orange (key shadow): hsl(25, 99%, 27%) */
/* Orange (key background, toggle): hsl(25, 98%, 40%) */
/* Light grayish yellow (key background): hsl(45, 7%, 89%) */
/* Dark grayish orange (key shadow): hsl(35, 11%, 61%)   */

/* TEXT */

/* Very dark grayish yellow: hsl(60, 10%, 19%) */
/* White (text): hsl(0, 0%, 100%) */

export default createTheme({
  palette: {
    common: {
      bg1: 'hsl(0, 5%, 81%)',
      keys1: 'hsl(185, 42%, 37%)',
      keys2: 'hsl(185, 58%, 25%)',
      keys3: 'hsl(25, 98%, 40%)',
      keys4: 'hsl(25, 99%, 27%)',
      keys5: 'hsl(45, 7%, 89%)',
      keys6: 'hsl(35, 11%, 61%)',
      text_numbers: 'hsl(60, 10%, 19%)',
      text_switch: 'hsl(60, 10%, 19%)',
      text_del: 'hsl(0, 0%, 100%)',
      text_reset: 'hsl(0, 0%, 100%)',
      text_eq: 'hsl(0, 0%, 100%)',
      text_src: 'hsl(60, 10%, 19%)',
    },
    primary: {
      main: 'hsl(0, 0%, 90%)',
    },
    secondary: {
      main: 'hsl(0, 5%, 81%)',
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
