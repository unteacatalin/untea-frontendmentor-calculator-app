import { useState, useContext } from 'react';
import { styled } from '@mui/system';
import SliderUnstyled, {
  sliderUnstyledClasses,
} from '@mui/base/SliderUnstyled';
import { makeStyles } from 'tss-react/mui';

import SelectedTheme from '../../store/selected-theme';

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
];

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
    height: 20px;
    width: 45px;
    padding: 16px 0;
    display: inline-block;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
  
    &:hover {
      opacity: 1;
    }
    
    & .${sliderUnstyledClasses.rail} {
      display: block;
      position: absolute;
      width: 69px;
      height: 24px;
      border-radius: 15px;
      top: 6px;
      left: -10px;
      background-color: ${theme.palette.secondary.main};
      opacity: 1;
    }
    
    & .${sliderUnstyledClasses.thumb} {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-left: -6px;
      margin-top: -6px;
      box-sizing: border-box;
      border-radius: 50%;
      outline: 0;
      border: 3px solid ${theme.palette.common.keys3};
      background-color: ${theme.palette.common.keys3};
    }
      
    & .${sliderUnstyledClasses.markLabel} {
      font-size: 12px;
      color: ${theme.palette.common.text_switch};
      position: absolute;
      top: ${theme.breakpoints.down('sm') ? '-18px' : '-18px'};
      transform: translateX(-50%);
      margin-top: 8px;
      [theme.breakpoints.down('sm')]: {
        top: 10px;
      },      
    }
  `
);

const useStyles = makeStyles()((theme) => {
  return {
    sliderContainer: {
      width: '140px',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    sliderTitle: {
      color: `${theme.palette.common.text_switch}`,
      fontSize: '0.7rem',
      letterSpacing: '2px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '0.1rem',
      paddingTop: '0.9rem',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '0.8rem',
        fontSize: '0.6rem',
        letterSpacing: '3px',
      },
    },
    sliderWrapper: {
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingLeft: '2.3rem',
      paddingBottom: '0.5rem',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: '0.2rem',
      },
    },
  };
});

function ThemeSelector() {
  const selectedCtx = useContext(SelectedTheme);
  const [themeNo, setThemeNo] = useState(selectedCtx?.theme?.no || 1);

  function handleChange(event, newValue) {
    selectedCtx.postTheme({ no: newValue[0] });
    setThemeNo(newValue[0]);
  }

  const { classes } = useStyles();

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.sliderTitle}>THEME</div>
      <div className={classes.sliderWrapper}>
        <StyledSlider
          orientation='horizontal'
          getAriaValueText={valuetext}
          defaultValue={[themeNo]}
          step={1}
          min={1}
          max={3}
          marks={marks}
          valueLabelDisplay='off'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ThemeSelector;
