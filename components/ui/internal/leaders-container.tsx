"use client";

import { Grid, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import type { Position } from "@/data/position";
import { getSlug } from "@/data/position";
import { MemberCard } from "@/components/ui/internal/member-card";

interface Props {
  positions: Position[];
}

export default function LeadersContainer({ positions }: Props) {
  const router = useRouter();

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      gap="10px"
      w="full"
    >
      {positions.map((member, i) => (
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
