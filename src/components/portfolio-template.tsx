"use client";
import React, { useState } from "react";

export interface PersonalData {
  name: string;
  role: string;
  bio: string;
  location: string;
  github?: string;
  linkedin?: string;
  email?: string;
  profileImage?: string;
  availability?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  year?: string;
  category?: string;
  featured?: boolean;
  order?: number;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PortfolioData {
  personal: PersonalData;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  services?: Service[];
  stats?: Stat[];
}

export interface DeveloperTemplateProps {
  data: PortfolioData;
}

export default function DeveloperTemplate({ data }: DeveloperTemplateProps) {
  const { personal, skills, projects, experience, services } = data;
  const sortedProjects = [...(projects || [])].sort((a: Project, b: Project) => (a.order || 99) - (b.order || 99));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-[#0B1117] text-[#A8AAA4] font-sans min-h-screen selection:bg-[#E5A84B] selection:text-[#0B1117] p-6 sm:p-12 md:p-16">
      <div className="max-w-5xl mx-auto w-full space-y-12 sm:space-y-24">
        
        {/* Navigation & Header */}
        <header className="border-b border-[#2b3b4d]/20 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
            <div>
              <div className="font-mono text-sm font-bold tracking-tight text-[#F3F0E8] uppercase">
                {personal.name}
              </div>
              <div className="text-[10px] text-gray-500 uppercase font-mono tracking-widest mt-1">
                {personal.role} {personal.location && `· ${personal.location}`}
              </div>
            </div>
            {personal.availability && (
              <div className="text-[9px] text-[#E5A84B] font-mono uppercase tracking-widest md:text-right mt-2 md:mt-0">
                {personal.availability}
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8">
          <div className="md:col-span-8 space-y-6 order-2 md:order-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3F0E8] leading-tight break-words">
              I build scalable systems & digital products for the web.
            </h1>
            <p className="text-sm sm:text-base text-[#A8AAA4] leading-relaxed max-w-xl font-light">
              {personal.bio}
            </p>
            {personal.location && (
              <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">Based in {personal.location}</p>
            )}
            
            {/* Quick links */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-[#E5A84B]">
              {personal.github && (
                <a href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              )}
              {personal.linkedin && (
                <a href={`https://linkedin.com/in/${personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              )}
              {personal.email && (
                <a href={`mailto:${personal.email}`} className="hover:underline">
                  Email
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end order-1 md:order-2">
            {personal.profileImage ? (
              <img 
                src={personal.profileImage} 
                alt={personal.name} 
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-sm border border-[#2b3b4d]/40 shadow-xl"
              />
            ) : (
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-sm bg-[#17212B] border border-[#2b3b4d]/40 flex items-center justify-center text-[#E5A84B] font-mono text-sm">
                [ PORTRAIT ]
              </div>
            )}
          </div>
        </section>

        {/* Selected Work section */}
        {sortedProjects.length > 0 && (
          <section className="space-y-16">
            <div className="border-b border-[#2b3b4d]/20 pb-4">
              <h2 className="text-xs font-mono text-[#E5A84B] uppercase tracking-widest">Selected Projects</h2>
            </div>

            <div className="space-y-24">
              {sortedProjects.map((proj: Project, idx: number) => (
                <div key={idx} className="space-y-6">
                  
                  {/* Title metadata */}
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-gray-500">0{idx + 1}</span>
                    <span>{proj.category?.toUpperCase() || "CASE STUDY"}</span>
                  </div>

                  {/* Visual representation card */}
                  <div className="overflow-hidden border border-[#2b3b4d]/30 rounded-sm">
                    {proj.image ? (
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full object-cover max-h-[460px] transition-transform duration-500 hover:scale-[1.01]"
                      />
                    ) : (
                      <div className="w-full p-8 md:p-12 border border-white/10 rounded-sm flex flex-col justify-between min-h-[220px] select-none bg-[#101820] text-gray-400">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#E5A84B]">0{idx + 1}</span>
                          {proj.year && <span className="text-[10px] font-mono">{proj.year}</span>}
                        </div>
                        <div className="my-6">
                          <h4 className="text-xl font-light uppercase tracking-wider text-white">{proj.title}</h4>
                          <span className="text-xs uppercase tracking-widest block mt-1">
                            {proj.category || "Case Study"}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 opacity-70">
                          {proj.tech && proj.tech.map((t: string, i: number) => (
                            <span key={i} className="text-[9px] font-mono uppercase tracking-wider">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 pt-2">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{proj.title}</h3>
                      <p className="text-sm text-[#A8AAA4] leading-relaxed font-light">{proj.description}</p>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[200px] md:text-right">
                      <div className="font-mono text-xs text-[#E5A84B] flex flex-wrap gap-2 md:justify-end">
                        {proj.tech.join(" · ")}
                      </div>
                      <div>
                        <button 
                          onClick={() => setSelectedProject(proj)} 
                          className="inline-block text-xs font-mono text-white underline hover:text-[#E5A84B] cursor-pointer text-left md:text-right"
                        >
                          View Project Details →
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Timeline */}
        {experience && experience.length > 0 && (
          <section className="space-y-12">
            <div className="border-b border-[#2b3b4d]/20 pb-4">
              <h2 className="text-xs font-mono text-[#E5A84B] uppercase tracking-widest">Experience</h2>
            </div>
            <div className="space-y-12">
              {experience.map((exp: Experience, idx: number) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="md:w-1/3">
                    <span className="text-xs font-mono text-gray-500">{exp.duration}</span>
                  </div>
                  <div className="md:w-2/3 space-y-2">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <p className="text-xs font-mono text-[#E5A84B]">{exp.company}</p>
                    <p className="text-sm text-[#A8AAA4] leading-relaxed font-light">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services capabilities list */}
        {services && services.length > 0 && (
          <section className="space-y-8">
            <div className="border-b border-[#2b3b4d]/20 pb-4">
              <h2 className="text-xs font-mono text-[#E5A84B] uppercase tracking-widest">Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono">
              {services.map((ser: Service, idx: number) => (
                <div key={idx} className="space-y-2 break-words">
                  <h3 className="text-sm font-semibold text-white">{ser.title}</h3>
                  <p className="text-xs text-[#A8AAA4] leading-relaxed font-light">{ser.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Toolkit skills inline list */}
        {skills && skills.length > 0 && (
          <section className="space-y-4 pt-8 border-t border-[#2b3b4d]/20">
            <div className="text-xs text-gray-500 font-mono flex flex-wrap gap-y-2 gap-x-4">
              <span>TOOLKIT:</span>
              <span className="text-[#A8AAA4] font-sans">{skills.join(" · ")}</span>
            </div>
          </section>
        )}

      </div>

      {/* Standalone Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0B1117]/95 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#101820] border border-[#2b3b4d]/40 rounded-sm w-full max-w-3xl p-6 sm:p-10 relative font-mono text-xs text-[#A8AAA4] space-y-6">
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-sm"
            >
              [ CLOSE ]
            </button>
            <div className="border-b border-[#2b3b4d]/20 pb-4">
              <span className="text-[#E5A84B] text-[10px] tracking-widest uppercase">PROJECT CASE STUDY</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">{selectedProject.title}</h3>
            </div>
            <p className="leading-relaxed font-sans font-light text-sm">{selectedProject.description}</p>
            <div className="grid grid-cols-2 gap-4 border-t border-[#2b3b4d]/10 pt-4 text-[10px]">
              <div>
                <span className="text-gray-500">CATEGORY:</span>
                <div className="text-white mt-0.5">{selectedProject.category || "Development"}</div>
              </div>
              <div>
                <span className="text-gray-500">TECHNOLOGY:</span>
                <div className="text-[#E5A84B] mt-0.5">{selectedProject.tech.join(", ")}</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}