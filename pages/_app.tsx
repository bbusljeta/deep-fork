import type { AppProps } from 'next/app';
import { globalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles.global}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
