export type Lang = "en" | "de";

export const strings = {
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      cv: "CV",
      contact: "Contact",
      language: "Language",
    },

    sections: {
      aboutTitle: "asdfS",
      aboutText: "Unga bunga my description...",
      projectsTitle: "Projects",
      cvTitle: "CV",
      contactTitle: "Contact",
      contactText: "Email: you@example.com",
    },

    projects: {
      view: "View project",
      items: [
        {
          title: "Project A",
          description: "One line description of Project A",
          image: "../../assets/project1.png",
          link: "https://example.com",
        },
        {
          title: "Project B",
          description: "One line description of Project B",
          image: "/projects/b.png",
          // link is optional
        },
      ],
    },

    cv: {
  education: "Education",
  work: "Work experience",

  // NEW labels for UI
  viewBy: "View",
  viewType: "By type",
  viewTime: "By time",

  eduItems: [
    {
      kind: "edu",
      title: "BSc Computer Science",
      org: "Your University",
      skills: "Skills: Python, SQL ..",
      start: "2022-09",
      end: "2025-06", // null if ongoing
      time: "2022–2025",
      desc: "Details",
      details: ["Algorithms", "Probability", "ML", "Databases"],
    },
    {
      kind: "edu",
      title: "Master Computer Science",
      org: "ETH Zürich",
      skills: "Skills: Python, SQL ..",
      start: "2025-09",
      end: null,
      time: "2025–now",
      desc: "Details",
      details: ["Systems", "Security", "Distributed Computing"],
    },
  ],

  workItems: [
    {
      kind: "work",
      title: "Intern Developer",
      org: "Company Name",
      skills: "Stack: React, TS",
      start: "2024-03",
      end: "2024-09",
      time: "Mar 2024 – Sep 2024",
      desc: "Details",
      details: "Longer paragraph …",
    },
  ],



    },


    footer: {
      title: "Get in touch",
      subtitle: "Open for opportunities and collaboration",
      email: "you@example.com",
      github: "https://github.com/yourname",
      linkedin: "https://linkedin.com/in/yourname",
    },
  },

  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      cv: "Lebenslauf",
      contact: "Kontakt",
      language: "Sprache",
    },

    sections: {
      aboutTitle: "",
      aboutText: "unga bunga meine beschreibung...",
      projectsTitle: "Projekte",
      cvTitle: "Lebenslauf",
      contactTitle: "Kontakt",
      contactText: "E-Mail: you@example.com",
    },

    projects: {
      view: "Projekt ansehen",
      items: [
        {
          title: "Projekt A",
          description: "Kurzbeschreibung von Projekt A",
          image: "/projects/a.png",
          link: "https://example.com",
        },
        {
          title: "Projekt B",
          description: "Kurzbeschreibung von Projekt B",
          image: "/projects/b.png",
        },
      ],
    },

    cv: {
  education: "Ausbildung",
  work: "Berufserfahrung",

  viewBy: "Ansicht",
  viewType: "Nach Typ",
  viewTime: "Nach Zeit",

  eduItems: [
    {
      kind: "edu",
      title: "BSc Informatik",
      org: "Deine Uni",
      skills: "Skills: Python, SQL ..",
      start: "2022-09",
      end: "2025-06",
      time: "2022–2025",
      desc: "Details",
      details: ["Algorithmen", "Wahrscheinlichkeit", "ML", "Datenbanken"],
    },
  ],

  workItems: [
    {
      kind: "work",
      title: "Praktikum Entwickler",
      org: "Firma",
      skills: "Stack: React, TS",
      start: "2024-03",
      end: "2024-09",
      time: "Mär 2024 – Sep 2024",
      desc: "Details",
      details: "Längerer Text …",
    },
  ],
},


    footer: {
      title: "Kontakt",
      subtitle: "Offen für neue Möglichkeiten und Zusammenarbeit",
      email: "you@example.com",
      github: "https://github.com/yourname",
      linkedin: "https://linkedin.com/in/yourname",
    },
  },
} as const;
