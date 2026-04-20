"use client";

import { Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Card from "@/components/ui/internal/card";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import ButtonLink from "@/components/ui/internal/button-link";

const perks = [
  { icon: "lucide:graduation-cap", label: "Technical Workshops" },
  { icon: "lucide:users",          label: "Community & Network" },
  { icon: "lucide:trophy",         label: "Leadership Roles" },
  { icon: "lucide:globe",          label: "Global IEEE Access" },
];

export default function MembershipCTA() {
  return (
    <AnimatedCard>
      <Card>
        <Flex direction="column" align="center" gap={6} textAlign="center" w="full">
          <Flex direction="column" gap={2}>
            <Heading fontSize={{ base: "2xl", md: "3xl" }} color="neutral-1">
              Join IEEE ZSB
            </Heading>
            <Text fontSize="lg" color="neutral-2" maxW="560px" mx="auto">
              Be part of one of Egypt's oldest IEEE student branches. Develop skills,
              build connections, and grow as a leader.
            </Text>
          </Flex>

          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={3} w="full">
            {perks.map(({ icon, label }) => (
              <Flex
                key={label}
                direction="column"
                align="center"
                gap={2}
                p={4}
                rounded="xl"
                bg="primary-12"
                border="1px solid"
                borderColor="primary-3"
              >
                <Icon icon={icon} width="1.8rem" height="1.8rem" />
                <Text fontSize="sm" fontWeight="bold" color="neutral-1">{label}</Text>
              </Flex>
            ))}
          </Grid>

          <ButtonLink link="/membership" text="Learn more about membership" icon />
        </Flex>
      </Card>
    </AnimatedCard>
  );
}
