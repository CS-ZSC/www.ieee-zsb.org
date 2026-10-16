import type { Position } from "../position";

/**
 * Who held which position during one season. Content that doesn't change
 * between seasons (descriptions, goals, ...) lives in `data/committees.ts`
 * `data/chapters.ts`, and `data/clubs.ts`.
 */
export interface Season {
  year: number;
  executiveBoard: Position[];
  /** Committee boards keyed by committee hashtag, in display order. */
  committees: Record<string, Position[]>;
  /** Keyed by chapter slug (e.g. "pes"). */
  chapters: Record<string, Roster>;
  /** Internal clubs, keyed by club slug (e.g. "computer"). */
  clubs: Record<string, Roster>;
}

export interface Roster {
  board: Position[];
  /** Track boards keyed by track hashtag, in display order. */
  tracks: Record<string, Position[]>;
}
