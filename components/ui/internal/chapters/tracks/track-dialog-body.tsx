"use client";

import React from "react";
import { Flex, Text, Grid, GridItem, Box, HStack, Image, Badge } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { TrackData } from "@/data/chapters";
import trackResources from "@/data/track-resources";
import type { Resource } from "@/data/committees";

interface TrackDialogBodyProps {
  track: TrackData;
}

export default function TrackDialogBody({
  track,
}: TrackDialogBodyProps) {
  return (
    <Flex flexDirection="column" gap={8} pt={4}>
      {/* Leaders Section */}
      {track.board && track.board.length > 0 && (
        <Flex flexDirection="column" gap={4}>
          <Box>
            <Text color="fg" fontWeight="bold" fontSize="lg">
            Leaders
          </Text>
          <Box w="32px" h="2px" bgColor="primary-1" mt={2} rounded="full" />

          </Box>
          
          <Flex gap={4} wrap="wrap" justify="center">
            {track.board.map((leader, index) => (
              <Flex 
                key={index}
                p={4}
                rounded="lg"
                border="1px solid"
                borderColor="neutral-4"
                bgColor="white-8"
                minW="300px"
                maxW="350px"
                gap={4}
                align="center"
              >
                <Box 
                  w="80px" 
                  h="80px" 
                  rounded="full" 
                  border="2.5px solid" 
                  borderColor="primary-1"
                  overflow="hidden"
                  flexShrink={0}
                  bgColor="primary-7"
                >
                  <Image 
                    src={leader.avatarSrc} 
                    alt={leader.name} 
                    w="full" 
                    h="full" 
                    objectFit="cover" 
                  />
                </Box>
                <Flex direction="column" gap={1}>
                  <Text color="fg" fontWeight="bold" fontSize="lg">
                    {leader.name}
                  </Text>
                  <Text color="primary-8" fontWeight="medium" fontSize="sm">
                    {leader.position}
                  </Text>
                  <HStack gap={2} mt={1}>
                    {leader.linkedin && (
                      <a href={leader.linkedin} target="_blank" rel="noreferrer">
                        <Flex 
                          w="24px" h="24px" 
                          rounded="md"
                          border="1px solid"
                          borderColor="neutral-4"
                          align="center" justify="center"
                          color="neutral-3"
                          _hover={{ color: "primary-1", borderColor: "primary-1" }}
                          transition="all 0.2s"
                        >
                          <Icon icon="mdi:linkedin" width="14px" height="14px" />
                        </Flex>
                      </a>
                    )}
                    {leader.email && (
                      <a href={`mailto:${leader.email}`}>
                        <Flex 
                          w="24px" h="24px" 
                          rounded="md"
                          border="1px solid"
                          borderColor="neutral-4"
                          align="center" justify="center"
                          color="neutral-3"
                          _hover={{ color: "primary-1", borderColor: "primary-1" }}
                          transition="all 0.2s"
                        >
                          <Icon icon="mdi:email" width="14px" height="14px" />
                        </Flex>
                      </a>
                    )}
                  </HStack>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
      {/* Description Section */}
      <Box 
        pb={6} 
        borderBottom="1px solid" 
        borderColor="neutral-4"
      >
        <Flex gap={3} align="flex-start">
          <Icon 
            icon="mdi:format-quote-open" 
            width="24px" 
            height="24px" 
            color="var(--chakra-colors-primary-1)" 
            style={{ marginTop: "4px", opacity: 0.6, flexShrink: 0 }} 
          />
          <Text color="neutral-2" lineHeight="1.7" fontSize="lg">
            {track.description}
          </Text>
        </Flex>
      </Box>

      {/* Goals Section */}
      <Flex flexDirection="column" gap={4}>
        <Box>
          <Text color="fg" fontWeight="bold" fontSize="lg">
            Goals
          </Text>
          <Box w="32px" h="2px" bgColor="primary-1" mt={2} rounded="full" />
        </Box>
        <Flex flexDirection="column" gap={3}>
          {track.goals.map((goal, index) => (
            <Flex key={index} align="center" gap={3}>
              <Icon 
                icon="mdi:check-circle" 
                width="22px" 
                height="22px" 
                color="var(--chakra-colors-primary-1)" 
                style={{ flexShrink: 0 }}
              />
              <Text color="neutral-3" fontSize="md">
                {goal}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Activities Section */}
      {track.activities && track.activities.length > 0 && (
        <Flex flexDirection="column" gap={4}>
          <Box>
            <Text color="fg" fontWeight="bold" fontSize="lg">
              Activities
            </Text>
            <Box w="32px" h="2px" bgColor="primary-1" mt={2} rounded="full" />
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} justifyContent="center">
            {track.activities.map((activity, index) => (
              <GridItem key={index}>
                <Flex 
                  direction="column"
                  gap={3}
                  p={4}
                  rounded="lg"
                  border="1px solid"
                  borderColor="neutral-4"
                  bgColor="white-8"
                  h="full"
                >
                  <HStack gap={3}>
                    <Flex 
                      w="28px" 
                      h="28px" 
                      rounded="full" 
                      border="1.5px solid" 
                      borderColor="primary-1"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Text color="primary-1" fontSize="sm" fontWeight="medium">
                        {index + 1}
                      </Text>
                    </Flex>
                    <Text color="fg" fontWeight="semibold" fontSize="md">
                      {activity.title}
                    </Text>
                  </HStack>
                  <Text color="neutral-2" fontSize="sm" pl="40px" lineHeight="1.6">
                    {activity.description}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      )}

      {/* Resources Section */}
      {(() => {
        const resources = trackResources[track.hashtag];
        if (!resources || resources.length === 0) return null;
        const books   = resources.filter((r) => r.type === "book");
        const courses = resources.filter((r) => r.type === "course");
        return (
          <Flex flexDirection="column" gap={4}>
            <Box>
              <Text color="fg" fontWeight="bold" fontSize="lg">Resources</Text>
              <Box w="32px" h="2px" bgColor="primary-1" mt={2} rounded="full" />
            </Box>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
              {[
                { label: "Books", icon: "mdi:book-open-page-variant", items: books },
                { label: "Courses", icon: "mdi:school-outline", items: courses },
              ].map(({ label, icon, items }) =>
                items.length === 0 ? null : (
                  <Flex key={label} direction="column" gap={3}>
                    <HStack gap={2}>
                      <Icon icon={icon} width="18px" height="18px" color="var(--chakra-colors-primary-1)" />
                      <Text fontWeight="semibold" fontSize="md" color="fg">{label}</Text>
                    </HStack>
                    <Flex direction="column" gap={2}>
                      {items.map((item: Resource, i: number) => (
                        <ResourceItem key={i} item={item} />
                      ))}
                    </Flex>
                  </Flex>
                )
              )}
            </Grid>
          </Flex>
        );
      })()}
    </Flex>
  );
}

function ResourceItem({ item }: { item: Resource }) {
  const inner = (
    <Flex
      align="center"
      gap={3}
      p={3}
      rounded="lg"
      border="1px solid"
      borderColor="neutral-4"
      bgColor="white-8"
      transition="all 0.15s ease"
      _hover={item.url ? { borderColor: "primary-1", bgColor: "primary-7" } : undefined}
      cursor={item.url ? "pointer" : "default"}
    >
      <Flex
        w="32px" h="32px" rounded="md"
        border="1px solid" borderColor="primary-1"
        align="center" justify="center"
        bgColor="primary-7" flexShrink={0}
      >
        <Icon
          icon={item.type === "book" ? "mdi:book-outline" : "mdi:play-circle-outline"}
          width="16px" height="16px"
          color="var(--chakra-colors-primary-1)"
        />
      </Flex>
      <Flex direction="column" gap={0.5} flex={1} minW={0}>
        <Text color="fg" fontWeight="medium" fontSize="sm" lineClamp={1}>{item.title}</Text>
        {(item.author || item.platform) && (
          <Text color="neutral-3" fontSize="xs">{item.author ?? item.platform}</Text>
        )}
      </Flex>
      {item.free !== undefined && (
        <Badge
          size="sm"
          colorPalette={item.free ? "green" : "gray"}
          variant="subtle"
          flexShrink={0}
        >
          {item.free ? "Free" : "Paid"}
        </Badge>
      )}
    </Flex>
  );

  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : inner;
}
