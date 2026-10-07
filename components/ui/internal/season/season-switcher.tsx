"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";
import { currentSeason, seasonHref, type Season } from "@/data/seasons";
import { useSeasonState } from "./season-context";

/** Season picker; must be rendered inside a `SeasonProvider`. */
export default function SeasonSwitcher() {
  const { season: selected, seasons } = useSeasonState();
  const router = useRouter();
  const pathname = usePathname();

  if (seasons.length < 2) return null;

  const select = (season: Season) =>
    router.replace(seasonHref(pathname, season), { scroll: false });

  return (
    <Flex direction="column" alignItems="center" gap="12px">
      <Flex
        role="group"
        aria-label="Season"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap="8px"
      >
        <Text fontSize="14px" color="neutral-3" mr="4px">
          Season
        </Text>
        {seasons.map((season) => {
          const isSelected = season === selected;
          return (
            <Button
              key={season.year}
              onClick={() => select(season)}
              aria-pressed={isSelected}
              height="34px"
              px="16px"
              borderRadius="full"
              fontSize="14px"
              fontWeight={500}
              border="1px solid"
              borderColor={isSelected ? "primary-1" : "neutral-4"}
              backgroundColor={isSelected ? "primary-1" : "primary-5"}
              color={isSelected ? "white" : "neutral-2"}
              _hover={{ borderColor: "primary-1" }}
              transition="all 0.2s ease"
            >
              {season.year}
            </Button>
          );
        })}
      </Flex>

      {selected !== currentSeason && (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="6px"
          fontSize="14px"
          color="neutral-3"
          textAlign="center"
        >
          <Icon icon="ph:clock-counter-clockwise-bold" width={16} height={16} />
          <Text>You&apos;re viewing the {selected.year} season archive.</Text>
          <Text
            as="button"
            color="primary-1"
            fontWeight={500}
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            onClick={() => select(currentSeason)}
          >
            Back to {currentSeason.year}
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
