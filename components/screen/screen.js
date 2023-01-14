import { useState, useContext, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField';

import SelectedTheme from '../../store/selected-theme';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: `${theme.palette.secondary.main}`,
      width: '100%',
      //   border: '1px solid #fff',
      height: '127px',
      display: 'flex',
      justifyContent: 'center',
      padding: '0.6rem 2rem 0 2rem',
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        height: '89px',
        padding: '0.2rem 1.5rem 0 1.5rem',
      },
    },
    resize: {
      fontSize: '3.6rem',
      fontWeight: '700',
      fontFamily: 'League Spartan',
      color: `${theme.palette.common.text_src}`,
      letterSpacing: '-0.1rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.4rem',
        letterSpacing: '0',
      },
    },
  };
});

function Screen() {
  const selectedCtx = useContext(SelectedTheme);
  const [enteredValue, setEnteredValue] = useState(
    selectedCtx?.screenVal?.val || '0'
  );
  const { classes } = useStyles();

  useEffect(() => {
    const updateState = () => {
      const newVal = selectedCtx?.screenVal?.val || '0';
      setEnteredValue(newVal);
    };
    updateState();
  }, [selectedCtx?.screenVal?.val]);

  return (
    <TextField
      className={classes.container}
      fullWidth
      InputProps={{
        disableUnderline: true,
        classes: { input: classes.resize },
        sx: {
          '& input': {
            textAlign: 'right',
          },
        },
        readOnly: true,
      }}
      value={enteredValue}
      variant='standard'
    ></TextField>
  );
}

export default Screen;
