"use client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import PageTitle from "@/components/ui/internal/pageTitle";
import Container from "@/components/ui/internal/container";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import CommitteesSelection from "@/components/ui/internal/committees/committees-selection";
import committeesData from "@/data/committees";
import {Tracks} from "@/components/ui/internal/chapters/tracks/tracks";
import CommitteesHero from "@/components/ui/internal/committees/committees-hero";
import ButtonLink from "@/components/ui/internal/button-link";

export default function Page() {
  return (
    <PageWrapper>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"neutral-1"}
        gap={20}
      >
        <Flex justifyContent={"center"} flexFlow={"column"} maxWidth={"600px"}>
          <PageTitle title="Committees" />
          <AnimatedCard>
            <Text textAlign="center" fontSize="1.3rem">
              Discover our managerial committees in the branch
            </Text>
          </AnimatedCard>
        </Flex>
        <Container gap={10}>
          <CommitteesHero />
          {/* {committeesData.map((committee, index) => ( */}
            <Tracks
              tracks={committeesData}
            />
          {/* ))} */}
          <AnimatedCard>
            <Flex justify="center" pb={4}>
              <ButtonLink
                link="https://www.facebook.com/IEEEZSB"
                text="Follow us for recruitment updates"
                icon
                target="_blank"
              />
            </Flex>
          </AnimatedCard>
        </Container>
      </Flex>
    </PageWrapper>
  );
}
