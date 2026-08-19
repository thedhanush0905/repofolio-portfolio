import React from "react";
import PortfolioTemplate from "@/components/portfolio-template";

const portfolioData = {
  "personal": {
    "name": "Dhanush Maddila",
    "role": "Software Engineer",
    "bio": "Building clean, high-performance systems with Java, React & Node. Focus on developer tooling, distributed architectures, and web technology.",
    "location": "San Francisco, CA",
    "github": "dhanush",
    "linkedin": "dhanush-maddila",
    "email": "dhanush@maddila.dev",
    "profileImage": "",
    "availability": "Available for work"
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
      "title": "REPOfolio",
      "description": "A client-side developer portfolio compiler and codebase exporter that helps engineers own their public presence.",
      "tech": [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion"
      ],
      "link": "github.com/dhanush/repofolio",
      "year": "2026",
      "category": "Developer Tooling",
      "featured": true,
      "order": 1
    },
    {
      "title": "CityPulse",
      "description": "Real-time municipal service tracking dashboard compiling transport metrics.",
      "tech": [
        "Java",
        "Spring Boot",
        "Kafka"
      ],
      "link": "github.com/dhanush/citypulse",
      "year": "2025",
      "category": "Data Pipeline",
      "featured": false,
      "order": 2
    }
  ],
  "experience": [
    {
      "role": "Software Engineering Intern",
      "company": "Apex Tech Systems",
      "duration": "Jun 2025 - Aug 2025",
      "description": "Migrated high-throughput query pipelines to Node.js microservices."
    }
  ],
  "services": [
    {
      "title": "Frontend Engineering",
      "description": "Responsive layouts, React app compilers, and clean performance optimization."
    },
    {
      "title": "Distributed Pipelines",
      "description": "Designing low-latency Kafka systems and serverless backend layers."
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
