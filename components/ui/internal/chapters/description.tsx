"use client";

import React from "react";
import { Text, Grid, Heading, Box, Flex, Stack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
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
        { icon: "lucide:telescope", title: "Vision", text: vision },
        { icon: "lucide:target", title: "Mission", text: mission },
    ];

    return (
        <Flex direction="column" gap={4} w="full">
            {/* About blurb */}
            <AnimatedCard>
                <Card bgColor="primary-3">
                    <Flex direction="column" gap={3}>
                        <Flex align="center" gap={2}>
                            {/* <Box w="3px" h="1.2em" borderRadius="full" flexShrink={0} /> */}
                            <FaQuoteLeft size={"20px"} />
                        </Flex>
                        <Text mx={4} fontSize="md" color="neutral-2" lineHeight="1.8">
                            {about}
                        </Text>

                        <Flex justify="flex-end">
                            <FaQuoteRight size={"20px"}/>
                        </Flex>
                    </Flex>
                </Card>
            </AnimatedCard>

            {/* Vision & Mission */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                {pillars.map(({ icon, title, text }) => (
                    <AnimatedCard key={title}>
                        <Card bgColor="primary-3">
                            <Flex h="full" alignSelf={"flex-start"} align="flex-start" gap={4}>
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
