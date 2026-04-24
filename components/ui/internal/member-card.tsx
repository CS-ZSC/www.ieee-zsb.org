"use client";

import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import type { Position } from "@/data/position";
import { getSlug } from "@/data/position";
import { toaster } from "@/components/ui/toaster";

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
  linkedin: string;
  email: string;
  size?: number;
  iconSize?: number;
}) {
  return (
    <Flex gap="8px" alignItems="center" onClick={(e) => e.stopPropagation()}>
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
    </Flex>
  );
}

export function ProfileBadge({ name }: { name: string }) {
  return (
    <Link href={`/about/member/${getSlug(name)}`}>
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
  );
}

export function MemberCard({
  member,
  showProfileBadge = false,
}: {
  member: Position;
  showProfileBadge?: boolean;
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
      _hover={{ transform: "translateY(-2px)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
      transition="all 0.2s ease"
    >
      {showProfileBadge && <ProfileBadge name={member.name} />}
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
          {member.name}
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
