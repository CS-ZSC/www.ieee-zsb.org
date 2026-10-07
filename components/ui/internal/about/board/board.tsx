"use client";

import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { getSlug } from "@/data/position";
import { MemberCard } from "@/components/ui/internal/member-card";
import { useSeason } from "@/components/ui/internal/season/season-context";

export default function Board() {
  const router = useRouter();
  const { executiveBoard } = useSeason();

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      gap="10px"
      w="full"
    >
      {executiveBoard.map((member, i) => (
        <Box
          key={i}
          cursor="pointer"
          h="full"
          onClick={() => router.push(`/about/member/${getSlug(member.name)}`)}
        >
          <MemberCard member={member} showProfileBadge />
        </Box>
      ))}
    </Grid>
  );
}
