import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";
import { chaptersContent } from "@/data/chapters";
import ChapterClient from "@/components/ui/internal/chapters/chapter-client";

export async function generateStaticParams() {
  return chaptersContent.map(({ slug }) => ({ chapter: slug }));
}

export default async function Chapter({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;

  const chapterData = chaptersContent.find(
    (item) => item.slug === chapter.toLowerCase()
  );
  if (!chapterData) notFound();

  const filteredNews = getAllNews().filter((item) =>
    item.tags
      .map((t) => t.toUpperCase())
      .includes(chapterData.short_name.toUpperCase())
  );

  return <ChapterClient chapterData={chapterData} filteredNews={filteredNews} />;
}
