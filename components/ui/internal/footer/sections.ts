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
    title: "Computer Club",
    identityColor: "cs-1",
    links: [
      { name: "Front-End",            href: "/clubs/computer/#frontend" },
      { name: "Back-End",             href: "/clubs/computer/#backend" },
      { name: "Mobile Development",   href: "/clubs/computer/#mobile-development" },
      { name: "Data Science",         href: "/clubs/computer/#data-science" },
      { name: "Artificial Intelligence", href: "/clubs/computer/#ai" },
      { name: "Cyber Security",       href: "/clubs/computer/#cyber-security" },
    ],
  },
  {
    title: "Robotics Club",
    identityColor: "ras-1",
    links: [
      { name: "Embedded Systems", href: "/clubs/robotics/#embedded-systems" },
      { name: "ROS",              href: "/clubs/robotics/#ros" },
      { name: "PCB Design",       href: "/clubs/robotics/#pcb-design" },
      { name: "Mechanical",       href: "/clubs/robotics/#mechanical" },
      { name: "IC Design",        href: "/clubs/robotics/#ic-design" },
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
