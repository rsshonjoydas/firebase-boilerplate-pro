/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '../AuthProvider';
import { wrapper } from '../redux/store';
import '../styles/index.scss';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  const getLayout = Component.getLayout ?? ((page) => page);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return getLayout(
    <AuthProvider>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
        <ToastContainer theme='colored' />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default wrapper.withRedux(MyApp);
