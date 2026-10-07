import type { Season } from "./types";

// Recovered from two sources, neither with contact details:
// - the previous website (github.com/CS-ZSC/IEEE-Website, database/database.json
//   as of July 2024): executive board and chapter chairs/vice chairs;
// - the branch's "internal board" Facebook post (#FOR_THE_STARS): track leads,
//   committee vice heads, and the PES and WIE vice chairs.
const season2024: Season = {
  year: 2024,
  executiveBoard: [
    {
      name: "Abdullah Hussein",
      position: "Chairman",
      avatarSrc: "/Images/board/2024/executive-board/chairperson.webp",
    },
    {
      name: "Abdulrahman Omar",
      position: "Vice Chairman",
      avatarSrc: "/Images/board/2024/executive-board/vice-chairperson.webp",
    },
    {
      name: "Reem Elsingaby",
      position: "Secretary",
      avatarSrc: "/Images/board/2024/executive-board/secretary.webp",
    },
    {
      name: "Mohamed Askora",
      position: "Branding Officer",
      avatarSrc: "/Images/board/2024/executive-board/branding-officer.webp",
    },
    {
      name: "Shahd Elbendary",
      position: "Treasurer",
      avatarSrc: "/Images/board/2024/executive-board/treasurer.webp",
    },
  ],
  committees: {
    "brand-ambassadors": [
      {
        name: "Mohsen Muhammed",
        position: "Vice Head",
        avatarSrc: "/Images/board/2024/committees/ambassadors/vice-leader-1.webp",
      },
    ],
    multimedia: [
      {
        name: "Sama Dahshan",
        position: "Vice Head",
        avatarSrc: "/Images/board/2024/committees/multimedia/vice-leader-1.webp",
      },
    ],
    "talent&tech": [
      {
        name: "Bassant Dwidar",
        position: "Vice Head",
        avatarSrc: "/Images/board/2024/committees/talent&tech/vice-leader-1.webp",
      },
      {
        name: "Rovida Sleem",
        position: "Vice Head",
        avatarSrc: "/Images/board/2024/committees/talent&tech/vice-leader-2.webp",
      },
    ],
  },
  chapters: {
    cs: {
      board: [
        {
          name: "Amr Yasser Saber",
          position: "Chairman",
          avatarSrc: "/Images/board/2024/chapters/cs/chairperson.webp",
        },
        {
          name: "Khaled Fahmy",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2024/chapters/cs/vice-chairperson-1.webp",
        },
        {
          name: "Hossam Elsherbiny",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2024/chapters/cs/vice-chairperson-2.webp",
        },
      ],
      tracks: {
        frontend: [
          {
            name: "Abdelrahman Ibrahim",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/cs/tracks-heads/frontend/head.webp",
          },
        ],
        backend: [
          {
            name: "Nourhan Hesham",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/cs/tracks-heads/backend/head.webp",
          },
        ],
        "mobile-development": [
          {
            name: "Nermeen Fares",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/cs/tracks-heads/mobile-development/head.webp",
          },
        ],
        "basic-ai": [
          {
            name: "Aya Mahmoud",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/cs/tracks-heads/basic-ai/head.webp",
          },
        ],
        "advanced-ai": [
          {
            name: "Abdullah Farid",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/cs/tracks-heads/advanced-ai/head.webp",
          },
        ],
      },
    },
    ras: {
      board: [
        {
          name: "Mahmoud Samy",
          position: "Chairman",
          avatarSrc: "/Images/board/2024/chapters/ras/chairperson.webp",
        },
        {
          name: "Omar Ibrahim",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2024/chapters/ras/vice-chairperson-1.webp",
        },
        {
          name: "Abdullah Elmasry",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2024/chapters/ras/vice-chairperson-2.webp",
        },
      ],
      tracks: {
        ros: [
          {
            name: "Mustafa Anwar",
            position: "Track Lead",
          },
        ],
        mechanical: [
          {
            name: "Eslam Salah",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/ras/tracks-heads/mechanical/head.webp",
          },
          {
            name: "Ibrahim Eid",
            position: "Track Vice-Lead",
            avatarSrc: "/Images/board/2024/chapters/ras/tracks-heads/mechanical/vice-head-1.webp",
          },
        ],
      },
    },
    pes: {
      board: [
        {
          name: "Mustafa Mohamed",
          position: "Chairman",
          avatarSrc: "/Images/board/2024/chapters/pes/chairperson.webp",
        },
        {
          name: "Wagdi Elhusseini",
          position: "Vice Chairman",
          avatarSrc: "/Images/board/2024/chapters/pes/vice-chairperson-1.webp",
        },
      ],
      tracks: {
        "basic-automation": [
          {
            name: "Adham Amgad",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/pes/tracks-heads/basic-automation/head.webp",
          },
        ],
        "advanced-automation": [
          {
            name: "Fady Ashraf",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/pes/tracks-heads/advanced-automation/head.webp",
          },
        ],
        "basic-distribution": [
          {
            name: "Eslam Heikal",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/pes/tracks-heads/basic-distribution/head.webp",
          },
        ],
        "advanced-distribution": [
          {
            name: "Mustafa Fool",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/pes/tracks-heads/advanced-distribution/head.webp",
          },
        ],
        "smart-home": [
          {
            name: "Mohamed Gamal",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/pes/tracks-heads/smart-home/head.webp",
          },
        ],
        mechanical: [
          {
            name: "Ahmed Khaled",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/pes/tracks-heads/mechanical/head.webp",
          },
        ],
      },
    },
    wie: {
      board: [
        {
          name: "Roaa Ayman",
          position: "Vice Chairwoman",
          avatarSrc: "/Images/board/2024/chapters/wie/vice-chairperson-1.webp",
        },
      ],
      tracks: {
        mechanical: [
          {
            name: "Reem Elsayed",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/wie/tracks-heads/mechanical/head.webp",
          },
        ],
        "web-development": [
          {
            name: "Ahmed Kotb",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/wie/tracks-heads/web-development/head.webp",
          },
        ],
        robotics: [
          {
            name: "Eman Abd Elhamed",
            position: "Track Lead",
            avatarSrc: "/Images/board/2024/chapters/wie/tracks-heads/robotics/head.webp",
          },
        ],
      },
    },
  },
};

export default season2024;
