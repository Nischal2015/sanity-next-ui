import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { PostsProps, Hero, Posts } from '../components';
import { SanityClient } from '../libs';
import { ALL_POSTS } from '../src/groq';

interface Props {
  posts: PostsProps[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="min-h-screen pb-2 max-w-7xl mx-auto">
      <Head>
        <title>Medium 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await SanityClient.fetch(ALL_POSTS);

  return {
    props: {
      posts,
    },
  };
};
