"use client";

import React from "react";
import { Text, Flex, Grid, Heading, Box, Stack, HStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Card from "@/components/ui/internal/card";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import ButtonLink from "../button-link";
import { FaQuestion, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const MotionBox = motion.create(Box);

const stats = [
  { icon: "lucide:calendar", value: `${new Date().getFullYear() - 1999}+`, label: "Years of Impact" },
  { icon: "lucide:cpu", value: "4", label: "Technical Chapters" },
  { icon: "lucide:layout-grid", value: "6", label: "Committees" },
  { icon: "lucide:users", value: "1000+", label: "Alumni" },
];

const pillars = [
  {
    icon: "lucide:telescope",
    title: "Vision",
    text: "A nationally recognized hub of talent and innovation, empowering students to drive meaningful change and shape the future of their industries through critical thinking, leadership, and technical excellence.",
  },
  {
    icon: "lucide:target",
    title: "Mission",
    text: "Bridge the skills gap between university curricula and the modern job market — building a sustainable program that equips graduates with leadership, teamwork, and technical skills that matter.",
  },
];

export default function Brief() {
  return (
    <Flex direction="column" gap={6} w="full">
      {/* Stats */}
      {/* <AnimatedCard>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
          w="full"
        >
          {stats.map(({ icon, value, label }, i) => (
            <MotionBox
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 } as any}
            >
              <Card bgColor="primary-3" gap={1}>
                <Stack align="center" textAlign="center" gap={1}>
                  <Icon icon={icon} width="1.6rem" height="1.6rem" />
                  <Text fontWeight="bold" fontSize="2xl" color="neutral-1">{value}</Text>
                  <Text fontSize="sm" color="neutral-2">{label}</Text>
                </Stack>
              </Card>
            </MotionBox>
          ))}
        </Grid>
      </AnimatedCard> */}

      {/* About blurb */}
      <AnimatedCard>
        <Card bgColor="primary-3">
          <Flex direction="column" gap={3}>
            {/* <HStack align={"center"} justify={"center"}>
              <Heading fontSize={{ base: "xl", md: "2xl" }} color="neutral-1">
                Who We Are
              </Heading>
            </HStack> */}
            <FaQuoteLeft size="20px" />
            <Text mx={4} fontSize="md" color="neutral-2" lineHeight="1.8">
              IEEE Zagazig University Student Branch is one of the first and most impactful student
              branches in Egypt, with over {new Date().getFullYear() - 1999} years of experience.
              Through technical chapters, committees, and our flagship MUTEX event, the Delta
              region's largest technology and entrepreneurship gathering, we prepare students for
              the demands of the modern workforce.
            </Text>
            <Flex justify={"flex-end"}>
              <FaQuoteRight size="20px" />
            </Flex>
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
                  bg="primary-7"
                  mt={0.5}
                >
                  <Icon icon={icon} width="1.5rem" height="1.5rem" />
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

      {/* CTA */}
      <AnimatedCard>
        <Flex justify="center">
          <ButtonLink link="/about" text="More about us" icon />
        </Flex>
      </AnimatedCard>
    </Flex>
  );
}
