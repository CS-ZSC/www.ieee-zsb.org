"use client";

import React from "react";
import { Text, Grid, Heading, Box, Flex, Stack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Card from "@/components/ui/internal/card";
import AnimatedCard from "@/components/ui/internal/animatedCard";

export function Description({ vision, mission, about, color }: {
  vision: string;
  mission: string;
  about: string;
  color: string;
}) {
  const accentVar = `var(--chakra-colors-${color})`;

  const pillars = [
    { icon: "lucide:telescope", title: "Vision",  text: vision  },
    { icon: "lucide:target",    title: "Mission", text: mission },
  ];

  return (
    <Flex direction="column" gap={4} w="full">
      {/* About blurb */}
      <AnimatedCard>
        <Card bgColor="primary-3">
          <Flex direction="column" gap={3}>
            <Flex align="center" gap={2}>
              <Box w="3px" h="1.2em" borderRadius="full" flexShrink={0} />
              <Heading fontSize={{ base: "xl", md: "2xl" }} color="neutral-1">
                About
              </Heading>
            </Flex>
            <Text fontSize="md" color="neutral-2" lineHeight="1.8">
              {about}
            </Text>
          </Flex>
        </Card>
      </AnimatedCard>

      {/* Vision & Mission */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
        {pillars.map(({ icon, title, text }) => (
          <AnimatedCard key={title}>
            <Card bgColor="primary-3">
              <Flex align="flex-start" gap={4}>
                <Box
                  flexShrink={0}
                  p={2}
                  rounded="lg"
                  style={{
                    background: `color-mix(in srgb, ${accentVar} 15%, transparent)`,
                  }}
                  mt={0.5}
                >
                  <Icon
                    icon={icon}
                    width="1.5rem"
                    height="1.5rem"
                    // style={{ color: accentVar }}
                  />
                </Box>
                <Stack gap={1}>
                  <Heading fontSize="lg" color="neutral-1">{title}</Heading>
                  <Text fontSize="sm" color="neutral-2" lineHeight="1.7">{text}</Text>
                </Stack>
              </Flex>
            </Card>
          </AnimatedCard>
        ))}
      </Grid>
    </Flex>
  );
}
