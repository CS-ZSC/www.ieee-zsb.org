"use client";

import React, { useState } from "react";
import { Text, Heading, Box, Flex, Button, Image } from "@chakra-ui/react";
import { TrackData } from "@/data/chapters";
import { useWindowType } from "@/hooks/use-window-type";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Avatar } from "@/components/ui/avatar";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";
import { toaster } from "@/components/ui/toaster";
import { getSlug } from "@/data/position";
import {
  DialogRoot,
  DialogContent,
  DialogCloseTrigger,
  DialogBody,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ------------------------------------------------------------------ */
/*  Track icon mapping                                                 */
/* ------------------------------------------------------------------ */
const trackIcons: Record<string, string> = {
  frontend: "ph:code-bold",
  backend: "ph:database-bold",
  "mobile-development": "ph:device-mobile-bold",
  "data-science": "ph:chart-bar-bold",
  ai: "ph:brain-bold",
  "cyber-security": "ph:shield-check-bold",
  default: "ph:gear-bold",
};

function getTrackIcon(hashtag: string): string {
  return trackIcons[hashtag] ?? trackIcons.default;
}

/* ------------------------------------------------------------------ */
/*  Motion                                                             */
/* ------------------------------------------------------------------ */
const springIn = { type: "spring" as const, stiffness: 100, damping: 22 };

/* ------------------------------------------------------------------ */
/*  Expanded details content (shared between inline & dialog)          */
/* ------------------------------------------------------------------ */
function TrackExpandedDetails({
  track,
  isDesktop,
}: {
  track: TrackData;
  isDesktop: boolean;
}) {
  const [descExpanded, setDescExpanded] = useState(false);
  const isLongDesc = track.description.length > 200;

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toaster.create({
      title: "Email copied!",
      description: `${email} copied to clipboard.`,
      type: "success",
      meta: { closable: true },
    });
  };

  const hasLeaders = track.board && track.board.length > 0;

  /* ---------- Leader card for a single member ---------- */
  const leaderCard = (member: TrackData["board"][number], i: number) => (
    <Box
      key={i}
      flex={isDesktop ? "1 1 calc(33.333% - 7px)" : "0 1 calc(50% - 5px)"}
      maxWidth={isDesktop ? "calc(33.333% - 7px)" : "calc(50% - 5px)"}
    >
      <Link href={`/about/member/${getSlug(member.name)}`} style={{ textDecoration: "none", color: "inherit" }}>
        {isDesktop ? (
          <Flex
            direction="row"
            alignItems="center"
            gap="16px"
            padding="18px"
            borderRadius="16px"
            border="1px solid"
            borderColor="card-glass-border"
            backgroundColor="card-glass-bg"
            backdropFilter="blur(10px)"
            boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
            position="relative"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px -8px var(--chakra-colors-primary-11)",
            }}
            transition="all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
          >
            <Link href={`/about/member/${getSlug(member.name)}`} onClick={(e) => e.stopPropagation()}>
              <Box
                position="absolute"
                top="8px"
                right="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="24px"
                minWidth="24px"
                maxWidth="24px"
                borderRadius="full"
                backgroundColor="primary-1"
                color="white"
                cursor="pointer"
                overflow="hidden"
                zIndex={2}
                whiteSpace="nowrap"
                _hover={{ maxWidth: "120px", paddingX: "10px", borderRadius: "12px", gap: "4px" }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                gap="0px"
                paddingX="0"
              >
                <Icon icon="ph:question-fill" width={14} height={14} style={{ flexShrink: 0 }} />
                <Box
                  as="span"
                  fontSize="11px"
                  fontWeight={600}
                  overflow="hidden"
                  maxWidth="0px"
                  opacity={0}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  css={{ "a:hover &": { maxWidth: "80px", opacity: 1 } }}
                >
                  Role
                </Box>
              </Box>
            </Link>
            <Image
              src={member.avatarSrc}
              alt={member.name}
              borderRadius="full"
              width="80px"
              height="80px"
              objectFit="cover"
              border="3px solid"
              borderColor="primary-1"
              flexShrink={0}
            />
            <Flex direction="column" gap="6px" flex="1" minWidth={0}>
              <Text fontSize="16px" fontWeight={600} color="fg" lineHeight={1.3} truncate>
                {member.name}
              </Text>
              <Text fontSize="13px" color="primary-8" lineHeight={1.3}>
                {member.position}
              </Text>
              <Flex gap="8px" alignItems="center" onClick={(e) => e.stopPropagation()}>
                <Link href={member.linkedin} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    width="34px"
                    height="34px"
                    borderRadius="10px"
                    border="1px solid"
                    borderColor="neutral-4"
                    color="neutral-3"
                    _hover={{ color: "primary-1", borderColor: "primary-1" }}
                    transition="all 0.2s ease"
                  >
                    <Icon icon="mage:linkedin" width={16} height={16} />
                  </Flex>
                </Link>
                <Box
                  as="button"
                  onClick={(e) => { e.stopPropagation(); handleCopyEmail(member.email); }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="34px"
                  height="34px"
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="neutral-4"
                  color="neutral-3"
                  _hover={{ color: "primary-1", borderColor: "primary-1" }}
                  transition="all 0.2s ease"
                  cursor="pointer"
                >
                  <Icon icon="ic:outline-alternate-email" width={16} height={16} />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex
            direction="column"
            alignItems="center"
            gap="14px"
            padding="24px 16px 20px"
            borderRadius="16px"
            border="1px solid"
            borderColor="card-glass-border"
            backgroundColor="card-glass-bg"
            backdropFilter="blur(10px)"
            boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
            position="relative"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px -8px var(--chakra-colors-primary-11)",
            }}
            transition="all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
            role="group"
          >
            <Link href={`/about/member/${getSlug(member.name)}`} onClick={(e) => e.stopPropagation()}>
              <Box
                position="absolute"
                top="8px"
                right="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="24px"
                minWidth="24px"
                maxWidth="24px"
                borderRadius="full"
                backgroundColor="primary-1"
                color="white"
                cursor="pointer"
                overflow="hidden"
                zIndex={2}
                whiteSpace="nowrap"
                _hover={{ maxWidth: "120px", paddingX: "10px", borderRadius: "12px", gap: "4px" }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                gap="0px"
                paddingX="0"
              >
                <Icon icon="ph:question-fill" width={14} height={14} style={{ flexShrink: 0 }} />
                <Box
                  as="span"
                  fontSize="11px"
                  fontWeight={600}
                  overflow="hidden"
                  maxWidth="0px"
                  opacity={0}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  css={{ "a:hover &": { maxWidth: "80px", opacity: 1 } }}
                >
                  Role
                </Box>
              </Box>
            </Link>
            <Box position="relative">
              <Image
                src={member.avatarSrc}
                alt={member.name}
                borderRadius="full"
                width="110px"
                height="110px"
                objectFit="cover"
                border="3px solid"
                borderColor="primary-1"
              />
              <Flex
                position="absolute"
                inset="0"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
                backgroundColor="overlay"
                opacity={0}
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.25s ease"
                gap="6px"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href={member.linkedin} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    width="36px"
                    height="36px"
                    borderRadius="full"
                    backgroundColor="white"
                    color="primary-1"
                  >
                    <Icon icon="mage:linkedin" width={18} height={18} />
                  </Flex>
                </Link>
                <Box
                  as="button"
                  onClick={(e) => { e.stopPropagation(); handleCopyEmail(member.email); }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="36px"
                  height="36px"
                  borderRadius="full"
                  backgroundColor="white"
                  color="primary-1"
                  cursor="pointer"
                >
                  <Icon icon="ic:outline-alternate-email" width={18} height={18} />
                </Box>
              </Flex>
            </Box>
            <Flex direction="column" alignItems="center" gap="4px">
              <Text fontSize="16px" fontWeight={600} color="fg" textAlign="center" lineHeight={1.3}>
                {member.name}
              </Text>
              <Text fontSize="13px" color="primary-8" textAlign="center" lineHeight={1.4}>
                {member.position}
              </Text>
            </Flex>
          </Flex>
        )}
      </Link>
    </Box>
  );

  /* ---------- Leaders section block ---------- */
  const leadersSection = hasLeaders ? (
    <Flex direction="column" gap="16px">
      <Flex direction="column" gap="6px">
        <Text fontSize="16px" fontWeight={600} color="fg">Leaders</Text>
        <Box width="32px" height="2px" backgroundColor="primary-1" borderRadius="full" />
      </Flex>
      <Flex flexWrap="wrap" gap="10px" justifyContent="center">
        {track.board.map((member, i) => leaderCard(member, i))}
      </Flex>
    </Flex>
  ) : null;

  /* ---------- Description block ---------- */
  const descriptionBlock = (
    <Box position="relative" paddingLeft={isDesktop ? "28px" : "20px"}>
      <Text
        position="absolute"
        top="-8px"
        left="0"
        fontSize="48px"
        lineHeight={1}
        color="primary-12"
        fontWeight={700}
        userSelect="none"
      >
        &ldquo;
      </Text>
      <Box>
        <Text
          fontSize={isDesktop ? "16px" : "14px"}
          lineHeight={1.85}
          color="neutral-2"
          textWrap="pretty"
          {...(!descExpanded && isLongDesc
            ? {
                overflow: "hidden",
                display: "-webkit-box",
                style: {
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical" as const,
                },
              }
            : {})}
        >
          {track.description}
        </Text>
        {isLongDesc && (
          <Text
            as="button"
            fontSize="13px"
            fontWeight={600}
            color="primary-1"
            cursor="pointer"
            marginTop="6px"
            _hover={{ textDecoration: "underline" }}
            onClick={() => setDescExpanded(!descExpanded)}
          >
            {descExpanded ? "Show less" : "Show more"}
          </Text>
        )}
      </Box>
    </Box>
  );

  /* ---------- Goals + Activities block ---------- */
  const goalsActivitiesBlock = isDesktop ? (
    <Flex direction="column" gap="36px">
      {track.goals.length > 0 && (
        <Flex direction="column" gap="16px">
          <Flex direction="column" gap="6px">
            <Text fontSize="16px" fontWeight={600} color="fg">Goals</Text>
            <Box width="32px" height="2px" backgroundColor="primary-1" borderRadius="full" />
          </Flex>
          <Flex direction="column" gap="10px" paddingLeft="4px">
            {track.goals.map((goal, i) => (
              <Flex key={i} gap="12px" alignItems="flex-start">
                <Box color="primary-1" flexShrink={0} marginTop="3px">
                  <Icon icon="ph:check-circle-fill" width={18} height={18} />
                </Box>
                <Text fontSize="14px" lineHeight={1.7} color="neutral-2">{goal}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
      {track.activities && track.activities.length > 0 && (
        <Flex direction="column" gap="16px">
          <Flex direction="column" gap="6px">
            <Text fontSize="16px" fontWeight={600} color="fg">Activities</Text>
            <Box width="32px" height="2px" backgroundColor="primary-1" borderRadius="full" />
          </Flex>
          <Flex gap="12px" flexWrap="wrap">
            {track.activities.map((activity, i) => (
              <Box
                key={i}
                flex="1 1 calc(50% - 6px)"
                minWidth="240px"
                padding="20px"
                borderRadius="16px"
                backgroundColor="card-glass-bg"
                border="1px solid"
                borderColor="card-glass-border"
                backdropFilter="blur(10px)"
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px -8px var(--chakra-colors-primary-11)",
                }}
                transition="transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                cursor="default"
              >
                <Flex direction="column" gap="8px">
                  <Flex alignItems="center" gap="10px">
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      width="28px"
                      height="28px"
                      borderRadius="full"
                      border="1.5px solid"
                      borderColor="primary-1"
                      flexShrink={0}
                    >
                      <Text fontSize="12px" fontWeight={600} color="primary-1" lineHeight={1}>{i + 1}</Text>
                    </Flex>
                    <Text fontSize="15px" fontWeight={600} color="fg" lineHeight={1.3}>{activity.title}</Text>
                  </Flex>
                  <Text fontSize="13px" lineHeight={1.7} color="neutral-3" paddingLeft="38px">{activity.description}</Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  ) : (
    <>
      {track.goals.length > 0 && (
        <Flex direction="column" gap="14px">
          <Flex direction="column" gap="6px">
            <Text fontSize="16px" fontWeight={600} color="fg">Goals</Text>
            <Box width="32px" height="2px" backgroundColor="primary-1" borderRadius="full" />
          </Flex>
          <Flex direction="column" gap="8px" paddingLeft="4px">
            {track.goals.map((goal, i) => (
              <Flex key={i} gap="12px" alignItems="flex-start">
                <Box color="primary-1" flexShrink={0} marginTop="2px">
                  <Icon icon="ph:check-circle-fill" width={16} height={16} />
                </Box>
                <Text fontSize="13px" lineHeight={1.65} color="neutral-2">{goal}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
      {track.activities && track.activities.length > 0 && (
        <Flex direction="column" gap="14px">
          <Flex direction="column" gap="6px">
            <Text fontSize="16px" fontWeight={600} color="fg">Activities</Text>
            <Box width="32px" height="2px" backgroundColor="primary-1" borderRadius="full" />
          </Flex>
          <Flex direction="column" gap="10px">
            {track.activities.map((activity, i) => (
              <Box
                key={i}
                padding="14px 16px"
                borderRadius="14px"
                backgroundColor="card-glass-bg"
                border="1px solid"
                borderColor="card-glass-border"
                backdropFilter="blur(10px)"
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
              >
                <Flex gap="14px" alignItems="flex-start">
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    minWidth="28px"
                    height="28px"
                    borderRadius="full"
                    border="1.5px solid"
                    borderColor="primary-1"
                    marginTop="1px"
                  >
                    <Text fontSize="12px" fontWeight={600} color="primary-1" lineHeight={1}>{i + 1}</Text>
                  </Flex>
                  <Flex direction="column" gap="4px">
                    <Text fontSize="14px" fontWeight={600} color="fg">{activity.title}</Text>
                    <Text fontSize="13px" lineHeight={1.7} color="neutral-3">{activity.description}</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );

  /* ---------- Render ---------- */
  return (
    <Flex direction="column" gap="36px">
      {descriptionBlock}
      <Box height="1px" backgroundColor="card-glass-border" />
      {goalsActivitiesBlock}

      {hasLeaders && (
        <>
          <Box height="1px" backgroundColor="card-glass-border" />
          {leadersSection}
        </>
      )}
    </Flex>
  );
}

/* ================================================================== */
/*  TrackCard — Figma-faithful collapsed card with expand              */
/* ================================================================== */
function TrackCard({
  track,
  index,
  isDesktop,
  onToggle,
  isOpen,
}: {
  track: TrackData;
  color: string;
  index: number;
  isDesktop: boolean;
  onToggle: () => void;
  isOpen: boolean;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const indexLabel = `#${String(index + 1).padStart(2, "0")}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springIn, delay: index * 0.1 }}
    >
      <Box
        borderRadius="20px"
        overflow="hidden"
        backgroundColor="primary-5"
        border="1px solid"
        borderColor="neutral-4"
      >
        {/* ---- Collapsed content (always visible) ---- */}
        <Flex
          padding={isDesktop ? "33px" : "20px"}
          gap="20px"
          alignItems="flex-start"
        >
          {/* Icon badge using chapter color */}
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
            <Icon
              icon={getTrackIcon(track.hashtag)}
              width={24}
              height={24}
            />
          </Flex>

          {/* Right content block */}
          <Flex direction="column" flex={1} gap="12px" minWidth={0}>
            {/* Title row + index badge */}
            <Flex
              alignItems="center"
              justifyContent="space-between"
              gap="12px"
            >
              <Heading
                fontSize={isDesktop ? "22px" : "18px"}
                fontWeight={500}
                lineHeight="33px"
                color="fg"
              >
                {track.name}
              </Heading>
              <Box
                backgroundColor="primary-12"
                borderRadius="full"
                paddingX="12px"
                paddingY="4px"
                flexShrink={0}
              >
                <Text
                  fontSize="13px"
                  lineHeight="19.5px"
                  color="primary-8"
                  whiteSpace="nowrap"
                >
                  {indexLabel}
                </Text>
              </Box>
            </Flex>

            {/* Truncated description */}
            <Text
              fontSize={isDesktop ? "16px" : "14px"}
              lineHeight="25px"
              color="neutral-2"
              overflow="hidden"
              textOverflow="ellipsis"
              display="-webkit-box"
              style={{
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical" as const,
              }}
            >
              {track.description}
            </Text>

            {/* Bottom row: button + instructor */}
            <Flex
              alignItems="center"
              justifyContent="space-between"
              gap="16px"
              marginTop="8px"
            >
              {/* Show more button */}
              <Button
                onClick={onToggle}
                backgroundColor="primary-1"
                color="white"
                borderRadius="10px"
                height="44px"
                paddingX="20px"
                fontSize="16px"
                fontWeight={500}
                _hover={{ opacity: 0.85 }}
                transition="opacity 0.2s ease"
                display="flex"
                alignItems="center"
                gap="8px"
              >
                {!isDesktop && isOpen ? "Collapse" : "Explore track"}
                {!isDesktop && (
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon
                      icon="ph:caret-down-bold"
                      width={16}
                      height={16}
                      color="white"
                    />
                  </motion.div>
                )}
                {isDesktop && (
                  <Icon
                    icon="ph:arrow-right-bold"
                    width={16}
                    height={16}
                    color="white"
                  />
                )}
              </Button>

              {/* Instructor avatars with name tooltips */}
              {track.board && track.board.length > 0 && (
                <Flex
                  alignItems="center"
                  gap="0"
                  flexShrink={0}
                >
                  {track.board.map((member, i) => (
                    <Tooltip
                      key={i}
                      content={`${member.name} — ${member.position}`}
                      showArrow
                      openDelay={0}
                    >
                      <Box
                        marginLeft={i > 0 ? "-8px" : "0"}
                        position="relative"
                        zIndex={track.board.length - i}
                        borderRadius="full"
                        border="2px solid"
                        borderColor="primary-5"
                        cursor="pointer"
                        transition="transform 0.2s ease"
                        _hover={{ transform: "scale(1.15)", zIndex: 20 }}
                      >
                        <Avatar
                          name={member.name}
                          src={member.avatarSrc}
                          size="sm"
                        />
                      </Box>
                    </Tooltip>
                  ))}
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>

        {/* ---- Mobile: inline expanded details ---- */}
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
                <Box padding="0 20px 24px 20px">
                  <TrackExpandedDetails track={track} isDesktop={false} />
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Box>

      {/* ---- Desktop: dialog modal ---- */}
      {isDesktop && (
        <DialogRoot
          open={isOpen}
          onOpenChange={({ open }: { open: boolean }) => {
            if (!open) onToggle();
          }}
          size="xl"
          placement="center"
          motionPreset="slide-in-bottom"
        >
          <DialogContent
            backgroundColor="dialog-glass-bg"
            backdropFilter="blur(12px)"
            borderRadius="20px"
            border="1px solid"
            borderColor="card-glass-border"
            boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
            maxWidth="1100px"
            width="90vw"
            maxHeight="85vh"
            overflow="auto"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            backdropProps={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              background: "var(--chakra-colors-overlay)",
            }}
          >
            <DialogCloseTrigger />
            <DialogHeader
              padding="28px 33px 20px 33px"
              borderBottom="1px solid"
              borderBottomColor="card-glass-border"
            >
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
                <DialogTitle
                  fontSize="24px"
                  fontWeight={500}
                  color="fg"
                  lineHeight="33px"
                >
                  {track.name}
                </DialogTitle>
              </Flex>
            </DialogHeader>
            <DialogBody padding="24px 33px 33px 33px">
              <TrackExpandedDetails track={track} isDesktop={true} />
            </DialogBody>
          </DialogContent>
        </DialogRoot>
      )}
    </motion.div>
  );
}

/* ================================================================== */
/*  Tracks                                                             */
/* ================================================================== */
export function Tracks({
  tracks,
  color_scheme = "primary-1",
}: {
  tracks: TrackData[];
  color_scheme?: string;
}) {
  const { isDesktop } = useWindowType();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Flex
      gap="24px"
      width="full"
      flexWrap="wrap"
    >
      {tracks.map((track, index) => {
        const isOpen = openIndex === index;
        return (
          <Box
            key={track.id}
            flex={isDesktop ? "1 1 calc(50% - 12px)" : "1 1 100%"}
            minWidth={0}
          >
            <TrackCard
              track={track}
              color={color_scheme}
              index={index}
              isDesktop={isDesktop}
              isOpen={isOpen}
              onToggle={() => setOpenIndex(isOpen ? null : index)}
            />
          </Box>
        );
      })}
    </Flex>
  );
}
