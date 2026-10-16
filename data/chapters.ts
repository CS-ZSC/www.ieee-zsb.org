import type { CommitteeContent, CommitteesData } from "./committees";
import type { Position } from "./position";

export type TrackData = CommitteesData;
export type TrackContent = CommitteeContent;

export interface SeasonData {
  year: number;
  summary: string[];
}

export interface ChapterData {
  id: number;
  /**
   * IEEE chapters and affinity groups are listed under "Chapters". Internal
   * clubs run like chapters but aren't IEEE societies, so they get their own
   * menu, their own URLs, and no IEEE society logos.
   */
  kind: "chapter" | "club";
  /** The URL segment, and the chapter's key in each season (`data/seasons`). */
  slug: string;
  short_name: string;
  long_name: string;
  /** Shown under the name in the navigation menus. */
  tagline: string;
  /** For dark backgrounds: the hero card and the dark-mode menus. */
  logo: string;
  /** For the light-mode menus. */
  logo_black: string;
  color_scheme_1: string;
  color_scheme_2: string;
  description: {
    about: string;
    vision: string;
    mission: string;
  };
  board: Position[];
  tracks?: TrackData[];
  seasons: SeasonData[];
}

/**
 * Chapter content that stays the same across seasons. Boards come from
 * `data/seasons`; use `getChapter()` to combine the two. Internal clubs share
 * this shape and live in `data/clubs.ts`.
 */
export type ChapterContent = Omit<ChapterData, "board" | "tracks"> & {
  tracks?: TrackContent[];
};

/** The page that shows `chapter`, e.g. "/chapters/pes" or "/clubs/computer". */
export function getChapterHref(chapter: Pick<ChapterData, "kind" | "slug">): string {
  return `/${chapter.kind === "club" ? "clubs" : "chapters"}/${chapter.slug}`;
}

let id = 0;
let trackId = 0;

