// Kept apart from `data/chapters.ts` and `data/clubs.ts` so the header doesn't
// ship every chapter's full content to the browser on every page.
export interface NavItem {
  id: string;
  name: string;
  description: string;
  href: string;
  whitePath: string;
  blackPath: string;
  alt: string;
  identityColor: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const Chapters: NavGroup = {
  label: "Chapters",
  items: [
    {
      id: "pes",
      name: "PES",
      description: "Power & Energy Society Chapter",
      href: "/chapters/pes",
      whitePath: "/Images/PES/IEEE-PES-White.svg",
      blackPath: "/Images/PES/IEEE-PES-Black.svg",
      alt: "PES Logo",
      identityColor: "pes-1",
    },
    {
      id: "wie",
      name: "WIE",
      description: "Women In Engineering Affinity Group",
      href: "/chapters/wie",
      whitePath: "/Images/WIE/IEEE-WIE-White.svg",
      blackPath: "/Images/WIE/IEEE-WIE-Black.svg",
      alt: "WIE Logo",
      identityColor: "wie-1",
    },
  ],
};

/** Internal clubs: run like chapters, but aren't IEEE societies. */
export const Clubs: NavGroup = {
  label: "Clubs",
  items: [
    {
      id: "computer",
      name: "Computer Club",
      description: "Software, AI & Cyber Security",
      href: "/clubs/computer",
      whitePath: "/Images/Clubs/computer-club-white.svg",
      blackPath: "/Images/Clubs/computer-club-black.svg",
      alt: "Computer Club Logo",
      identityColor: "cs-1",
    },
    {
      id: "robotics",
      name: "Robotics Club",
      description: "Embedded Systems, ROS, PCB & Mechanical",
      href: "/clubs/robotics",
      whitePath: "/Images/Clubs/robotics-club-white.svg",
      blackPath: "/Images/Clubs/robotics-club-black.svg",
      alt: "Robotics Club Logo",
      identityColor: "ras-1",
    },
  ],
};

export const NavGroups: NavGroup[] = [Chapters, Clubs];
