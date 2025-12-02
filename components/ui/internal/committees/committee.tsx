"use client";

import React, { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import type { CommitteesData } from "@/data/committees";
import CommitteeBrief from "./committee-brief";
import CommitteeDetails from "./committee-details";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import { useWindowType } from "@/hooks/use-window-type";

interface CommitteeProps {
  committee: CommitteesData;
  borderColor: string;
  positionBgColor: string;
}

export default function Committee({
  committee,
  borderColor,
  positionBgColor,
}: CommitteeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDesktop } = useWindowType();

  return (
    <AnimatedCard>
      <Flex
        id={committee.hashtag}
        direction="column"
        gap={"var(--global-spacing)"}
      >
        <Heading
          fontSize="3xl"
          fontWeight="bold"
          paddingLeft={isDesktop ? "20px" : "0px"}
          textAlign={isDesktop ? "left" : "center"}
          color={"neutral-1"}
        >
          {committee.name}
        </Heading>
        <CommitteeBrief
          name={committee.name}
          description={committee.description}
          image={committee.image}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <CommitteeDetails
          committee={committee}
          isOpen={isOpen}
          borderColor={borderColor}
          positionBgColor={positionBgColor}
        />
      </Flex>
    </AnimatedCard>
  );
}
