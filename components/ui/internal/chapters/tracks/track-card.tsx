"use client";

import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { TrackData } from "@/data/chapters";
import { Avatar } from "@/components/ui/avatar";
import { Tooltip } from "@/components/ui/tooltip";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogBackdrop,
  DialogTitle,
} from "@/components/ui/dialog";
import TrackDialogBody from "./track-dialog-body";

const springIn = { type: "spring", stiffness: 260, damping: 28 } as const;

const getTrackIcon = (hashtag: string): string => {
  const iconMap: Record<string, string> = {
    "frontend":            "mdi:code-tags",
    "backend":             "mdi:database",
    "mobile-development":  "mdi:cellphone",
    "data-science":        "mdi:chart-scatter-plot",
    "ai":                  "mdi:brain",
    "basic-ai":            "mdi:brain",
    "advanced-ai":         "mdi:brain",
    "cyber-security":      "mdi:shield-check",
    "game-development":    "mdi:gamepad-variant",
    "embedded-systems":    "mdi:memory",
    "ros":                 "mdi:robot-outline",
    "pcb-design":          "mdi:developer-board",
    "mechanical":          "mdi:cogs",
    "ic-design":           "mdi:chip",
    "basic-automation":    "mdi:factory",
    "advanced-automation": "mdi:factory",
    "basic-distribution":  "mdi:transmission-tower",
    "smart-home":          "mdi:home-automation",
    "e-mobility":          "mdi:ev-station",
  };
  return iconMap[hashtag] ?? "mdi:book-outline";
};

interface TrackCardProps {
  track: TrackData;
  index: number;
  borderColor: string;
  positionBgColor: string;
}

export default function TrackCard({ track, index }: TrackCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const indexLabel = `#${String(index + 1).padStart(2, "0")}`;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (window.location.hash === `#${track.hashtag}`) {
      setIsOpen(true);
      setTimeout(() => {
        document.getElementById(track.hashtag)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    }
  }, [track.hashtag]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springIn, delay: index * 0.08 }}
      style={{ height: "100%" }}
    >
      <Box
        id={track.hashtag}
        borderRadius="20px"
        overflow="hidden"
        backgroundColor="primary-5"
        border="1px solid"
        borderColor="neutral-4"
        h="full"
        display="flex"
        flexDirection="column"
      >
        {/* Collapsed header — always visible */}
        <Flex padding={{ base: "20px", md: "28px" }} gap="20px" alignItems="flex-start" flex={1}>
          {/* Icon badge */}
          <Flex
            alignItems="center"
            justifyContent="center"
            width="56px"
            height="56px"
            borderRadius="14px"
            backgroundColor="primary-12"
            border="1px solid"
            borderColor="neutral-4"
            flexShrink={0}
            color="primary-8"
          >
            <Icon icon={getTrackIcon(track.hashtag)} width={24} height={24} />
          </Flex>

          {/* Right block */}
          <Flex direction="column" flex={1} gap="12px" minWidth={0} justifyContent="space-between">
            {/* Title + index badge */}
            <Flex alignItems="center" justifyContent="space-between" gap="12px">
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                fontWeight={500}
                lineHeight="1.4"
                color="fg"
              >
                {track.name}
              </Heading>
              <Box
                backgroundColor="primary-12"
                borderRadius="full"
                px="12px"
                py="4px"
                flexShrink={0}
              >
                <Text fontSize="13px" color="primary-8" whiteSpace="nowrap">
                  {indexLabel}
                </Text>
              </Box>
            </Flex>

            {/* Truncated description */}
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight="1.6"
              color="neutral-2"
              overflow="hidden"
              textOverflow="ellipsis"
              display="-webkit-box"
              style={{ WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
            >
              {track.description}
            </Text>

            {/* Button + avatars */}
            <Flex alignItems="center" justifyContent="space-between" gap="16px" mt="4px">
              <Button
                onClick={() => setIsOpen((p) => !p)}
                backgroundColor="primary-1"
                color="white"
                borderRadius="10px"
                height="44px"
                px="20px"
                fontSize="16px"
                fontWeight={500}
                _hover={{ opacity: 0.85 }}
                transition="opacity 0.2s ease"
                display="flex"
                alignItems="center"
                gap="8px"
              >
                {!isDesktop && isOpen ? "Collapse" : "Explore track"}
                {!isDesktop ? (
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "flex" }}
                  >
                    <Icon icon="ph:caret-down-bold" width={16} height={16} color="white" />
                  </motion.div>
                ) : (
                  <Icon icon="ph:arrow-right-bold" width={16} height={16} color="white" />
                )}
              </Button>

              {track.board && track.board.length > 0 && (
                <Flex alignItems="center" flexShrink={0}>
                  {track.board.slice(0, 4).map((member, i) => (
                    <Tooltip
                      key={i}
                      content={`${member.name} — ${member.position}`}
                      showArrow
                      openDelay={0}
                    >
                      <Box
                        ml={i > 0 ? "-8px" : "0"}
                        position="relative"
                        zIndex={track.board.length - i}
                        borderRadius="full"
                        border="2px solid"
                        borderColor="primary-5"
                        cursor="pointer"
                        transition="transform 0.2s ease"
                        _hover={{ transform: "scale(1.15)", zIndex: 20 }}
                      >
                        <Avatar name={member.name} src={member.avatarSrc} size="sm" />
                      </Box>
                    </Tooltip>
                  ))}
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>

        {/* Mobile: inline expand */}
        {!isDesktop && (
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ overflow: "hidden" }}
              >
                <Box px="20px" pb="24px">
                  <TrackDialogBody track={track} />
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Box>

      {/* Desktop: dialog */}
      {isDesktop && (
        <DialogRoot
          open={isOpen}
          onOpenChange={(e) => setIsOpen(e.open)}
          placement="center"
          scrollBehavior="inside"
        >
          <DialogBackdrop bg="blackAlpha.700" backdropFilter="blur(8px)" />
          <DialogContent
            bgColor="primary-dialog-bg"
            backdropFilter="blur(20px)"
            borderRadius="20px"
            border="1px solid"
            borderColor="card-glass-border"
            w="1100px"
            maxWidth="95vw"
            maxHeight="90vh"
            overflow="hidden"
          >
            <DialogHeader pb={6} borderBottom="1px solid" borderColor="neutral-4" px="33px" pt="28px">
              <Flex alignItems="center" gap="16px">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  width="48px"
                  height="48px"
                  borderRadius="12px"
                  backgroundColor="primary-12"
                  border="1px solid"
                  borderColor="card-glass-border"
                  flexShrink={0}
                  color="primary-8"
                >
                  <Icon icon={getTrackIcon(track.hashtag)} width={22} height={22} />
                </Flex>
                <DialogTitle fontSize="24px" fontWeight={500} color="fg" lineHeight="33px">
                  {track.name}
                </DialogTitle>
              </Flex>
            </DialogHeader>
            <DialogBody px="33px" pb="33px">
              <TrackDialogBody track={track} />
            </DialogBody>
            <DialogCloseTrigger color="neutral-3" _hover={{ bg: "neutral-4", color: "fg" }} right="4" top="4" />
          </DialogContent>
        </DialogRoot>
      )}
    </motion.div>
  );
}
