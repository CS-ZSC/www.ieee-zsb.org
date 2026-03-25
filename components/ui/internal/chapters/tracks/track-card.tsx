"use client";

import React, { useState } from "react";
import { Flex, Heading, Text, Box, HStack, Button, Image, AvatarGroup, Grid, GridItem } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { TrackData } from "@/data/chapters";
import CommitteeDetails from "../../committees/committee-details";
import Card from "@/components/ui/internal/card";
import { useWindowType } from "@/hooks/use-window-type";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogBackdrop,
} from "@/components/ui/dialog";
import TrackDialogBody from "./track-dialog-body";

interface TrackCardProps {
  track: TrackData;
  index: number;
  borderColor: string;
  positionBgColor: string;
}

export default function TrackCard({
  track,
  index,
  borderColor,
  positionBgColor,
}: TrackCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDesktop } = useWindowType();

  // Format index to be like #01, #02
  const formattedIndex = `#${String(index + 1).padStart(2, "0")}`;

  // Track Icon Mapping
  const getTrackIcon = (hashtag: string) => {
    const iconMap: Record<string, string> = {
      "frontend": "mdi:code-tags",
      "backend": "mdi:database",
      "mobile-development": "mdi:cellphone",
      "basic-ai": "mdi:brain",
      "advanced-ai": "mdi:brain",
      "cyber-security": "mdi:shield-check",
      "game-development": "mdi:gamepad-variant",
      "embedded-systems": "mdi:memory",
      "ros": "mdi:robot-outline",
      "pcb-design": "mdi:developer-board",
      "mechanical": "mdi:cogs",
      "basic-automation": "mdi:factory",
      "advanced-automation": "mdi:factory",
      "basic-distribution": "mdi:transmission-tower",
      "advanced-distribution": "mdi:transmission-tower",
    };
    return iconMap[hashtag] || "mdi:book-outline";
  };

  return (
    <Box w="full" id={track.hashtag}>
      <Card 
        padding={isDesktop ? "24px" : "16px"} 
        bgColor="primary-12"
        borderColor="primary-12"
      >
        <Grid 
          templateColumns={["1fr", "auto 1fr auto"]} 
          gap={4} 
          alignItems="start"
        >
          {/* Tracking Icon (Left Desktop, Top Mobile) */}
          <GridItem>
            <Flex 
              w={isDesktop ? "56px" : "48px"} 
              h={isDesktop ? "56px" : "48px"} 
              rounded="md" 
              overflow="hidden"
              border="1px solid"
              borderColor="neutral-4"
              align="center"
              justify="center"
              bgColor="primary-12"
            >
               <Icon icon={getTrackIcon(track.hashtag)} width="28px" height="28px" color="var(--chakra-colors-primary-1)" />
            </Flex>
          </GridItem>

          {/* Central Content (Title, Description, Actions) */}
          <GridItem display="flex" flexDirection="column" gap={3}>
            <Heading
              fontSize={isDesktop ? "lg" : "md"}
              fontWeight="medium"
              color="fg"
            >
              {track.name}
            </Heading>

            <Text 
              color="neutral-2" 
              fontSize="0.9rem"
              lineHeight="1.5"
              lineClamp={2} 
            >
              {track.description}
            </Text>

            <Flex justify="space-between" align="center" mt={2}>
              <Button
                onClick={() => setIsOpen((prev) => !prev)}
                size="sm"
                rounded="md"
                color="white"
                bgColor={isOpen ? "primary-11" : "primary-1"}
                transition="all 0.2s"
                _hover={{ opacity: "0.9" }}
                fontWeight="normal"
                px={4}
              >
                <HStack gap={2}>
                  <Text>Explore track</Text>
                  <Icon icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"} width="1.2em" height="1.2em" />
                </HStack>
              </Button>

              {track.board && track.board.length > 0 && (
                <Flex>
                  {track.board.slice(0, 3).map((member, i) => (
                    <Box 
                      key={i} 
                      w="36px" 
                      h="36px" 
                      rounded="full" 
                      overflow="hidden"
                      border="1px solid"
                      borderColor="primary-1"
                      ml={i > 0 ? "-6px" : "0"}
                      zIndex={3 - i}
                    >
                       <Image 
                        src={member.avatarSrc} 
                        alt={member.name} 
                        objectFit="cover" 
                        w="100%" 
                        h="100%" 
                      />
                    </Box>
                  ))}
                </Flex>
              )}
            </Flex>
          </GridItem>

          {/* Sequence Badge (Right Desktop, Top Right Mobile via CSS order or flex placement) */}
          <GridItem justifySelf="end">
             <Text 
                color="neutral-2"
                fontWeight="bold"
                fontSize="0.9rem"
                opacity={0.6}
              >
                {formattedIndex}
              </Text>
          </GridItem>
        </Grid>
      </Card>

      {/* Mobile Inline Fallback (Exact preservation of existing logic) */}
      {!isDesktop && (
        <Box mt={4} w="full">
          <CommitteeDetails
            committee={track}
            isOpen={isOpen}
            borderColor={borderColor}
            positionBgColor={positionBgColor}
          />
        </Box>
      )}

      {/* Desktop Blurred Overlay Dialog */}
      {isDesktop && (
        <DialogRoot 
          open={isOpen} 
          onOpenChange={(e) => setIsOpen(e.open)} 
          placement="center" 
          scrollBehavior="inside"
        >
          <DialogBackdrop 
            bg="blackAlpha.700" 
            backdropFilter="blur(8px)" 
          />
          <DialogContent 
            bgColor="primary-dialog-bg" 
            color="fg"
            w="1100px"
            maxWidth="95vw"
            maxHeight="90vh"
            mx="auto"
            overflow="hidden"
            borderRadius="lg"
            backdropFilter="blur(20px)"
          >
            <DialogHeader pb={6} borderBottom="1px solid" borderColor="neutral-4">
              <HStack gap={4} align="center">
                <Flex 
                  w="48px" 
                  h="48px" 
                  rounded="lg" 
                  overflow="hidden"
                  border="1px solid"
                  borderColor="primary-1"
                  align="center"
                  justify="center"
                  bgColor="primary-7"
                  flexShrink={0}
                >
                  <Icon icon={getTrackIcon(track.hashtag)} width="24px" height="24px" color="var(--chakra-colors-primary-1)" />
                </Flex>
                <Heading size="lg" fontWeight="bold" color="fg">
                  {track.name}
                </Heading>
              </HStack>
            </DialogHeader>
            <DialogBody pb={6}>
              <TrackDialogBody track={track} />
            </DialogBody>
            <DialogCloseTrigger color="neutral-3" _hover={{ bg: "neutral-4", color: "fg" }} right="4" top="4" />
          </DialogContent>
        </DialogRoot>
      )}
    </Box>
  );
}
