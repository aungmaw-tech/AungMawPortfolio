import React from "react";
import { Building2, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  isLast?: boolean;
}

function ExperienceCard({
  company,
  role,
  period,
  responsibilities,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 lg:pl-12">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-2">
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#1E88E5] rounded-full border-2 lg:border-4 border-white ring-2 ring-[#1E88E5]/20"></div>
        {!isLast && (
          <div className="absolute left-1/2 top-4 -ml-px h-full w-0.5 bg-gray-200"></div>
        )}
      </div>

      {/* Card Content */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#1E88E5] flex-shrink-0" />
              <h3 className="text-lg lg:text-xl text-[#1a1a1a]">{company}</h3>
            </div>
            <p className="text-gray-700 mb-1">{role}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm bg-gray-100 px-3 py-1.5 rounded-lg self-start">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
              <span className="text-[#1E88E5] mt-1.5 flex-shrink-0">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Pyit Taing Htaung CCTV Co., Ltd",
      role: "System Administrator",
      period: "2022–2024",
      responsibilities: [
        "Managed routers, switches, WiFi access points, and servers for optimal network performance",
        "Installed and configured Windows/Linux systems across multiple environments",
        "Deployed comprehensive CCTV & ELV solutions for security infrastructure",
        "Provided remote support using RDP, AnyDesk, and TeamViewer for efficient troubleshooting",
        "Maintained IT inventory and developed Standard Operating Procedures (SOPs)",
      ],
    },
    {
      company: "GD Guardian Co., Ltd",
      role: "IT Consultant",
      period: "2020–2022",
      responsibilities: [
        "Designed and architected IT infrastructure, server, and network solutions",
        "Installed LAN networks, configured servers, and deployed CCTV systems",
        "Set up and optimized WiFi access points for seamless connectivity",
        "Delivered comprehensive documentation and conducted user training sessions",
      ],
    },
    {
      company: "Southern Metal Industry Co., Ltd",
      role: "Junior IT Administrator",
      period: "2019–2020",
      responsibilities: [
        "Provided troubleshooting support for hardware and software issues",
        "Managed Google Workspace administration and user accounts",
        "Performed OS installations and device configurations",
        "Assisted with basic server maintenance and support tasks",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            5+ years of hands-on experience in IT support, system administration, and infrastructure management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              responsibilities={exp.responsibilities}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}