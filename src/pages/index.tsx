import Head from 'next/head';
import Header from '@/components/Layout/Header';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Eiffel Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-blue-500'>
        <p className='mt-3 text-base'>Eiffel Admin</p>
      </div>
    </div>
  );
}
