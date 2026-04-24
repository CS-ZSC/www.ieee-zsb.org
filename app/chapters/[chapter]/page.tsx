import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";
import { chaptersData } from "@/data/chapters";
import ChapterClient from "@/components/ui/internal/chapters/chapter-client";

export async function generateStaticParams() {
  return ["cs", "pes", "ras", "wie"].map((chapter) => ({ chapter }));
}

export default async function Chapter({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;

  const chapterList = ["cs", "pes", "ras", "wie"];
  if (!chapter || !chapterList.includes(chapter.toLowerCase())) {
    notFound();
  }

  const chapterData = chaptersData.find(
    (item) => item.short_name.toLowerCase() === chapter.toLowerCase()
  );
  if (!chapterData) notFound();

  const filteredNews = getAllNews().filter((item) =>
    item.tags.map((t) => t.toUpperCase()).includes(chapter.toUpperCase())
  );

  return <ChapterClient chapterData={chapterData} filteredNews={filteredNews} />;
}
