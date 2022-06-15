import React from 'react';
import { PostProps } from './Posts.d';
import Card from '../UI/Card';

const Posts = ({ posts }: { posts: PostProps[] }) => {
  return (
    <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:p-6 md:gap-6 md:p-4">
      {posts.map((post) => (
        <Card post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
