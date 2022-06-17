const Form = () => {
  return (
    <form className="flex flex-col p-5 mx-auto max-w-2xl gap-4">
      <div>
        <h3 className="text-sm text-yellow-500">Enjoyed this article</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="py-1 mt-2" />
      </div>

      <label htmlFor="name" className="flex flex-col gap-1">
        <span className="text-gray-700">Name</span>
        <input
          className="p-2 border border-gray-400 rounded shadow focus:outline-gray-500"
          placeholder="John Doe"
          type="text"
          id="name"
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-1">
        <span className="text-gray-700">Email</span>
        <input
          className="p-2 border border-gray-400 rounded shadow focus:outline-gray-500"
          placeholder="example@example.com"
          type="email"
          id="email"
        />
      </label>
      <label htmlFor="comment" className="flex flex-col gap-1">
        <span className="text-gray-700">Comment</span>
        <textarea
          className="p-2 border border-gray-400 rounded shadow focus:outline-gray-500"
          placeholder="Eg. It was nice blog post"
          id="comment"
          rows={8}
        />
      </label>
    </form>
  );
};

export default Form;
