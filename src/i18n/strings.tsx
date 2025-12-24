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
      eduItems: [
      {
        title: "BSc Computer Science",
        org: "Your University",
        skills: "Skills: Python, SQL ..",
        time: "2022–2025",
        desc: "Details",
        details: ["Algorithms", "Probability", "ML", "Databases"], // 👈 NEW
      },
    ],

      workItems: [
        {
          title: "Intern Developer",
          org: "Company Name",
          time: "2024",
          desc: "Details",
          details:
            "Here you can write a longer paragraph about what you did, what stack you used, and what you learned.", // 👈 NEW
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
      eduItems: [
        {
          title: "BSc Informatik",
          org: "Deine Uni",
          skills: "PYTHON ETC",
          time: "2022–2025",
          desc: "Kurze Beschreibung",
        },
      ],
      workItems: [
        {
          title: "Praktikum Entwickler",
          org: "Firma",
          skills: "ASDF",
          time: "2024",
          desc: "Kurze Beschreibung",
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
