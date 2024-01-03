import { createApi } from 'unsplash-js';
const unsplash = createApi({accessKey: process.env.UNSPLASH_ACCESS_KEY}).photos

const t = await unsplash.get(
  { photoId: 'round-silver-colored-smartwatch-bokeh-photography-E4kKGI4oGaU' },
  { headers: { 'X-Custom-Header-2': 'bar' } },
);

console.log(t.response.urls.regular)