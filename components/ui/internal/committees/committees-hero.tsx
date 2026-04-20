"use client";

import React from "react";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import Card from "@/components/ui/internal/card";
import ButtonLink from "@/components/ui/internal/button-link";

const stats = [
  { icon: "lucide:layout-grid",  value: "6",    label: "Committees" },
  { icon: "lucide:calendar",     value: "25+",  label: "Years Active" },
  { icon: "lucide:users",        value: "100+", label: "Members per Season" },
  { icon: "lucide:graduation-cap", value: "All", label: "Colleges Welcome" },
];

const whyJoin = [
  {
    icon: "lucide:trophy",
    title: "Real Leadership",
    description:
      "Take on actual responsibility from day one. Committees are where members run programs, lead teams, and own outcomes.",
  },
  {
    icon: "lucide:network",
    title: "Cross-Team Collaboration",
    description:
      "Work alongside technical chapters, the executive board, and external partners on events and initiatives that affect the whole branch.",
  },
  {
    icon: "lucide:briefcase",
    title: "Career-Ready Skills",
    description:
      "Build the soft and professional skills that matter most in the workplace: communication, project management, marketing, and operations.",
  },
  {
    icon: "lucide:handshake",
    title: "Lasting Network",
    description:
      "Connect with current members, alumni, and industry partners through events, competitions, and the everyday work of building something together.",
  },
];

export default function CommitteesHero() {
  return (
    <Flex direction="column" gap={10} w="full">
      {/* Stats bar */}
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
                <Text fontWeight="bold" fontSize="2xl" color="neutral-1">
                  {value}
                </Text>
                <Text fontSize="sm" color="neutral-2">
                  {label}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </AnimatedCard>

      {/* Why join */}
      <Flex direction="column" gap={4} w="full">
        <AnimatedCard>
          <Flex direction="column" align="center" gap={1} textAlign="center">
            <Heading fontSize={{ base: "xl", md: "2xl" }} color="neutral-1">
              Why Join a Committee?
            </Heading>
            <Text fontSize="md" color="neutral-2">
              Committees are the engine of the branch. Here is what you get.
            </Text>
          </Flex>
        </AnimatedCard>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={4}
          w="full"
        >
          {whyJoin.map(({ icon, title, description }) => (
            <AnimatedCard key={title}>
              <Card bgColor="primary-3">
                <Flex align="flex-start" gap={4} w="full">
                  <Box flexShrink={0} mt={1}>
                    <Icon icon={icon} width="1.8rem" height="1.8rem" />
                  </Box>
                  <Stack gap={1}>
                    <Text fontWeight="bold" fontSize="lg" color="neutral-1">
                      {title}
                    </Text>
                    <Text fontSize="md" color="neutral-2">
                      {description}
                    </Text>
                  </Stack>
                </Flex>
              </Card>
            </AnimatedCard>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
