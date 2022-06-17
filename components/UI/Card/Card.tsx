import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../../libs';
import { PostsProps } from '../../Posts';

const Card = ({ post }: { post: PostsProps }) => {
  const { author, slug, description, mainImage, title } = post;
  return (
    <Link href={`/post/${slug.current}`}>
      <div className="border border-gray-300 rounded-md group cursor-pointer overflow-hidden">
        <Image
          className="object-cover group-hover:scale-105 transition-all"
          src={urlFor(mainImage).url()}
          height="60"
          width="100%"
          alt="Blog Cover Image"
        />
        <div className="flex items-center justify-between gap-5 px-3 pt-4 pb-5">
          <div>
            <p className="text-lg font-bold">{title}</p>
            <p className="text-xs">
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
