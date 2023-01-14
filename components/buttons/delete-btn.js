import { useContext } from 'react';
import { makeStyles } from 'tss-react/mui';

import SelectedTheme from '../../store/selected-theme';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: 'calc(100% - 0.2rem)',
      height: 'calc(100% - 0.6rem)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${theme.palette.common.keys1}`,
      boxShadow: `0 5px 0 ${theme.palette.common.keys2}`,
      fontSize: '1.8rem',
      color: `${theme.palette.common.text_del}`,
      borderRadius: '10px',
      margin: '0.2rem 0.2rem 0.4rem 0',
      padding: '0.4rem 0 0 0.2rem',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        margin: '0',
        padding: '0.2rem 0 0 0',
        width: '100%',
        height: '97%',
        fontSize: '1.2rem',
        borderRadius: '5px',
      },
    },
  };
});

function DeleteBtn(props) {
  const { label } = props;
  const selectedCtx = useContext(SelectedTheme);

  const { classes } = useStyles();

  function handleClick() {
    const val = selectedCtx?.screenVal?.val || '0';
    selectedCtx.postScreen({
      val: val.substring(0, val.length - 1),
    });
  }

  return (
    <div className={classes.container} onClick={() => handleClick()}>
      {label}
    </div>
  );
}

export default DeleteBtn;
