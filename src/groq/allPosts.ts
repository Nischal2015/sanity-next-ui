export const ALL_POSTS = `
  *[_type == "post"] {
    _id,title,slug,
      author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }
`;
