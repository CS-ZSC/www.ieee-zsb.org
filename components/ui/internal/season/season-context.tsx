"use client";

import React, { createContext, Suspense, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { currentSeason, seasons as allSeasons, type Season } from "@/data/seasons";

interface SeasonState {
  season: Season;
  /** The seasons this part of the page has data for, newest first. */
  seasons: Season[];
}

const SeasonContext = createContext<SeasonState>({
  season: currentSeason,
  seasons: allSeasons,
});

/** The season picked with `?season=<year>`, or the current one. */
export function useSeason(): Season {
  return useContext(SeasonContext).season;
}

export function useSeasonState(): SeasonState {
  return useContext(SeasonContext);
}

function SeasonFromUrl({
  seasons,
  children,
}: {
  seasons: Season[];
  children: React.ReactNode;
}) {
  const year = Number(useSearchParams().get("season"));
  const season = seasons.find((s) => s.year === year) ?? currentSeason;
  return (
    <SeasonContext.Provider value={{ season, seasons }}>
      {children}
    </SeasonContext.Provider>
  );
}

/**
 * Lets `useSeason()` read the season from the URL, limited to `seasons`.
 * Static HTML is rendered with the current season (the Suspense fallback);
 * the URL is read in the browser.
 */
export function SeasonProvider({
  seasons = allSeasons,
  children,
}: {
  seasons?: Season[];
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <SeasonContext.Provider value={{ season: currentSeason, seasons }}>
          {children}
        </SeasonContext.Provider>
      }
    >
      <SeasonFromUrl seasons={seasons}>{children}</SeasonFromUrl>
    </Suspense>
  );
}
