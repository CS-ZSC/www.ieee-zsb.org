"use client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Card from "@/components/ui/internal/card";
import { useWindowType } from "@/hooks/use-window-type";
import eventsData from "@/data/events";
import EventCard from "../events/event-card";
import AnimatedCard from "../animatedCard";
import ButtonLink from "../button-link";

export default function Events() {
  const { isDesktop } = useWindowType();
  return (
    <Card padding={"var(--global-spacing)"} gap={"16px"}>
      <Text
        fontSize={isDesktop ? "2.5rem" : "2rem"}
        fontWeight="bold"
        color={"text-1"}
        textAlign="center"
      >
        Recent Events
      </Text>
      <Flex justifyContent={"center"} wrap="wrap" gap={4}>
        {eventsData
          .filter((event) => event.homeItem)
          .map((event, index) => {
            return (
              <AnimatedCard key={index}>
                <EventCard event={event} />
              </AnimatedCard>
            );
          })}
      </Flex>
      <ButtonLink link="/events" text="See all events" />
    </Card>
  );
}
