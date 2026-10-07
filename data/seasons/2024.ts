import type { Season } from "./types";

// Recovered from the previous website (github.com/CS-ZSC/IEEE-Website,
// database/database.json as of July 2024). It only listed the executive board
// and chapter boards, without contact details.
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
  committees: {},
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
      tracks: {},
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
      tracks: {},
    },
    pes: {
      board: [
        {
          name: "Mustafa Mohamed",
          position: "Chairman",
          avatarSrc: "/Images/board/2024/chapters/pes/chairperson.webp",
        },
      ],
      tracks: {},
    },
  },
};

export default season2024;
