import type { Position } from "../position";

/**
 * Who held which position during one season. Content that doesn't change
 * between seasons (descriptions, goals, ...) lives in `data/committees.ts`
 * and `data/chapters.ts`.
 */
export interface Season {
  year: number;
  executiveBoard: Position[];
  /** Committee boards keyed by committee hashtag, in display order. */
  committees: Record<string, Position[]>;
  /** Keyed by lowercase chapter short name (e.g. "cs"). */
  chapters: Record<
    string,
    {
      board: Position[];
      /** Track boards keyed by track hashtag, in display order. */
      tracks: Record<string, Position[]>;
    }
  >;
}
