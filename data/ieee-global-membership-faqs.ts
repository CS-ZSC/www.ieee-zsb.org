export interface GlobalMembershipFAQ {
  question: string;
  answer: string;
}

const ieeeGlobalMembershipFaqs: GlobalMembershipFAQ[] = [
  {
    question: "Who is eligible for a global IEEE membership?",
    answer:
      "Anyone with an interest in engineering, technology, or a related field can join IEEE. There are two main entry points: Student membership (for those enrolled in an accredited degree program) and Professional membership (for graduates and working professionals). No specific GPA or work experience is required.",
  },
  {
    question: "How much does IEEE membership cost in Egypt?",
    answer:
      "Annual dues for Egypt (Region 8) are: Undergraduate Student - $14.00 USD, Graduate Student - $27.00 USD, Professional - $189.00 USD, and Electronic (eMembership) - $104.00 USD. IEEE also runs a half-price new-join offer from March 1 to August 15 each year, bringing undergraduate dues to $7.00 and graduate dues to $13.50. A reduced dues program is also available for those facing financial hardship. Check ieee.org/membership to view the exact pricing for your country.",
  },
  {
    question: "What is the difference between IEEE ZSB membership and global IEEE membership?",
    answer:
      "IEEE ZSB is a student branch - a local community affiliated with IEEE. Joining ZSB gives you access to local events, workshops, and committees. A global IEEE membership is a separate registration directly with IEEE that grants access to IEEE Xplore, technical societies, international conferences, and the full suite of IEEE resources worldwide. The two complement each other.",
  },
  {
    question: "What is IEEE Xplore and do I get access as a member?",
    answer:
      "IEEE Xplore is IEEE's digital library containing over 5 million technical documents - journals, conference papers, standards, and books. IEEE members receive discounted or bundled access depending on their membership package and society subscriptions.",
  },
  {
    question: "Can I join a specific IEEE Technical Society?",
    answer:
      "Yes. IEEE has 39+ Technical Societies covering areas such as computer science, power & energy, robotics, communications, and more. You can add society membership to your base IEEE membership, which gives you access to that society's journals, conferences, and community.",
  },
  {
    question: "How do I apply for global IEEE membership?",
    answer:
      "Visit ieee.org/membership and click 'Join as a Student' or 'Join as a Professional'. The process is fully online - create an account, choose your membership grade, select any societies, and pay the dues. Your membership is activated immediately after payment.",
  },
];

export default ieeeGlobalMembershipFaqs;
