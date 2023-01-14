import { makeStyles } from 'tss-react/mui';

import ThemeSelector from '../theme/theme-selector';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: '55px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: '0',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '1.3rem',
        height: '65px',
      },
    },
    title: {
      width: '63px',
      height: '100%',
      padding: '0.2rem 0.4rem 0 0.4rem',
      color: `${theme.palette.common.text_switch}`,
      fontSize: '1.9rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '0 0.4rem 0.2rem 0.4rem',
      },
    },
  };
});

function Header() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>calc</div>
      <ThemeSelector />
    </div>
  );
}

export default Header;
