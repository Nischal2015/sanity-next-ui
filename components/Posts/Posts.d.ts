import { TypedObject } from '@portabletext/types';
export interface PostSlugProps {
  _id: string;
  slug: {
    current: string;
  };
}

export interface PostsProps extends PostSlugProps {
  _createdAt: string;
  author: {
    image: {
      asset: {
        _ref: string;
      };
    };
    name: string;
  };
  description: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  title: string;
}

export interface CommentProps {
  _createdAt: string;
  _id: string;
  rev: string;
  _type: string;
  _updatedAt: string;
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
}

export interface SinglePostProps extends PostsProps {
  body: TypedObject | TypedObject[];
  comments: CommentProps[];
}
