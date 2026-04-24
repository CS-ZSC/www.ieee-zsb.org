"use client";

import React from "react";
import Card from "@/components/ui/internal/card";
import Tag from "@/components/ui/internal/tag";
import type { NewsItem } from "@/lib/news";
import { Flex, Text } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import { useRouter } from "next/navigation";
import Description from "./description";
import ImageBox from "./image-box";

type Props = {
  newsObject: NewsItem;
};

export default function FullNewsCard({ newsObject }: Props) {
  const { isDesktop } = useWindowType();
  const router = useRouter();
  return (
    <Flex
      width={"full"}
      cursor={"pointer"}
      onClick={() => router.push(`/news/${newsObject.slug}`)}
      _hover={{ transform: "scale(0.98)" }}
      transition="all 0.2s ease-in-out"
    >
      <Card>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"full"}
          gap={10}
        >
          <Flex
            flexDirection={"column"}
            gap={isDesktop ? 2 : 1}
            justifyContent={"center"}
            maxWidth={"60%"}
            paddingLeft={"calc(var(--global-spacing) * 1.5)"}
          >
            <Flex alignItems={"center"} gap={isDesktop ? 5 : 3}>
              <Text color={"neutral-2"}>
                {newsObject.date} - {newsObject.author}
              </Text>
              <Tag text={newsObject.tags[0]} />
            </Flex>
            <Flex>
              <Text
                fontSize="2rem"
                fontWeight="bold"
                color={"neutral-1"}
                textAlign="left"
              >
                {newsObject.title}
              </Text>
            </Flex>
            <Description description={newsObject.excerpt} lineClamp="8" />
          </Flex>
          <ImageBox
            path={newsObject.mainPhoto}
            alt={newsObject.title}
            maxWidth="700px"
            mx="0"
          />
        </Flex>
      </Card>
    </Flex>
  );
}
