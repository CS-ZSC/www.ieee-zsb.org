export interface Position {
  name: string;
  position: string;
  avatarSrc: string;
  linkedin: string;
  email: string;
  description?: string;
  responsibilities?: string[];
  links?: { label: string; url: string }[];
}

export function getSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
