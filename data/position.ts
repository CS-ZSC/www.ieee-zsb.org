export interface Position {
  /**
   * Replaces the name when linking seasons together and becomes the profile
   * URL. Set it only to tell apart members who share a name, or to join a
   * member whose name was spelled differently in another season (use the slug
   * of that spelling).
   */
  id?: string;
  name: string;
  position: string;
  /** Without a photo, cards show the member's initials. */
  avatarSrc?: string;
  // Older seasons were recorded without contact details.
  linkedin?: string;
  email?: string;
  description?: string;
  responsibilities?: string[];
  links?: { label: string; url: string }[];
}

export function getSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

/** The member's profile URL slug. */
export function getMemberSlug(member: Position): string {
  return member.id ?? getSlug(member.name);
}
