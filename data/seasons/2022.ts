import type { Season } from "./types";

// Recovered from the branch's 2021/2022 (#Like_Never_Before) Facebook posts, one
// card per member, without contact details. PR/FR is shown as Business
// Development and Talent Management as Talent & Tech.
const season2022: Season = {
  year: 2022,
  executiveBoard: [
    {
      name: "Mohammed Raiyah",
      position: "Chairman",
      avatarSrc: "/Images/board/2022/executive-board/chairperson.webp",
    },
    {
      name: "Ahmed Hamdy",
      position: "Technical Vice Chairman",
      avatarSrc: "/Images/board/2022/executive-board/vice-technical.webp",
    },
    {
      name: "Mahmoud Elbahrawy",
      position: "Managerial Vice Chairman",
      avatarSrc: "/Images/board/2022/executive-board/vice-managerial.webp",
    },
    {
      name: "Nouran Osama",
      position: "Secretary",
      avatarSrc: "/Images/board/2022/executive-board/secretary.webp",
    },
    {
      name: "Ahmed Ashraf",
      position: "Treasurer",
      avatarSrc: "/Images/board/2022/executive-board/treasurer.webp",
    },
    {
      name: "Ahmed Abdellatif",
      position: "Branding Officer",
      avatarSrc: "/Images/board/2022/executive-board/branding-officer.webp",
    },
  ],
  committees: {
    "brand-ambassadors": [
      {
        name: "Abdullah Hussein",
        position: "Manager",
        avatarSrc: "/Images/board/2022/committees/ambassadors/leader.webp",
      },
    ],
    "business-development": [
      {
        name: "Amr Nafea",
        position: "PR/FR Manager",
        avatarSrc: "/Images/board/2022/committees/business-development/leader.webp",
      },
    ],
    "event-management": [
      {
        name: "Shorouk Radwan",
        position: "Manager",
        avatarSrc: "/Images/board/2022/committees/event-management/leader.webp",
      },
    ],
    marketing: [
      {
        // Her card shows a placeholder instead of a photo.
        name: "Marwa Hisham",
        position: "Manager",
      },
    ],
    "talent&tech": [
      {
        // Spelled "Mohamed Hamada" on the 2023 cards; same person.
        id: "mohamed-hamada",
        name: "Mohammed Hamada",
        position: "Manager",
        avatarSrc: "/Images/board/2022/committees/talent&tech/leader.webp",
      },
    ],
  },
  chapters: {
    cs: {
      board: [
        {
          name: "Ahmed Anwar",
          position: "Chairman",
          avatarSrc: "/Images/board/2022/chapters/cs/chairperson.webp",
        },
      ],
      tracks: {},
    },
    pes: {
      board: [
        {
          name: "Ahmed El-Shahat",
          position: "Chairman",
          avatarSrc: "/Images/board/2022/chapters/pes/chairperson.webp",
        },
      ],
      tracks: {},
    },
    ras: {
      board: [
        {
          name: "Mohammed Elbagoury",
          position: "Chairman",
          avatarSrc: "/Images/board/2022/chapters/ras/chairperson.webp",
        },
      ],
      tracks: {},
    },
  },
};

export default season2022;
