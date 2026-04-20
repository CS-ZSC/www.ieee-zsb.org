"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Chapters from "./chapters";
import { Box, Text, Menu, Portal, VStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const MotionDiv = motion.div;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: -6 },
  visible: { opacity: 1, y:  0, transition: { duration: 0.18, ease: "easeOut" as const } },
};

export default function ChaptersMenu() {
  const router         = useRouter();
  const pathname       = usePathname();
  const indicatorColor = useColorModeValue("black", "white");
  const panelBg        = useColorModeValue("rgba(242,251,255,0.88)", "rgba(0,34,53,0.78)");
  const panelBorder    = useColorModeValue("rgba(0,102,153,0.18)", "rgba(255,255,255,0.10)");
  const panelShadow    = useColorModeValue(
    "0 12px 40px rgba(0,102,153,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
    "0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
  );
  const itemBg         = useColorModeValue("rgba(0,102,153,0.06)", "rgba(0,84,129,0.35)");
  const itemBorder     = useColorModeValue("rgba(0,102,153,0.12)", "rgba(255,255,255,0.06)");
  const triggerHoverBg = useColorModeValue("rgba(0,102,153,0.08)", "rgba(255,255,255,0.06)");
  const [open, setOpen] = useState(false);

  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        <Flex
          alignItems="center"
          cursor="pointer"
          gap={1.5}
          px={3}
          py={1.5}
          rounded="xl"
          border="1px solid"
          borderColor={open ? panelBorder : "transparent"}
          bg={open ? triggerHoverBg : "transparent"}
          transition="all 0.2s ease"
          _hover={{ bg: triggerHoverBg, borderColor: panelBorder }}
          color="neutral-1"
          userSelect="none"
        >
          <Text fontWeight="bold" fontSize="sm">Chapters</Text>
          <MotionDiv
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Icon icon="lucide:chevron-down" width={15} height={15} />
          </MotionDiv>
        </Flex>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            padding={2}
            rounded="2xl"
            boxShadow={panelShadow}
            bg={panelBg}
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            color="neutral-1"
            marginTop={2}
            border="1px solid"
            borderColor={panelBorder}
            w={{ base: "calc(100vw - 32px)", md: "320px" }}
            maxH={{ base: "72dvh", md: "none" }}
            overflowY="auto"
          >
            <MotionDiv
              variants={listVariants}
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {Chapters.map((chapter) => {
                const isActive = pathname.startsWith(chapter.href);
                const accentVar = `var(--chakra-colors-${chapter.identityColor})`;

                return (
                  <MotionDiv key={chapter.id} variants={itemVariants}>
                    <Menu.Item
                      value={chapter.href}
                      cursor="pointer"
                      borderRadius="xl"
                      bg={isActive
                        ? `color-mix(in srgb, ${accentVar} 12%, var(--chakra-colors-primary-5))`
                        : itemBg
                      }
                      padding={0}
                      minH={{ base: "4.5rem", md: "4rem" }}
                      border="1px solid"
                      borderColor={isActive
                        ? `color-mix(in srgb, ${accentVar} 45%, transparent)`
                        : itemBorder
                      }
                      color="neutral-1"
                      overflow="hidden"
                      _hover={{
                        bg: `color-mix(in srgb, ${accentVar} 14%, transparent)`,
                        borderColor: `color-mix(in srgb, ${accentVar} 45%, transparent)`,
                      }}
                      transition="all 0.15s ease"
                      onSelect={() => router.push(chapter.href)}
                    >
                      <Flex alignItems="center" w="full" h="full">
                        {/* accent bar */}
                        <Box
                          w="3px"
                          minH={{ base: "4.5rem", md: "4rem" }}
                          flexShrink={0}
                          bg={accentVar}
                          opacity={isActive ? 1 : 0.35}
                        />

                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                          gap={2}
                          w="full"
                          px={{ base: 3, md: 3 }}
                          py={{ base: 3, md: 2 }}
                        >
                          <Flex gap={3} alignItems="center">
                            {/* tinted logo */}
                            <Flex
                              justifyContent="center"
                              alignItems="center"
                              w={{ base: 11, md: 10 }}
                              h={{ base: 11, md: 10 }}
                              rounded="lg"
                              flexShrink={0}
                              border="1px solid"
                              bg={`color-mix(in srgb, ${accentVar} 18%, transparent)`}
                              borderColor={`color-mix(in srgb, ${accentVar} 28%, transparent)`}
                            >
                              <Image
                                src={indicatorColor === "white" ? chapter.whitePath : chapter.blackPath}
                                alt={chapter.alt}
                                width={28}
                                height={28}
                              />
                            </Flex>

                            <VStack justifyContent="center" alignItems="flex-start" gap={0.5}>
                              <Text
                                fontSize={{ base: "md", md: "sm" }}
                                fontWeight="bold"
                                lineHeight="1.2"
                              >
                                {chapter.name}
                              </Text>
                              <Text
                                fontSize="xs"
                                opacity={isActive ? 0.85 : 0.55}
                                lineHeight="1.3"
                              >
                                {chapter.description}
                              </Text>
                            </VStack>
                          </Flex>

                          <Box
                            flexShrink={0}
                            color={isActive ? accentVar : "neutral-2"}
                            opacity={isActive ? 1 : 0.4}
                          >
                            <Icon icon="lucide:chevron-right" width={14} height={14} />
                          </Box>
                        </Flex>
                      </Flex>
                    </Menu.Item>
                  </MotionDiv>
                );
              })}
            </MotionDiv>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
