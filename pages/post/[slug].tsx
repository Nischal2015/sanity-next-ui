import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import {
  CommentList,
  CommentSubmit,
  Form,
  PostSlugProps,
  SinglePostProps,
} from '../../components';
import { SanityClient, urlFor } from '../../libs';
import { POSTS_WITH_SLUG, SINGLE_POST } from '../../src/groq';

interface PostProps {
  post: SinglePostProps;
}

interface PortableTextImageProps {
  value: {
    asset: {
      _ref: string;
    };
  };
}

interface PortableStringProps {
  children: string;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const {
    _id,
    mainImage,
    title,
    description,
    author,
    body,
    _createdAt,
    comments,
  } = post;
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  // This components provides the type for image in portable text format
  const myPortableTextComponents = {
    types: {
      image: ({ value }: PortableTextImageProps) => (
        <div className="mb-8 mt-2">
          <Image
            src={urlFor(value).url()}
            height="60"
            width="100%"
            layout="responsive"
            alt="Image in blog"
            priority
          />
        </div>
      ),
    },
    block: {
      normal: ({ children }: PortableStringProps) => (
        <p className="mb-3 text-gray-600 text-lg leading-7">{children}</p>
      ),
      h2: ({ children }: PortableStringProps) => (
        <h2 className="text-2xl mb-2 font-semibold">{children}</h2>
      ),
    },
    marks: {
      strong: ({ children }: PortableStringProps) => (
        <strong className="text-gray-700">{children}</strong>
      ),
    },
  } as Partial<PortableTextReactComponents>;

  return (
    <main>
      <div className="w-full h-52 relative mt-16">
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
        <div className="mt-5">
          <PortableText value={body} components={myPortableTextComponents} />
        </div>
      </article>

      <hr className="max-w-2xl my-5 mx-auto border-yellow-500" />
      {submitSuccessful ? (
        <CommentSubmit />
      ) : (
        <Form id={_id} setSubmitSuccessful={setSubmitSuccessful} />
      )}
      <CommentList comments={comments} />
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
  const post: SinglePostProps[] = await SanityClient.fetch(SINGLE_POST, {
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
