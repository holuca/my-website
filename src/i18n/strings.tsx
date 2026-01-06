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
      aboutTitle: "Luca Hollenstein",
      aboutText:   "This website started as a side project to refresh my skills in JavaScript, TypeScript, and API integration, and gradually grew into a place where I present my work and interests. I am Luca Hollenstein, a software engineer with a Master’s degree in Computer Science from ETH Zurich, curious about how theory and systems meet in practice.",
      projectsTitle: "Projects",
      cvTitle: "CV",
      contactTitle: "Contact",
      contactText: "Email: lucahollenstein4@gmail.com",
    },

    projects: {
      view: "View project",
      items: [
        
         {
          title: "Master Thesis: ChemSpec Variational Inference",
          description: "In this Master Thesis i learned how to work with probabilistic models, especially using the library Pyro. I can sadly not show you the work as it is still confidential.",
          abstractLabel: "Abstract",
          abstract: "Understanding the composition of airborne particulate matter is essential for assessing air quality, tracing pollution sources, and informing environmental policies. In particular, quantifying the concentration of chemical species such as nitrate, sulfate, organic carbon, and metals is critical for regulatory and health-related monitoring. These species are often composed of many different subspecies whose spectral signals are difficult to disentangle because they overlap in their spectral profile, especially in complex atmospheric samples. This work presents a probabilistic model for spectral decomposition and species quantification. The model reconstructs observed spectra and predicts concentrations of the species while learning interpretable profiles for chemical subspecies. Each spectrum is modeled as a combi- nation of background structure and subspecies contributions, mapped via a known profile matrix to observable targets. Training is performed using Stochastic Variational Inference (SVI), en- abling scalable learning on complex data. Real-world experiments demonstrate strong predictive performance, outperforming classical baselines like PLS1 and PLS2 on most species, while maintaining high spectral reconstruction fidelity. Synthetic evaluations show that latent subspecies profiles can be recovered really well, however, the correct prediction of subspecies concentration remains challenging even with a supervised model, because of an identifiability issue of the subspecies to species mapping. Our analysis highlights the strengths of probabilistic modeling in terms of interpretability and uncertainty quantification, while also noting trade-offs in terms of convergence and model complexity. Future work may explore more efficient subspecies supervision, hybrid priors, or hierarchical extensions to improve latent disentanglement and data efficiency.",
          image: "/projects/overview.png",
        },
        {
          title: "Semester Project: Laminography-Adapted NAF",
          description: "This work adapts the Neural Attenuation Field (NAF) framework for laminography and extends its application to real-world data, offering a faster and more cost-effective alternative to conventional CBCT. Our work addresses the challenges posed by laminography-specific artifacts, including adjustments to beam geometry, handling of tilted angles, and integrating masking techniques.",
          image: "/projects/NAF.png",
          link: "https://github.com/holuca/NeuralVolumetricReconstructionForMedicalImages"
        },
        {
          title: "Semster Project in Advanced Computer Graphics",
          description: "In this course project, I built a physically based rendering system centered on path-tracing algorithms. The goal was to understand the core principles of modern computer graphics and physically based rendering by implementing a full 3D renderer from scratch through a series of assignments. The final result is a realistic rendered scene depicting koi fish swimming above an underwater city. The image shown here was fully generated using my custom renderer and demonstrates the integration of lighting, materials, and volumetric effects.",
          abstractLabel: "Description",
          abstract: "The rendering system implements a range of physical and algorithmic techniques to achieve realism and efficiency. Lighting is modeled using a high-resolution HDR environment map for the sky, while the underwater medium is rendered using volumetric techniques to simulate light absorption and scattering. Materials are implemented using the Disney BSDF, enabling effects such as subsurface scattering, sheen, clearcoat, specular reflection, and textured diffuse components. For light transport, I implemented Probabilistic Progressive Photon Mapping (PPPM) to improve convergence in challenging lighting conditions, as well as Depth of Field to enhance photographic realism. Bubble rendering is based on Beer–Lambert’s law for transmittance in homogeneous media, combined with textured dielectric materials to simulate refractive properties. Scene geometry—including the underwater city, koi fish, and lotus flowers—was composed using pre-designed assets, while the sky illumination is provided by a 4K HDR EXR environment emitter.",
          image: "/projects/acg_project.png",
          link: "https://https://cgl.ethz.ch/teaching/cg23/www-nori/index.html",
        },
        {
          title: "DOT-SLAM: DROID-SLAM Optimization Using DOT",
          description: "This was a group project in the course 3D Vision. We were tasked to integrate a Dense Optical Tracker into an existing framework DROID-SLAM",
          abstractLabel: "description",
          abstract: " In this project [Dense Optical Tracking (DOT)](https://github.com/16lemoing/dot) (by Guillaume Le Moing, Jean Ponce, Cordelia Schmid) has been integrated into [DROID-SLAM](https://github.com/princeton-vl/DROID-SLAM/tree/main) (by Zachary Teed and Jia Deng). The goal of this was to overcome one of the major bottlenecks of DROID-SLAM which is in the update operation, which uses partly a ConvGRU and a iterates over a refiner over and over to get the camera positions and depth map of the current frame. Aside from reducing computational power, using DOT to predict a dense flow field can be more robust if finetuned and not \"just\" integrated. DOT is a framework unifying point tracking and optical flow techniques without the need to refine the output for each frame as DROID does at the moment. \n We achieved similar results as DROID-SLAM by integrating DOT, it however also lost some robustness as first of all the training set has not be retrained due to lack of computational power, not having a loop closure anymore as DROIDs previous update function for the depths and camera position had. This can be all finetuned more and many overly robust things from DOT are not used, like prediction of movement out of a frame is not used so many things can be omitted there as well to decrease computation time and power. ",
          image: "/projects/bench_dotslam.png",
          link: "https://github.com/holuca/DPT-DROID-SLAM",
        },
        {
          title: "Bachelor Thesis",
          description: "In my Bachelor's thesis, I investigated more efficient methods for assigning entropy scores to GAN-generated, indeterministic images. The goal was to establish a more systematic and scientific way of reasoning about aesthetic perception by quantifying visual ambiguity. To collect human perception data, I designed and implemented a custom web application. Through this project, I learned JavaScript and worked with Firebase, a cloud-based backend service, to design an API for storing and managing survey responses at scale. This marked my first experience with web-based data collection and backend integration. As collecting human annotations proved time-consuming, I later explored whether automated methods could approximate this process. I applied object detection models such as YOLO and MMDetection to estimate entropy scores from visual features and evaluated their suitability as substitutes for human judgments.",
          abstractLabel: "Abstract",
          abstract: "The visual perception of ambiguity has been a property of an image difficult to evaluate. Wang et al. have successfully come up with a method to quantify this indeterminacy using descriptions of images, collected from participants of a survey. This entropy value is opening new ways to argue about the subjects of aesthetic perception in images. In this thesis, we try to improve the quantification of ambiguity by pursuing three main groups of approaches. We first endeavor to build on top of Wang's work to refine the current method of getting an entropy score by investigating the problems they pointed out in their paper. This expands the use case of the ambiguity value. The second approach is to replicate the experiment computationally. For this, object detectors will be used to substitute the survey and recreate the previous results. The third approach will be by looking at the results of another method to quantify ambiguity. Goetschalckx et al. used the visual memorability of the images and computed a memorability score and we will analyze if the two assessments are comparable. \newline These methods serve as a step towards a more complete quantification of ambiguity. Each method can be used to supplement the current method to gain consistency or verification. And finally, we hope that many of our methods and results can be reused in future experiments to improve on the current quantification of the ambiguity.",
          image: "/projects/BachelorThesis.jpg",
          link: "https://https://github.com/holuca/BT_Visual_Perception_Of_GAN_Generated_Indeterminate_Images.com",
        },
        {
        title: "Neuralising the CYK Parser (Deep Learning Project)",
        description:
          "Group project from the Deep Learning course. We implemented a differentiable (“neuralized”) version of the classical CYK parser and compared it against LSTM and Transformer baselines. My main contribution focused on the LSTM baseline and experiments.",
        abstractLabel: "Abstract",
        abstract:
          "The CYK algorithm can decide whether a given string of any length is in a given context-free grammar or not. However, its use cases are limited, because the production grammar must be available as an input parameter, hence the algorithm being inapplicable in scenarios where the context-free grammar is unknown. In this work, we build a neuralized version of the classical CYK algorithm, such that it can learn and generalize to more softly defined predictions. To that end, we build a neuralized version of the classical CYK Parser, which can learn purely by examples and can be trained end-to-end in a supervised setting.",
        image: "/projects/cyk_parser.png",
        link: "https://github.com/jnice-81/DLCykParser",
      },

      ],
    },

    cv: {
  education: "Education",
  work: "Work experience",

  sortType: "By type",
  sortTime: "By time",

  eduItems: [
    {
      id: "edu-msc",
      kind: "edu",
      title: "Master Computer Science",
      org: "ETH",
      skills: "Python, Pytorch, Pyro, Machine Learning, C/C++, Git, Computer Vision, SQL, Algorithms",
      start: "2023-08",
      end: "2025-08",
      time: "August 2023 - August 2025",
      desc: "Details",
      details: ["Computer Graphics", "Computer Vision", "Machine Perception", "3D Vision", "Big Data", "Deep Learning", "Advanced Systems Lab", "Computational Intelligence Lab",
        "Geometery for Computational Design and Fabrication", "Power Market I - Risk Management", "Wireless Networking and Mobile Computing", "Seminar: Topcis in Medical Machine Learning",

      ],
    },

    
    {
      id: "edu-bsc",              
      kind: "edu",
      title: "BSc Computer Science",
      org: "ETH",
      skills: "C/C++, Haskell, Java, SQL, Python, Git, Algorithms, Parallel Programming",
      start: "2018-08",
      end: "2023-02",             
      time: "August 2018 - February 2023",
      desc: "Details",
      details: ["Linear Algebra", "Discrete Mathematics", "Introduction to Programming", "Algorithms and Data Structures", "Analysis I & II", 
        "Digital Design and Computer Architecture", "Parallel Programming", "Algorithms and Probability", "Computer Networks",
        "Data Modelling and Databases", "Formal Methods and Functional Programming", "Numerical Methods for CSE", "Systems Programming and Computer Architecture", "Theoretical Computer Science", "Probability and Statistics",
        "Computer Systems", "Rigorous Software Engineering", "Introduction to Machine Learning", "Visual Computing", "Embedded Systems", "Introduction to Neuroinformatics", "Seminar on Media Innovation", 
        "Biomechatronics", "Cell and Molecular Biology for Engineers I & II", "Network Analysis"
      ],
    },

    {
      id: "edu-gymi",
      kind: "edu",
      title: "Kantonsschule am Burggraben St.Gallen",
      org: "High School",
      start: "2014-08",
      end: "2018-06",
      time: "August 2014- June 2018",
      
    },
  ],

  workItems: [
    {
      id: "work-zivi1",
      kind: "work",
      title: "Civil Service",
      org: "GHG CP-Schule",
      skills: "Teaching Assistant, Working with People with physical impairments",
      start: "2025-08",
      end: "2026-03",
      time: "August 2025 - March 2026",
      desc: "Details",
      details: "The CP School is a day school, including kindergarten, for young people with physical disabilities who cannot be adequately supported in regular public schools. Its goal is to create quality of life through independence. Support is provided as little as possible and as much as necessary.",
    },
    {
      id: "work-zivi2",
      kind: "work",
      title: "Civil Service",
      org: "GHG CP-Schule",
      skills: "Teaching Assistant, Working with People with physical impairments",
      start: "2023-02",
      end: "2023-08",
      time: "Februar 2023 - August 2023",
      desc: "Details",
      details: "The CP School is a day school, including kindergarten, for young people with physical disabilities who cannot be adequately supported in regular public schools. Its goal is to create quality of life through independence. Support is provided as little as possible and as much as necessary.",
    },
  ],
},


    footer: {
      title: "Get in touch",
      subtitle: "Open for opportunities and collaboration",
      email: "lucahollenstein4@gmail.com",
      github: "https://github.com/holuca",
      linkedin: "https://www.linkedin.com/in/luca-hollenstein-380a8025b/",
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
      aboutTitle: "Luca Hollenstein",
      aboutText: "Diese Website entstand ursprünglich als Nebenprojekt, um meine Kenntnisse in JavaScript, TypeScript und der API-Integration aufzufrischen, und entwickelte sich nach und nach zu einem Ort, an dem ich meine Arbeiten und Interessen präsentiere. Ich bin Luca Hollenstein, Softwareentwickler mit einem Masterabschluss in Informatik von der ETH Zürich, und interessiere mich dafür, wie Theorie und Systeme in der Praxis zusammenkommen.",
      projectsTitle: "Projekte",
      cvTitle: "Lebenslauf",
      contactTitle: "Kontakt",
      contactText: "E-Mail: lucahollenstein4@gmail.com",
    },

    projects: {
      view: "Project Ansehen",
      items: [
         {
          title: "Master Thesis: ChemSpec Variational Inference",
          description: "In meiner Masterarbeit habe ich gelernt, mit probabilistischen Modellen zu arbeiten, insbesondere unter Verwendung der Bibliothek Pyro. Leider kann ich diese Arbeit nicht öffentlich zeigen, da sie noch vertraulich ist.",
          abstractLabel: "Abstract",
          abstract:
          "Das Verständnis der Zusammensetzung von luftgetragenem Feinstaub ist entscheidend für die Bewertung der Luftqualität, die Identifikation von Emissionsquellen und die Ausgestaltung umweltpolitischer Massnahmen. Insbesondere die Quantifizierung der Konzentration chemischer Spezies wie Nitrat, Sulfat, organischer Kohlenstoff und Metalle ist für regulatorische und gesundheitsbezogene Überwachungsaufgaben von zentraler Bedeutung. Diese Spezies bestehen häufig aus vielen unterschiedlichen Subspezien, deren spektrale Signale sich überlagern und insbesondere in komplexen atmosphärischen Proben nur schwer voneinander zu trennen sind.  Diese Arbeit stellt ein probabilistisches Modell zur spektralen Zerlegung und Quantifizierung chemischer Spezies vor. Das Modell rekonstruiert beobachtete Spektren und sagt die Konzentrationen der Spezies voraus, während es gleichzeitig interpretierbare Profile für chemische Subspezien erlernt. Jedes Spektrum wird als Kombination aus Hintergrundstruktur und Beiträgen der Subspezien modelliert, die über eine bekannte Profilmatrix auf beobachtbare Zielgrössen abgebildet werden. Das Training erfolgt mittels Stochastic Variational Inference (SVI), wodurch skalierbares Lernen auf komplexen Datensätzen ermöglicht wird. Experimente mit realen Daten zeigen eine starke Vorhersageleistung, wobei klassische Baseline-Methoden wie PLS1 und PLS2 für die meisten Spezies übertroffen werden, während gleichzeitig eine hohe spektrale Rekonstruktionsgenauigkeit erhalten bleibt. Synthetische Evaluierungen zeigen, dass latente Subspezienprofile sehr gut rekonstruiert werden können; die korrekte Vorhersage der Subspezienkonzentrationen bleibt jedoch selbst in einem überwachten Setting herausfordernd, was auf ein Identifizierbarkeitsproblem bei der Abbildung von Subspezien auf Spezies zurückzuführen ist. Die Analyse hebt die Stärken probabilistischer Modellierung im Hinblick auf Interpretierbarkeit und Unsicherheitsquantifizierung hervor, weist jedoch auch auf Zielkonflikte in Bezug auf Konvergenzverhalten und Modellkomplexität hin. Zukünftige Arbeiten könnten effizientere Formen der Subspezien-Supervision, hybride Prioren oder hierarchische Erweiterungen untersuchen, um die latente Entflechtung und Dateneffizienz weiter zu verbessern.",
          image: "/projects/overview.png",
        },
        {
          title: "Semester Projekt: Laminography-Adapted NAF",
          description: "Diese Arbeit adaptiert das Framework der Neural Attenuation Fields (NAF) für die Laminographie und erweitert dessen Anwendung auf reale Daten, wodurch eine schnellere und kosteneffizientere Alternative zur konventionellen CBCT geboten wird. Dabei werden spezifische Herausforderungen der Laminographie adressiert, darunter Anpassungen der Strahlgeometrie, der Umgang mit geneigten Winkeln sowie die Integration von Maskierungstechniken.",
          image: "/projects/NAF.png",
          link: "https://github.com/holuca/NeuralVolumetricReconstructionForMedicalImages"
        },
        {
          title: "Semster Project in Advanced Computer Graphics",
          description: "In diesem Kursprojekt habe ich ein physikalisch basiertes Rendering-System entwickelt, das auf Path-Tracing-Algorithmen basiert. Ziel war es, die grundlegenden Prinzipien moderner Computergrafik und des physikalisch basierten Renderings zu verstehen, indem ein vollständiger 3D-Renderer von Grund auf im Rahmen mehrerer Aufgaben implementiert wurde. Das Endergebnis ist eine realistisch gerenderte Szene, die Koi-Fische zeigt, die über einer Unterwasserstadt schwimmen. Das hier dargestellte Bild wurde vollständig mit meinem eigenen Renderer erzeugt und demonstriert die Integration von Beleuchtung, Materialien und volumetrischen Effekten.",
          abstractLabel: "Beschreibung",
          abstract: "Das Rendering-System implementiert eine Vielzahl physikalischer und algorithmischer Techniken, um Realismus und Effizienz zu erreichen. Die Beleuchtung wird mittels einer hochauflösenden HDR-Umgebungskarte für den Himmel modelliert, während das Unterwassermedium mithilfe volumetrischer Verfahren gerendert wird, um Lichtabsorption und -streuung zu simulieren. Materialien werden unter Verwendung des Disney-BSDFs implementiert, wodurch Effekte wie Subsurface Scattering, Sheen, Clearcoat, spekulare Reflexionen und texturierte diffuse Komponenten ermöglicht werden.  Für den Lichttransport wurde Probabilistic Progressive Photon Mapping (PPPM) implementiert, um die Konvergenz in anspruchsvollen Beleuchtungssituationen zu verbessern, sowie Depth of Field zur Steigerung des fotografischen Realismus. Die Darstellung der Blasen basiert auf dem Beer–Lambert-Gesetz zur Beschreibung der Transmittanz in homogenen Medien und wird mit texturierten dielektrischen Materialien kombiniert, um refraktive Eigenschaften zu simulieren. Die Szenengeometrie einschliesslich der Unterwasserstadt, der Koi-Fische und der Lotusblumen, wurde aus vorgefertigten Assets zusammengesetzt, während die Himmelsbeleuchtung durch einen 4K-HDR-EXR-Environment-Emitter bereitgestellt wird.",
          image: "/projects/acg_project.png",
          link: "https://https://cgl.ethz.ch/teaching/cg23/www-nori/index.html",
        },
        {
          title: "DOT-SLAM: DROID-SLAM Optimization Using DOT",
          description:  "Dies war ein Gruppenprojekt im Kurs 3D Vision. Ziel war es, einen Dense Optical Tracker in das bestehende Framework DROID-SLAM zu integrieren.",
          abstractLabel: "Beschreibung",
          abstract: "In diesem Projekt wurde [Dense Optical Tracking (DOT)](https://github.com/16lemoing/dot) (von Guillaume Le Moing, Jean Ponce und Cordelia Schmid) in [DROID-SLAM](https://github.com/princeton-vl/DROID-SLAM/tree/main) (von Zachary Teed und Jia Deng) integriert. Ziel dieser Arbeit war es, einen der zentralen Engpässe von DROID-SLAM zu adressieren, nämlich die Update-Operation, die teilweise auf einem ConvGRU basiert und wiederholt einen Refiner durchläuft, um Kameraposen und Tiefenkarten des aktuellen Frames zu schätzen. Neben einer Reduktion des Rechenaufwands kann die Nutzung von DOT zur Vorhersage eines dichten Flussfeldes robuster sein, insbesondere wenn das Modell feinabgestimmt und nicht lediglich direkt integriert wird. DOT ist ein Framework, das Punkt-Tracking und Optical-Flow-Methoden vereint, ohne dass wie bei DROID-SLAM für jedes Frame eine iterative Verfeinerung erforderlich ist. Durch die Integration von DOT konnten vergleichbare Ergebnisse zu DROID-SLAM erzielt werden. Allerdings ging dabei auch ein Teil der Robustheit verloren, da das Trainingsset aufgrund begrenzter Rechenressourcen nicht neu trainiert wurde und zudem keine Loop-Closure-Mechanismen mehr vorhanden waren, wie sie in der ursprünglichen Update-Funktion von DROID-SLAM für Tiefen- und Kameraposenschätzungen genutzt werden. Diese Aspekte könnten durch weiteres Fine-Tuning verbessert werden. Darüber hinaus werden viele der besonders robusten Eigenschaften von DOT derzeit nicht vollständig ausgenutzt, beispielsweise die Vorhersage von Bewegungen ausserhalb des Bildbereichs, sodass hier weiteres Optimierungspotenzial zur Reduktion von Rechenzeit und -aufwand besteht.",
          image: "/projects/bench_dotslam.png",
          link: "https://github.com/holuca/DPT-DROID-SLAM",
        },
        {
          title: "Bachelor Thesis",
          description: "In meiner Bachelorarbeit untersuchte ich effizientere Methoden zur Zuweisung von Entropie-Scores für von GANs erzeugte, indeterministische Bilder. Ziel war es, eine systematischere und wissenschaftlich fundierte Grundlage zur Argumentation über ästhetische Wahrnehmung zu schaffen, indem visuelle Ambiguität quantifiziert wird. Zur Erhebung menschlicher Wahrnehmungsdaten entwarf und implementierte ich eine eigene Webanwendung. Im Rahmen dieses Projekts erlernte ich JavaScript und nutzte Firebase, einen cloudbasierten Backend-Dienst, um eine API zur skalierbaren Speicherung und Verwaltung von Umfrageantworten zu entwickeln. Dies stellte meine erste Erfahrung mit webbasierten Datenerhebungen und Backend-Integration dar. Da die Sammlung menschlicher Annotationen sehr zeitaufwendig war, untersuchte ich anschliessend, ob automatisierte Verfahren diesen Prozess approximieren können. Hierzu setzte ich Objekterkennungsmodelle wie YOLO und MMDetection ein, um Entropie-Scores aus visuellen Merkmalen abzuleiten, und evaluierte deren Eignung als Ersatz für menschliche Bewertungen.",
          abstractLabel: "Abstract",
          abstract: "Die visuelle Wahrnehmung von Ambiguität ist eine Eigenschaft von Bildern, die bislang nur schwer zu quantifizieren ist. Wang et al. entwickelten einen Ansatz, um diese Indeterminiertheit mithilfe von Bildbeschreibungen aus einer Umfrage zu quantifizieren. Der daraus abgeleitete Entropiewert eröffnet neue Möglichkeiten, ästhetische Wahrnehmung in Bildern systematisch zu analysieren. In dieser Arbeit versuchen wir, die Quantifizierung von Ambiguität weiter zu verbessern, indem wir drei zentrale Ansätze verfolgen. Zunächst bauen wir auf der Arbeit von Wang et al. auf und untersuchen die in ihrer Publikation identifizierten Limitationen, um die bestehende Methode zur Berechnung des Entropie-Scores zu verfeinern und deren Anwendungsbereich zu erweitern. Der zweite Ansatz besteht darin, das Experiment rechnergestützt zu replizieren. Hierbei werden Objektdetektoren eingesetzt, um die Umfrage durch automatisierte Verfahren zu ersetzen und die ursprünglichen Ergebnisse nachzubilden. Der dritte Ansatz untersucht eine alternative Methode zur Quantifizierung von Ambiguität: Goetschalckx et al. verwendeten die visuelle Memorierbarkeit von Bildern zur Berechnung eines Memorability-Scores, und wir analysieren, inwiefern diese Bewertung mit der Ambiguitätsmessung vergleichbar ist. Diese Ansätze stellen einen Schritt hin zu einer umfassenderen Quantifizierung von Ambiguität dar. Jede der Methoden kann genutzt werden, um die bestehende Vorgehensweise zu ergänzen, Konsistenz zu erhöhen oder zusätzliche Validierung zu ermöglichen. Abschliessend hoffen wir, dass viele der entwickelten Methoden und Ergebnisse in zukünftigen Arbeiten wiederverwendet werden können, um die aktuelle Quantifizierung von Ambiguität weiter zu verbessern.",
          image: "/projects/BachelorThesis.jpg",
          link: "https://https://github.com/holuca/BT_Visual_Perception_Of_GAN_Generated_Indeterminate_Images.com",
        },
        {
          title: "Neuralising the CYK Parser (Deep-Learning-Projekt)",
          description:
            "Gruppenprojekt aus dem Kurs Deep Learning. Wir haben eine differenzierbare („neuralisierte“) Version des klassischen CYK-Parsers implementiert und sie mit LSTM- und Transformer-Baselines verglichen. Mein Hauptbeitrag lag beim LSTM-Teil und den Experimenten.",
          abstractLabel: "Abstract",
          abstract:
            "Der CYK-Algorithmus kann entscheiden, ob eine gegebene Zeichenkette beliebiger Länge in einer gegebenen kontextfreien Grammatik enthalten ist. Seine Einsatzmöglichkeiten sind jedoch begrenzt, da die Produktionsgrammatik als Eingabeparameter verfügbar sein muss und der Algorithmus daher in Szenarien nicht anwendbar ist, in denen die kontextfreie Grammatik unbekannt ist. In dieser Arbeit entwickeln wir eine „neuralisierte“ Version des klassischen CYK-Algorithmus, sodass sie aus Beispielen lernen und auf weichere Vorhersagen generalisieren kann. Dazu konstruieren wir eine neuralisierte Version des klassischen CYK-Parsers, die rein aus Beispielen lernen kann und in einem überwachten Setting end-to-end trainierbar ist.",
          image: "/projects/cyk_parser.png",
          link: "https://github.com/jnice-81/DLCykParser",
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
        id: "edu-msc",
        kind: "edu",
        title: "Master in Informatik",
        org: "ETH",
        skills: "Python, Pytorch, Pyro, Machine Learning, C/C++, Git, Computer Vision, SQL, Algorithms",
        start: "2023-08",
        end: "2025-08",
        time: "August 2023 - August 2025",
        desc: "Details",
        details: ["Computer Graphics", "Computer Vision", "Machine Perception", "3D Vision", "Big Data", "Deep Learning", "Advanced Systems Lab", "Computational Intelligence Lab",
          "Geometery for Computational Design and Fabrication", "Power Market I - Risk Management", "Wireless Networking and Mobile Computing", "Seminar: Topcis in Medical Machine Learning",

        ],
      },
      {
      id: "edu-bsc",              
      kind: "edu",
      title: "BSc in Informatik",
      org: "ETH",
      skills: "C/C++, Haskell, Java, SQL, Python, Git, Algorithmen, Paralles Programmieren",
      start: "2018-08",
      end: "2023-02",             
      time: "August 2018 - Februar 2023",
      desc: "Details",
      details: ["Lineare Algebra", "Diskrete Mathematik", "Einführung in die Programmierung", "Algorithmen und Datenstrukturen", "Analysis I & II", 
        "Digital Design and Computer Architecture", "Parallele Programmierung", "Algorithmen und Wahrscheinlichkeit", "Computer Networks",
        "Data Modelling and Databases", "Formal Methods and Functional Programming", "Numerical Methods for CSE", "Systems Programming and Computer Architecture", "Theoretische Informatik", "Probability and Statistics",
        "Computer Systems", "Rigorous Software Engineering", "Introduction to Machine Learning", "Visual Computing", "Embedded Systems", "Introduction to Neuroinformatics", "Seminar on Media Innovation", 
        "Biomechatronics", "Cell and Molecular Biology for Engineers I & II ", "Network Analysis"
      ],
    },
    {
      id: "edu-gymi",
      kind: "edu",
      title: "Kantonsschule am Burggraben St.Gallen",
      org: "Gymnasium",
      start: "2014-08",
      end: "2018-06",
      time: "August 2014 - Juni 2018",
      
    },

    ],

    workItems: [
      {
      id: "work-zivi2",
      kind: "work",
      title: "Zivildienst",
      org: "GHG CP-Schule",
      skills: "Lehrerassistenz, Arbeit mit Personen mit einer körperlichen Beeinträchtigung",
      start: "2025-08",
      end: "2026-03",
      time: "August 2025 - März 2026",
      desc: "Details",
      details: "Die CP-Schule ist eine Tagesschule inkl. Kindergarten für junge Menschen mit einer körperlichen Beeinträchtigung, die in der öffentlichen Schule nicht entsprechend gefördert werden können. Ihr Ziel ist es, durch Selbständigkeit Lebensqualität zu schaffen. Unterstützung gibt es dabei so wenig wie möglich und so viel wie notwendig.  ",
    },
    {
      id: "work-zivi1",
      kind: "work",
      title: "Zivildienst",
      org: "GHG CP-Schule",
      skills: "Lehrerassistenz, Arbeit mit Personen mit einer körperlichen Beeinträchtigung",
      start: "2023-02",
      end: "2023-08",
      time: "Februar 2023 - August 2023",
      desc: "Details",
      details: "Die CP-Schule ist eine Tagesschule inkl. Kindergarten für junge Menschen mit einer körperlichen Beeinträchtigung, die in der öffentlichen Schule nicht entsprechend gefördert werden können. Ihr Ziel ist es, durch Selbständigkeit Lebensqualität zu schaffen. Unterstützung gibt es dabei so wenig wie möglich und so viel wie notwendig.  ",
    },
    ],
},  



footer: {
      title: "Kontakt",
      subtitle: "Offen für neue Möglichkeiten und Zusammenarbeit",
      email: "lucahollenstein4@gmail.com",
      github: "https://github.com/holuca",
      linkedin: "https://www.linkedin.com/in/luca-hollenstein-380a8025b/",
    },
  },
} as const;
