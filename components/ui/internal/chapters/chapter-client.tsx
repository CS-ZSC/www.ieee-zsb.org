"use client";

import { Description } from "@/components/ui/internal/chapters/description";
import { HeroCard } from "@/components/ui/internal/chapters/hero-card";
import { Tracks } from "@/components/ui/internal/chapters/tracks/tracks";
import Container from "@/components/ui/internal/container";
import LeadersContainer from "@/components/ui/internal/leaders-container";
import NewsCard from "@/components/ui/internal/news/news-card";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import PageTitle from "@/components/ui/internal/pageTitle";
import type { ChapterContent } from "@/data/chapters";
import { getChapter, getChapterSeasons } from "@/data/seasons";
import type { NewsItem } from "@/lib/news";
import { useWindowType } from "@/hooks/use-window-type";
import { Box, Flex } from "@chakra-ui/react";
import {
  SeasonProvider,
  useSeason,
} from "@/components/ui/internal/season/season-context";
import SeasonSwitcher from "@/components/ui/internal/season/season-switcher";

interface Props {
  chapterData: ChapterContent;
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

        <SeasonProvider seasons={getChapterSeasons(chapterData.short_name)}>
          <Container>
            <SeasonSwitcher />
          </Container>
          <SeasonRoster chapter={chapterData} />
        </SeasonProvider>
      </Flex>
    </PageWrapper>
  );
}

function SeasonRoster({ chapter }: { chapter: ChapterContent }) {
  const { board, tracks, color_scheme_1 } = getChapter(useSeason(), chapter);

  return (
    <>
      {board.length > 0 && (
        <Container>
          <PageTitle title="Board" />
          <LeadersContainer positions={board} />
        </Container>
      )}

      {tracks && tracks.length > 0 && (
        <Container>
          <PageTitle title="Tracks" />
          <Tracks tracks={tracks} color_scheme={color_scheme_1} />
        </Container>
      )}
    </>
  );
}
