import '@/styles/globals.css';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import Providers from "@/src/redux/Provider";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <main className={roboto.variable}>
          <Providers>
          <Component {...pageProps} />
          </Providers>
        </main>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
