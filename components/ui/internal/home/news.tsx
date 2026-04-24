import React from "react";
import { Carousel } from "@/components/ui/internal/carousel";
import { getAllNews } from "@/lib/news";

export default function News() {
  const newsItems = getAllNews();
  return <Carousel newsItems={newsItems} />;
}
