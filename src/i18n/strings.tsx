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

  // add labels for the sorting pills
  sortType: "By type",
  sortTime: "By time",

  eduItems: [
    {
      id: "edu-bsc",              // add stable id (prevents key collisions)
      kind: "edu",
      title: "BSc Computer Science",
      org: "Your University",
      skills: "Skills: Python, SQL ..",
      start: "2022-09",
      end: "2025-06",             // or null for ongoing
      time: "2022–2025",
      desc: "Details",
      details: ["Algorithms", "Probability", "ML", "Databases"],
    },
    {
      id: "edu-msc",
      kind: "edu",
      title: "Master Computer Science",
      org: "Your ETH",
      skills: "Skills: Python, SQL ..",
      start: "2025-09",
      end: null,
      time: "2025–",
      desc: "Details",
      details: ["Advanced Systems", "ML", "Distributed Computing"],
    },
  ],

  workItems: [
    {
      id: "work-intern-dev",
      kind: "work",
      title: "Intern Developer",
      org: "Company Name",
      skills: "Stack: React, TS",
      start: "2024-03",
      end: "2024-09",
      time: "2024",
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
    sortType: "Nach Typ",
    sortTime: "Nach Zeit",

    eduItems: [
      {
        id: "edu-bsc",
        kind: "edu",
        title: "BSc Informatik",
        org: "Deine Uni",
        skills: "Python etc.",
        start: "2022-09",
        end: "2025-06",
        time: "2022–2025",
        desc: "Details",
        details: ["Algorithmen", "Wahrscheinlichkeit", "ML", "Datenbanken"],
      },
      {
        id: "edu-msc",
        kind: "edu",
        title: "Master Informatik",
        org: "Deine ETH",
        skills: "Python etc.",
        start: "2025-09",
        end: null,
        time: "2025–",
        desc: "Details",
        details: ["Verteilte Systeme", "ML"],
      },
    ],

    workItems: [
      {
        id: "work-intern-dev",
        kind: "work",
        title: "Praktikum Entwickler",
        org: "Firma",
        skills: "React, TS",
        start: "2024-03",
        end: "2024-09",
        time: "2024",
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
