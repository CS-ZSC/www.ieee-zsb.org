import type { Season } from "./types";

// Recovered from the branch's two 2019/2020 Facebook announcements (no contact
// details): the "High Board" and the "Board" of committee heads and chapter chairs.
// PR & FR is shown as Business Development and TA & M as Talent & Tech.
const season2020: Season = {
  year: 2020,
  executiveBoard: [
    {
      name: "Yehya Khurkhash",
      position: "Chairman",
      avatarSrc: "/Images/board/2020/executive-board/chairperson.webp",
    },
    {
      name: "Mohammad Mostafa",
      position: "Vice Chairman",
      avatarSrc: "/Images/board/2020/executive-board/vice-chairperson.webp",
    },
    {
      name: "Hanan Basheer",
      position: "Secretary",
      avatarSrc: "/Images/board/2020/executive-board/secretary.webp",
    },
    {
      name: "Nourhan Hany",
      position: "Treasurer",
      avatarSrc: "/Images/board/2020/executive-board/treasurer.webp",
    },
  ],
  committees: {
    "business-development": [
      {
        name: "Alyaa Ali",
        position: "PR & FR Head",
        avatarSrc: "/Images/board/2020/committees/business-development/leader.webp",
      },
    ],
    marketing: [
      {
        name: "Hagar Bahnss",
        position: "Head",
        avatarSrc: "/Images/board/2020/committees/marketing/leader.webp",
      },
    ],
    multimedia: [
      {
        name: "Ahmed Abdellatif",
        position: "Head",
        avatarSrc: "/Images/board/2020/committees/multimedia/leader.webp",
      },
    ],
    operations: [
      {
        name: "Mohammed Atef",
        position: "Head",
        avatarSrc: "/Images/board/2020/committees/operations/leader.webp",
      },
    ],
    "talent&tech": [
      {
        name: "Nada Ahmed",
        position: "TA & M Head",
        avatarSrc: "/Images/board/2020/committees/talent&tech/leader.webp",
      },
    ],
  },
  chapters: {
    cs: {
      board: [
        {
          name: "Zyad Yasser",
          position: "Chairman",
          avatarSrc: "/Images/board/2020/chapters/cs/chairperson.webp",
        },
      ],
      tracks: {},
    },
    ras: {
      board: [
        {
          name: "Ahmed Hamdy",
          position: "Chairman",
          avatarSrc: "/Images/board/2020/chapters/ras/chairperson.webp",
        },
      ],
      tracks: {},
    },
  },
};

export default season2020;
