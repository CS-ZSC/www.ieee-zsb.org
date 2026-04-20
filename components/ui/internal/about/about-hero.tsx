"use client";

import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import Card from "@/components/ui/internal/card";

const stats = [
  { icon: "lucide:calendar",      value: `${new Date().getFullYear() - 1999}+`, label: "Years Active" },
  { icon: "lucide:cpu",           value: "4",    label: "Technical Chapters" },
  { icon: "lucide:layout-grid",   value: "6",    label: "Committees" },
  { icon: "lucide:users",         value: "1000+", label: "Alumni" },
];

const pillars = [
  {
    icon: "lucide:lightbulb",
    title: "Mission",
    description:
      "Create an active space where students learn modern tech skills, work on real projects, and connect with others who share the same passion - through practical workshops and team activities that prepare them for the modern workforce.",
  },
  {
    icon: "lucide:telescope",
    title: "Vision",
    description:
      "To be a leading student-driven hub for technological exploration, creativity, and collaboration where innovation thrives and technical skills are transformed into real-world impact.",
  },
];

export default function AboutHero() {
  return (
    <Flex direction="column" gap={8} w="full">
      {/* Stats */}
      <AnimatedCard>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
          w="full"
        >
          {stats.map(({ icon, value, label }) => (
            <Card key={label} bgColor="primary-3" gap={2}>
              <Stack align="center" textAlign="center" gap={1}>
                <Icon icon={icon} width="1.8rem" height="1.8rem" />
                <Text fontWeight="bold" fontSize="2xl" color="neutral-1">{value}</Text>
                <Text fontSize="sm" color="neutral-2">{label}</Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </AnimatedCard>

      {/* About blurb */}
      <AnimatedCard>
        <Card gap={1} bgColor="primary-3">
          <Text color="neutral-2" fontSize="md" lineHeight="1.8">
            With over {new Date().getFullYear() - 1999} years of impactful experience, the IEEE
            Zagazig University Student Branch (ZSB) stands as one of the first and most influential
            branches in Egypt. While based at Zagazig University, our influence extends nationwide
            through workshops, events, and initiatives that explore the evolving role of technology
            in all aspects of life.
          </Text>
          <Text color="neutral-2" fontSize="md" lineHeight="1.8">
            MUTEX is our flagship event, bringing together bright minds from across the Delta region
            to explore technology and entrepreneurship through inspiring talks, practical workshops,
            and engaging competitions.
          </Text>
        </Card>
      </AnimatedCard>

      {/* Mission & Vision */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} w="full">
        {pillars.map(({ icon, title, description }) => (
          <AnimatedCard key={title}>
            <Card bgColor="primary-3">
              <Flex align="flex-start" gap={4} w="full">
                <Box
                  flexShrink={0}
                  p={2}
                  rounded="lg"
                  // bg="primary-7"
                  // color="primary-2"
                  mt={0.5}
                >
                  <Icon icon={icon} width="1.6rem" height="1.6rem" />
                </Box>
                <Stack gap={1}>
                  <Heading fontSize="lg" color="neutral-1">{title}</Heading>
                  <Text fontSize="md" color="neutral-2" lineHeight="1.7">{description}</Text>
                </Stack>
              </Flex>
            </Card>
          </AnimatedCard>
        ))}
      </Grid>
    </Flex>
  );
}
