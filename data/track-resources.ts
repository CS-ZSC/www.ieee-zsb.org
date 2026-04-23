import type { Resource } from "./committees";

const trackResources: Record<string, Resource[]> = {
  // ─── CS ──────────────────────────────────────────────────────────────────────
  "frontend": [
    { type: "book",   title: "You Don't Know JS",                        author: "Kyle Simpson",          free: true,  url: "https://github.com/getify/You-Dont-Know-JS" },
    { type: "book",   title: "JavaScript: The Good Parts",               author: "Douglas Crockford",     free: false },
    { type: "book",   title: "CSS: The Definitive Guide",                author: "Eric Meyer",            free: false },
    { type: "course", title: "The Complete JavaScript Course",           platform: "Udemy",               free: false },
    { type: "course", title: "Next.js & React - The Complete Guide",     platform: "Udemy",               free: false },
    { type: "course", title: "Responsive Web Design Certification",      platform: "freeCodeCamp",        free: true,  url: "https://www.freecodecamp.org/learn/2022/responsive-web-design" },
  ],

  "backend": [
    { type: "book",   title: "Node.js Design Patterns",                  author: "Mario Casciaro",        free: false },
    { type: "book",   title: "Clean Code",                               author: "Robert C. Martin",      free: false },
    { type: "book",   title: "Designing Data-Intensive Applications",    author: "Martin Kleppmann",      free: false },
    { type: "course", title: "NodeJS - The Complete Guide",              platform: "Udemy",               free: false },
    { type: "course", title: "CS50's Web Programming with Python and JavaScript", platform: "edX",       free: true,  url: "https://cs50.harvard.edu/web" },
  ],

  "mobile-development": [
    { type: "book",   title: "Flutter in Action",                        author: "Eric Windmill",         free: false },
    { type: "book",   title: "React Native in Action",                   author: "Nader Dabit",           free: false },
    { type: "course", title: "The Complete Flutter Development Bootcamp",platform: "Udemy",               free: false },
    { type: "course", title: "React Native - The Practical Guide",      platform: "Udemy",               free: false },
  ],

  "data-science": [
    { type: "book",   title: "Python for Data Analysis",                 author: "Wes McKinney",          free: false },
    { type: "book",   title: "Hands-On Machine Learning",                author: "Aurélien Géron",        free: false },
    { type: "book",   title: "The Elements of Statistical Learning",     author: "Hastie, Tibshirani",    free: true,  url: "https://hastie.su.domains/ElemStatLearn" },
    { type: "course", title: "Python for Data Science and ML Bootcamp", platform: "Udemy",               free: false },
    { type: "course", title: "Data Science Specialization",             platform: "Coursera",            free: false },
  ],

  "ai": [
    { type: "book",   title: "Deep Learning",                            author: "Goodfellow, Bengio, Courville", free: true, url: "https://www.deeplearningbook.org" },
    { type: "book",   title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig",   free: false },
    { type: "book",   title: "Hands-On Machine Learning",                author: "Aurélien Géron",        free: false },
    { type: "course", title: "Deep Learning Specialization",            platform: "Coursera",            free: false },
    { type: "course", title: "Practical Deep Learning for Coders",      platform: "fast.ai",             free: true,  url: "https://course.fast.ai" },
  ],

  "cyber-security": [
    { type: "book",   title: "Hacking: The Art of Exploitation",         author: "Jon Erickson",          free: false },
    { type: "book",   title: "The Web Application Hacker's Handbook",   author: "Stuttard & Pinto",      free: false },
    { type: "book",   title: "The Art of Intrusion",                     author: "Kevin Mitnick",         free: false },
    { type: "course", title: "Complete Ethical Hacking Bootcamp",       platform: "Udemy",               free: false },
    { type: "course", title: "TryHackMe - Pre-Security Path",           platform: "TryHackMe",           free: true,  url: "https://tryhackme.com/path/outline/presecurity" },
  ],

  // ─── RAS ─────────────────────────────────────────────────────────────────────
  "embedded-systems": [
    { type: "book",   title: "Programming Embedded Systems",             author: "Michael Barr",          free: false },
    { type: "book",   title: "The C Programming Language",              author: "Kernighan & Ritchie",   free: false },
    { type: "book",   title: "Make: AVR Programming",                   author: "Elliot Williams",       free: false },
    { type: "course", title: "Embedded Systems Bare Metal Programming", platform: "Udemy",               free: false },
    { type: "course", title: "Introduction to Embedded Systems",        platform: "Coursera",            free: false },
  ],

  "ros": [
    { type: "book",   title: "Programming Robots with ROS",             author: "Quigley, Gerkey, Smart",free: false },
    { type: "book",   title: "A Gentle Introduction to ROS",            author: "Jason O'Kane",          free: true,  url: "https://www.cse.sc.edu/~jokane/agitr" },
    { type: "course", title: "ROS for Beginners",                       platform: "Udemy",               free: false },
    { type: "course", title: "ROS2 for Beginners",                      platform: "Udemy",               free: false },
  ],

  "pcb-design": [
    { type: "book",   title: "PCB Design for Real-World EMI Control",   author: "Bruce Archambeault",    free: false },
    { type: "book",   title: "The Art of Electronics",                  author: "Horowitz & Hill",       free: false },
    { type: "course", title: "KiCad Like a Pro",                        platform: "Udemy",               free: false },
    { type: "course", title: "PCB Design with Altium Designer",         platform: "Udemy",               free: false },
  ],

  "mechanical": [
    { type: "book",   title: "Engineering Mechanics: Statics & Dynamics", author: "Meriam & Kraige",    free: false },
    { type: "book",   title: "Shigley's Mechanical Engineering Design",  author: "Budynas & Nisbett",   free: false },
    { type: "course", title: "SolidWorks - Step by Step",               platform: "Udemy",               free: false },
    { type: "course", title: "ANSYS FEA Simulation",                    platform: "Udemy",               free: false },
  ],

  "ic-design": [
    { type: "book",   title: "CMOS VLSI Design",                         author: "Weste & Harris",        free: false },
    { type: "book",   title: "Digital Integrated Circuits",              author: "Rabaey, Chandrakasan",  free: false },
    { type: "book",   title: "Static Timing Analysis for Nanometer Designs", author: "Jayaram Bhasker",  free: false },
    { type: "course", title: "Digital VLSI Design",                      platform: "Coursera",            free: true,  url: "https://www.coursera.org/learn/vlsi-design" },
    { type: "course", title: "SKY130 Chip Design with OpenLane",         platform: "YouTube / efabless", free: true,  url: "https://efabless.com/openlane" },
  ],

  // ─── PES ─────────────────────────────────────────────────────────────────────
  "basic-automation": [
    { type: "book",   title: "Programmable Logic Controllers",           author: "Frank Petruzella",      free: false },
    { type: "book",   title: "Introduction to Automation Science and Engineering", author: "Shih",       free: false },
    { type: "course", title: "PLC Programming from Scratch",            platform: "Udemy",               free: false },
    { type: "course", title: "Siemens TIA Portal - Step 7 PLC",        platform: "Udemy",               free: false },
  ],

  "advanced-automation": [
    { type: "book",   title: "Industrial Automation: Hands-On",         author: "Frank Lamb",            free: false },
    { type: "book",   title: "Control Systems Engineering",             author: "Norman Nise",           free: false },
    { type: "course", title: "Advanced PLC Programming",                platform: "Udemy",               free: false },
    { type: "course", title: "SCADA Systems",                           platform: "Udemy",               free: false },
  ],

  "basic-distribution": [
    { type: "book",   title: "Electric Power Systems",                  author: "Weedy, Cory, Jenkins",  free: false },
    { type: "book",   title: "Power System Analysis",                   author: "Glover & Sarma",        free: false },
    { type: "course", title: "Power Systems Analysis",                  platform: "Coursera",            free: false },
    { type: "course", title: "Electric Power Systems",                  platform: "edX",                 free: false },
  ],

  "smart-home": [
    { type: "book",   title: "Programming the Raspberry Pi",            author: "Simon Monk",            free: false },
    { type: "book",   title: "Getting Started with Arduino",            author: "Massimo Banzi",         free: false },
    { type: "course", title: "IoT Programming with Arduino and Raspberry Pi", platform: "Udemy",         free: false },
    { type: "course", title: "Build IoT Applications with ESP32",      platform: "Udemy",               free: false },
  ],

  "e-mobility": [
    { type: "book",   title: "Electric Vehicle Technology Explained",   author: "Larminie & Lowry",      free: false },
    { type: "book",   title: "Modern Electric, Hybrid Electric & Fuel Cell Vehicles", author: "Ehsani", free: false },
    { type: "course", title: "Electric Vehicles and Mobility",          platform: "Coursera",            free: false },
    { type: "course", title: "Battery Technology for Electric Vehicles",platform: "edX",                 free: false },
  ],
  // ─── Committees ──────────────────────────────────────────────────────────────
  "brand-ambassadors": [
    { type: "book",   title: "How to Win Friends and Influence People",  author: "Dale Carnegie",         free: false },
    { type: "book",   title: "Talk Like TED",                            author: "Carmine Gallo",         free: false },
    { type: "book",   title: "Surrounded by Idiots",                     author: "Thomas Erikson",        free: false },
    { type: "course", title: "Public Speaking and Presentation Skills",  platform: "Udemy",               free: false },
    { type: "course", title: "English Communication Skills",             platform: "Coursera",            free: false },
  ],

  "business-development": [
    { type: "book",   title: "The Lean Startup",                         author: "Eric Ries",             free: false },
    { type: "book",   title: "Zero to One",                              author: "Peter Thiel",           free: false },
    { type: "book",   title: "Never Split the Difference",               author: "Chris Voss",            free: false },
    { type: "course", title: "Business Development & B2B Sales",         platform: "Udemy",               free: false },
    { type: "course", title: "Negotiation Skills",                       platform: "Coursera",            free: false },
  ],

  "operations": [
    { type: "book",   title: "Getting Things Done",                      author: "David Allen",           free: false },
    { type: "book",   title: "The Goal",                                 author: "Eliyahu Goldratt",      free: false },
    { type: "book",   title: "Project Management Absolute Beginner's Guide", author: "Greg Horine",      free: false },
    { type: "course", title: "Project Management Fundamentals",          platform: "Coursera",            free: false },
    { type: "course", title: "Google Project Management Certificate",    platform: "Coursera",            free: false },
  ],

  "marketing": [
    { type: "book",   title: "This Is Marketing",                        author: "Seth Godin",            free: false },
    { type: "book",   title: "Contagious",                               author: "Jonah Berger",          free: false },
    { type: "book",   title: "Building a StoryBrand",                    author: "Donald Miller",         free: false },
    { type: "course", title: "Meta Social Media Marketing Certificate",  platform: "Coursera",            free: false },
    { type: "course", title: "Digital Marketing Masterclass",            platform: "Udemy",               free: false },
  ],

  "multimedia": [
    { type: "book",   title: "The Non-Designer's Design Book",           author: "Robin Williams",        free: false },
    { type: "book",   title: "Thinking with Type",                       author: "Ellen Lupton",          free: false },
    { type: "course", title: "Graphic Design Bootcamp",                  platform: "Udemy",               free: false },
    { type: "course", title: "Adobe Premiere Pro - Video Editing",       platform: "Udemy",               free: false },
    { type: "course", title: "Canva Design School",                      platform: "Canva",               free: true,  url: "https://www.canva.com/designschool" },
  ],

  "talent&tech": [
    { type: "book",   title: "Work Rules!",                              author: "Laszlo Bock",           free: false },
    { type: "book",   title: "Who: The A Method for Hiring",             author: "Geoff Smart",           free: false },
    { type: "book",   title: "The Culture Code",                         author: "Daniel Coyle",          free: false },
    { type: "course", title: "Human Resource Management",                platform: "Coursera",            free: false },
    { type: "course", title: "Talent Management",                        platform: "LinkedIn Learning",   free: false },
  ],
};

export default trackResources;
