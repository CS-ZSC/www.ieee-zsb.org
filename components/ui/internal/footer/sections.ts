interface Section {
  title: string;
  links: SectionContentLink[];
}

// interface SectionContent {
// }

interface SectionContentLink {
  name: string;
  href: string;
}

export const sections: Section[] = [
  {
    title: "Quick Access",
    links: [
      {
        name: "Committees",
        href: "/committees",
      },
      {
        name: "Events",
        href: "/events",
      },
      {
        name: "News",
        href: "/news",
      },
      {
        name: "About",
        href: "/about",
      },
    ],
  },
  {
    title: "CS",
    links: [
      {
        name: "Front-End",
        href: "/chapters/cs/#frontend",
      },
      {
        name: "Back-End",
        href: "/chapters/cs/#backend",
      },
      {
        name: "Mobile Development",
        href: "/chapters/cs/#mobile-development",
      },
      {
        name: "Data Science",
        href: "/chapters/cs/#data-science",
      },
      {
        name: "Artificial Intelligence",
        href: "/chapters/cs/#ai",
      },
      {
        name: "Cyber Security",
        href: "/chapters/cs/#cyber-security",
      },
      // game develpoment track had been removed 
    ],
  },
  {
    title: "RAS",
    links: [
      {
        name: "Embedded Systems",
        href: "/chapters/ras/#embedded-systems",
      },
      {
        name: "ROS",
        href: "/chapters/ras/#ros",
      },
      {
        name: "PCB Design",
        href: "/chapters/ras/#pcb-design",
      },
      {
        name: "Mechanical",
        href: "/chapters/ras/#mechanical",
      },
    ],
  },
  {
    title: "PES",
    links: [
      {
        name: "Basic Automation",
        href: "/chapters/pes/#basic-automation",
      },
      {
        name: "Advanced Automation",
        href: "/chapters/pes/#advanced-automation",
      },
      {
        name: "Distribution",
        href: "/chapters/pes/#distribution",
      },
      {
        name: "Smart Home",
        href: "/chapters/pes/#smart-home",
      },
      {
        name: "E-Mobility",
        href: "/chapters/pes/#e-mobility",
      },
    ],
  },
];
