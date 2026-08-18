import React from "react";
import PortfolioTemplate from "@/components/portfolio-template";

const portfolioData = {
  "personal": {
    "name": "Maddila Dhanush Srinivas",
    "role": "Full Stack Engineer",
    "bio": "Building clean, high-performance systems with Java, React & Node. Focus on developer tooling, distributed architectures, and web technology.",
    "location": "Navi Mumbai, Maharastra, India",
    "github": "thedhanush0905",
    "linkedin": "www.linkedin.com/in/dhanush-srinivas-maddila-6574aa252",
    "email": "dhanushmaddila0905@gmail.com",
    "profileImage": "",
    "availability": "Open to opportunities"
  },
  "skills": [
    "Java",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Docker",
    "PostgreSQL",
    "Tailwind CSS"
  ],
  "projects": [
    {
      "title": "BluHire-AI",
      "description": "Web Application that tries to simplify HR recruitement pipeline using AI Features",
      "tech": [
        "NodeJS",
        "NextJS",
        "ExpressJS",
        "Python",
        "MongoDB"
      ],
      "year": "2026",
      "category": "Web Application",
      "featured": false,
      "order": 1,
      "image": ""
    },
    {
      "title": "HealthMate-AI",
      "description": "An Android application that tries to predict health risk score using machine learning models. Uses SHAP and RAG to make the application more scalable and interactive.",
      "tech": [
        "Kotlin",
        "Python",
        "Jetpack Compose",
        "Firebase"
      ],
      "year": "2026",
      "category": "Android Application",
      "featured": false,
      "order": 2,
      "image": ""
    },
    {
      "title": "Aegis",
      "description": "A web application that helps military to digitaly manage asset and equipments",
      "tech": [
        "NodeJS",
        "NextJS",
        "ExpressJS",
        "Prisma",
        "Postgres"
      ],
      "year": "2026",
      "category": "Web Application",
      "featured": false,
      "order": 3,
      "image": ""
    }
  ],
  "experience": [
    {
      "role": "Data Science Trainee",
      "company": "Board Infinity",
      "duration": "May 2024 - Jul 2024",
      "description": "worked on python libraries, SQL, tableau and visualizations."
    },
    {
      "role": "Graduate Trainee",
      "company": "HCL Technologies",
      "duration": "Dec 2025 - Mar 2026",
      "description": "Worked on Java Full Stack Web Applications"
    }
  ],
  "services": [
    {
      "title": "Full Stack Development",
      "description": "Development of the entire stack of the web and android applications"
    }
  ],
  "stats": [
    {
      "label": "Projects Completed",
      "value": "12+"
    },
    {
      "label": "Happy Clients",
      "value": "20+"
    }
  ]
};

export default function Home() {
  return (
    <PortfolioTemplate data={portfolioData} />
  );
}
