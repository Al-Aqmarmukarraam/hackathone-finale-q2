import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'j3et7q7y',
  dataset: 'production', 
  useCdn: false,
  token:"skIoQQk7K7TepVFVFJUN7hHzCfoERlcCAlcrNJw1uSjxuwQa1uRpBEhwaVP6QbWluEQm21Kp6x5BsQQFBWF96ZstD292hNZe6mAZDpwxj0QmSQWMjzLeFiDc3T518IqYUmbYboqMBfjSKDG2Re3lnjEcJG8N6jrYPYvhoynrhCQupw79JCLY",
  apiVersion: '2023-01-01',
});

export default client;