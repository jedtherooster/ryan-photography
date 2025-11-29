import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'aa7h1m6p',
  dataset: 'production',
  apiVersion: '2024-01-01', // Updated to a valid API version
  useCdn: true,
});

export const imageUrlFor = (source) => {
  // We can later enhance this using @sanity/image-url
  return source?.asset?.url || '';
};


