import imageUrlBuilder from '@sanity/image-url';
import SanityClient from '@sanity/client';

export const config = {
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production') as string,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: '2022-06-14',
  useCdn: process.env.NODE_ENV === 'production',
};

export default SanityClient(config);

export const urlFor = (source: Record<string, unknown>) =>
  imageUrlBuilder(config).image(source);
