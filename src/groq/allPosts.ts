export const ALL_POSTS = `
  *[_type == "post"] {
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }
`;

export const POSTS_WITH_SLUG = `
  *[_type == "post"] {
    _id,
    slug {
      current
    }
  }
`;

export const SINGLE_POST = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    _createdAt
  }
`;
