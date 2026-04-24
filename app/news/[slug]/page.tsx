import { notFound } from "next/navigation";
import { getAllNews, getNewsBySlug } from "@/lib/news";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import Heading from "@/components/ui/internal/heading";
import ImageBox from "@/components/ui/internal/news/image-box";
import Tag from "@/components/ui/internal/tag";
import VerticalDivider from "@/components/ui/internal/news/vertical-divider";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Description from "@/components/ui/internal/news/description";
import { use } from "react";
import type { Components } from "react-markdown";

export async function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export default function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const newsItem = getNewsBySlug(slug);

  if (!newsItem) return notFound();

  let figureCount = 0;

  const components: Components = {
    h2({ children }) {
      return (
        <Text fontWeight={"bold"} fontSize={"1.4rem"} marginTop={8} marginBottom={2}>
          {children}
        </Text>
      );
    },
    p({ children }) {
      return (
        <Box
          fontSize={"lg"}
          fontWeight={"light"}
          color={"neutral-2"}
          lineHeight={"1.8"}
          maxWidth={"1050px"}
          marginBottom={4}
        >
          {children}
        </Box>
      );
    },
    img({ src, alt }) {
      figureCount++;
      const srcStr = typeof src === "string" ? src : "";
      return (
        <Flex flexDirection={"column"} gap={2} marginY={4}>
          <ImageBox path={srcStr} alt={alt ?? ""} maxWidth="full" />
          {alt && (
            <Text
              textAlign={"center"}
              color={"natural-2"}
              opacity={"0.8"}
              marginBottom={4}
            >
              Figure {figureCount}: {alt}
            </Text>
          )}
        </Flex>
      );
    },
  };

  return (
    <PageWrapper>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        padding={"var(--global-spacing)"}
        gap={"calc(var(--global-spacing) * 3)"}
        maxWidth={"1050px"}
        mx={"auto"}
      >
        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"calc(var(--global-spacing) * 1.5)"}
        >
          <Heading text={newsItem.title} color="neutral-1" />
          <Flex position={"relative"}>
            <ImageBox
              path={newsItem.mainPhoto}
              alt={newsItem.title}
              maxWidth="full"
            />
            <Flex
              zIndex={2}
              position={"absolute"}
              left={"var(--global-spacing)"}
              bottom={"var(--global-spacing)"}
              paddingY={"8px"}
              paddingX={"15px"}
              rounded={"lg"}
              border={"1px solid"}
              borderColor={"primary-3"}
              backgroundColor={"primary-5"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
              maxWidth={`calc(100% - 2 * var(--global-spacing))`}
            >
              <Text color={"neutral-2"}>
                {newsItem.date} - {newsItem.author}
              </Text>
              <VerticalDivider backgroundColor="neutral-2" />
              <Flex flexWrap={"wrap"} gap={2}>
                <Tag text={newsItem.tags[0]} color="neutral-2" />
              </Flex>
            </Flex>
          </Flex>

          <Description
            description={newsItem.excerpt}
            color={"natural-2"}
            maxWidth="1050px"
          />
        </Flex>

        <Flex flexDirection={"column"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {newsItem.content}
          </ReactMarkdown>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
