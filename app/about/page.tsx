"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PageTitle from "@/components/ui/internal/pageTitle";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import Container from "@/components/ui/internal/container";
import AboutHero from "@/components/ui/internal/about/about-hero";
import Faq from "@/components/ui/internal/about/faq/faq";
import SocialMedia from "@/components/ui/internal/about/social media/socialMedia";
import Board from "@/components/ui/internal/about/board/board";

export default function page() {
  return (
    <PageWrapper>
      <Flex flexDirection="column" gap={12}>
        <Container>
          <Flex direction="column" align="center" maxW="600px">
            <PageTitle title="About Us" />
            <AnimatedCard>
              <Text textAlign="center" fontSize="1.3rem" color="neutral-2">
                One of Egypt's oldest IEEE student branches, empowering engineers since 1999.
              </Text>
            </AnimatedCard>
          </Flex>
          <AboutHero />
        </Container>

        <Container>
          <PageTitle title="Executive Board" />
          <Board />
        </Container>

        <Container>
          <PageTitle title="FAQ" />
          <Faq />
        </Container>

        <Container>
          <PageTitle title="Connect with us" />
          <SocialMedia />
        </Container>
      </Flex>
    </PageWrapper>
  );
}
