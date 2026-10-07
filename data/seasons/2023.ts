import type { Season } from "./types";

// Recovered from the branch's 2023 Facebook announcements (no contact details):
// "Executive Officers '23", the "Managerial Board" (committee managers and
// chapter chairs), and the committee and chapter "Vices" posts.
const season2023: Season = {
  year: 2023,
  executiveBoard: [
    {
      name: "Ahmed Ashraf",
      position: "Chairman",
      avatarSrc: "/Images/board/2023/executive-board/chairperson.webp",
    },
    {
      name: "Mohamed Samy",
      position: "Technical Vice Chairman",
      avatarSrc: "/Images/board/2023/executive-board/vice-technical.webp",
    },
    {
      name: "Amr Nafea",
      position: "Managerial Vice Chairman",
      avatarSrc: "/Images/board/2023/executive-board/vice-managerial.webp",
    },
    {
      name: "Ahmed Farahat",
      position: "Secretary",
      avatarSrc: "/Images/board/2023/executive-board/secretary.webp",
    },
    {
      name: "Alaa Khaled",
      position: "Treasurer",
      avatarSrc: "/Images/board/2023/executive-board/treasurer.webp",
    },
    {
      name: "Shorouk Radwan",
      position: "Branding Officer",
      avatarSrc: "/Images/board/2023/executive-board/branding-officer.webp",
    },
    {
      name: "Ahmed Abdellatif",
      position: "Identity Officer",
      avatarSrc: "/Images/board/2023/executive-board/identity-officer.webp",
    },
  ],
  committees: {
    "brand-ambassadors": [
      {
        // Not the Aya Mahmoud of 2024 (Basic AI track) and 2025 (CS chair).
        id: "aya-mahmoud-2023",
        name: "Aya Mahmoud",
        position: "Manager",
        avatarSrc: "/Images/board/2023/committees/ambassadors/leader.webp",
      },
      {
        name: "Mohamed Ashraf",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/ambassadors/vice-leader-1.webp",
      },
      {
        name: "Abdelrahman El-Sadeq",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/ambassadors/vice-leader-2.webp",
      },
    ],
    "business-development": [
      {
        name: "Shahd Elbendary",
        position: "Manager",
        avatarSrc: "/Images/board/2023/committees/business-development/leader.webp",
      },
      {
        name: "Ahmed Orabi",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/business-development/vice-leader-1.webp",
      },
    ],
    "event-management": [
      {
        name: "Shehab Yousef",
        position: "Manager",
        avatarSrc: "/Images/board/2023/committees/event-management/leader.webp",
      },
      {
        name: "Nourhan Nabil",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/event-management/vice-leader-1.webp",
      },
    ],
    marketing: [
      {
        name: "Eman Faisal",
        position: "Manager",
        avatarSrc: "/Images/board/2023/committees/marketing/leader.webp",
      },
      {
        name: "Mohamed Askoura",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/marketing/vice-leader-1.webp",
      },
      {
        name: "Ziad Hammam",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/marketing/vice-leader-2.webp",
      },
      {
        name: "Hazem Dahi",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/marketing/vice-leader-3.webp",
      },
    ],
    multimedia: [
      {
        name: "Muhammad Elmansi",
        position: "Manager",
        avatarSrc: "/Images/board/2023/committees/multimedia/leader.webp",
      },
      {
        name: "Ahmed Mohamed",
        position: "Design Vice Manager",
        avatarSrc: "/Images/board/2023/committees/multimedia/vice-leader-1.webp",
      },
      {
        name: "Nabil Tamer",
        position: "Photography Vice Manager",
        avatarSrc: "/Images/board/2023/committees/multimedia/vice-leader-2.webp",
      },
    ],
    "talent&tech": [
      {
        name: "Mohamed Hamada",
        position: "Manager",
        avatarSrc: "/Images/board/2023/committees/talent&tech/leader.webp",
      },
      {
        name: "Abdelrhman Ahmed",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/talent&tech/vice-leader-1.webp",
      },
      {
        name: "Manal Ali",
        position: "Vice Manager",
        avatarSrc: "/Images/board/2023/committees/talent&tech/vice-leader-2.webp",
      },
    ],
  },
  chapters: {
    cs: {
      board: [
        {
          name: "Khaled Fahmy",
          position: "Chairman",
          avatarSrc: "/Images/board/2023/chapters/cs/chairperson.webp",
        },
        {
          name: "Mohamed Nasr",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2023/chapters/cs/vice-chairperson-1.webp",
        },
      ],
      tracks: {},
    },
    ras: {
      board: [
        {
          name: "Omar Omran",
          position: "Chairman",
          avatarSrc: "/Images/board/2023/chapters/ras/chairperson.webp",
        },
        {
          name: "Abdulrahman Omar",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2023/chapters/ras/vice-chairperson-1.webp",
        },
        {
          name: "Mohamed Abd Elhalim",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2023/chapters/ras/vice-chairperson-2.webp",
        },
      ],
      tracks: {},
    },
    pes: {
      board: [
        {
          name: "Abdullah Hussein",
          position: "Chairman",
          avatarSrc: "/Images/board/2023/chapters/pes/chairperson.webp",
        },
      ],
      tracks: {},
    },
    wie: {
      board: [
        {
          name: "Amera Mohamed",
          position: "Chairwoman",
          avatarSrc: "/Images/board/2023/chapters/wie/chairperson.webp",
        },
        {
          name: "Hoda Elnaghy",
          position: "Vice Chairwoman",
          avatarSrc: "/Images/board/2023/chapters/wie/vice-chairperson-1.webp",
        },
        {
          name: "Gehad Alaa",
          position: "Treasurer",
          avatarSrc: "/Images/board/2023/chapters/wie/treasurer.webp",
        },
      ],
      tracks: {},
    },
  },
};

export default season2023;
