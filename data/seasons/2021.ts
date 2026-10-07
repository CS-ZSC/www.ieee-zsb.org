import type { Season } from "./types";

// Recovered from the branch's two 2020-2021 Facebook announcements (no contact
// details): the "High Board" and the "Board" of committee heads and chapter chairs.
// PR is shown as Business Development and Talent as Talent & Tech.
const season2021: Season = {
  year: 2021,
  executiveBoard: [
    {
      name: "Mahmoud Elbahrawy",
      position: "Chairman",
      avatarSrc: "/Images/board/2021/executive-board/chairperson.webp",
    },
    {
      name: "Ahmed Hamdy",
      position: "Vice Chairman",
      avatarSrc: "/Images/board/2021/executive-board/vice-chairperson.webp",
    },
    {
      name: "Mohammed Atef",
      position: "Secretary",
      avatarSrc: "/Images/board/2021/executive-board/secretary.webp",
    },
    {
      name: "Ahmed Ashraf",
      position: "Treasurer",
      avatarSrc: "/Images/board/2021/executive-board/treasurer.webp",
    },
  ],
  committees: {
    "business-development": [
      {
        name: "Mohammed Raiyah",
        position: "PR Head",
        avatarSrc: "/Images/board/2021/committees/business-development/leader.webp",
      },
    ],
    marketing: [
      {
        name: "Feryal Zaid",
        position: "Head",
        avatarSrc: "/Images/board/2021/committees/marketing/leader.webp",
      },
    ],
    multimedia: [
      {
        name: "Mohamed Eldmrdash",
        position: "Head",
        avatarSrc: "/Images/board/2021/committees/multimedia/leader.webp",
      },
    ],
    operations: [
      {
        name: "Amr Mohamed Eissa",
        position: "Head",
        avatarSrc: "/Images/board/2021/committees/operations/leader.webp",
      },
    ],
    "talent&tech": [
      {
        name: "Mohamed Elzagzog",
        position: "Talent Head",
        avatarSrc: "/Images/board/2021/committees/talent&tech/leader.webp",
      },
    ],
  },
  chapters: {
    cs: {
      board: [
        {
          name: "Ahmed Mostafa",
          position: "Chairman",
          avatarSrc: "/Images/board/2021/chapters/cs/chairperson.webp",
        },
      ],
      tracks: {},
    },
    ras: {
      board: [
        {
          name: "Mayar Hazem",
          position: "Chairwoman",
          avatarSrc: "/Images/board/2021/chapters/ras/chairperson.webp",
        },
      ],
      tracks: {},
    },
  },
};

export default season2021;
