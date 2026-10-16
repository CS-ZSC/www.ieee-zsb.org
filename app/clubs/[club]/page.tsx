import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";
import { clubsContent } from "@/data/clubs";
import ChapterClient from "@/components/ui/internal/chapters/chapter-client";

export async function generateStaticParams() {
  return clubsContent.map(({ slug }) => ({ club: slug }));
}

export default async function Club({
  params,
}: {
  params: Promise<{ club: string }>;
}) {
  const { club } = await params;

  const clubData = clubsContent.find((item) => item.slug === club.toLowerCase());
  if (!clubData) notFound();

  const filteredNews = getAllNews().filter((item) =>
    item.tags
      .map((t) => t.toUpperCase())
      .includes(clubData.short_name.toUpperCase())
  );

  return <ChapterClient chapterData={clubData} filteredNews={filteredNews} />;
}
