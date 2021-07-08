import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import HeaderLayout from '@/components/Layout/HeaderLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Admin Eiffel</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </>
  );
}

export default MyApp;
