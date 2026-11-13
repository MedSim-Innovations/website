export const services = [
  {
    number: "01",
    accent: "cyan",
    title: "Training program design",
    description: "Competency-led programs for healthcare and public-sector teams.",
    items: ["Needs and competency mapping", "Curriculum and simulation practice", "Assessment and trainer preparation"],
  },
  {
    number: "02",
    accent: "lime",
    title: "Healthcare content",
    description: "Clinically grounded content for learning, publishing and assessment.",
    items: ["Curricula and frameworks", "E-learning and scenarios", "Toolkits, manuals and textbooks"],
  },
  {
    number: "03",
    accent: "yellow",
    title: "Simulation centre setup",
    description: "Practical support from planning through faculty readiness and launch.",
    items: ["Strategy and roadmap", "Space and equipment planning", "Policies, pilots and launch"],
  },
  {
    number: "04",
    accent: "rose",
    title: "L&D and trainer development",
    description: "Internal learning capability built through workshops and mentoring.",
    items: ["L&D operating model", "Facilitation and debriefing", "Faculty mentoring and assessment"],
  },
  {
    number: "05",
    accent: "cyan",
    title: "Skills enhancement",
    description: "Role-based clinical upskilling and readiness assessment.",
    items: ["Critical and emergency care", "Life support and dialysis", "Exam and overseas readiness"],
  },
  {
    number: "06",
    accent: "lime",
    title: "Competition and sector skilling",
    description: "Standards, coaching and scalable workforce programs.",
    items: ["WorldSkills preparation", "Test projects and SOPs", "Government and sector programs"],
  },
] as const;

export const serviceAudiences = [
  "Nurses and nursing students",
  "Doctors",
  "Allied health and technicians",
  "Sales and business teams",
  "Quality and accreditation teams",
  "MedTech customers",
  "Government and skilling cohorts",
  "Publishers and e-learning providers",
];

export const experience = [
  { area: "Hospital systems", detail: "Programs and instructor development at Medanta." },
  { area: "Public-sector skilling", detail: "State governments and the Healthcare Sector Skills Council." },
  { area: "Quality and accreditation", detail: "NABH-focused programs with AHPI and hospitals." },
  { area: "MedTech training", detail: "Clinical and product education for Helmier, Sterimed and Teleflex." },
  { area: "Publishing and content", detail: "International publishing and nursing textbook experience." },
  { area: "Skills competitions", detail: "WorldSkills projects, coaching and competition preparation." },
];

export const credentials = [
  "PhD in Healthcare Simulation Education",
  "NABH assessor",
  "American Heart Association instructor",
  "Chair, INACSL India",
];

export const metrics = [
  ["15+", "years in the field"],
  ["650+", "trainers guided"],
  ["20+", "clinical instructors led"],
  ["04", "delivery stages"],
] as const;

export const serviceProcess = [
  { step: "Assess", text: "Define needs, gaps and success." },
  { step: "Design", text: "Shape the program, content and environment." },
  { step: "Deliver", text: "Prepare trainers and run the work." },
  { step: "Measure", text: "Review outcomes and improve." },
];

export const engagementModels = ["Advisory", "Project consulting", "Program delivery", "Mentoring", "Speaking"];
