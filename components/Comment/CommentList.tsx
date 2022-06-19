import { CommentProps } from '../Posts';
import { Comment } from './Comment';

const CommentList = ({ comments }: { comments: CommentProps[] }) => (
  <div className="flex flex-col max-w-2xl mx-auto py-5 px-4 shadow shadow-yellow-500 mb-10">
    <h3 className="text-4xl mb-2">Comments</h3>
    <hr className="pb-2" />
    <div className="flex flex-col gap-2">
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  </div>
);

export default CommentList;
