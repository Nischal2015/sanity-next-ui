import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { PostSlugProps, PostsProps } from '../../components';
import { SanityClient, urlFor } from '../../libs';
import { POSTS_WITH_SLUG, SINGLE_POST } from '../../src/groq';

interface PostProps {
  post: PostsProps;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const { mainImage, title, description, author, _createdAt } = post;
  return (
    <main>
      <div className="w-full h-52 relative">
        <Image
          src={urlFor(mainImage).url()}
          layout="fill"
          objectFit="cover"
          alt="Main Image"
          priority
        />
      </div>
      <article className="max-w-4xl mx-auto p-5">
        <h1 className="text-4xl mt-10 mb-3">{title}</h1>
        <h2 className="text-xl text-gray-600 mb-2">{description}</h2>
        <div className="flex items-center gap-2">
          <Image
            src={urlFor(author.image).url()}
            height="36"
            width="36"
            objectFit="contain"
            alt="Author Image"
            className="rounded-full my-auto"
          />
          <p className="text-gray-600 text-sm">
            Blog post by <span className="text-green-600">{author.name}</span> -
            Published at{' '}
            <span className="text-green-600">
              {new Date(_createdAt).toLocaleDateString()}
            </span>
          </p>
        </div>
      </article>
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
    revalidate: 60,
  };
};
