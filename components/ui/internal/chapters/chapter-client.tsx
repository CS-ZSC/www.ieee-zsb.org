"use client";

import { Description } from "@/components/ui/internal/chapters/description";
import { HeroCard } from "@/components/ui/internal/chapters/hero-card";
import { Tracks } from "@/components/ui/internal/chapters/tracks/tracks";
import Container from "@/components/ui/internal/container";
import LeadersContainer from "@/components/ui/internal/leaders-container";
import NewsCard from "@/components/ui/internal/news/news-card";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import PageTitle from "@/components/ui/internal/pageTitle";
import type { ChapterData } from "@/data/chapters";
import type { NewsItem } from "@/lib/news";
import { useWindowType } from "@/hooks/use-window-type";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  chapterData: ChapterData;
  filteredNews: NewsItem[];
}

export default function ChapterClient({ chapterData, filteredNews }: Props) {
  const { isDesktop } = useWindowType();

  return (
    <PageWrapper>
      <Flex flexDirection={"column"} gap={12}>
        <HeroCard
          logo={chapterData.logo}
          colorScheme={chapterData.color_scheme_1}
          shortName={chapterData.short_name}
        />
        <Box w="full">
          <Description
            about={chapterData.description.about}
            mission={chapterData.description.mission}
            vision={chapterData.description.vision}
            color={chapterData.color_scheme_1}
          />
        </Box>
        {filteredNews.length > 0 && (
          <Container>
            <PageTitle title="Chapter News" />
            <Flex
              columns={isDesktop ? (filteredNews.length > 2 ? 2 : 1) : 1}
              paddingX={"0px"}
              width="full"
              gap={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {filteredNews.map((newsItem) => (
                <Box key={newsItem.slug} alignSelf={"stretch"} maxW={"590px"}>
                  <NewsCard newsObject={newsItem} />
                </Box>
              ))}
            </Flex>
          </Container>
        )}

        <Container>
          <PageTitle title="Board" />
          <LeadersContainer positions={chapterData.board} />
        </Container>

        {chapterData.tracks && chapterData.tracks.length > 0 && (
          <Container>
            <PageTitle title="Tracks" />
            <Tracks
              tracks={chapterData.tracks}
              color_scheme={chapterData.color_scheme_1}
            />
          </Container>
        )}
      </Flex>
    </PageWrapper>
  );
}
