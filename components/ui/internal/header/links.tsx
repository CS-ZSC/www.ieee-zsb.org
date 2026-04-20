interface LinkItem {
  id: number;
  name: string;
  path: string;
}

let idCounter: number = 1;

export const Links: LinkItem[] = [
  { id: idCounter++, name: "Committees", path: "/committees" },
  { id: idCounter++, name: "Events", path: "/events" },
  { id: idCounter++, name: "News", path: "/news" },
  { id: idCounter++, name: "Membership", path: "/membership" },
  { id: idCounter++, name: "About", path: "/about" },
];
