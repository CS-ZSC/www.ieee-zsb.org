"use client";

import React, { useEffect, useState } from "react";
import { sections } from "./sections";
import { Stack, Box, Grid, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "@/components/ui/internal/logo";
import Card from "@/components/ui/internal/card";
import { useWindowType } from "@/hooks/use-window-type";
import SocialMediaLinks from "@/data/social-media-links";
import { Icon } from "@iconify/react";

export default function Footer() {
  const { isDesktop } = useWindowType();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Flex paddingTop="var(--global-spacing)">
      <Card>
        {/* Logo */}
        <Flex justify={{ base: "center", md: "flex-start" }}>
          <Logo
            width={isDesktop ? 180 : 130}
          // height={isDesktop ? 110 : 80}
          />
        </Flex>

        {/* Nav columns */}
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            // lg:   "repeat(5, 1fr)",
          }}
          gap={{ base: 8, md: 6 }}
          w="full"
          alignContent={"center"}
        >
          {sections.map((section) => {
            const accentVar = section.identityColor
              ? `var(--chakra-colors-${section.identityColor})`
              : null;

            return (
              <Stack key={section.title} gap={3}>
                {/* Section heading */}
                <Flex alignItems="center" gap={2}>
                  {accentVar && (
                    <Box
                      w="3px"
                      h="1.1em"
                      borderRadius="full"
                      bg={accentVar}
                      flexShrink={0}
                    />
                  )}
                  <Text
                    fontWeight="bold"
                    fontSize="md"
                    color={accentVar ?? "neutral-1"}
                    style={accentVar ? { color: accentVar } : undefined}
                    letterSpacing="wide"
                  >
                    {section.title}
                  </Text>
                </Flex>

                {/* Links */}
                <Stack gap={2}>
                  {section.links.map((link) => (
                    <Box
                      key={link.href}
                      color="neutral-3"
                      _hover={{ color: "neutral-1" }}
                      transition="color 0.15s ease"
                      fontSize="sm"
                      w="fit-content"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            );
          })}
        </Grid>

        {/* Bottom bar */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
          pt={4}
          borderTop="1px solid"
          borderColor="primary-3"
          w="full"
        >
          {/* Social icons */}
          <Flex gap={2} align="center">
            {SocialMediaLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  p={1.5}
                  borderRadius="lg"
                  color="neutral-3"
                  border="1px solid"
                  borderColor="primary-3"
                  _hover={{ color: "neutral-1", borderColor: "neutral-2" }}
                  transition="all 0.15s ease"
                >
                  <Icon icon={link.icon} width={22} height={22} />
                </Flex>
              </Link>
            ))}
          </Flex>

          {/* Contact */}
          <Stack>

            <Box
              color="neutral-3"
              _hover={{ color: "neutral-1" }}
              transition="color 0.15s ease"
              fontSize="sm"
            >
              <Link href="mailto:info@ieee-zsb.org">info@ieee-zsb.org</Link>
            </Box>

            {/* Copyright */}
            <Text fontSize="sm" color="neutral-3" textAlign="center">
              &copy; {new Date().getFullYear()} IEEE ZSB CS Chapter. All rights reserved.
            </Text>
          </Stack>
        </Flex>
      </Card>
    </Flex>
  );
}
