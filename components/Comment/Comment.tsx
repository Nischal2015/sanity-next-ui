import { CommentProps } from '../Posts';

export const Comment = ({ comment }: { comment: CommentProps }) => {
  const { name, comment: PostComment } = comment;
  return (
    <p>
      <span className="text-yellow-500">{name}: </span>
      {PostComment}
    </p>
  );
};
