"use client";

import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Position } from "@/data/position";
import { getSlug } from "@/data/position";
import { useWindowType } from "@/hooks/use-window-type";
import { toaster } from "@/components/ui/toaster";

interface Props {
  positions: Position[];
  positionBgColor?: string;
}

function handleCopyEmail(email: string) {
  navigator.clipboard.writeText(email);
  toaster.create({
    title: "Email copied!",
    description: `${email} has been copied to your clipboard.`,
    type: "success",
    meta: { closable: true },
  });
}

/* Profile badge — morphs from circle to pill on hover, navigates to profile */
function ProfileBadge({ name }: { name: string }) {
  return (
    <Link href={`/about/member/${getSlug(name)}`} onClick={(e) => e.stopPropagation()}>
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
        _hover={{
          maxWidth: "120px",
          paddingX: "10px",
          borderRadius: "12px",
          gap: "4px",
        }}
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
          css={{
            "a:hover &": {
              maxWidth: "80px",
              opacity: 1,
            },
          }}
        >
          Role
        </Box>
      </Box>
    </Link>
  );
}

function SocialButtons({
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
        <Icon
          icon="ic:outline-alternate-email"
          width={iconSize}
          height={iconSize}
        />
      </Box>
    </Flex>
  );
}

/* ─── Horizontal card (desktop) ─── */
function CardHorizontal({ member }: { member: Position }) {
  return (
    <Flex
      direction="row"
      alignItems="center"
      gap="16px"
      padding="18px"
      borderRadius="16px"
      border="1px solid"
      borderColor="card-glass-border"
      backgroundColor="card-glass-bg"
      backdropFilter="blur(12px)"
      position="relative"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
      transition="all 0.2s ease"
    >
      <ProfileBadge name={member.name} />
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
        <SocialButtons linkedin={member.linkedin} email={member.email} size={34} iconSize={16} />
      </Flex>
    </Flex>
  );
}

/* ─── Avatar Hero card (mobile) ─── */
function CardAvatarHero({ member }: { member: Position }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap="14px"
      padding="24px 16px 20px"
      borderRadius="16px"
      border="1px solid"
      borderColor="card-glass-border"
      backgroundColor="card-glass-bg"
      backdropFilter="blur(12px)"
      position="relative"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
      transition="all 0.2s ease"
      role="group"
    >
      <ProfileBadge name={member.name} />
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
  );
}

export default function LeadersContainer({ positions }: Props) {
  const { isDesktop } = useWindowType();
  const router = useRouter();

  return (
    <Flex flexWrap="wrap" gap="10px" width="100%" justifyContent="center">
      {positions.map((member, i) => (
        <Box
          key={i}
          flex={isDesktop ? "1 1 calc(33.333% - 7px)" : "0 1 calc(50% - 5px)"}
          maxWidth={isDesktop ? "calc(33.333% - 7px)" : "calc(50% - 5px)"}
          cursor="pointer"
          onClick={() => router.push(`/about/member/${getSlug(member.name)}`)}
        >
          {isDesktop ? (
            <CardHorizontal member={member} />
          ) : (
            <CardAvatarHero member={member} />
          )}
        </Box>
      ))}
    </Flex>
  );
}
