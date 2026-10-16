"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Chapters, Clubs, type NavGroup } from "./nav-groups";
import { Links } from "./links";
import { useSetAtom, useAtom, type PrimitiveAtom } from "jotai";
import {
  SmallHeaderAtom,
  SmallHeaderChaptersAccordionAtom,
  SmallHeaderClubsAccordionAtom,
} from "@/atoms/atoms";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function SmallHeaderLinks() {
  const pathname = usePathname();
  const setSmallHeaderAtom = useSetAtom(SmallHeaderAtom);

  function handleLinkClick() {
    setSmallHeaderAtom((prev) => {
      localStorage.setItem("SmallHeaderAtom", "false");
      return !prev;
    });
  }

  return (
    <Flex
      flexDirection="column"
      alignSelf="flex-start"
      gap={3}
      marginTop={3}
      fontWeight="bold"
      w="full"
    >
      {groupAccordions.map(({ group, openAtom, storageKey }) => (
        <GroupAccordion
          key={group.label}
          group={group}
          openAtom={openAtom}
          storageKey={storageKey}
          pathname={pathname}
          onNavigate={handleLinkClick}
        />
      ))}

      {Links.map((link) => (
        <Box key={link.path}>
          <Link href={link.path} onClick={handleLinkClick}>
            <motion.div
              style={{ position: "relative", transition: "all 0.3s ease-in-out" }}
            >
              {pathname === link.path && (
                <motion.div
                  layoutId="activeLinkBorder"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    position: "absolute",
                    left: -10,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    borderRadius: "5px",
                  }}
                />
              )}
              {link.name}
            </motion.div>
          </Link>
        </Box>
      ))}
    </Flex>
  );
}

// Each group remembers whether it's expanded, under its own storage key.
const groupAccordions: { group: NavGroup; openAtom: PrimitiveAtom<boolean>; storageKey: string }[] = [
  { group: Chapters, openAtom: SmallHeaderChaptersAccordionAtom, storageKey: "SmallHeaderChaptersAccordionAtom" },
  { group: Clubs, openAtom: SmallHeaderClubsAccordionAtom, storageKey: "SmallHeaderClubsAccordionAtom" },
];

function GroupAccordion({
  group,
  openAtom,
  storageKey,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  openAtom: PrimitiveAtom<boolean>;
  storageKey: string;
  pathname: string;
  onNavigate: () => void;
}) {
  const [isOpen] = useAtom(openAtom);

  return (
    <>
      <AccordionToggle label={group.label} openAtom={openAtom} storageKey={storageKey} />

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <Flex flexDirection="column" gap={2} w="full">
          <GroupItems group={group} pathname={pathname} onNavigate={onNavigate} />
        </Flex>
      </motion.div>
    </>
  );
}

function GroupItems({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  const indicatorColor = useColorModeValue("black", "white");
  const itemBg         = useColorModeValue("rgba(0,102,153,0.06)", "rgba(0,84,129,0.35)");
  const itemBorder     = useColorModeValue("rgba(0,102,153,0.12)", "rgba(255,255,255,0.07)");

  return (
    <>
      {group.items.map((chapter) => {
        const isActive  = pathname.startsWith(chapter.href);
        const accentVar = `var(--chakra-colors-${chapter.identityColor})`;

        return (
          <Link key={chapter.id} href={chapter.href} onClick={onNavigate} style={{ display: "block" }}>
            <Flex
              alignItems="center"
              w="full"
              borderRadius="xl"
              border="1px solid"
              borderColor={isActive ? `color-mix(in srgb, ${accentVar} 45%, transparent)` : itemBorder}
              bg={isActive ? `color-mix(in srgb, ${accentVar} 12%, var(--chakra-colors-primary-5))` : itemBg}
              overflow="hidden"
              minH="3.8rem"
              transition="all 0.15s ease"
              _hover={{
                bg: `color-mix(in srgb, ${accentVar} 12%, transparent)`,
                borderColor: `color-mix(in srgb, ${accentVar} 45%, transparent)`,
              }}
            >
              {/* accent bar */}
              <Box
                w="3px"
                minH="3.8rem"
                flexShrink={0}
                bg={accentVar}
                opacity={isActive ? 1 : 0.35}
              />

              <Flex alignItems="center" gap={3} px={3} py={2} w="full" justifyContent="space-between">
                <Flex gap={3} alignItems="center">
                  {/* tinted logo */}
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    w={9}
                    h={9}
                    rounded="lg"
                    flexShrink={0}
                    bg={`color-mix(in srgb, ${accentVar} 18%, transparent)`}
                    border="1px solid"
                    borderColor={`color-mix(in srgb, ${accentVar} 28%, transparent)`}
                  >
                    <Image
                      src={indicatorColor === "white" ? chapter.whitePath : chapter.blackPath}
                      alt={chapter.alt}
                      width={24}
                      height={24}
                    />
                  </Flex>

                  <VStack justifyContent="center" alignItems="flex-start" gap={0.5}>
                    <Text fontSize="sm" fontWeight="bold" lineHeight="1.2" color="neutral-1">
                      {chapter.name}
                    </Text>
                    <Text fontSize="xs" opacity={isActive ? 0.85 : 0.55} lineHeight="1.3" color="neutral-1" fontWeight="normal">
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
          </Link>
        );
      })}
    </>
  );
}

function AccordionToggle({
  label,
  openAtom,
  storageKey,
}: {
  label: string;
  openAtom: PrimitiveAtom<boolean>;
  storageKey: string;
}) {
  const [isOpen, setIsOpen] = useAtom(openAtom);

  function toggle() {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem(storageKey, newValue.toString());
      return newValue;
    });
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={2}
      cursor="pointer"
      onClick={toggle}
      w="fit-content"
    >
      <span>{label}</span>
      <Box marginTop={1}>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon icon="lucide:chevron-down" width={20} height={20} />
        </motion.div>
      </Box>
    </Flex>
  );
}
