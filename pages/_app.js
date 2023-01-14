import '../styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { SelectedThemeProvider } from '../store/selected-theme';

import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <SelectedThemeProvider>
        <Component {...pageProps} />
      </SelectedThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
