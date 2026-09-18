export const profileData = {
  name: "Ajay Kumar Yadav",
  role: "B.Tech CS Student @ VIT Vellore",
  tagline: "Software Engineer | AI & Full-Stack Developer",
  bio: "Computer Science undergrad at VIT Vellore with a passion for building high-performance, AI-driven applications and robust software systems. I specialize in bridging the gap between intelligent backend pipelines and seamless user experiences. From engineering fully local, voice-controlled AI assistants to integrating hardware and software in robotics competitions, I thrive on tackling complex architectural challenges and solving hard engineering problems at scale.",
  links: {
    github: "https://github.com/ajaykumaryadav-collab",
    email: "mailto:ajaykumaryadav3103@gmail.com",
    phone: "tel:+917718874408",
    linkedin: "https://linkedin.com/" // Update with your actual LinkedIn profile URL
  },
};

export const skillsData = {
  "Languages": ["C / C++", "Java", "Python", "JavaScript", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["Node.js", "React", "PyTorch"],
  "Tools": ["Git & GitHub", "Vercel", "VS Code"],
  "Data & AI": ["Gemini API", "Speech-to-Text (faster-whisper)", "Text-to-Speech (TTS)", "Local AI Pipelines"],
  "Core Concepts": ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
};

export const experienceData = [
  {
    id: "vit-robotics",
    title: "Student Member – Robotics & Technical Teams",
    company: "VIT Vellore",
    date: "Present",
    description: "Core member of the Robotics Club, contributing to design, prototyping, and technical discussions. Handled hardware-software integration through practical workshops and cross-functional projects. Active team member of VIT Hexabot – Team Artemis, engineering solutions for competitive robotics.",
    tags: ["Hardware-Software Integration", "Prototyping", "Team Artemis"],
  },
  {
    id: "vit-education",
    title: "B.Tech in Computer Science & Engineering",
    company: "VIT Vellore",
    date: "2025 – Present",
    description: "Current CGPA: 8.5. Focusing on advanced software engineering principles, algorithms, and system design.",
    tags: ["C++", "Java", "Python", "DSA"],
  }
];

export const projectsData = [
  {
    id: "project-jarvis",
    title: "Project JARVIS",
    status: "Featured",
    description: "A fully local, hands-free hybrid AI desktop assistant for Windows 11. Engineered a multi-stage pipeline combining wake-word detection (openwakeword), low-latency speech-to-text (faster-whisper with CUDA), Gemini 2.0 Flash API for conversational intelligence, and local TTS (piper-tts) into a seamless voice interface capable of executing local system control commands.",
    tags: ["Python", "faster-whisper", "Gemini API", "piper-tts", "CUDA", "PyTorch"],
    githubUrl: "https://github.com/ajaykumaryadav-collab/jarvis",
  }
];
