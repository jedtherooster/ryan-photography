import sanityClient from '@sanity/client';

// TODO: Replace these placeholders with your actual Sanity project details
// after you create a Sanity.io project and dataset.
export const client = sanityClient({
  projectId: 'yourProjectId', // e.g. "abcd1234"
  dataset: 'production', // or your chosen dataset name
  apiVersion: '2025-01-01', // use a fixed date
  useCdn: true,
});

export const imageUrlFor = (source) => {
  // We can later enhance this using @sanity/image-url
  return source?.asset?.url || '';
};


