export const heroTags = ["Ready procedure kits", "Complete lab setup", "Training & support"];

export const heroCopy = {
  heading: "Practice for the moments that matter",
  description:
    "Bring clinical learning to life with affordable, customizable simulation kits, skills-lab equipment, and hands-on training solutions for nursing and healthcare education.",
  footer: "FOR EDUCATORS. FOR FUTURE CLINICIANS. FOR CONFIDENT CARE.",
} as const;

// Positions are percentages so the callouts stay anchored to the responsive illustration.
export const heroCallouts = [
  {
    id: 1,
    title: "Realistic, Hands-On Practice",
    text: "Give learners opportunities to practice essential clinical procedures in a safe, simulated environment.",
    x: "48%",
    y: "28%",
    cardTop: "4%",
    color: "#67e8f9",
  },
  {
    id: 2,
    title: "Repeat. Refine. Build Confidence.",
    text: "Support skill development through repeated practice, feedback, and reflection.",
    x: "56%",
    y: "48%",
    cardTop: "37%",
    color: "#bef264",
  },
  {
    id: 3,
    title: "Accessible, Customizable Training",
    text: "Equip nursing and healthcare programs with affordable simulation kits, skills-lab equipment, and training support tailored to their needs.",
    x: "44%",
    y: "64%",
    cardTop: "70%",
    color: "#fde047",
  },
] as const;
