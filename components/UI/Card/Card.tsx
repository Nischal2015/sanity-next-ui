import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../../libs';
import { PostProps } from '../../Posts';

const Card = ({ post }: { post: PostProps }) => {
  const { author, slug, description, mainImage, title } = post;
  return (
    <Link href={`/posts/${slug.current}`}>
      <div className="border border-gray-300 rounded-md group cursor-pointer overflow-hidden">
        <Image
          className="object-cover group-hover:scale-105 transition-all"
          src={urlFor(mainImage).url()}
          height="60"
          width="100%"
          layout="responsive"
          alt="Blog Cover Image"
          priority
        />
        <div className="flex items-center justify-between gap-5 px-3 pt-4 pb-5">
          <div>
            <p>{title}</p>
            <p>
              {description} by {author.name}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(author.image).url()}
            alt="Author avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
