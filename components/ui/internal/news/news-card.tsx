"use client";

import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useWindowType } from "@/hooks/use-window-type";
import type { NewsItem } from "@/data/news";
import Tag from "@/components/ui/internal/tag";
import { useRouter } from "next/navigation";
import Description from "./description";
import ImageBox from "./image-box";

type Props = {
  newsObject: NewsItem;
  bgColor?: string;
  tagColor?: string;
};

export default function NewsCard({
  newsObject,
  bgColor = "primary-5",
  tagColor = "neutral-1",
}: Props) {
  const { isDesktop } = useWindowType();
  const router = useRouter();

  return (
    <Flex
      onClick={() => router.push(`/news/${newsObject.id}`)}
      cursor={"pointer"}
      _hover={{ transform: "scale(0.98)" }}
      transition="all 0.2s ease-in-out"
      flexDirection={"column"}
      width="full"
      height={"full"}
      alignItems={"center"}
      bgColor={bgColor}
      border="1px solid"
      borderColor="primary-3"
      rounded={"2xl"}
    >
      <ImageBox
        path={newsObject.mainPhoto}
        alt={newsObject.title}
        maxWidth="full"
        roundedBottom="0"
      />
      <Flex
        flexDirection={"column"}
        gap={isDesktop ? 2 : 1}
        justifyContent={"center"}
        padding={"calc(var(--card-padding) * 1.1)"}
      >
        <Flex alignItems={"center"} gap={isDesktop ? 5 : 3}>
          <Text color={"neutral-3"}>
            {newsObject.dateCreated} - {newsObject.author}
          </Text>
          <Flex flexWrap={"wrap"} gap={2}>
            <Tag text={newsObject.tags[0]} color={tagColor} />
            {/* <Tag text={newsObject.tags[1]} /> */}
          </Flex>
        </Flex>
        <Flex>
          <Text
            fontSize="1.6rem"
            fontWeight="bold"
            color={"text-2"}
            textAlign="left"
          >
            {newsObject.title}
          </Text>
        </Flex>
        <Description
          color={"text-2"}
          lineClamp={isDesktop ? "4" : "8"}
          maxWidth="auto"
          description={newsObject.description}
        ></Description>
      </Flex>
    </Flex>
  );
}
