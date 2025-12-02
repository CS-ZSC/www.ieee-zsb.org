import React from "react";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { EventsData } from "@/data/events";
import Card from "../card";
import { Icon } from "@iconify/react";
import VerticalDivider from "../news/vertical-divider";
import { redirect } from "next/navigation";

interface EventCardProps {
  event: EventsData;
}

export default function HighlightedEventCard({ event }: EventCardProps) {
  return (
    <Flex maxWidth={"600px"} height={"full"}>
      <Card padding={4}>
        <Flex
          justifyContent={"space-between"}
          flexFlow={"column"}
          gap={6}
          height={"full"}
        >
          <Text
            textAlign={"center"}
            fontSize="1.6rem"
            fontWeight={"bold"}
            color={"neutral-1"}
          >
            {event.currentEvent ? "Current event" : "Upcoming event"}
          </Text>
          <Text paddingX={1} color={"neutral-2"}>
            {event.description}
          </Text>
          <Stack justify={"center"} align={"center"}>
            <Flex
              bgColor={"primary-12"}
              width={"full"}
              rounded={"xl"}
              paddingX={"calc(var(--card-padding))"}
              paddingY={"calc(var(--card-padding) * 0.8)"}
              justifyContent={"space-between"}
              alignItems={"center"}
              wrap={"wrap"}
              border={"1px solid"}
              borderColor={"primary-3"}
            >
              <Text fontSize={"1.6rem"} fontWeight={"bold"} color={"neutral-1"}>
                {event.title.toString().toUpperCase()}
              </Text>
              <Flex
                color={"accent-1"}
                alignItems={"center"}
                wrap={"wrap"}
                gap={3}
              >
                <Flex alignItems={"center"} gap={1}>
                  <Icon icon={"lucide:map-pin"} />
                  <Text>{event.location}</Text>
                </Flex>
                <VerticalDivider backgroundColor="accent-1" />
                <Flex alignItems={"center"} gap={1}>
                  <Icon icon={"lucide:clock"} />
                  <Text>{event.date}</Text>
                </Flex>
              </Flex>
            </Flex>
            {event.link !== undefined && <Button
              variant="outline"
              width={"fit"}
              bgColor={"primary-1"}
              paddingY={10}
              rounded="xl"
              padding={"10px 20px"}
              justifyContent={"center"}
              textAlign="center"
              color="white"
              transition="all"
              _hover={{ backgroundColor: "primary-10" }}
              onClick={() => event.link && redirect(event.link)}
            >
              Register now!
            </Button>}
          </Stack>
        </Flex>
      </Card>
    </Flex>
  );
}
