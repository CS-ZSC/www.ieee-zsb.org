"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import PageTitle from "@/components/ui/internal/pageTitle";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import { Flex, Text } from "@chakra-ui/react";
import Membership from "@/components/ui/internal/home/membership";

export default function MembershipPage() {
  return (
    <PageWrapper>
      <Flex direction="column" align="center" gap={12} pb={12}>
        <Flex direction="column" align="center" maxW="600px">
          <PageTitle title="Membership" />
          <AnimatedCard>
            <Text textAlign="center" fontSize="1.3rem" color="neutral-2">
              Join IEEE ZSB or explore what a global IEEE membership has to offer.
            </Text>
          </AnimatedCard>
        </Flex>
        <Membership />
      </Flex>
    </PageWrapper>
  );
}
