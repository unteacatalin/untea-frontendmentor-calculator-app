import { useContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import SelectedTheme from '../../store/selected-theme';
import Theme1 from '../../src/ui/theme1';
import Theme2 from '../../src/ui/theme2';
import Theme3 from '../../src/ui/theme3';

function TheamWrapper({ children }) {
  const selectedCtx = useContext(SelectedTheme);

  const [theme, setTheme] = useState(
    selectedCtx.theme.no === 2
      ? Theme2
      : selectedCtx.theme.no === 3
      ? Theme3
      : Theme1
  );

  useEffect(() => {
    setTheme(
      selectedCtx.theme.no === 2
        ? Theme2
        : selectedCtx.theme.no === 3
        ? Theme3
        : Theme1
    );
  }, [selectedCtx]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default TheamWrapper;
