import { createTheme } from '@mui/material/styles';

/* BACKGROUNDS */

/* Very dark violet (main background): hsl(268, 75%, 9%) */
/* Very dark violet (toggle background, keypad background, screen background): hsl(268, 71%, 12%)   */

/* KEYS */

/* Dark violet (key background): hsl(281, 89%, 26%) */
/* Vivid magenta (key shadow): hsl(285, 91%, 52%) */
/* Pure cyan (key background, toggle): hsl(176, 100%, 44%) */
/* Soft cyan (key shadow): hsl(177, 92%, 70%) */
/* Very dark violet (key background): hsl(268, 47%, 21%) */
/* Dark magenta (key shadow): hsl(290, 70%, 36%)   */

/* TEXT */

/* Light yellow: hsl(52, 100%, 62%) */
/* Very dark blue: hsl(198, 20%, 13%) */
/* White (text): hsl(0, 0%, 100%)   */

export default createTheme({
  palette: {
    common: {
      bg1: 'hsl(268, 71%, 12%)',
      keys1: 'hsl(281, 89%, 26%)',
      keys2: 'hsl(290, 70%, 36%)',
      keys3: 'hsl(176, 100%, 44%)',
      keys4: 'hsl(177, 92%, 70%)',
      keys5: 'hsl(268, 47%, 21%)',
      keys6: 'hsl(290, 70%, 36%)',
      text_numbers: 'hsl(52, 100%, 62%)',
      text_switch: 'hsl(52, 100%, 62%)',
      text_del: 'hsl(0, 0%, 100%)',
      text_reset: 'hsl(0, 0%, 100%)',
      text_eq: 'hsl(198, 20%, 13%)',
      text_src: 'hsl(52, 100%, 62%)',
    },
    primary: {
      main: 'hsl(268, 71%, 12%)',
    },
    secondary: {
      main: 'hsl(268, 75%, 9%)',
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
