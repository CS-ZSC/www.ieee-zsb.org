import { Flex } from "@chakra-ui/react";
import React from "react";
import { getCommittees } from "@/data/seasons";
import { useSeason } from "@/components/ui/internal/season/season-context";
import Link from "next/link";

export default function CommitteesSelection() {
  return (
    <Flex justifyContent={"center"} flexWrap={"wrap"} gap={4}>
      {getCommittees(useSeason()).map((committee) => (
        <Committee
          key={committee.id}
          name={committee.name}
          hashtag={committee.hashtag}
        />
      ))}
    </Flex>
  );
}

function Committee({ name, hashtag }: { name: string; hashtag: string }) {
  return (
    <Link href={`/committees/#${hashtag}`}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        width={"220px"}
        height={"100px"}
        backgroundColor={"primary-5"}
        border={"1px solid"}
        borderColor={"primary-3"}
        rounded={"2xl"}
        fontWeight={"bold"}
        fontSize={"lg"}
        transition={"all"}
        _hover={{ backgroundColor: "primary-12" }}
      >
        {name}
      </Flex>
    </Link>
  );
}
