import { committeesContent, type CommitteesData } from "../committees";
import {
  chaptersContent,
  getChapterHref,
  type ChapterContent,
  type ChapterData,
} from "../chapters";
import { clubsContent } from "../clubs";
import { getSlug, type Position } from "../position";
import type { Season } from "./types";
import season2020 from "./2020";
import season2021 from "./2021";
import season2022 from "./2022";
import season2023 from "./2023";
import season2024 from "./2024";
import season2025 from "./2025";
import season2026 from "./2026";
import season2027 from "./2027";

export type { Season } from "./types";

/**
 * All seasons, newest first. To start a new season, copy the latest season
 * file, put its photos under `public/Images/board/<year>/`, and add it here.
 */
export const seasons: Season[] = [
  season2027,
  season2026,
  season2025,
  season2024,
  season2023,
  season2022,
  season2021,
  season2020,
];

export const currentSeason: Season = seasons[0];

export function getSeason(year: number): Season | undefined {
  return seasons.find((season) => season.year === year);
}

/** Seasons with committee boards on record. */
export const committeeSeasons: Season[] = seasons.filter(
  (season) => Object.keys(season.committees).length > 0
);

function getRoster(season: Season, chapter: ChapterContent) {
  return (chapter.kind === "club" ? season.clubs : season.chapters)[chapter.slug];
}

/** Seasons with a board or tracks on record for the chapter or club. */
export function getChapterSeasons(chapter: ChapterContent): Season[] {
  return seasons.filter((season) => {
    const roster = getRoster(season, chapter);
    return !!roster && (roster.board.length > 0 || Object.keys(roster.tracks).length > 0);
  });
}

/** Link to `path` as it looked in `season`; the current season needs no query. */
export function seasonHref(path: string, season: Season, hash?: string): string {
  const query = season === currentSeason ? "" : `?season=${season.year}`;
  return `${path}${query}${hash ? `#${hash}` : ""}`;
}

function findCommittee(hashtag: string) {
  const committee = committeesContent.find((c) => c.hashtag === hashtag);
  if (!committee) throw new Error(`Unknown committee "${hashtag}"`);
  return committee;
}

function findChapter(kind: ChapterContent["kind"], slug: string) {
  const list = kind === "club" ? clubsContent : chaptersContent;
  const chapter = list.find((c) => c.slug === slug);
  if (!chapter) throw new Error(`Unknown ${kind} "${slug}"`);
  return chapter;
}

function findTrack(chapter: ChapterContent, hashtag: string) {
  const track = chapter.tracks?.find((t) => t.hashtag === hashtag);
  if (!track) throw new Error(`Unknown ${chapter.short_name} track "${hashtag}"`);
  return track;
}

/** The committees that existed in `season`, with that season's boards. */
export function getCommittees(season: Season): CommitteesData[] {
  return Object.entries(season.committees).map(([hashtag, board]) => ({
    ...findCommittee(hashtag),
    board,
  }));
}

/** `chapter` (or club) with the board and tracks it had in `season`. */
export function getChapter(season: Season, chapter: ChapterContent): ChapterData {
  const roster = getRoster(season, chapter);
  return {
    ...chapter,
    board: roster?.board ?? [],
    tracks: Object.entries(roster?.tracks ?? {}).map(([hashtag, board]) => ({
      ...findTrack(chapter, hashtag),
      board,
    })),
  };
}

// Fail the build if a season names a committee, chapter, club, or track that
// has no content, instead of crashing when someone opens that season.
for (const season of seasons) {
  getCommittees(season);
  for (const slug of Object.keys(season.chapters)) {
    getChapter(season, findChapter("chapter", slug));
  }
  for (const slug of Object.keys(season.clubs)) {
    getChapter(season, findChapter("club", slug));
  }
}

export interface SeasonRole extends Position {
  year: number;
  /** Where the position was held, e.g. "Executive Board" or "Robotics Club — ROS". */
  context: string;
  /** The page that shows this position in its season. */
  href: string;
}

/** Every position held in `season`. */
export function getSeasonRoles(season: Season): SeasonRole[] {
  const roles: SeasonRole[] = [];
  const add = (members: Position[], context: string, href: string) =>
    members.forEach((m) => roles.push({ ...m, year: season.year, context, href }));

  add(season.executiveBoard, "Executive Board", seasonHref("/about", season));

  [...chaptersContent, ...clubsContent].forEach((content) => {
    const chapter = getChapter(season, content);
    const path = getChapterHref(chapter);
    add(chapter.board, chapter.long_name, seasonHref(path, season));
    chapter.tracks?.forEach((track) =>
      add(
        track.board,
        `${chapter.long_name} — ${track.name}`,
        seasonHref(path, season, track.hashtag)
      )
    );
  });

  getCommittees(season).forEach((committee) =>
    add(
      committee.board,
      committee.name,
      seasonHref("/committees", season, committee.hashtag)
    )
  );

  return roles;
}

function identityKeys(member: Position): string[] {
  const keys = [member.id ? `id:${member.id}` : `name:${getSlug(member.name)}`];
  const email = member.email?.trim().toLowerCase();
  if (email) keys.push(`email:${email}`);
  const handle = member.linkedin?.match(/linkedin\.com\/in\/([^/?#]+)/i)?.[1];
  if (handle) keys.push(`linkedin:${handle.toLowerCase()}`);
  return keys;
}

/**
 * Every position held by the member whose profile slug is `slug` (see
 * `getMemberSlug`), newest season first. Entries are linked by name (or `id`),
 * email, or LinkedIn, so a member who changed how their name is written is
 * still one person.
 */
export function getMemberHistory(slug: string): SeasonRole[] {
  const all = seasons.flatMap(getSeasonRoles);
  const keys = new Set([`name:${slug}`, `id:${slug}`]);
  const matched = new Set<SeasonRole>();

  let grew = true;
  while (grew) {
    grew = false;
    for (const role of all) {
      if (matched.has(role)) continue;
      const roleKeys = identityKeys(role);
      if (roleKeys.some((k) => keys.has(k))) {
        matched.add(role);
        roleKeys.forEach((k) => keys.add(k));
        grew = true;
      }
    }
  }

  return all.filter((role) => matched.has(role));
}
