import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.REACT_APP_SERVICE_DOMAIN,
  apiKey: process.env.REACT_APP_API_KEY,
  // serviceDomain: "ishikawatokyo-blog",
  // apiKey: "Bx5ECEy8MRGZD2NawEWwWm9NwLaA1zOQA5j2",
});

export const getBlogs = (queries) => {
  // getでblogを全部取得する
  // queriesはtitleやcontentなどを取得する.
  return client.get({ endpoint: "blogs", queries });
};
