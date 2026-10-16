"use client";

import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import type { Position } from "@/data/position";
import { getMemberSlug } from "@/data/position";
import { toaster } from "@/components/ui/toaster";
import { Avatar } from "@/components/ui/avatar";

export function handleCopyEmail(email: string) {
  navigator.clipboard.writeText(email);
  toaster.create({
    title: "Email copied!",
    description: `${email} has been copied to your clipboard.`,
    type: "success",
    meta: { closable: true },
  });
}

export function SocialButtons({
  linkedin,
  email,
  size = 32,
  iconSize = 16,
}: {
  linkedin?: string;
  email?: string;
  size?: number;
  iconSize?: number;
}) {
  if (!linkedin && !email) return null;

  return (
    <Flex gap="8px" alignItems="center" position="relative" zIndex={1} onClick={(e) => e.stopPropagation()}>
      {linkedin && (
        <Link href={linkedin} target="_blank" onClick={(e) => e.stopPropagation()}>
          <Flex
            alignItems="center"
            justifyContent="center"
            width={`${size}px`}
            height={`${size}px`}
            borderRadius="10px"
            border="1px solid"
            borderColor="neutral-4"
            color="neutral-3"
            _hover={{ color: "primary-1", borderColor: "primary-1" }}
            transition="all 0.2s ease"
          >
            <Icon icon="mage:linkedin" width={iconSize} height={iconSize} />
          </Flex>
        </Link>
      )}
      {email && (
        <Box
          as="button"
          onClick={() => handleCopyEmail(email)}
          onClickCapture={(e) => e.stopPropagation()}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={`${size}px`}
          height={`${size}px`}
          borderRadius="10px"
          border="1px solid"
          borderColor="neutral-4"
          color="neutral-3"
          _hover={{ color: "primary-1", borderColor: "primary-1" }}
          transition="all 0.2s ease"
          cursor="pointer"
        >
          <Icon icon="ic:outline-alternate-email" width={iconSize} height={iconSize} />
        </Box>
      )}
    </Flex>
  );
}

/** Corner hint that the card opens the member's profile. */
function ProfileArrow() {
  return (
    <Flex
      aria-hidden
      position="absolute"
      top="8px"
      right="8px"
      alignItems="center"
      justifyContent="center"
      boxSize="24px"
      borderRadius="full"
      backgroundColor="primary-1"
      color="white"
      pointerEvents="none"
    >
      <Icon icon="ph:arrow-up-right-bold" width={14} height={14} />
    </Flex>
  );
}

export function MemberCard({
  member,
  linkToProfile = false,
}: {
  member: Position;
  /** Make the whole card a link to the member's profile. */
  linkToProfile?: boolean;
}) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      gap={{ base: "12px", md: "16px" }}
      padding={{ base: "16px 12px", md: "18px" }}
      borderRadius="16px"
      border="1px solid"
      borderColor="card-glass-border"
      backdropFilter="blur(12px)"
      position="relative"
      h="full"
      css={{
        "& .member-card-link": { outline: "none", color: "inherit" },
        "& .member-card-link::after": { content: '""', position: "absolute", inset: 0, borderRadius: "16px" },
        "& .member-card-link:focus-visible::after": { outline: "2px solid", outlineColor: "var(--chakra-colors-primary-1)" },
      }}
      _hover={{ transform: "translateY(-2px)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
      transition="all 0.2s ease"
    >
      {linkToProfile && <ProfileArrow />}
      {member.avatarSrc ? (
        <Image
          src={member.avatarSrc}
          alt={member.name}
          borderRadius="full"
          width={{ base: "72px", md: "80px" }}
          height={{ base: "72px", md: "80px" }}
          objectFit="cover"
          border="3px solid"
          borderColor="primary-1"
          flexShrink={0}
        />
      ) : (
        <Avatar
          name={member.name}
          width={{ base: "72px", md: "80px" }}
          height={{ base: "72px", md: "80px" }}
          fontSize="xl"
          border="3px solid"
          borderColor="primary-1"
          flexShrink={0}
        />
      )}
      <Flex
        direction="column"
        gap="6px"
        flex="1"
        minWidth={0}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Text
          fontSize={{ base: "13px", md: "16px" }}
          fontWeight={600}
          color="fg"
          lineHeight={1.3}
          textAlign={{ base: "center", md: "left" }}
          truncate
          w="full"
        >
          {linkToProfile ? (
            // Stretched link: its ::after covers the card, so the whole card
            // is one real link (prefetch, open in new tab, keyboard focus).
            <Link
              href={`/about/member/${getMemberSlug(member)}`}
              className="member-card-link"
            >
              {member.name}
            </Link>
          ) : (
            member.name
          )}
        </Text>
        <Text
          fontSize={{ base: "11px", md: "13px" }}
          color="primary-8"
          lineHeight={1.3}
          textAlign={{ base: "center", md: "left" }}
        >
          {member.position}
        </Text>
        <SocialButtons linkedin={member.linkedin} email={member.email} size={30} iconSize={14} />
      </Flex>
    </Flex>
  );
}
