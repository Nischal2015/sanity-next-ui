import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  id: string;
  name: string;
  email: string;
  comment: string;
}

const Form = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col p-5 mx-auto max-w-2xl gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h3 className="text-sm text-yellow-500">Enjoyed this article</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="py-1 mt-2" />
      </div>

      <input type="hidden" value={id} {...register('id')} />

      <label htmlFor="name" className="flex flex-col gap-1">
        <span className="text-gray-700">Name</span>
        <input
          {...register('name', { required: true })}
          className="p-2 border border-gray-400 rounded shadow focus:outline-gray-500"
          placeholder="John Doe"
          id="name"
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-1">
        <span className="text-gray-700">Email</span>
        <input
          {...register('email', { required: true })}
          className="p-2 border border-gray-400 rounded shadow focus:outline-gray-500"
          placeholder="example@example.com"
          type="email"
          id="email"
        />
      </label>
      <label htmlFor="comment" className="flex flex-col gap-1">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register('comment', { required: true })}
          className="p-2 border border-gray-400 rounded shadow focus:outline-gray-500"
          placeholder="Eg. It was nice blog post"
          id="comment"
          rows={8}
        />
      </label>
      <div className="text-red-600 flex flex-col gap-2 py-5">
        {errors.name && <span>- The Name field is required</span>}
        {errors.email && <span>- The Email field is required</span>}
        {errors.comment && <span>- The Comment field is required</span>}
      </div>
      <input
        type="submit"
        className="bg-yellow-500 text-white rounded p-2 hover:bg-yellow-600 transition-all cursor-pointer font-bold"
      />
    </form>
  );
};

export default Form;
