export interface Section {
  id: number;
  heading: string;
  descriptions: string[];
  photo?: string;
  photoDescription?: string;
}

export interface NewsItem {
  id: number;
  highlightedItem?: boolean;
  homeItem?: boolean;
  title: string;
  description: string;
  dateCreated: string;
  author: string;
  tags: string[];
  mainPhoto: string;
  sections: Section[];
}

let idCounter: number = 1;

export const newsData: NewsItem[] = [
  {
    id: idCounter++,
    homeItem: true,
    title: "Robotiva Finals Triumph",
    description:
      "Our IEEE RAS chapter sent five teams to the prestigious Robotiva competition, and all five teams made it to the finals! With SOUL winning 1st place and Intellibots securing 2nd, RAS once again proved that dedication, teamwork, and relentless learning lead to excellence. This victory isn't just a trophy—it's a statement of what we stand for.",
    dateCreated: "27 Feb, 2025",
    author: "Marwan Tamer",
    tags: ["RAS", "Robotiva", "Competitions"],
    mainPhoto: "/News/robotiva/soul.webp",
    sections: [
      {
        id: 0,
        heading: "A Competition That Put Us to the Test",
        descriptions: [
          "Robotiva wasn't just any competition—it was a proving ground for creativity, engineering skill, and realworld problem solving. The challenge tasked participants with building a fully functional robot that could handle three distinct missions: line following, obstacle avoidance, and a pick-and-place task using a robotic arm. Each functionality required tight integration between hardware and software, and every team had to deal with sensor calibration issues, motor control precision, path-planning logic, and gripper mechanics.",
          "From electrical noise on sensor inputs to debugging edge cases in autonomous logic, the teams faced wave after wave of technical hurdles. But as always—this is RAS. We don't back down from problems; we grow stronger because of them. Each team worked tirelessly, sharing designs, testing day and night, and fine-tuning their code to meet competition standards. The result? Five finalist teams from one chapter—a statistic that speaks volumes.",
        ],
      },
      {
        id: 1,
        heading: "Meet the Winners: SOUL and Intellibots",
        descriptions: [
          "Among the five RAS finalist teams, two rose above the rest. SOUL, led by a core of experienced members, demonstrated flawless execution across all three challenges. Their robot maintained steady performance with highly optimized PID control and an impressively stable robotic arm mechanism. Their design was not just technically superior, but also elegant—earning praise from both judges and spectators alike",
          "Intellibots , on the other hand, stood out for their advanced path-planning algorithms and robust error-handling capabilities. Their robot showed remarkable resilience under pressure, with quick adaptations mid-run that reflected the team's deep understanding of both hardware constraints and real-time software logic. These two victories mark a historical achievement for our chapter and set a new benchmark for future competitions.",
        ],
        photo: "/News/robotiva/soul.webp",
        photoDescription: "Soul Team",
      },
      {
        id: 2,
        heading: "More Than Just Winners",
        descriptions: [
          "While the podium finishes are worth celebrating, the true success lies in the journey. Every RAS participant walked away with real engineering experience—learning not just how to build robots, but how to work under pressure, debug collaboratively, and face failure with determination.",
          "From late-night brainstorming sessions to emergency soldering repairs, this experience became a high-impact learning ground. These lessons were shared throughout the chapter—transforming mistakes into mentorship and individual struggles into collective growth. The effects were clear during later events like The Rockies Final Competition, where the influence of Robotiva showed in the confidence, preparedness, and innovation of our members.",
        ],
        photo: "/News/robotiva/intellibots.webp",
        photoDescription: "Intellibots Team",
      },
    ],
  },
  {
    id: idCounter++,
    highlightedItem: true,
    homeItem: true,
    title: "Penguins Shine in MATE ROV Egypt Competition 2025",
    description:
      "Our team, Penguins, proudly participated in the MATE ROV Egypt Regional Competition at AASTMT and achieved remarkable success, winning 3rd Place in the Pioneer Class among teams from across Egypt, along with the Best Team Spirit and Best Marketing Display awards. This accomplishment came after three months of dedicated effort, with 28 committed engineering students from various departments working together with high levels of passion, collaboration, and perseverance.",
    dateCreated: "26 April, 2025",
    author: "Ahmed Elsherbiny",
    tags: ["Competitions"],
    mainPhoto: "/News/mate-rov/1.webp",
    sections: [
      {
        id: 0,
        heading: "Penguins Team Formation",
        descriptions: [
          "Our team is led by a group of dedicated members, each with a clear role. The CEO keeps everyone aligned and focused, making sure things run smoothly. The CTO leads the technical side, helping build and improve the ROV. The CAO keeps us organized, handling schedules and team coordination. The CFO takes care of our budget and works on getting sponsorships. The Accounting Manager manages our financial records and ensures everything is tracked accurately. The PR Leader handles communication with judges, sponsors, and other teams, while the Marketing & Media Leader shares our journey through social media, videos, and design. Together, we make a strong, balanced team.",
          "The technical team is divided into three specialized sub-teams, each responsible for a key area of the ROV's development. The Mechanical Team designs the frame, enclosure, and buoyancy, ensuring the ROV is both durable and functional. The Electrical Team handles the power system, circuits, sensors, and PCB containment, ensuring the ROV operates efficiently and reliably. The Software Team focuses on image processing with the ROV's cameras, developing the GUI for user-friendly operation, and creating control systems to enhance the ROV's maneuverability and performance. Together, these three teams form the backbone of the ROV's technical capabilities.",
        ],
        photo: "/News/mate-rov/2.webp",
        photoDescription: "Penguins Team.",
      },
      {
        id: 1,
        heading: "What is MATE ROV Egypt competition?",
        descriptions: [
          "This is an annual regional competition held at the Arab Academy for Science, Technology and Maritime Transport (AASTMT) for undergraduates interested in remotely operated underwater vehicles (ROVs). These ROVs perform specific underwater missions according to the competition rules and guidelines. The competition was first launched in 2012 by Delta Square International LLC in association with AASTMT.",
          "This competition serves as a regional qualifier for the international competition organized by the Marine Advanced Technology Education (MATE) Center and MATE Inspiration for Innovation, where winning teams represent Egypt at the MATE International ROV Competition.",
        ],
        photo: "/News/mate-rov/3.webp",
        photoDescription: "Penguins Awards",
      },
      {
        id: 2,
        heading: "What is ROV?",
        descriptions: [
          "A Remotely Operated underwater Vehicle (ROV) is a tethered mobile robot commonly used to perform dangerous missions in submarine industries such as offshore hydrocarbon extraction and subsea installations, as well as in military and scientific services. Due to its sophisticated design, an ROV can maneuver efficiently in deep ocean environments.",
          "ROVs use thrusters for movement and rely on sensory systems to make informed decisions during missions. These systems may include LIDAR, SONAR, or cameras to provide vision and spatial awareness.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    homeItem: true,
    title: "Knowva attained the glory in Hackathon Banha 2025",
    description:
      "Knowva proudly secured second place in the Language Learning Platforms track at Hackathon Banha 2025. After four intense days of dedication, collaboration, and tireless effort, our team successfully developed and presented a compelling concept that showcased innovative ways to demonstrate the role of artificial intelligence in language education. We explored how AI can be effectively integrated into learning processes to enhance engagement, personalization, and accessibility.",
    dateCreated: "11 Feb, 2025",
    author: "Ahmed Elsherbiny",
    tags: ["Competitions", "CS", "AI"],
    mainPhoto: "/News/knowva/1.webp",
    sections: [
      {
        id: 1,
        heading: "What is Knowva?",
        descriptions: [
          "Knowva is an AI-driven language learning platform that transforms the often overwhelming journey of picking up a new language into a personalized and engaging experience. It's designed to adapt to each learner's unique pace, preferences, and goals—making the path to fluency feel more intuitive and motivating.",
          "Through intelligent features like adaptive placement testing, dynamically tailored content, skill-building exercises, and a responsive AI chatbot, Knowva offers a truly holistic and immersive learning environment. The AI chatbot acts as your personal language coach—ready to answer questions, adjust your learning roadmap, provide guidance, and simulate realistic conversations. It doesn't just teach you words—it helps you understand context, refine pronunciation, and receive real-time feedback, ensuring steady improvement with every interaction.",
        ],
        photo: "/News/knowva/2.webp",
        photoDescription: "IEEE ZSB supporters.",
      },
    ],
  },
  {
    id: idCounter++,
    title: "Introducing Our First-Ever PCB Track",
    description:
      "This season marks the launch of our brand-new PCB track—a major milestone for the IEEE RAS chapter. Recognizing the growing importance of PCB design in robotics and hardware development, we opened this track to empower our members with vital skills needed to build complete electronic systems.",
    dateCreated: "4 Mar, 2025",
    author: "Marwan Tamer",
    tags: ["RAS", "PCB", "New Track"],
    mainPhoto: "/Tracks/RAS/pcb-design.webp",
    sections: [
      {
        id: 0,
        heading: "Why a PCB Track",
        descriptions: [
          "As our chapter took on increasingly complex robotics challenges, especially in competitions like ROV and autonomous navigation, it became clear that we needed to strengthen our internal hardware capabilities. Software and mechanical designs alone couldn't complete the picture—real-world systems rely heavily on robust, compact, and optimized electronic boards to tie everything together. This need gave birth to our PCB track.",
          "The track was envisioned as a space for members to master circuit theory, schematic design, PCB layout, and even delve into aspects like electromagnetic compatibility and thermal management. By launching it, we unlocked new potential: members can now design and fabricate custom boards instead of relying on off-the-shelf components, giving our chapter a major competitive advantage in building efficient, mission-ready robotic systems.",
        ],
      },
      {
        id: 1,
        heading: "Looking Ahead",
        descriptions: [
          "This track isn't just a one-time experiment. It's an investment in our future. We aim to integrate PCB designers into every major project—from autonomous bots to underwater vehicles—ensuring close collaboration with embedded systems and mechanical teams.",
          "Over time, we plan to introduce advanced modules such as multilayer PCB design, high-speed signal handling, and power electronics. With mentorship, real-world use cases, and access to fabrication resources, this track will empower members to become fully capable electronics engineers, contributing to competitions and even entrepreneurial initiatives from within the chapter.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "Hands-On PCB Workshops: From Schematic to Soldering",
    description:
      "To support our new PCB track, we conducted a series of practical workshops that walked members through the complete process of electronics development—from schematics to final soldered prototypes. These workshops were a major stepping stone in cultivating in-house hardware expertise in the IEEE RAS chapter.",
    dateCreated: "1 May, 2025",
    author: "Marwan Tamer",
    tags: ["RAS", "PCB", "Workshops"],
    mainPhoto: "/News/pcb-track/1.webp",
    sections: [
      {
        id: 0,
        heading: "Session Content",
        descriptions: [
          "The workshop series was carefully structured to simulate the full product design lifecycle. We started with an introduction to schematic design using Altium Designer, where members learned how to build circuits using verified libraries, manage net connections, and plan their power distribution logic. The workshops then progressed to PCB layout, where topics like trace routing strategies, ground plane optimization, and design rules for manufacturability (DRM) were tackled hands-on.",
          "Members explored both single-layer and double-layer board configurations, gained exposure to layout tools and DRC checks, and understood how board geometry affects signal integrity and thermal performance. Each participant worked on designing a functioning circuit—such as a sensor interface, power regulator module, or basic microcontroller breakout. After completing the design, we simulated manufacturing constraints and prepared files for fabrication. The sessions concluded with real soldering practice using those very boards, giving members tactile experience in hardware assembly and debugging.",
        ],
      },
      {
        id: 1,
        heading: "Member Experience",
        descriptions: [
          "For many participants, this was their first time moving from theory to a fully fabricated electronic board. The excitement of seeing their designs come to life—physically soldered and powered—was unmatched. They encountered and overcame real-world problems like component selection mismatches, pad misalignments, and short-circuit detection.",
          "This hands-on journey didn't just teach design principles; it also fostered critical engineering soft skills such as documentation, revision control, teamwork, and debugging under time constraints. With these workshops, we created the first generation of homegrown PCB designers in the chapter, laying a foundation for future innovation and leadership in hardware development.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "Embedded Systems Masterclass with Eng. Mamdouh",
    description:
      "To push our embedded systems learning to the next level, we invited Eng. Mamdouh, a senior embedded software engineer at Arrow Electronics, to host a deep-dive session into practical embedded systems development. This was one of the most anticipated events in our technical calendar, bridging the gap between academic knowledge and real-world embedded applications.",
    dateCreated: "19 April, 2025",
    author: "Marwan Tamer",
    tags: ["RAS", "Embedded Systems", "Guest Speaker"],
    mainPhoto: "/News/embedded-session/1.webp",
    sections: [
      {
        id: 0,
        heading: "Industry Insight from Arrow Electronics",
        descriptions: [
          "Eng. Mamdouh brought a wealth of industry experience from his work in embedded product development and microcontroller integration at Arrow Electronics. His session didn't just focus on textbooks—it was built on years of real-world firmware development, system debugging, and embedded software optimization.",
          "He walked our members through the life cycle of an embedded project: starting from system requirement analysis, hardware-software interfacing, RTOS basics, and moving up to testing strategies for real-time systems. He also shared stories from major commercial projects, highlighting how embedded systems form the backbone of devices across automotive, industrial, and IoT applications.",
        ],
      },
      {
        id: 1,
        heading: "What Our Members Gained",
        descriptions: [
          "Participants were deeply engaged throughout the session. They asked questions about low-level memory management, interrupt-driven design, and integrating embedded systems with high-level applications. Eng. Mamdouh responded with clear, actionable explanations—demonstrating debugging tools, IDE tricks, and peripheral handling strategies that are often overlooked in university curriculums.",
          "By the end of the session, members not only understood how embedded systems operate in professional environments, but also walked away with a clearer roadmap on how to grow into embedded engineering careers. This session served as both inspiration and a technical boost, energizing our track as we prepare for more advanced projects and national competitions.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "Wind Turbines VR Session",
    description:
      "IEEE PES (Power & Energy Society) at Zagazig University continues to lead in offering forward-thinking learning experiences. In collaboration with Ventus Academy, a specialized leader in wind power training, a remarkable VR session was organized for students at the Information Technology Institute (ITI) - Zagazig University.",
    dateCreated: "4 July, 2025",
    author: "Ahmed Gharib",
    tags: ["PES", "Session"],
    mainPhoto: "/News/wind-turbines/1.webp",
    sections: [
      {
        id: 0,
        heading: "Immersive Learning Through Virtual Reality",
        descriptions: [
          "This was not a regular lecture or a slideshow — it was a fully immersive, interactive VR experience. Students explored the science of wind energy, the inner workings of wind turbines, and the real-life steps involved in working at a wind power station — all from within a virtual environment.",
          "What made this session truly stand out was its new and unique approach. The students were not just watching or listening — they were actively involved, moving through 3D simulations that felt real. Compared to pictures or diagrams, this experience was far more effective, engaging, and memorable.",
        ],
      },
      {
        id: 1,
        heading: "The Future of Green Energy Education",
        descriptions: [
          "During the session, students had the chance to virtually interact with the key components of a wind turbine, such as the rotor blades, nacelle, gearbox, and generator, witnessing firsthand how kinetic wind energy is converted into electrical power. They also explored the yaw and pitch systems that control blade orientation and learned about the grid connection process, safety procedures, and even maintenance protocols used by real technicians. This technical immersion helped clarify many complex systems that are often difficult to visualize in traditional classrooms.",
          "It helped many students understand complex engineering concepts in a hands-on, exciting way, providing insights into the real-world workflow of wind farm operations. The integration of virtual reality into training programs is not just an innovation; it's a revolution in how we prepare the next generation for the challenges of sustainable energy. As we navigate the evolving landscape of green energy innovations, it becomes clear that VR training is more than just a tool—it's a gateway to a future where renewable energy is the norm, not the exception. And it's not only energy — VR is impacting multiple industries including pharmaceuticals, aerospace, and engineering, reshaping how skills are taught and learned.",
        ],
        photo: "/News/wind-turbines/2.webp",
        photoDescription:
          "Feel the Wind - Experience Turbines in Virtual Reality!",
      },
    ],
  },
  {
    id: idCounter++,
    title: "EGYPES Visit 2025",
    description:
      "The Egypt Energy Show (EGYPES) stands as one of North Africa's most influential energy exhibitions and conferences, bringing together global leaders, government officials, and top-tier professionals in oil, gas, and renewable energy. Held annually in Cairo, EGYPES serves as a strategic platform for discussing the region's energy future, with an increasing focus on clean and sustainable solutions. The 2025 edition highlighted a pivotal shift towards decarbonization, digital transformation, and green business models—marking a critical moment in Egypt's clean energy evolution.",
    dateCreated: "18 Feb, 2025",
    author: "Mohamed Ayman",
    tags: ["PES"],
    mainPhoto: "/News/egypes-visit/1.webp",
    sections: [
      {
        id: 0,
        heading: "Empowering Future Leaders in Clean Energy",
        descriptions: [
          "Amid this transformative atmosphere, the IEEE Power & Energy Society (PES) Chapter of the IEEE Student Branch at Zagazig University (IEEE ZSB PES) proudly participated, engaging in a series of dynamic activities that enriched members both technically and professionally. Our standout moment was attending the “Empowering Change: Building Green Business” session on February 18, 2025, part of the EGYPES Young Professionals Program. The session emphasized the role of youth and innovation in creating sustainable energy futures, aligning perfectly with PES's core mission.",
          "Throughout the event, IEEE ZSB PES members had the opportunity to network with leading industry figures from companies such as ABB and Infinity, fostering valuable connections that extend beyond the event itself. These interactions not only provided insights into real-world energy applications but also equipped our members with the knowledge and inspiration to drive impactful change. This visit reinforces PES's vision for the current season—empowering young engineers with the tools and exposure needed to lead the global transition to clean energy.",
        ],
        photo: "/News/egypes-visit/2.webp",
        photoDescription: "Green energy session",
      },
    ],
  },
  {
    id: idCounter++,
    title: "HDL Visit",
    description:
      "A group of PES Zagazig Branch members had the valuable opportunity to visit the Egyptian headquarters of HDL Automation, a leading international technology company in the field of smart homes, smart buildings, and smart hotels.",
    dateCreated: "23 Feb, 2025",
    author: "Muhammed Solaiman",
    tags: ["PES"],
    mainPhoto: "/News/hdl-visit/1.webp",
    sections: [
      {
        id: 0,
        heading: "Exploring Smart Solutions",
        descriptions: [
          "HDL Automation, headquartered in Guangzhou, China, is renowned for providing comprehensive intelligent control systems and fully integrated automation solutions for residential and commercial applications. With a strong presence in over 100 countries and regions, HDL has built a robust global sales and service network comprising distributors, dealers, and certified engineers. The purpose of this visit was to introduce PES members to the Home Automation industry, its applications, and its future impact on energy efficiency, comfort, and sustainability. The tour included practical demonstrations of HDL's smart lighting control systems, curtain automation, energy management tools, and security integration technologies. The team explained how their Buspro and KNX systems are used in real-world scenarios, making the experience both educational and inspiring for future engineers.",
          "One of the key outcomes of the visit was the announcement of a special course discount exclusively for PES members, encouraging them to dive deeper into smart system design and integration. Moreover, HDL representatives expressed their intention to organize a future hands-on workshop, allowing members to gain more practical experience. This visit not only expanded our technical knowledge but also strengthened the connection between PES students and the professional automation market. We extend our sincere thanks to the HDL Automation Egypt team for their warm hospitality and for providing such an insightful experience. We look forward to organizing another visit in the near future to continue exploring this exciting and evolving industry.",
        ],
        photo: "/News/hdl-visit/2.webp",
        photoDescription:
          "PES members while attending an interactive session during the HDL visit",
      },
    ],
  },
  {
    id: idCounter++,
    title: "PES Day 2025",
    description:
      "The IEEE Power & Energy Society (PES) Chapter of the IEEE Student Branch at Zagazig University proudly organized IEEE PES Day 2025 under the global theme: “Clean Energy, Smarter Grids, Better Lives.” This event was held at the Faculty of Engineering - Zagazig University, under the patronage of Prof. Dr. Ahmed Farouk Abdel-Gawad, Dean of the Faculty, and the academic supervision of Dr. Mohamed Lotfy, from the Department of Electrical Power and Machines. We were also honored by the presence of Prof. Hebatallah Mohamed Ali - Vice Dean for Postgraduate Studies and Research, and Dr. Sondos Abdallah - General Director of the Faculty of Engineering.",
    dateCreated: "22 April, 2025",
    author: "Kyrillos Nabil",
    tags: ["PES"],
    mainPhoto: "/News/pes-day-2025/1.webp",
    sections: [
      {
        id: 0,
        heading:
          "Innovation Through Solar Energy, Robotics, and Green Entrepreneurship",
        descriptions: [
          "HDL Automation, headquartered in Guangzhou, China, is renowned for providing comprehensive intelligent control systems and fully integrated automation solutions for residential and commercial applications. With a strong presence in over 100 countries and regions, HDL has built a robust global sales and service network comprising distributors, dealers, and certified engineers. The purpose of this visit was to introduce PES members to the Home Automation industry, its applications, and its future impact on energy efficiency, comfort, and sustainability. The tour included practical demonstrations of HDL's smart lighting control systems, curtain automation, energy management tools, and security integration technologies. The team explained how their Buspro and KNX systems are used in real-world scenarios, making the experience both educational and inspiring for future engineers.",
          "One of the key outcomes of the visit was the announcement of a special course discount exclusively for PES members, encouraging them to dive deeper into smart system design and integration. Moreover, HDL representatives expressed their intention to organize a future hands-on workshop, allowing members to gain more practical experience. This visit not only expanded our technical knowledge but also strengthened the connection between PES students and the professional automation market. We extend our sincere thanks to the HDL Automation Egypt team for their warm hospitality and for providing such an insightful experience. We look forward to organizing another visit in the near future to continue exploring this exciting and evolving industry.",
        ],
      },
    ],
  },
  // {
  //   id: idCounter++,
  //   title: "PES Entrepreneurship Competition",
  //   description:
  //     "An electrifying journey where engineering students transformed bold renewable energy ideas into real-world prototypes. From intensive bootcamps to investor-ready pitches, this competition empowered the next generation of innovators to step beyond the classroom and into the world of impact-driven entrepreneurship.",
  //   dateCreated: "4 July, 2025",
  //   author: "Kyrillos Nabil",
  //   tags: ["PES", "Competition"],
  //   mainPhoto: "/News/pes-competition/1.webp",
  //   sections: [
  //     {
  //       id: 0,
  //       heading: "It all started with a simple “what if.”",
  //       descriptions: [
  //         "What if the university wasn't just about lectures and labs — but a place to launch something real? That question lit the fuse. And soon, the Chapter kicked off its first entrepreneurship competition.",
  //         "The goal? Help students move from solving equations to solving actual problems. Teams were invited to come up with bold, renewable energy solutions — the kind of ideas that could make a real impact.",
  //         "It wasn't the usual tech talk. It was fresh, fast, and a little risky. For a chapter used to circuits and conferences, this was a chance to break the nerd mold — and think like founders.",
  //         "Reactions? Mixed. Some were curious. Others were skeptical.",
  //         "It started with a spark. But sparks spread. And just like that, a quiet idea turned into something a lot louder.",
  //       ],
  //     },
  //     {
  //       id: 1,
  //       heading:
  //         "Before the competition even kicked off, things got serious — fast",
  //       descriptions: [
  //         "A business bootcamp warmed things up, covering the basics: market needs, business strategies, problem-solving, and how to think like a founder. Then came team formation, idea picking, and days of back-and-forth between brainstorming and building.",
  //         "Bit by bit, concepts turned into models. Late nights, group chats, rough sketches — all leading to one moment: Pitching Day. By the end, 14 teams submitted their ideas. The lineup was wild — from sand batteries to piezoelectric tiles, smart restaurant systems, and even biomass energy converters. Each project brought something new to the table, and every team came in ready to make their mark.",
  //       ],
  //     },
  //     {
  //       id: 2,
  //       heading: "Pitching Day didn't disappoint",
  //       descriptions: [
  //         "The atmosphere was electric, and the teams went beyond expectations — not just in ideas, but in how they delivered them. Three standout projects took home awards for Best Idea, Best Business Model, and Best Presentation — but every team walked away with something.",
  //         "Some ideas sparked more than applause — they caught the attention of real investors. A few teams even received early funding offers, opening the door to take their projects beyond campus walls.",
  //         "They came in with ideas. They left with experience, momentum, and maybe even the first page of something real.",
  //       ],
  //     },
  //   ],
  // },
  {
    id: idCounter++,
    title: "PES Nights: A Step Toward a Smarter, Sustainable Future",
    description:
      "The IEEE PES Zagazig Student Chapter proudly launched PES Nights, a virtual event series held during “March 2025/Ramadan 2025”, aiming to empower young engineers with knowledge and skills aligned with global transformations in energy and technology.",
    dateCreated: "15 Mar, 2025",
    author: "Eslam Mahmoud",
    tags: ["PES", "Talks", "Sessions"],
    mainPhoto: "/News/pes-nights/1.webp",
    sections: [
      {
        id: 0,
        heading: "Exploring the Future of Energy and Infrastructure",
        descriptions: [
          'Under the theme "Are You Ready to Evolve with the World?" each session tackled a forward-looking topic led by top industry professionals. The event opened with a compelling talk on Renewable Energy and Sustainability by Eng. Kareem Ehab an international climate negotiator and a key figure at COP27/COP28 who inspired attendees with insights on clean energy leadership, green entrepreneurship, and Egypt\'s role in the global energy transition.',
          "Next, Eng. Shady Salah from Schneider Electric explored Smart Infrastructure and Smart Cities, sharing his decade-long experience in smart distribution systems and project management. His session clarified the role of electrical engineers in building smarter urban systems.",
        ],
      },
      {
        id: 1,
        heading: "Empowering Engineers with Innovation and Career Skills",
        descriptions: [
          "The third session focused on Industrial IoT and Digitalization, presented by Eng. Omar Waez, who discussed how IIoT, SCADA, and automation technologies are revolutionizing manufacturing and enabling Industry 4.0. His practical experience in system integration and smart factories offered invaluable technical perspectives.",
          "The series concluded with a vital session on Soft Skills & CV Writing, led by Eng. Rana Mamdouh, Head of Siemens Energy Training Center. She provided strategic advice on crafting impactful CVs and mastering essential soft skills for career success in the energy sector.",
          "PES Nights successfully combined technical depth with career development, bringing together students, professionals, and thought leaders in one dynamic platform. With over 200 participants, the event strengthened IEEE PES ZSC's mission to shape future-ready engineers.",
        ],
      },
    ],
  },
  // {
  //   id: idCounter++,
  //   title: "PES Opening",
  //   description:
  //     "On the 25th of November, the IEEE ZSC PES community launched its new season with energy, excitement, and a clear vision. The PES Opening Day wasn't just a gathering—it was a declaration of purpose, collaboration, and growth.",
  //   dateCreated: "25 Nov, 2024",
  //   author: "Baraa Abdelmonem",
  //   tags: ["PES"],
  //   mainPhoto: "/News/pes-opening/1.webp",
  //   sections: [
  //     {
  //       id: 0,
  //       heading: "Opening day details",
  //       descriptions: [
  //         "We began by introducing the new board, whose passion and leadership will guide the chapter forward. Their enthusiasm set the tone for what promises to be a transformative season. A dynamic lineup of interactive activities allowed members to engage, connect, and immerse themselves in the PES experience. In a heartfelt icebreaker, each member stepped up to the stage to introduce themselves—sparking real connections and building a powerful sense of belonging.",
  //         "We also took a meaningful look back at the previous generation's accomplishments. Their legacy inspired us to raise the bar—to innovate more, dream bigger, and define our goals with clarity and boldness.",
  //         "Then came the big reveal: the four key tracks that will shape our initiatives this season: Automation - Leveraging cutting-edge technologies for smarter energy systems, Distribution - Enhancing power flow management and efficiency, Smart Homes - Innovating to create sustainable and connected living spaces, E-Mobility - Accelerating the transition to green, electric transportation",
  //         "This season's goals are centered on empowering students by providing a supportive environment, encouraging critical thinking, and enhancing practical skills through immersive workshops and hands-on experiences.",
  //         "But perhaps most importantly, the PES Opening was a reminder of what makes this community special. It's not only about engineering solutions—it's about the people behind them, coming together to dream, design, and drive change. The spark we lit on Opening Day is just the beginning.",
  //         "With such an inspiring start, the IEEE ZSC PES chapter is ready to light the way forward together.",
  //       ],
  //     },
  //   ],
  // },
  {
    id: idCounter++,
    title: "IEEE-ZSB Recruitment",
    description:
      "As part of our structured recruitment process, IEEE-ZSB conducted a two-stage interview system to select new members. This process included a Group Discussion phase to assess collaboration and communication, followed by One-to-One (O2O) Interviews to evaluate technical skills and how well the candidate fits into the team.",
    dateCreated: "23 Oct, 2024",
    author: "Samar Nafea",
    tags: ["General", "Interviews"],
    mainPhoto: "/News/recruitment-2025/1.webp",
    sections: [
      {
        id: 0,
        heading: "Stage 1: Group Discussion",
        descriptions: [
          "The group discussion is the initial phase for applicants who passed form filtration. Candidates are divided into unfamiliar groups and participate in structured activities including self-introductions, individual tasks, and collaborative group challenges.",
          "The main goal is to evaluate key soft skills such as communication, teamwork, leadership, adaptability, and initiative. Observers assess how well participants express their ideas, engage with others, and contribute to the overall group effort.",
          "This phase helps us identify candidates who not only show potential but also reflect the collaborative spirit of IEEE-ZSB.",
        ],
      },
      {
        id: 1,
        heading: "Stage 2: One-to-One Interviews",
        descriptions: [
          "Applicants who pass the group discussion are invited to O2O interviews. This phase focuses on individual evaluation based on technical knowledge, problem-solving ability, and team fit.",
          "Each interview is conducted by a team leader or board member, lasting around 20 minutes. Candidates are asked track-specific questions along with a soft-skills check and a chance to ask questions themselves.",
          "The interview process allows us to understand how candidates think under pressure, how well they understand the field they applied to, and whether they align with the values of their intended team.",
        ],
      },
      {
        id: 2,
        heading: "Final Outcome",
        descriptions: [
          "Candidates who perform well in both stages are selected to join IEEE-ZSB as official team members. We look for individuals who combine technical capability with a collaborative mindset.",
          "This structured recruitment system ensures that new members are not only skilled but also aligned with our culture and ready to contribute to a high-performing environment.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "IEEE-ZSB Booth",
    description:
      "The IEEE-ZSB Student Branch organized an offline booth to engage with students, raise awareness about IEEE, and highlight the opportunities available through branch membership.",
    dateCreated: "8 Oct, 2024",
    author: "Samar Nafea",
    tags: ["General"],
    mainPhoto: "/News/booth-2025/1.webp",
    sections: [
      {
        id: 0,
        heading: "Booth Highlights",
        descriptions: [
          "The booth focused on introducing IEEE-ZSB's mission and showcasing previous and upcoming activities like workshops, competitions, and technical events.",
          "Students interacted with the team, asked questions about joining IEEE, and explored different committees and chapters.",
          "The booth created a great opportunity to engage students early, making them feel welcomed and informed about what IEEE-ZSB can offer.",
        ],
        photo: "",
        photoDescription: "",
      },
    ],
  },
  {
    id: idCounter++,
    title: "Brand Ambassadors Program",
    description:
      "To prepare a new generation of passionate and skilled students, IEEE-ZSB launched the Brand Ambassadors Program—an introductory journey designed for early-year students to explore IEEE, gain soft and technical skills, and become future leaders within the student branch.",
    dateCreated: "15 Mar, 2024",
    author: "Samar Nafea",
    tags: ["Committees"],
    mainPhoto: "/News/brand-ambassadors-2025/1.webp",
    sections: [
      {
        id: 0,
        heading: "What is the Brand Ambassadors Program?",
        descriptions: [
          "The Brand Ambassadors Program is a short-term developmental initiative that spans approximately three months. It acts as a mini version of the full season, aimed at equipping early-year students with the essential knowledge and experience needed to integrate into the IEEE-ZSB community.",
          "The program is structured in multiple phases, ensuring gradual and effective learning—from IEEE awareness to hands-on project work.",
          "In addition to these phases, some ambassadors program members also had the opportunity to volunteer in mega events like the MUTEX Summit, allowing them to gain real experience and actively participate in the branch's activities.",
        ],
      },
      {
        id: 1,
        heading: "Phase One",
        descriptions: [
          "The first phase focuses on introducing the students to IEEE as an international organization and to the unique structure and culture of the IEEE-ZSB student branch. Participants get to know the committees, values, and mission that drive our work.",
          "In parallel, students receive soft skills training, helping them improve in areas such as communication, presentation, collaboration, and personal branding—preparing them for active roles in the student ecosystem.",
        ],
      },
      {
        id: 2,
        heading: "Phase Two",
        descriptions: [
          "After the foundation is set, each participant selects a technical or managerial track offered within IEEE-ZSB. Through guided sessions and basic hands-on tasks, they begin exploring the field that interests them most, such as Technical Track, Marketing, Operations, Talent & Tech, Multimedia, or Business Development.",
          "Each track provides simplified content tailored to their level—focusing on practical, beginner-friendly learning without overwhelming the participants.",
        ],
      },
      {
        id: 3,
        heading: "Final Phase",
        descriptions: [
          "The program concludes with a practical application phase. Each group or individual delivers a project, presentation, or participates in a challenge depending on the track they joined.",
          "This final step encourages creativity, and public speaking—allowing students to demonstrate what they've learned and to gain confidence in sharing it with others.",
        ],
        photo: "/News/brand-ambassadors-2025/2.webp",
        photoDescription:
          "Brand Ambassadors Program participants in Problem Solving Contest",
      },
      {
        id: 4,
        heading: "Program Achievements 2023-2024",
        descriptions: [
          "The last round of the Brand Ambassadors Program concluded with practical and competitive activities that showcased what participants learned during the journey.",
          "In the CS Chapter, students participated in a Problem Solving Contest that encouraged logical thinking and team collaboration. Each CS sub-track also wrapped up with hands-on projects where participants applied their technical knowledge in creative ways.",
          "In the RAS Chapter, participants worked on a Line Following Robot project. The program ended with a friendly competition between teams to test and demonstrate their robot designs.",
          "Across both technical chapters and managerial committees, many participants delivered presentations during different phases of the program—enhancing their public speaking and confidence in explaining ideas.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    homeItem: true,
    title: "IEEE-ZSB Development Program",
    description:
      "The IEEE-ZSB Development Program is a comprehensive internal training initiative designed to equip members with essential soft skills that complement their technical expertise. Through a carefully planned series of interactive workshops and sessions, the program aims to enhance critical abilities such as effective communication, leadership, time management, and professional networking. It also covers practical career-building skills like CV writing, personal branding, and LinkedIn optimization. By fostering these competencies, the program not only strengthens members' contributions within IEEE-ZSB but also prepares them for success in future academic, professional, and personal endeavors.",
    dateCreated: "6 Feb, 2025",
    author: "Samar Nafea",
    tags: ["General", "Development"],
    mainPhoto: "/News/development-program-2025/1.webp",
    sections: [
      {
        id: 0,
        heading: "Program Objectives & Topics",
        descriptions: [
          "The Development Program is an internal training series focused on enhancing the soft skills of current IEEE-ZSB members throughout the season.The sessions include key topics such as presentation skills, communication, planning, CV writing, leadership, and LinkedIn. The structure and number of sessions vary from season to season, and the schedule is arranged collaboratively with the participants.The goal is to empower members with practical skills that support their work within IEEE-ZSB and benefit them in their future careers.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "IEEE-ZSB Ramadan Iftar",
    description:
      "As part of our social traditions, IEEE-ZSB organized its annual Ramadan Iftar to bring members together for a warm evening of connection, food, and shared memories",
    dateCreated: "15 Mar, 2025",
    author: "Samar Nafea",
    tags: ["General", "Ramadan", "Iftar"],
    mainPhoto: "/News/ramadan-iftar-2025/1.webp",
    sections: [
      {
        id: 0,
        heading: "Iftar Highlights",
        descriptions: [
          "The iftar gathering is a seasonal event where members from all committees and tracks meet in an informal setting during Ramadan. It's not held on a fixed date, but we coordinate together to choose a suitable day for everyone.",
          "The organizing team arranges the venue and meals in advance, and each attendee confirms their order before the event. Everyone gathers before Maghrib, shares the meal together, and enjoys the special spirit of the month.",
          "After eating, the evening continues with casual games, simple activities, and sometimes a surprise visit from alumni members. It's a relaxed and joyful time for the whole branch to connect outside the workspace.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "IEEE-ZSB General Meeting",
    description:
      "The IEEE-ZSB General Meeting is a key mid-season event aimed at uniting all committees, tracks, and members under one roof to promote stronger internal collaboration and a deeper sense of community. Unlike kick-off meetings held at the beginning of the season, this gathering is strategically scheduled once members have had time to settle into their roles. It serves as a platform to evaluate progress, celebrate achievements, and realign on shared goals. Through team-building activities, interactive discussions, and cross-functional engagement, the meeting fosters mutual understanding between technical and managerial teams, reinforcing the collaborative and inclusive spirit that defines IEEE-ZSB.",
    dateCreated: "15 Feb, 2024",
    author: "Samar Nafea",
    tags: ["General", "Meeting"],
    mainPhoto: "/News/general-meeting-2024/1.webp",
    sections: [
      {
        id: 0,
        heading: "Structure & Goals",
        descriptions: [
          "To strengthen internal communication and team bonding, IEEE-ZSB organizes a General Meeting during the season that brings together all committees and tracks.This meeting is not held at the beginning of the season but takes place after some time once members are familiar with their teams.",
          "It includes engaging activities, interactive topics, and open discussions that help build connections between technical and managerial teams.",
          "The general meeting is always a great reminder of the collaborative and inclusive culture within the branch.",
        ],
      },
    ],
  },
  // {
  //   id: idCounter++,
  //   title: "IEEE-ZSB Packages",
  //   description:
  //     "To make each member feel more connected to the branch, IEEE-ZSB offers customized membership packages that reflect the branch's unique identity and spirit.",
  //   dateCreated: "15 May, 2025",
  //   author: "Samar Nafea",
  //   tags: ["General", "Branch Identity"],
  //   mainPhoto: "/News/packages-2025/1.webp",
  //   sections: [
  //     {
  //       id: 0,
  //       heading: "Package Details",
  //       descriptions: [
  //         "Each season, IEEE-ZSB designs special packages that members can request. These packages often include items like branded pens, notebooks, stickers, ID, T-shirts, mugs, keychains, bracelets, and more — all designed with the branch's visual identity and logo.",
  //         "The contents may vary from one season to another based on availability, design updates, and what feels meaningful to members that year.",
  //         "Members who want to receive the package can reserve theirs in advance, and everything is carefully prepared to ensure quality and consistency.",
  //         "It's more than just items — it's about belonging, pride, and representing IEEE-ZSB wherever you go.",
  //       ],
  //     },
  //   ],
  // },
  {
    id: idCounter++,
    title: "The New Face of Talent at IEEE-ZSB",
    description:
      `In the 2024-2025 season, IEEE-ZSB updated the former Talent Management team and introduced it under a new name: T&T — short for "Talent & Tech".`,
    dateCreated: "16 Oct, 2024",
    author: "Samar Nafea",
    tags: ["Committees", "Talent&Tech", "T&T"],
    mainPhoto: "/Committees/talent&tech.webp",
    sections: [
      {
        id: 0,
        heading: "Supporting People, Building Tools",
        descriptions: [
          "The team's main role is to support members by following up with them, making sure everyone is active and doing well, and helping anyone facing issues. This season, T&T also started working on technical tasks by creating tools that help the whole branch. One example is the registration app they built for IEEE-ZSB. The team combines both people support and technical development, making it a valuable part of the branch.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    homeItem: true,
    title: "IEEE-ZSB in EVER V",
    description:
      "IEEE-ZSB participated in the Autonomous Track of the EVER V 2024 Electric Vehicle Rally, held in El Alamein, showcasing innovation in AI and autonomous vehicle simulation.",
    dateCreated: "12 Aug, 2024",
    author: "Samar Nafea",
    tags: ["Competitions", "Autonomous Systems"],
    mainPhoto: "/News/ev-2024/1.webp",
    sections: [
      {
        id: 0,
        heading: "IEEE-ZSB's Contribution in EVER V",
        descriptions: [
          "EVER V is an annual electric vehicle competition with three main tracks: Concept, Dynamic, and Autonomous. IEEE-ZSB joined the Autonomous Track, focusing on software for self-driving cars using a simulation platform (CoppeliaSim). The team developed AI algorithms capable of interpreting sensor and camera data to autonomously navigate a virtual vehicle without human input. This hands-on experience in autonomous driving and real-time decision-making allowed IEEE-ZSB members to apply their knowledge in AI, sensor integration, and vehicle control, while also building strong connections with professionals in the EV and AI domains.",
        ],
      },
    ],
  },
  {
    id: idCounter++,
    title: "IEEE WIE Events: Empowering Women in Engineering",
    description:
      "Explore the latest events, workshops, and programs organized by the IEEE Women in Engineering (WIE) affinity group to empower female students and engineers in the fields of technology and engineering.",
    dateCreated: "24 Nov, 2024",
    author: "Walaa Elshahat",
    tags: [
      "WIE",
      "Women in Engineering",
      "Events",
      "Workshops",
      "Empowerment",
      "Networking",
      "Career Development",
    ],
    mainPhoto: "/News/wie-2024/1.webp",
    sections: [
      {
        id: 0,
        heading: "Entrepreneurship Workshop for Women Engineers",
        descriptions: [
          "IEEE WIE organized an intensive entrepreneurship workshop aimed at equipping female students and engineers with the necessary skills and knowledge to transform their ideas into successful projects.",
          "The workshop included interactive sessions on feasibility studies, digital marketing, and business plan writing.",
        ],
      },
      {
        id: 1,
        heading: "Leading Women in Technology Seminar Series",
        descriptions: [
          "IEEE WIE Work on it will host a series of monthly online seminars highlighting the achievements and experiences of leading women in various fields of technology and engineering.",
          "This series aims to inspire the next generation of female engineers through real-life success stories and challenges, encouraging them to persevere and innovate.",
          "Seminars included live discussions on Artificial Intelligence, Cybersecurity, and Renewable Energy.",
        ],
      },
      {
        id: 2,
        heading: "New Student Mentorship Program",
        descriptions: [
          "IEEE WIE launched a dedicated mentorship program for new female engineering students, aiming to connect them with experienced female engineers in the field.",
          "The program provides professional and academic guidance, supports students in building their professional networks, and helps them overcome challenges they might face at the beginning of their academic and professional journey.",
        ],
      },
      {
        id: 3,
        heading: "WIE Coffee Talk: Bridging the Gap",
        descriptions: [
          "Join our casual 'Coffee Talk' sessions designed for students and professionals to network, share experiences, and discuss hot topics in STEM in a relaxed environment.",
          "Each session features a guest speaker from the industry who shares insights on career paths, work-life balance, and current industry trends, followed by an open Q&A.",
        ],
      },
      {
        id: 4,
        heading: "Hands-on Workshop: Introduction to IoT for Beginners",
        descriptions: [
          "This practical workshop provides an introduction to the Internet of Things (IoT) focusing on basic concepts, hardware components (like Arduino/Raspberry Pi), and simple programming for smart devices.",
          "Participants will learn to build a basic IoT project from scratch, gaining valuable hands-on experience in a rapidly growing field.",
        ],
      },
      {
        id: 5,
        heading: "Career Fair & Resume Clinic",
        descriptions: [
          "In collaboration with industry partners, IEEE WIE hosts an annual Career Fair connecting female engineering students with leading companies seeking new talent.",
          "Alongside the fair, a 'Resume Clinic' offers personalized feedback and tips from HR professionals to help students craft compelling resumes and prepare for interviews, boosting their chances for internships and job placements.",
        ],
      },
      {
        id: 6,
        heading: "Empowering Soft Skills Sessions for Girls",
        descriptions: [
          "IEEE WIE successfully conducted multiple enriching 'Girls Only' sessions focused on crucial soft skills development. These sessions were exclusively for female participants, fostering a comfortable and supportive environment.",
          "Attendees gained invaluable knowledge and practical insights into areas such as effective communication, leadership, problem-solving, and teamwork. The sessions were highly inspiring, equipping them with essential tools for both academic and professional success.",
        ],
      },
    ],
  },
];
