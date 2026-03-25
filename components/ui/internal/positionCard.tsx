import React from "react";
import type { Position } from "@/data/position";
import { Box, Text, Image, HStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useWindowType } from "@/hooks/use-window-type";
import { toaster } from "@/components/ui/toaster";

interface Props {
  position: Position;
  bgColor?: string;
}

export default function PositionCard({
  position,
  bgColor = "primary-5",
}: Props) {
  const { isDesktop } = useWindowType();

  const handleCopy = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(position.email);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = position.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      toaster.create({
        title: "Email copied!",
        description: `${position.email} has been copied to your clipboard.`,
        type: "success",
        meta: { closable: true },
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <HStack
      align="center"
      justifyContent="start"
      padding={isDesktop ? "16px" : "12px"}
      bgColor={bgColor}
      color="fg"
      border="1px solid"
      borderColor="primary-1"
      rounded="lg"
      gap={isDesktop ? 4 : 3}
      position="relative"
    >
      <Box
        position="absolute"
        top="8px"
        right="8px"
        color="primary-1"
      >
        <Icon icon="mdi:help-circle" width="20px" height="20px" />
      </Box>

      <Box overflow="hidden" rounded="full" border="2px solid" borderColor="primary-1" padding="2px" flexShrink={0}>
        <Image
          rounded="full"
          boxSize={isDesktop ? "80px" : "70px"}
          src={position.avatarSrc}
          alt={position.name}
          _hover={{ scale: "1.06" }}
          transition="all 0.3s ease"
          objectFit="cover"
        />
      </Box>
      <Flex
        flexDirection="column"
        justify="center"
        flex={1}
      >
        <Text fontWeight="bold" fontSize={isDesktop ? "1.1rem" : "1rem"} color="fg" mb={1}>
          {position.name}
        </Text>
        <Text fontSize={isDesktop ? "0.9rem" : "0.85rem"} color="neutral-3" mb={3}>
          {position.position}
        </Text>

        <HStack gap={3}>
          <Link href={position.linkedin} target="_blank">
            <HStack
              justify="center"
              align="center"
              w="32px"
              h="32px"
              rounded="md"
              border="1px solid"
              borderColor="primary-3"
              color="neutral-3"
              _hover={{ color: "fg", borderColor: "neutral-3" }}
              transition="all 0.2s"
            >
              <Icon icon="mage:linkedin" width="1.2rem" height="1.2rem" />
            </HStack>
          </Link>
          <HStack
            as="button"
            onClick={handleCopy}
            justify="center"
            align="center"
            w="32px"
            h="32px"
            rounded="md"
            border="1px solid"
            borderColor="primary-3"
            color="neutral-3"
            _hover={{ color: "fg", borderColor: "neutral-3" }}
            transition="all 0.2s"
            cursor="pointer"
          >
            <Icon
              icon="ic:outline-alternate-email"
              width="1.2rem"
              height="1.2rem"
            />
          </HStack>
        </HStack>
      </Flex>
    </HStack>
  );
}
