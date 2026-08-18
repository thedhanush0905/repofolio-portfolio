"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function DeveloperTemplate({ data }) {
  const { personal, skills, projects, experience, services } = data;
  const sortedProjects = [...(projects || [])].sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="bg-[#0B1117] text-[#A8AAA4] font-sans min-h-screen p-6 sm:p-12 md:p-16">
      <div className="max-w-5xl mx-auto w-full space-y-12 sm:space-y-24">
        <header className="border-b border-[#2b3b4d]/20 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
            <div>
              <div className="font-mono text-sm font-bold tracking-tight text-[#F3F0E8] uppercase">{personal.name}</div>
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

        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8">
          <div className="md:col-span-8 space-y-6 order-2 md:order-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3F0E8] leading-tight break-words">
              I build scalable systems & digital products for the web.
            </h1>
            <p className="text-sm sm:text-base text-[#A8AAA4] leading-relaxed max-w-xl font-light">{personal.bio}</p>
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-[#E5A84B]">
              {personal.github && <a href={`https://github.com/${personal.github}`} className="hover:underline">GitHub</a>}
              {personal.linkedin && <a href={`https://linkedin.com/in/${personal.linkedin}`} className="hover:underline">LinkedIn</a>}
              {personal.email && <a href={`mailto:${personal.email}`} className="hover:underline">Email</a>}
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end order-1 md:order-2">
            {personal.profileImage && (
              <img src={personal.profileImage} alt={personal.name} className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-sm border border-[#2b3b4d]/40 shadow-xl" />
            )}
          </div>
        </section>

        {sortedProjects.length > 0 && (
          <section className="space-y-16">
            <div className="border-b border-[#2b3b4d]/20 pb-4">
              <h2 className="text-xs font-mono text-[#E5A84B] uppercase tracking-widest">Selected Projects</h2>
            </div>
            <div className="space-y-24">
              {sortedProjects.map((proj, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-gray-500">0{idx + 1}</span>
                    <span>{proj.category?.toUpperCase() || "PROJECT"}</span>
                  </div>
                  {proj.image && (
                    <div className="overflow-hidden border border-[#2b3b4d]/30 rounded-sm">
                      <img src={proj.image} alt={proj.title} className="w-full object-cover max-h-[460px]" />
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row gap-6 pt-2">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{proj.title}</h3>
                      <p className="text-sm text-[#A8AAA4] leading-relaxed font-light">{proj.description}</p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <div className="font-mono text-xs text-[#E5A84B] flex flex-wrap gap-2">{proj.tech.join(" · ")}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}