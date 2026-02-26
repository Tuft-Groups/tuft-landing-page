const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://tuft-core-wq7gvvjxpa-el.a.run.app";

const withBase = (path: string) => {
  return `${baseUrl.replace(/\/+$/, "")}${path}`;
};

export const API_URLS = {
  BLOGS: withBase("/blogs"),
  BLOG_BY_SLUG: (slug: string) => withBase(`/blogs/slug/${slug}`),
} as const;
