"use client";

import { Grid, Box } from "@chakra-ui/react";
import type { Position } from "@/data/position";
import { MemberCard } from "@/components/ui/internal/member-card";

interface Props {
  positions: Position[];
}

export default function LeadersContainer({ positions }: Props) {

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      gap="10px"
      w="full"
    >
      {positions.map((member, i) => (
        <Box key={i} h="full">
          <MemberCard member={member} linkToProfile />
        </Box>
      ))}
    </Grid>
  );
}
