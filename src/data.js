export const profile = {
  name: "Roman Gofman",
  title: "Software Engineer",
  tagline:
    "Building scalable backend systems in distributed, event-driven architecture and cloud infrastructure.",
  summary:
    "Software Engineer with 4+ years of experience building scalable backend systems at Nordstrom, one of the largest retail platforms in the US. I specialize in distributed systems, event-driven architecture, and cloud infrastructure — shipping features that serve millions of customers. I also develop Claude MCP skills for a shared internal repository, enabling AI-assisted testing, metrics analysis, and engineering standards enforcement across the team.",
  location: "Seattle, WA",
  email: "roman.p.gofman@gmail.com",
  github: "https://github.com/Romatomato1",
  linkedin: "https://www.linkedin.com/in/romangofman/",
  resume: "/files/Roman_Gofman_Resume.pdf",
};

export const skills = [
  "Java",
  "AWS",
  "Kafka",
  "Kubernetes",
  "SQL",
  "Python",
  "Spring Boot",
  "New Relic",
  "Google Cloud Platform",
  "Claude / Anthropic MCP",
  "C++",
  "Distributed Systems",
];

export const experience = [
  {
    org: "Nordstrom",
    role: "Engineer 2",
    period: "Nov 2025 — Present",
    location: "Seattle, WA · Hybrid",
    bullets: [
      "Designed and implemented a bulk promotion system supporting 1M+ customers",
      "Built a gift card notification system delivered via email and physical mail, with multiple vendor integrations built for idempotency and scale",
      "Developed Claude MCP skills for a shared internal repository, enabling AI-assisted testing, metrics analysis, and engineering standards enforcement",
      "Implemented features leveraging Claude MCP integrations to streamline developer workflows",
    ],
  },
  {
    org: "Nordstrom",
    role: "Engineer 1 ES",
    period: "Nov 2023 — Nov 2025",
    location: "Seattle, WA · Hybrid",
    bullets: [
      "Maintained production reliability through regular on-call rotations, triaging and resolving live incidents",
      "Developed a transaction processing pipeline using Kafka and AWS SQS to award loyalty points — 300K+ transactions/day with zero data loss",
      "Built personalized messaging features delivering custom notifications to users at scale",
      "Completed a data audit pipeline validating 36M+ records for accuracy and integrity",
      "Played a key role in a Loyalty vendor migration completed in under 6 months with no major incidents, across 15+ Java services",
    ],
  },
  {
    org: "University of Washington Bothell",
    role: "Undergraduate Researcher",
    period: "May 2022 — Nov 2023",
    location: "Bothell, WA",
    bullets: [
      "Used Google's AlphaFold 2 database to improve protein mutation prediction and identification in DeepTracer",
      "Improved the DeepTracer ID function with clearer documentation via GitHub Wiki and new file format support",
      "Actively participated in agile ceremonies, including weekly standups and backlog grooming",
    ],
  },
  {
    org: "University of Washington Bothell",
    role: "Teaching Assistant — Data Structures, Algorithms & Discrete Math I",
    period: "Jun 2022 — Jun 2023",
    location: "Bothell, WA",
    bullets: [
      "Analyzed code implementing advanced data structures to determine errors caught by unit testing",
      "Helped students with object-oriented principles in C++",
    ],
  },
];

export const education = {
  school: "University of Washington",
  degree: "B.S. in Computer Science & Software Engineering",
  honors: "Dean's List",
};

export const featuredProjects = [
  {
    name: "order-pipeline",
    description:
      "Event-driven order fulfillment pipeline: Kafka with idempotent consumers, dead-letter queue with retry/backoff, Postgres, and a Prometheus/Grafana observability stack.",
    url: "https://github.com/Romatomato1/order-pipeline",
    tags: ["Java", "Spring Boot", "Kafka", "Docker"],
    image: "/screenshots/order-pipeline-grafana.png",
    imageAlt: "Grafana dashboard showing order-pipeline throughput and fulfillment outcomes",
  },
  {
    name: "BudgetPlanner",
    description:
      "Full-stack budget planning app with a Spring Boot backend and React frontend.",
    url: "https://github.com/Romatomato1/BudgetPlanner",
    tags: ["Java", "Spring Boot", "React"],
  },
  {
    name: "FindAThread",
    description:
      "Capstone project: a virtual wardrobe/outfit planner web app built with Flask, MySQL, and Google's Vision API.",
    url: "https://github.com/Romatomato1/FindAThread",
    tags: ["Flask", "Python", "MySQL"],
  },
];

export const otherProjects = [
  {
    name: "BlastGeneNucleotide",
    description:
      "Python tool that compares DNA sequences via BLAST and visualizes nucleotide differences.",
    url: "https://github.com/Romatomato1/BlastGeneNucleotide",
    tags: ["Python", "Bioinformatics"],
  },
  {
    name: "ESP32StepperController",
    description:
      "ESP32/Arduino firmware for controlling stepper motors on a two-wheeled robot.",
    url: "https://github.com/Romatomato1/ESP32StepperController",
    tags: ["C++", "Embedded"],
  },
  {
    name: "FileSystems",
    description:
      "Java simulation of a Unix-like file system, implementing inodes, directories, and a file table.",
    url: "https://github.com/Romatomato1/FileSystems",
    tags: ["Java", "Systems"],
  },
];
