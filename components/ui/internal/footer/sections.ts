interface SectionLink {
  name: string;
  href: string;
}

export interface Section {
  title: string;
  identityColor?: string;
  links: SectionLink[];
}

export const sections: Section[] = [
  {
    title: "Quick Access",
    links: [
      { name: "Events",     href: "/events" },
      { name: "News",       href: "/news" },
      { name: "Membership", href: "/membership" },
      { name: "About",      href: "/about" },
    ],
  },
  {
    title: "Committees",
    // identityColor: "accent-1",
    links: [
      { name: "Brand Ambassadors",    href: "/committees/#brand-ambassadors" },
      { name: "Business Development", href: "/committees/#business-development" },
      { name: "Operations",           href: "/committees/#operations" },
      { name: "Marketing",            href: "/committees/#marketing" },
      { name: "Multimedia",           href: "/committees/#multimedia" },
      { name: "Talent & Tech",        href: "/committees/#talent&tech" },
    ],
  },
  {
    title: "CS",
    identityColor: "cs-1",
    links: [
      { name: "Front-End",            href: "/chapters/cs/#frontend" },
      { name: "Back-End",             href: "/chapters/cs/#backend" },
      { name: "Mobile Development",   href: "/chapters/cs/#mobile-development" },
      { name: "Data Science",         href: "/chapters/cs/#data-science" },
      { name: "Artificial Intelligence", href: "/chapters/cs/#ai" },
      { name: "Cyber Security",       href: "/chapters/cs/#cyber-security" },
    ],
  },
  {
    title: "RAS",
    identityColor: "ras-1",
    links: [
      { name: "Embedded Systems", href: "/chapters/ras/#embedded-systems" },
      { name: "ROS",              href: "/chapters/ras/#ros" },
      { name: "PCB Design",       href: "/chapters/ras/#pcb-design" },
      { name: "Mechanical",       href: "/chapters/ras/#mechanical" },
      { name: "IC Design",        href: "/chapters/ras/#ic-design" },
    ],
  },
  {
    title: "PES",
    identityColor: "pes-1",
    links: [
      { name: "Basic Automation",    href: "/chapters/pes/#basic-automation" },
      { name: "Advanced Automation", href: "/chapters/pes/#advanced-automation" },
      { name: "Distribution",        href: "/chapters/pes/#basic-distribution" },
      { name: "Smart Home",          href: "/chapters/pes/#smart-home" },
      { name: "E-Mobility",          href: "/chapters/pes/#e-mobility" },
    ],
  },
  {
    title: "WIE",
    identityColor: "wie-1",
    links: [
      { name: "About WIE",     href: "/chapters/wie" },
      { name: "Our Mission",   href: "/chapters/wie/#mission" },
      { name: "Board",         href: "/chapters/wie/#board" },
      { name: "Past Seasons",  href: "/chapters/wie/#seasons" },
    ],
  },
];
