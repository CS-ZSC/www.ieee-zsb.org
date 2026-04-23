"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Flex, Text, Box, Image, Heading } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import Container from "@/components/ui/internal/container";
import { Position, getSlug } from "@/data/position";
import executiveBoard from "@/data/executive-board";
import { chaptersData } from "@/data/chapters";
import committeesData from "@/data/committees";
import { toaster } from "@/components/ui/toaster";

function getAllMembers(): (Position & { context?: string })[] {
  const members: (Position & { context?: string })[] = [];

  executiveBoard.forEach((m) =>
    members.push({ ...m, context: "Executive Board" })
  );

  chaptersData.forEach((chapter) => {
    chapter.board.forEach((m) =>
      members.push({ ...m, context: chapter.long_name })
    );
    chapter.tracks?.forEach((track) =>
      track.board.forEach((m) =>
        members.push({ ...m, context: `${chapter.long_name} — ${track.name}` })
      )
    );
  });

  committeesData.forEach((committee) =>
    committee.board.forEach((m) =>
      members.push({ ...m, context: committee.name })
    )
  );

  return members;
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

export default function MemberProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const allMembers = getAllMembers();
  const member = allMembers.find((m) => getSlug(m.name) === slug);

  if (!member) {
    return (
      <PageWrapper>
        <Container>
          <Flex direction="column" alignItems="center" gap="24px" py="80px">
            <Icon icon="ph:user-circle-dashed" width={64} height={64} />
            <Text fontSize="18px" color="neutral-3">
              Member not found.
            </Text>
            <Link href="/about">
              <Flex
                alignItems="center"
                gap="6px"
                color="primary-1"
                _hover={{ gap: "8px" }}
                transition="all 0.2s ease"
              >
                <Icon icon="ph:arrow-left-bold" width={16} height={16} />
                <Text fontSize="14px" fontWeight={500}>
                  Back to About
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Container>
      </PageWrapper>
    );
  }

  const hasContent =
    member.description ||
    member.responsibilities?.length ||
    member.links?.length;

  return (
    <PageWrapper>
      <Container maxWidth="720px">
        <Flex direction="column" gap="0" py="40px">
          {/* Back link */}
          <Link href="/about">
            <Flex
              alignItems="center"
              gap="6px"
              color="neutral-3"
              _hover={{ color: "primary-1", gap: "8px" }}
              transition="all 0.2s ease"
              mb="24px"
            >
              <Icon icon="ph:arrow-left-bold" width={16} height={16} />
              <Text fontSize="14px" fontWeight={500}>
                Back
              </Text>
            </Flex>
          </Link>

          {/* Hero / Profile Header */}
          <Flex
            direction="column"
            borderRadius="20px"
            overflow="hidden"
            border="1px solid"
            borderColor="card-glass-border"
            backgroundColor="card-glass-bg"
            backdropFilter="blur(12px)"
          >
            {/* Cover gradient */}
            <Box
              height="120px"
              background="linear-gradient(135deg, var(--chakra-colors-primary-12) 0%, var(--chakra-colors-primary-5) 50%, var(--chakra-colors-primary-5) 100%)"
            />

            {/* Profile info */}
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "flex-end" }}
              gap="20px"
              px="28px"
              pb="28px"
              mt="-50px"
            >
              <Image
                src={member.avatarSrc}
                alt={member.name}
                borderRadius="full"
                width="110px"
                height="110px"
                objectFit="cover"
                border="4px solid"
                borderColor="primary-1"
                flexShrink={0}
              />

              <Flex
                direction="column"
                gap="6px"
                flex="1"
                pb="4px"
                alignItems={{ base: "center", md: "flex-start" }}
              >
                <Heading
                  as="h1"
                  fontSize="24px"
                  fontWeight={700}
                  color="fg"
                  lineHeight={1.2}
                >
                  {member.name}
                </Heading>
                <Text fontSize="15px" color="primary-8" lineHeight={1.3}>
                  {member.position}
                </Text>
                {member.context && (
                  <Text fontSize="13px" color="neutral-3" lineHeight={1.3}>
                    {member.context}
                  </Text>
                )}

                {/* Social actions */}
                <Flex gap="8px" mt="8px">
                  <Link href={member.linkedin} target="_blank">
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      gap="6px"
                      height="34px"
                      px="14px"
                      borderRadius="10px"
                      border="1px solid"
                      borderColor="neutral-4"
                      color="neutral-3"
                      _hover={{
                        color: "primary-1",
                        borderColor: "primary-1",
                      }}
                      transition="all 0.2s ease"
                      fontSize="13px"
                      fontWeight={500}
                    >
                      <Icon icon="mage:linkedin" width={16} height={16} />
                      LinkedIn
                    </Flex>
                  </Link>
                  <Box
                    as="button"
                    onClick={() => handleCopyEmail(member.email)}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="6px"
                    height="34px"
                    px="14px"
                    borderRadius="10px"
                    border="1px solid"
                    borderColor="neutral-4"
                    color="neutral-3"
                    _hover={{
                      color: "primary-1",
                      borderColor: "primary-1",
                    }}
                    transition="all 0.2s ease"
                    fontSize="13px"
                    fontWeight={500}
                    cursor="pointer"
                  >
                    <Icon
                      icon="ic:outline-alternate-email"
                      width={16}
                      height={16}
                    />
                    Copy Email
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* Content sections */}
          <Flex direction="column" gap="16px" mt="16px">
            {/* About */}
            {member.description && (
              <Flex
                direction="column"
                gap="12px"
                padding="24px"
                borderRadius="16px"
                border="1px solid"
                borderColor="card-glass-border"
                backgroundColor="card-glass-bg"
                backdropFilter="blur(12px)"
              >
                <Text
                  fontSize="13px"
                  fontWeight={600}
                  color="neutral-3"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  About
                </Text>
                <Text
                  fontSize="14px"
                  color="neutral-2"
                  lineHeight={1.7}
                >
                  {member.description}
                </Text>
              </Flex>
            )}

            {/* Responsibilities */}
            {member.responsibilities && member.responsibilities.length > 0 && (
              <Flex
                direction="column"
                gap="12px"
                padding="24px"
                borderRadius="16px"
                border="1px solid"
                borderColor="card-glass-border"
                backgroundColor="card-glass-bg"
                backdropFilter="blur(12px)"
              >
                <Text
                  fontSize="13px"
                  fontWeight={600}
                  color="neutral-3"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  Responsibilities
                </Text>
                <Flex direction="column" gap="10px">
                  {member.responsibilities.map((item, idx) => (
                    <Flex key={idx} gap="10px" alignItems="flex-start">
                      <Box
                        width="6px"
                        height="6px"
                        borderRadius="full"
                        backgroundColor="primary-1"
                        flexShrink={0}
                        mt="7px"
                      />
                      <Text
                        fontSize="14px"
                        color="neutral-2"
                        lineHeight={1.6}
                      >
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}

            {/* Useful Links */}
            {member.links && member.links.length > 0 && (
              <Flex
                direction="column"
                gap="12px"
                padding="24px"
                borderRadius="16px"
                border="1px solid"
                borderColor="card-glass-border"
                backgroundColor="card-glass-bg"
                backdropFilter="blur(12px)"
              >
                <Text
                  fontSize="13px"
                  fontWeight={600}
                  color="neutral-3"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  Useful Links
                </Text>
                <Flex direction="column" gap="8px">
                  {member.links.map((link, idx) => (
                    <Link key={idx} href={link.url} target="_blank">
                      <Flex
                        gap="8px"
                        alignItems="center"
                        padding="10px 14px"
                        borderRadius="10px"
                        border="1px solid"
                        borderColor="card-glass-border"
                        backgroundColor="primary-12"
                        color="primary-1"
                        _hover={{
                          backgroundColor: "primary-7",
                          borderColor: "primary-7",
                        }}
                        transition="all 0.2s ease"
                      >
                        <Icon
                          icon="ph:link-bold"
                          width={16}
                          height={16}
                          style={{ flexShrink: 0 }}
                        />
                        <Text fontSize="14px" fontWeight={500}>
                          {link.label}
                        </Text>
                        <Box flex="1" />
                        <Icon
                          icon="ph:arrow-up-right-bold"
                          width={14}
                          height={14}
                          style={{ opacity: 0.5 }}
                        />
                      </Flex>
                    </Link>
                  ))}
                </Flex>
              </Flex>
            )}

            {/* Fallback when no data */}
            {!hasContent && (
              <Flex
                direction="column"
                alignItems="center"
                gap="12px"
                padding="40px 24px"
                borderRadius="16px"
                border="1px solid"
                borderColor="card-glass-border"
                backgroundColor="card-glass-bg"
                backdropFilter="blur(12px)"
              >
                <Icon
                  icon="ph:note-pencil"
                  width={32}
                  height={32}
                  color="var(--chakra-colors-neutral-3)"
                />
                <Text
                  fontSize="14px"
                  color="neutral-3"
                  textAlign="center"
                >
                  Profile details coming soon.
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </PageWrapper>
  );
}
