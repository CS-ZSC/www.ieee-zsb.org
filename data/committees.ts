import type { Position } from "./position";

export interface Activities {
  title: string;
  description: string;
}

export interface CommitteesData {
  id: number;
  name: string;
  hashtag: string;
  description: string;
  image: string;
  goals: string[];
  activities?: Activities[];
  board: Position[];
}

let idCounter: number = 1;

const committeesData: CommitteesData[] = [
  {
    id: idCounter++,
    name: "Brand Ambassadors",
    hashtag: "brand-ambassadors",
    description:
      "The Ambassadors team helps students discover what IEEE is, how it works globally, and what opportunities it offers at our Zagazig student branch. Members gain essential soft skills such as communication, leadership and presentation. They also explore personal branding through sessions on LinkedIn and how to represent themselves professionally. They attend focused sessions on planning, marketing basics, and content writing—helping them represent IEEE in a clear and professional way, and explain its message to others. To support their work, members use practical tools like Word, PowerPoint, Canva, and Google Sheets. What makes this team special is that every member gets a real leadership opportunity during the Ambassadors Program, which happens mid-season. Each member leads a group of new students—conducting interviews, delivering sessions, and guiding them through tasks. It's a guaranteed leadership experience that sets Ambassadors apart from other teams.Organizing the Ambassadors Program is one of the team's core responsibilities. It's fully planned and managed by the members from start to finish.",
    image: "/Committees/brand-ambassadors.webp",
    goals: [
      "Spread awareness about IEEE and the student branch among new students.",
      "Help team members grow through real leadership roles and soft skills development.",
    ],
    activities: [
      {
        title: "Soft Skills Sessions",
        description:
          "Training on communication, presentation, leadership, and other key skills to support personal growth.",
      },
      {
        title: "Personal Branding & Self-Marketing",
        description:
          "Members learn how to present themselves professionally by building strong LinkedIn profiles, writing effective CVs, and understanding basic marketing skills that help them stand out and communicate their value.",
      },
      {
        title: "Ambassadors Program",
        description:
          "A learning journey for new students. Team members lead the program, conduct interviews, give sessions, and guide participants through tasks.",
      },
      {
        title: "Spreading IEEE Awareness",
        description:
          "Team members connect with students through creative posts, booth activities, and direct interactions to introduce what IEEE is, how it works globally and locally, and how students can benefit from joining.",
      },
    ],
    board: [
      {
        name: "Mariam Fareed",
        position: "Leader",
        avatarSrc: "/Images/board/committees/ambassadors/leader.webp",
        linkedin: "http://linkedin.com/in/mariam-fareed",
        email: "mariam.fareed@ieee-zsb.org ",
      },
      {
        name: "Beshoy Seleman",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/ambassadors/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/beshoy-seleman",
        email: "beshoyselemanzakaria@gmail.com",
      },
      {
        name: "Menna Allah Amr",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/ambassadors/vice-leader-2.webp",
        linkedin: "https://www.linkedin.com/in/menna-allah-amr-mohamed",
        email: "Mennaamr740@gmail.com",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Business Development",
    hashtag: "business-development",
    description:
      "The BD team at IEEE-ZSB is responsible for the external representation of the student branch. It combines the roles of both Public Relations and Fundraising. The team ensures a strong presence for the branch by handling partnerships and outreach with other entities. It's also responsible for securing financial and in-kind support by forming sponsorship deals and building long-term collaborations.",
    image: "/Committees/business-development.webp",
    goals: [
      "Establish and maintain strong partnerships with external organizations, companies, and NGOs to support IEEE-ZSB initiatives.",
      "Secure financial support that contribute to the growth and sustainability of the student branch's activities.",
    ],
    activities: [
      {
        title: "Opportunity Scouting",
        description:
          "Actively seeking new opportunities that can benefit the branch in terms of growth, exposure, and resources.",
      },
      {
        title: "External Representation",
        description:
          "Professionally representing IEEE-ZSB in external communications, meetings, and public appearances to uphold the branch's reputation and help build credibility.",
      },
      {
        title: "Relationship Management",
        description:
          "Handling and maintaining external relations to ensure positive engagement and continuous support from outside entities.",
      },
    ],
    board: [
      {
        name: "Ahmed Raiyah",
        position: "Leader",
        avatarSrc: "/Images/board/committees/business-development/leader.webp",
        linkedin: "http://linkedin.com/in/ahmed-raiyah",
        email: "ahmed.raiyah@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Operations",
    hashtag: "operations",
    description:
      "The Operations Committee at IEEE ZSB is responsible for planning, organizing, and executing all events held under the branch. From technical workshops and competitions to social gatherings and mega conferences, the committee ensures that every detail is wellprepared and smoothly delivered. Members of the committee handle logistics, coordination, venue setup, time management, and follow-up tasks making sure that each event reflects the professionalism and values of IEEE.",
    image: "/Committees/event-management.webp",
    goals: [
      "Ensure the smooth execution of all IEEE ZSB events through effective planning and coordination.",
      "Enhance attendee experience by focusing on logistics, time management, and clear communication.",
      " Support other committees by managing the operational side of their events.",
    ],
    activities: [
      {
        title: "Pre-Event Planning",
        description:
          "Drafting timelines, assigning responsibilities, preparing materials, and reserving venues.",
      },
      {
        title: "On-Ground Coordination",
        description:
          "Managing time schedules, guiding attendees, supporting speakers, and solving any real-time issues.",
      },
      {
        title: "Post-Event Evaluation",
        description:
          "Collecting feedback, preparing reports, and recommending improvements for future events.",
      },
    ],
    board: [
  {
    name: "Ziad Awad",
    position: "Leader",
    avatarSrc: "/Images/board/committees/operations/leader.webp",
    linkedin: "https://www.linkedin.com/in/ziadawad",
    email: "ziad.awad@ieee-zsb.org",
  },
  {
    name: "Youssef Ebrahim",
    position: "Vice Leader",
    avatarSrc: "/Images/board/committees/operations/vice-leader-2.webp",
    linkedin: "https://www.linkedin.com/in/youssef-ebrahim01",
    email: "youssefebrahim299@gmail.com",
  },
  {
    name: "Maximus Helmy",
    position: "Vice Leader",
    avatarSrc: "/Images/board/committees/operations/vice-leader-1.webp",
    linkedin: "https://www.linkedin.com/in/maximus-helmy-664148335",
    email: "maxsimoushelmy@gmail.com",
  },
],

  },
  {
    id: idCounter++,
    name: "Marketing",
    hashtag: "marketing",
    description:
      "The Marketing Committee at IEEE ZSB is the voice behind everything you see and feel about us. We create and manage creative campaigns that promote our events, initiatives, and values. From writing catchy and engaging content for social media to building full communication strategies, we make sure every message hits the right audience. With a mix of creativity, strategy, and data-driven thinking, we turn ideas into stories that connect making sure IEEE ZSB is always seen, heard, and remembered.",
    image: "/Committees/marketing.webp",
    goals: [
      "Develop effective marketing and communication strategies for IEEE ZSB initiatives",
      "Strengthen the brand presence across social media and other channels",
      "Enhance audience engagement through creative content and storytelling",
      "Leverage analytics and data-driven decisions to improve campaign performance",
      "Foster teamwork and creativity within the committee to deliver impactful campaigns",
    ],
    activities: [
      {
        title: "Workshop",
        description: "Social media marketing fundamentals and content creation",
      },
      {
        title: "Offline Session",
        description: "Building complete communication strategies for events",
      },
      {
        title: "Hands-on Activity",
        description: "Designing and analyzing a full marketing campaign",
      },
      {
        title: "Brainstorming Session",
        description: "Creative storytelling and brand identity development",
      },
    ],
    board: [
      {
        name: "Bassant Elslawy",
        position: "Leader",
        avatarSrc: "/Images/board/committees/marketing/leader.webp",
        linkedin: "https://www.linkedin.com/in/bassantelslawy",
        email: "bassant.elslawy@ieee-zsb.org",
      },
      {
        name: "Nouran Yasser",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/marketing/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/nouran-yasser-elsayed",
        email: "nouran.yasser@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Multimedia",
    hashtag: "multimedia",
    description:
      "The Multimedia Committee is the creative powerhouse behind IEEE ZSB's visual identity. We capture, design, and produce all kinds of content — from videos and photos to graphics and event coverage. Our photographers freeze moments that tell stories. Our graphic designers craft visuals that communicate ideas with clarity and style. And our videographers bring events to life through cinematic edits and storytelling. Whether it's a highlight reel, a campaign post, or a full media production — we make sure IEEE ZSB is seen, heard, and remembered. We turn ideas into visuals that inspire.",
    image: "/Committees/multimedia.webp",
    goals: [
      "Develop advanced skills in photography, videography, and graphic design",
      "Create visually compelling content that strengthens IEEE ZSB's brand identity",
      "Master editing tools and techniques for professional-quality production",
      "Ensure high-quality event coverage to document and promote IEEE ZSB activities",
      "Collaborate effectively as a creative team to deliver impactful visual storytelling",
    ],
    activities: [
      {
        title: "Workshop",
        description: "Photography basics and storytelling through images",
      },
      {
        title: "Hands-on Session",
        description: "Videography techniques and cinematic editing",
      },
      {
        title: "Offline Session",
        description: "Graphic design fundamentals and advanced tools",
      },
      {
        title: "Practical Project",
        description: "Full event coverage and content production for IEEE ZSB",
      },
    ],
    board: [
      {
        name: "Mohamed Eldeeb",
        position: "Leader",
        avatarSrc: "/Images/board/committees/multimedia/leader.webp",
        linkedin: "https://www.linkedin.com/in/mohamed-tarek-eldeeb" ,
        email: "mohamed_eldeeb@ieee-zsb.org",
      },
      {
        name: "Ziad Elnemr",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/multimedia/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/ziad-ahmed-529304330",
        email: "ziadelnemr@ieee-zsb.org",
      },
      {
        name: "Mohammad Hijazi",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/multimedia/vice-leader-2.webp",
        linkedin: "https://www.linkedin.com/in/mohammadmhijazi",
        email: "mhijazi@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Talent & Tech",
    hashtag: "talent&tech",
    description:
      "Talent & Tech is a hybrid team that merges talent management with technical solutions. It was previously called Talent Management, but now it also works on tools and systems to help the branch work better. The team supports members, helps them grow, and makes sure they're doing well. Members also learn about HR topics like recruitment, workforce planning, and employee development, and they use real platforms like Workable. On the tech side, they build tools like the registration app to serve the branch's needs.",
    image: "/Committees/talent&tech.webp",
    goals: [
      "Help branch members if they face any problems and work on making the branch a better place for everyone to learn and grow.",
      "Create simple tools and systems to make the branch work easier and more organized.",
    ],
    activities: [
      {
        title: "Recruitment & Selection Training",
        description:
          "Hands-on sessions covering CV screening, recruitment methods, interview types, and how to use platforms like Workable effectively.",
      },
      {
        title: "Advanced Workforce Planning",
        description:
          "Exploring modern trends in workforce planning and applying them practically to real scenarios within the branch.",
      },
      {
        title: "Employee Development Programs",
        description:
          "Sessions on compensation, benefits, training, and growth strategies — equipping members with strong HR knowledge.",
      },
      {
        title: "Technical Development",
        description:
          "Creating internal platforms like registration tools and performance trackers to support team operations.",
      },
    ],
    board: [
      {
        name: "Ahmed El-ghrabawy",
        position: "Leader",
        avatarSrc: "/Images/board/committees/talent&tech/leader.webp",
        linkedin: "https://www.linkedin.com/in/ahmed-elghrabawy",
        email: "ahmed-elghrabawy@ieee-zsb.org",
      },
      {
        name: "Salsabeel Ahmed",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/talent&tech/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/salsabeel-ahmed-2392b8257",
        email: "salsabeelahmed619@gmail.com",
      },
      {
        name: "Mahmoud Said",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/talent&tech/vice-leader-2.webp",
        linkedin: "https://www.linkedin.com/in/0xcode7/",
        email: "mahmoudsaid1704@gmail.com",
      },
    ],
  },
];

export default committeesData;