export const chaptersContent: ChapterContent[] = [
  {
    id: ++id,
    kind: "chapter",
    slug: "pes",
    short_name: "PES",
    long_name: "Power & Energy Society",
    tagline: "Power & Energy Society Chapter",
    logo: "/Images/PES/IEEE-PES-White.svg",
    logo_black: "/Images/PES/IEEE-PES-Black.svg",
    color_scheme_1: "pes-1",
    color_scheme_2: "pes-2",
    description: {
      about:
        "The IEEE Power & Energy Society (PES) is the leading source for knowledge, collaboration, and innovation in the fields of power and energy. Our chapter provides students with opportunities to explore the dynamic world of electrical power systems, renewable energy, and smart grid technologies. Through technical workshops, hands-on projects, and industry engagement, we equip students with the skills and insight to drive the future of sustainable energy.",
      vision:
        "To be a premier hub for learning and innovation in the power and energy sector, inspiring students to develop solutions that shape a cleaner, more reliable, and sustainable energy future. We aim to cultivate a community where knowledge and creativity come together to address global energy challenges.",
      mission:
        "To empower students with practical skills, technical expertise, and industry connections in power and energy engineering. We are dedicated to providing impactful learning experiences through workshops, research projects, and professional networking opportunities that prepare our members to excel in the evolving energy landscape.",
    },
    tracks: [
      {
        id: ++trackId,
        name: "Basic Automation",
        hashtag: "basic-automation",
        description:
          "An introductory track that teaches the fundamentals of automation systems, focusing on Classic Control principles and PLC Basics. Suitable for students starting their journey in industrial automation.",
        image: "/Tracks/PES/basic-automation.webp",
        goals: [
          "Understand classic control circuits",
          "Learn how to program basic PLC functions",
        ],
        activities: [
          {
            title: "Session",
            description:
              "Introduction to Classic Control components and logic design",
          },
          {
            title: "Offline Session",
            description:
              "Hands-on workshop for PLC wiring and basic programming",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced Automation",
        hashtag: "advanced-automation",
        description:
          "A professional-level track designed to enhance knowledge in advanced PLC programming, HMI systems, and SCADA integration. This track prepares participants for real-world industrial automation projects.",
        image: "/Tracks/PES/advanced-automation.webp",
        goals: [
          "Build advanced PLC programs",
          "Understand the Concepts of Data Blocks and Function Blocks",
          "Build HMI and SCADA Systems",
        ],
        activities: [
          {
            title: "Session",
            description: "Advanced ladder logic and function blocks",
          },
          {
            title: "Session",
            description: "SCADA project implementation and visualization",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Distribution",
        hashtag: "basic-distribution",
        description:
          "This track covers the core concepts of electrical power distribution, including lighting systems, power planning, and safety standards. It's ideal for students aiming to understand infrastructure projects.",
        image: "/Tracks/PES/basic-distribution.webp",
        goals: [
          "Understand lighting and power design",
          "Apply standards in electrical distribution",
        ],
        activities: [
          {
            title: "session",
            description:
              "Lighting design principles and tools like DIALux and AutoCAD",
          },
          {
            title: "session",
            description: "distribution system planning and Project Lifecycle",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Smart Home",
        hashtag: "smart-home",
        description:
          "This track introduces students to the future of home automation using KNX technology, IoT applications, and smart system design. It bridges electrical and digital systems for intelligent environments.",
        image: "/Tracks/PES/smart-home.webp",
        goals: [
          "Gain a solid understanding of KNX protocols and their applications in smart home systems",
          "Learn to design and implement efficient topologies for home automation",
          "Explore IoT concepts and how they integrate with smart home technologies",
        ],
        activities: [
          { title: "Session", description: "Understand KNX protocols" },
          { title: "Session", description: "Topology and ETS 6 Programming" },
          {
            title: "Session",
            description: "IoT Concepts in Smart Home Applications",
          },
        ],
      },
      {
        id: ++trackId,
        name: "E-Mobility",
        hashtag: "e-mobility",
        description:
          "A future-driven track focused on the electrical side of automotive engineering. Learn power electronics, model-based design, and electric drivetrain systems tailored for electric vehicle innovation.",
        image: "/Tracks/PES/e-mobility.webp",
        goals: ["Design electric drive systems", "Apply MBD in EV development"],
        activities: [
          {
            title: "Session",
            description: "Basics of electric powertrains and inverters",
          },
          {
            title: "Session",
            description: "Model-based simulations using MATLAB Simulink",
          },
        ],
      },
      // Retired: kept so archived seasons can still show them.
      {
        id: ++trackId,
        name: "Advanced Distribution",
        hashtag: "advanced-distribution",
        description: "Advanced Distribution track delves into low current systems, fire alarm systems, and Revit MEP design. It's tailored for students interested in building services and smart infrastructure.",
        image: "/Tracks/PES/advanced-distribution.webp",
        goals: [
          "Design fire alarm systems",
          "Implement low current solutions",
          "using REVIT in Distribution Design",
        ],
        activities: [
          {
            title: "Session",
            description: "Overview of low current and ELV systems",
          },
          {
            title: "Session",
            description: "Fire alarm design and Revit workshop",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mechanical",
        hashtag: "mechanical",
        description: "Mechanical Track explores the design of renewable energy systems and internal combustion engines, using powerful tools like SolidWorks and ANSYS for simulation and design verification.",
        image: "/Tracks/PES/mechanical.webp",
        goals: [
          "Design mechanical renewable systems",
          "Simulate components using SolidWorks and ANSYS",
        ],
        activities: [
          {
            title: "session",
            description: "Introduction to SolidWorks and energy system design",
          },
          {
            title: "session",
            description: "ANSYS mechanical simulation for engine components",
          },
        ],
      },
    ],
    seasons: [
      {
        year: 2024,
        summary: [
          "The 2024 season for PES focused on advanced smart grid solutions and energy efficiency.",
          "We organized a successful 'Future of Energy' summit with prominent speakers from utility companies and energy research institutions.",
          "Our members engaged in practical projects involving microgrid design and energy auditing, and we hosted a series of workshops on power electronics and grid modernization, attracting students and young professionals.",
        ],
      },
      {
        year: 2023,
        summary: [
          "Initiatives in renewable energy",
          "Workshops on power system automation",
          "Green energy solutions",
        ],
      },
      {
        year: 2022,
        summary: [
          "Sustainable energy practices",
          "Modern power systems focus",
          "Industry collaboration and field training",
        ],
      },
    ],
  },
  {
    id: ++id,
    kind: "chapter",
    slug: "wie",
    short_name: "WIE",
    long_name: "Women in Engineering",
    tagline: "Women In Engineering Affinity Group",
    logo: "/Images/WIE/IEEE-WIE-White.svg",
    logo_black: "/Images/WIE/IEEE-WIE-Black.svg",
    color_scheme_1: "wie-1",
    color_scheme_2: "wie-2",
    description: {
      about:
        "IEEE Women in Engineering (WIE) is dedicated to promoting women engineers and scientists while inspiring the next generation of female technologists. Our chapter creates a supportive community that celebrates diversity in engineering, provides mentorship opportunities, and empowers women to pursue leadership roles in technical fields. Through our activities, we address the unique challenges faced by women in engineering while fostering professional growth.",
      vision:
        "To create an inclusive engineering community where women are equally represented, celebrated, and empowered to achieve their full potential. We envision a future where gender diversity in technical fields is the norm, and where women engineers are leading technological innovations across all sectors.",
      mission:
        "To inspire and empower women in engineering through mentorship, skill development, and leadership opportunities. We are committed to building a strong support network, providing professional development resources, and creating platforms for women to showcase their technical achievements.",
    },
    // Ran in 2024 only (kept for the archive); no description is on record.
    tracks: [
      {
        id: ++trackId,
        name: "Mechanical",
        hashtag: "mechanical",
        description: "",
        image: "",
        goals: [],
      },
      {
        id: ++trackId,
        name: "Web Development",
        hashtag: "web-development",
        description: "",
        image: "",
        goals: [],
      },
      {
        id: ++trackId,
        name: "Robotics",
        hashtag: "robotics",
        description: "",
        image: "",
        goals: [],
      },
    ],
    seasons: [
      {
        year: 2024,
        summary: [
          "The 2024 season for WIE focused on amplifying women's voices in STEM leadership.",
          "We hosted a powerful 'Inspiring Women Leaders' conference, featuring keynote speakers who are pioneers in their fields.",
          "Our mentorship program expanded significantly, pairing more students with industry professionals, and we organized workshops on negotiation skills and strategic career planning.",
        ],
      },
      {
        year: 2023,
        summary: [
          "Mentorship program with industry leaders",
          "Women in tech conference",
          "Expanded professional development",
        ],
      },
      {
        year: 2022,
        summary: [
          "New internship partnerships",
          "Leadership training series",
          "Increased community outreach",
        ],
      },
    ],
  },
];
