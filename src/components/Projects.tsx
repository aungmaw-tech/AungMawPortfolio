import React from "react";
import { Video, Network, Cloud, Shield } from "lucide-react";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProjectCard({ icon, title, description }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#1E88E5]/30 transition-all duration-300 group">
      <div className="flex items-center justify-center w-14 h-14 bg-[#E3F2FD] rounded-xl mb-4 group-hover:bg-[#1E88E5] transition-colors duration-300">
        <div className="text-[#1E88E5] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl text-[#1a1a1a] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      icon: <Video className="w-7 h-7" />,
      title: "CCTV Network Deployment",
      description:
        "Installed PoE-based IP CCTV systems with remote viewing capabilities and 30–60 day storage planning for comprehensive security coverage.",
    },
    {
      icon: <Network className="w-7 h-7" />,
      title: "LAN Network Setup",
      description:
        "Installed and configured LAN cabling infrastructure, managed switches, deployed WiFi access points, and implemented DHCP reservations.",
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Google Cloud VM + Storage Website",
      description:
        "Deployed Compute Engine virtual machines and hosted a static website on Cloud Storage with proper IAM configurations.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Linux Server Hardening",
      description:
        "Configured firewall rules, implemented SSH key authentication, disabled root login, and secured critical services for enhanced security.",
    },
  ];

  return (
    <section id="projects" className="bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Real-world implementations showcasing technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}