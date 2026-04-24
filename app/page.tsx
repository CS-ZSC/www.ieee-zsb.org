import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import Events from "@/components/ui/internal/home/events";
import Brief from "@/components/ui/internal/home/brief";
import News from "@/components/ui/internal/home/news";
import PageTitle from "@/components/ui/internal/pageTitle";
import Container from "@/components/ui/internal/container";
import Board from "@/components/ui/internal/about/board/board";
import HeroSection from "@/components/ui/internal/home/hero-section";
import MembershipCTA from "@/components/ui/internal/home/membership-cta";

export default function Home() {
  return (
    <PageWrapper>
      <Flex flexDirection={"column"} paddingBottom={"0px"} gap={12} pb={12}>
        <HeroSection />
        <Brief />
        <News />
        <Events />
        <MembershipCTA />
      </Flex>
    </PageWrapper>
  );
}
