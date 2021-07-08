import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Eiffel Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-blue-500'>
        <p className='mt-3 text-2xl'>Eiffel Admin</p>
      </div>
    </div>
  );
}
