import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/news");

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  mainPhoto: string;
  homeItem: boolean;
  highlightedItem: boolean;
  content: string;
}

export function getAllNews(): NewsItem[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      author: data.author as string,
      tags: (data.tags as string[]) ?? [],
      mainPhoto: data.mainPhoto as string,
      homeItem: (data.homeItem as boolean) ?? false,
      highlightedItem: (data.highlightedItem as boolean) ?? false,
      content,
    };
  });
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    author: data.author as string,
    tags: (data.tags as string[]) ?? [],
    mainPhoto: data.mainPhoto as string,
    homeItem: (data.homeItem as boolean) ?? false,
    highlightedItem: (data.highlightedItem as boolean) ?? false,
    content,
  };
}
