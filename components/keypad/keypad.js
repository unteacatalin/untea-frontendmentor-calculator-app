import { makeStyles } from 'tss-react/mui';

import NumberBtn from '../buttons/number-btn';
import DeleteBtn from '../buttons/delete-btn';
import OperandBtn from '../buttons/ops-btn';
import ResetBtn from '../buttons/reset-btn';
import EqualBtn from '../buttons/equal-btn';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      height: 'calc(710px - 55px - 2 * 0.7rem - 127px - 2 * 0.7rem - 0.1rem)',
      padding: '2rem 1.8rem',
      backgroundColor: `${theme.palette.secondary.main}`,
      borderRadius: '10px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
      rowGap: '20px',
      columnGap: '20px',
      //   gridTemplateAreas: [
      //     'no no no del',
      //     'no no no no',
      //     'no no no no',
      //     'no no no no',
      //     'res res eq eq',
      //   ],
      [theme.breakpoints.down('sm')]: {
        height: 'calc(735px - 65px - 2 * 0.8rem - 200px - 2 * 0.8rem - 0.1rem)',
        rowGap: '14px',
        columnGap: '14px',
        padding: '1.5rem 1.4rem',
      },
    },
    quarterRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      columnGap: '20px',
      [theme.breakpoints.down('sm')]: {
        columnGap: '14px',
      },
    },
    // number: {
    //   gridArea: 'no',
    // },
    // delete: {
    //   gridArea: 'del',
    // },
    // reset: {
    //   gridArea: 'res',
    // },
    // equal: {
    //   gridArea: 'eq',
    // },
  };
});

function Keypad() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label={7} />
        </div>
        <div>
          <NumberBtn label={8} />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label={9} />
        </div>
        <div>
          <DeleteBtn label='DEL' />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label={4} />
        </div>
        <div>
          <NumberBtn label={5} />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label={6} />
        </div>
        <div>
          <OperandBtn label='+' />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label={1} />
        </div>
        <div>
          <NumberBtn label={2} />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label={3} />
        </div>
        <div>
          <OperandBtn label='-' />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label='.' />
        </div>
        <div>
          <NumberBtn label={0} />
        </div>
      </div>
      <div className={classes.quarterRow}>
        <div>
          <NumberBtn label='/' />
        </div>
        <div>
          <OperandBtn label='x' />
        </div>
      </div>
      <div>
        <ResetBtn label='RESET' />
      </div>
      <div>
        <EqualBtn label='=' />
      </div>
    </div>
  );
}

export default Keypad;
