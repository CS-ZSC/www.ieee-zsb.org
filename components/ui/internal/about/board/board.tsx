"use client";

import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { MemberCard } from "@/components/ui/internal/member-card";
import { useSeason } from "@/components/ui/internal/season/season-context";

export default function Board() {
  const { executiveBoard } = useSeason();

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      gap="10px"
      w="full"
    >
      {executiveBoard.map((member, i) => (
        <Box key={i} h="full">
          <MemberCard member={member} linkToProfile />
        </Box>
      ))}
    </Grid>
  );
}
