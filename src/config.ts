export const siteConfig = {
  name: "George Grozea",
  title: "Junior Software Engineer",
  description: "Portfolio website of George Grozea",
  accentColor: "#1d4ed8",
  social: {
    email: "grozea.george03@gmail.com",
    linkedin: "https://www.linkedin.com/in/george-grozea-6b18842b4/",
    github: "https://github.com/grozeageorge",
  },
  aboutMe:
    "I specialize as a backend developer and I am a Master's student based in Romania. My background in math naturally pushed me toward the server-side of software. I specialize in Java, C#, and Python, focusing on heavy architectural logic, data integrity, and AI integrations.",
  skills: ["Java Spring Boot", "Kotlin", ".NET 10", "Python", "SQL", "Docker"],
  projects: [
    {
      name: "Youtube-TV",
      description:
          "An autonomous RAG architecture powered by Llama 3.1 and ChromaDB that dynamically curates intelligent, seamless video queues for maximized relevance.",
      link: "https://github.com/grozeageorge/yt-tv",
      skills: ["Java 21", "Spring Boot", "Spring AI", "ChromaDB", "SQL Server", "Llama 3.2", "Docker"],
    },
    {
      name: "Emergency Response Android App",
      description:
        "A serverless Kotlin application utilizing custom vector interpolation and automated CI/CD pipelines to deliver real-time geographic pathfinding and dynamic routing simulations.",
      link: "https://github.com/grozeageorge/emergency-app",
      skills: ["Kotlin", "Firebase", "GitHub Actions", "OSRM"],
    },
    {
      name: "Library Management System",
      description:
        "A domain-driven .NET 10 backend built with Clean Architecture that ensures strict data integrity through optimistic concurrency control and comprehensive unit testing.",
      link: "https://github.com/grozeageorge/LibraryManagement",
      skills: [".NET 10", "EF Core", "SQL Server", "NUnit", "Moq"],
    },
  ],
  experience: [
    {
      company: "Campion",
      title: "Brokerage Assistant",
      dateRange: "Sep 2024 - Present",
      bullets: [
        "Managed direct client communication to understand their specific needs and offer the best service matches.",
        "Acted as the link between clients and insurance providers to process personalized offers, ensuring all sensitive personal data was handled with strict GDPR compliance.",
      ],
    },
  ],
  education: [
    {
      school: "Universitatea Transilvania din Brasov",
      degree: "Bachelor of Science in Mathematics and <br/> Computer Science",
      dateRange: "2022 - 2025",
      achievements: [
          "Thesis: Mapped complex mathematical algorithms for Bezier curves and surfaces natively in Unity.",
      ],
    },
    {
      school: "Universitatea Transilvania din Brasov",
      degree: "Master of Science in Modern Technologies in <br/> Software Systems Engineering",
      dateRange: "2025 - Present",
      achievements: [
          "Focusing on applied machine learning and data science, with active research in self-driving car simulations.",
      ],
    },
  ],
};
