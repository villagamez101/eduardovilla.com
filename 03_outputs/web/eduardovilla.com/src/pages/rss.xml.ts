import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => data.lang === "es" && !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Eduardo Villa — Blog",
    description: "Escritos sobre sistemas, diseño, minimalismo y aprendizaje.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.data.slug || post.id.replace(/\.md$/, "")}/`,
    })),
  });
}
