import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-2 max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
};

export default Home;
