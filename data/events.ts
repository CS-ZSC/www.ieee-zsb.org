export interface EventsData {
  id: number;
  homeItem?: boolean;
  currentEvent?: boolean;
  upcomingEvent?: boolean;
  title: string;
  description: string;
  location: string;
  date: string;
  photo: string;
  link?: string;
}

let idCounter: number = 1;

const eventsData: EventsData[] = [
  {
    id: idCounter++,
    homeItem: true,
    upcomingEvent: true,
    title: "Mutex Summit 2025",
    description:
      "MUTEX Summit is back as the biggest technological event in the Delta region, where technology meets entrepreneurship in an extraordinary experience. Under the theme 'Pirates and the Lost Treasure', participants will embark on an epic voyage through seas, storms, and challenges! The summit features expert-led sessions and workshops across diverse fields, showcases innovative startups solving real-world problems with cutting-edge technology, and hosts exciting competitions that push participants' skills and creativity to their limits. After a successful journey since 2017 and a brief pause due to COVID, MUTEX Summit 2025 promises to be a transformative adventure.",
    location: "Zagazig University",
    date: "Comeing Soon",
    photo: "/Events/mutex.png",
    link: "https://ieee-zsb-events.netlify.app/events/mutex"
  },
  {
    id: idCounter++,
    homeItem: true,
    // currentEvent: true,
    title: "PES Day 2025",
    description:
      "On PES Day 2025, we celebrated the importance of power and energy innovation in shaping the future. The event featured technical workshops, inspiring talks from industry professionals, and engaging activities that emphasized sustainability and clean energy. Students and professionals came together to explore emerging technologies and their applications in solving real-world energy challenges.",
    location: "Zagazig University",
    date: "22/4/2025",
    photo: "/Events/pes-day-2025.webp",
  },
  {
    id: idCounter++,
    homeItem: true,
    title: "Mutex 2024",
    description:
      "MUTEX is the biggest annual technological event in the Delta region, hosted by IEEE Zagazig SB. The event focuses on introducing the latest technologies to the audience and setting a clear path for them to follow. This year, MUTEX is different. In addition to sessions and workshops on the latest technologies, we will have competitions in three different fields: a Problem Solving Contest, a Formula Firefighting Robot Competition, and a Smart Homes Hackathon.",
    location: "Zagazig University",
    date: "10/8/2024",
    photo: "/Events/mutex-2024.webp",
  },
  {
    id: idCounter++,
    title: "Tech 101",
    description:
      "Tech 101 was an event created for everyone interested in technology and programming. It aimed to help participants choose their field wisely and guide them on how to start. To ensure they were on the right path, having a strong foundation was essential, and this was the event's primary goal. This was achieved through a series of technical workshops in the following fields: Artificial Intelligence, Smart Homes, Distribution, Industrial Automation, Mechanical Design, Backend Development, Frontend Development, Electronics, Networking, and Cyber Security. Participants had the opportunity to learn from experts who have studied and worked in these fields, saving them a lot of time and effort. The event lasted for 10 days.",
    location: "Zagazig University",
    date: "15/2/2024",
    photo: "/Events/tech-101.webp",
  },
  {
    id: idCounter++,
    homeItem: true,
    title: "Career Hacks",
    description:
      "Career Hacks was an online event tailored to help students find their career paths and unleash their true potential. Event Objectives: Learned about the benefits of AI and how to use it in career placement. Helped participants decide their career paths. Provided guidance on building a strong CV. Taught participants how to establish a strong LinkedIn account. The event offered valuable insights and practical tips to assist students in navigating their professional journeys effectively.",
    location: "Online",
    date: "3/8/2023",
    photo: "/Events/career-hacks.webp",
  },
  {
    id: idCounter++,
    title: "Mutex 2019",
    description:
      "The third edition of MUTEX expanded significantly, with over 1880 registered participants and space for more than 680 attendees. MUTEX'19 covered five new topics from IEEE Future Directions through talks and hands-on workshops. The event featured a panel discussion with tech startups sharing their success stories and a talk about Technology Innovation & Entrepreneurship Center programs for youth.",
    location: "Zagazig University",
    date: "16/3/2019",
    photo: "/Events/mutex-2019.webp",
  },
  {
    id: idCounter++,
    title: "Mutex 2018",
    description:
      "The second edition of MUTEX expanded significantly, with over 1100 registered participants and space for more than 550 attendees. MUTEX'18 covered new tracks from IEEE Future Directions, attracting top sponsors and media partners. The National Telecommunication Regulatory Authority (NTRA) was our main sponsor, with Vodafone as our golden sponsor, alongside more than five media partners. As we grow older, the event grows bigger with us and our partners.",
    location: "Zagazig University",
    date: "13/3/2018",
    photo: "/Events/mutex-2018.webp",
  },
  {
    id: idCounter++,
    title: "Mutex 2017",
    description:
      "The first edition of MUTEX marked the launch of the Computer Society Zagazig Chapter. This groundbreaking event introduced new technical topics to over 350 attendees, targeting engineers with majors in Computer Science and Communication. For the first time in Zagazig, the event partnered with many multinational companies, providing an unparalleled platform for knowledge and networking.",
    location: "Zagazig University",
    date: "2/3/2017",
    photo: "/Events/mutex-2017.webp",
  },
];

export default eventsData;
