"use client";

import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import type { NewsItem } from "@/lib/news";
import { useWindowType } from "@/hooks/use-window-type";
import NewsCard from "@/components/ui/internal/news/news-card";
import FullNewsCard from "@/components/ui/internal/news/full-news-card";
import NewsDisplayControl from "@/components/ui/internal/news/display-control/news-display-control";
import Card from "@/components/ui/internal/card";
import { useAtom } from "jotai";
import {
  newsFilterCheckedItemsAtom,
  newsFilterLabelsAtom,
  sortTypeAtom,
} from "@/atoms/atoms";
import Loading from "@/components/ui/internal/news/loading";
import PageTitle from "@/components/ui/internal/pageTitle";
import AnimatedCard from "@/components/ui/internal/animatedCard";

export default function NewsListClient({ allNews }: { allNews: NewsItem[] }) {
  const { isDesktop } = useWindowType();
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedItems] = useAtom(newsFilterCheckedItemsAtom);
  const [filterItems] = useAtom(newsFilterLabelsAtom);
  const [isMounted, setIsMounted] = useState(false);
  const [sortType] = useAtom(sortTypeAtom);
  const selectedTags = filterItems.filter((_, index) => checkedItems[index]);

  const filteredAndSortedNews = allNews
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTags.includes("All") ||
        item.tags.some((tag) => selectedTags.includes(tag));

      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      switch (sortType) {
        case "newest":
          return dateB.getTime() - dateA.getTime();
        case "oldest":
          return dateA.getTime() - dateB.getTime();
        case "alpha":
          return a.title.localeCompare(b.title);
        case "reverseAlpha":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  useEffect(() => {
    localStorage.setItem("newsCounter", String(filteredAndSortedNews.length));
  }, [filteredAndSortedNews]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loading />;

  return (
    <Flex flexDirection="column" paddingBottom={0} gap={"var(--global-spacing)"}>
      <Flex flexDirection="column" justifyContent="center">
        <PageTitle title="News" />
        <AnimatedCard>
          <Text textAlign="center" fontSize="1.3rem">
            Discover the latest news about us!
          </Text>
        </AnimatedCard>
      </Flex>

      {/* Highlighted News */}
      <AnimatedCard>
        <Flex flexDirection={"column"} gap={"var(--global-spacing)"}>
          {allNews.map((newsItem) =>
            newsItem.highlightedItem ? (
              isDesktop ? (
                <FullNewsCard key={newsItem.slug} newsObject={newsItem} />
              ) : (
                <NewsCard key={newsItem.slug} newsObject={newsItem} />
              )
            ) : null
          )}
        </Flex>
      </AnimatedCard>

      <AnimatedCard>
        <NewsDisplayControl onSearch={setSearchQuery} />
      </AnimatedCard>

      {filteredAndSortedNews.length > 0 ? (
        <Flex flexDirection="column" gap="var(--global-spacing)">
          <SimpleGrid
            columns={isDesktop ? 2 : 1}
            paddingX={isDesktop ? 20 : "0px"}
            width="full"
            gap="var(--global-spacing)"
          >
            {filteredAndSortedNews.map((newsItem) => (
              <NewsCard key={newsItem.slug} newsObject={newsItem} />
            ))}
          </SimpleGrid>
        </Flex>
      ) : (
        <Card>
          <Text fontSize={"2xl"} color={"neutral-1"}>
            No news Found!
          </Text>
        </Card>
      )}
    </Flex>
  );
}
