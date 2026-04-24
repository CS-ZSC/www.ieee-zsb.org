import PageWrapper from "@/components/ui/internal/page-wrapper";
import { getAllNews } from "@/lib/news";
import NewsListClient from "@/components/ui/internal/news/news-list-client";

export default function Page() {
  const allNews = getAllNews();
  return (
    <PageWrapper>
      <NewsListClient allNews={allNews} />
    </PageWrapper>
  );
}
