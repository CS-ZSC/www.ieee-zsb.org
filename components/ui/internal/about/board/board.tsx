"use client";

import React from "react";
import executiveBoard from "@/data/executive-board";
import PositionCard from "../../positionCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import AnimatedCard from "../../animatedCard";

export default function Board() {
  const { isDesktop } = useWindowType();

  return (
    <Grid
      templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={4}
      w="full"
      mx="auto"
      justifyItems="center"
    >
      {executiveBoard.map((position, index) => (
        <GridItem
          key={index}
          w="full"
          maxW={isDesktop ? "100%" : "500px"}
          justifySelf="center"
        >
          <AnimatedCard>
            <PositionCard position={position} />
          </AnimatedCard>
        </GridItem>
      ))}
    </Grid>
  );
}
