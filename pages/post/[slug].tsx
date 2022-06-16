import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Navbar, PostSlugProps, PostsProps } from '../../components';
import { SanityClient } from '../../libs';
import { POSTS_WITH_SLUG, SINGLE_POST } from '../../src/groq';

interface PostProps {
  post: PostsProps;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <main>
      <Navbar />
      {JSON.stringify(post)}
    </main>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostSlugProps[] = await SanityClient.fetch(POSTS_WITH_SLUG);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: PostsProps[] = await SanityClient.fetch(SINGLE_POST, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};
