export interface PostProps {
  _createdAt: string;
  _id: string;
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
  slug: {
    current: string;
  };
  title: string;
}
