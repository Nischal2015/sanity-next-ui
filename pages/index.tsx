import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar, PostProps, Hero, Posts } from '../components';
import { SanityClient } from '../libs';
import { ALL_POSTS } from '../src/groq';

interface Props {
  posts: PostProps[];
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log({ posts });
  return (
    <div className="min-h-screen py-2 max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const posts = await SanityClient.fetch(ALL_POSTS);

  return {
    props: {
      posts,
    },
  };
};
