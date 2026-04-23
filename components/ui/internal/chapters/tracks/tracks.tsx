import { TrackData } from "@/data/chapters";
import { Grid, GridItem } from "@chakra-ui/react";
import TrackCard from "./track-card";
import { useWindowType } from "@/hooks/use-window-type";

export function Tracks({
  tracks,
  color_scheme = "primary-1",
}: {
  tracks: TrackData[];
  color_scheme?: string;
}) {
  const { isDesktop } = useWindowType();

  return (
    <Grid
      templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
      gap={6}
      w="full"
      mx="auto"
    >
      {tracks.map((track, index) => (
        <GridItem key={index} w="full">
          <TrackCard
            track={track}
            index={index}
            borderColor={color_scheme}
            positionBgColor={"primary-12"}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
