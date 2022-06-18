import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, email, comment } = JSON.parse(req.body);

  const doc = {
    _type: 'comment',
    post: {
      _type: 'reference',
      _ref: id,
    },
    name,
    email,
    comment,
  };
  try {
    await client.create(doc).then((res) => res);
    return res.status(200).json({ message: 'Comment submitted successfully' });
  } catch (errors) {
    return res.status(500).json({ message: "Couldn't submit comment" });
  }
};

export default createComment;
