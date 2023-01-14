import { useContext } from 'react';
import { makeStyles } from 'tss-react/mui';

import SelectedTheme from '../../store/selected-theme';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: 'calc(100% - 0.3rem)',
      height: 'calc(100% - 0.6rem)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${theme.palette.common.keys5}`,
      boxShadow: `0 5px 0 ${theme.palette.common.keys6}`,
      fontSize: '2.5rem',
      color: `${theme.palette.common.text_numbers}`,
      borderRadius: '10px',
      margin: '0.2rem 0.3rem 0.4rem 0',
      padding: '0.6rem 0 0 0.2rem',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        margin: '0',
        padding: '0.5rem 0 0 0',
        width: '100%',
        height: '95%',
        fontSize: '2rem',
        borderRadius: '5px',
      },
    },
  };
});

function NumberBtn(props) {
  const { label } = props;
  const selectedCtx = useContext(SelectedTheme);

  const { classes } = useStyles();

  function handleClick(label) {
    const val = selectedCtx?.screenVal?.val || '0';
    selectedCtx.postScreen({
      val: val.concat('', label),
    });
  }

  return (
    <div className={classes.container} onClick={() => handleClick(label)}>
      {label}
    </div>
  );
}

export default NumberBtn;
