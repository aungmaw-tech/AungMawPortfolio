import React from "react";
import { ArrowRight, Cloud, Network, Shield, Video } from "lucide-react";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  challenge: string;
  impact: string;
  scope: string[];
}

function ProjectCard({
  icon,
  title,
  category,
  challenge,
  impact,
  scope,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#1E88E5]/35 hover:shadow-md lg:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="rounded-lg bg-[#E3F2FD] p-3 text-[#1E88E5] transition-colors duration-200 group-hover:bg-[#1E88E5] group-hover:text-white">
          {icon}
        </div>
        <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
          {category}
        </span>
      </div>

      <h3 className="text-xl text-[#111827] lg:text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-gray-600">{challenge}</p>

      <div className="mt-5 rounded-lg border border-[#1E88E5]/15 bg-[#E3F2FD]/40 p-4">
        <p className="mb-2 text-sm text-[#155A9F]">Business value</p>
        <p className="text-sm leading-6 text-gray-800">{impact}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {scope.map((item) => (
          <span
            key={item}
            className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  const projects = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "CCTV Network Deployment",
      category: "Security Infrastructure",
      challenge:
        "Installed PoE-based IP CCTV systems with remote viewing and storage planning for operational security coverage.",
      impact:
        "Improved site visibility, remote monitoring readiness, and retention planning for security teams.",
      scope: ["PoE", "IP CCTV", "NVR/DVR", "Remote Viewing", "Storage Planning"],
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "LAN Network Setup",
      category: "Network Operations",
      challenge:
        "Configured cabling, managed switches, WiFi access points, and DHCP reservations for stable office connectivity.",
      impact:
        "Created a more dependable network foundation for users, devices, and daily business operations.",
      scope: ["LAN", "Switches", "WiFi", "DHCP", "Cabling"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Google Cloud VM + Storage Website",
      category: "Cloud Foundation",
      challenge:
        "Deployed Compute Engine resources and hosted a static website on Cloud Storage with IAM-aware configuration.",
      impact:
        "Demonstrated practical cloud fundamentals across compute, storage, access control, and deployment workflow.",
      scope: ["GCP", "Compute Engine", "Cloud Storage", "IAM", "Static Hosting"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Linux Server Hardening",
      category: "Security Operations",
      challenge:
        "Configured firewall rules, SSH key authentication, root login restrictions, and critical service protections.",
      impact:
        "Reduced common server exposure risks while improving baseline operational security.",
      scope: ["Linux", "Firewall", "SSH Keys", "Root Lockdown", "Service Security"],
    },
  ];

  return (
    <section id="projects" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm text-[#1E88E5]">Professional case studies</p>
            <h2 className="text-3xl text-[#111827] lg:text-4xl">
              Projects framed around business impact and operational reliability.
            </h2>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800 transition-all duration-200 hover:border-[#1E88E5] hover:bg-[#E3F2FD]/70 hover:text-[#1565C0]"
          >
            Discuss project fit
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
