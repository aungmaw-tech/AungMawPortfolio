import React from "react";
import { Video, Network, Cloud, Shield, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

function ProjectCard({ icon, title, description, imageUrl, tag }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#16213e" }}>
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: "#0f3460" }}>
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(22,33,62,0.6), transparent)" }} />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs" style={{ backgroundColor: "#1E88E5", color: "#ffffff" }}>
          {tag}
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" style={{ backgroundColor: "#1E88E5" }}>
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(30,136,229,0.15)", color: "#1E88E5" }}>
            {icon}
          </div>
          <h3 className="text-base" style={{ color: "#e2e8f0" }}>{title}</h3>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{description}</p>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      icon: <Video className="w-5 h-5" />,
      title: "CCTV Network Deployment",
      description: "Installed PoE-based IP CCTV systems with remote viewing capabilities and 30–60 day storage planning.",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc2VjdXJpdHklMjBjYW1lcmElMjBzeXN0ZW18ZW58MXx8fHwxNzgyNjI5NTI5fDA&ixlib=rb-4.1.0&q=80&w=800",
      tag: "Security",
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "LAN Network Setup",
      description: "Installed and configured LAN cabling infrastructure, managed switches, deployed WiFi access points.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc3dpdGNoJTIwY2FibGVzJTIwc2VydmVyJTIwcm9vbXxlbnwxfHx8fDE3ODI2Mjk1Mjl8MA&ixlib=rb-4.1.0&q=80&w=800",
      tag: "Networking",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Google Cloud VM + Storage Website",
      description: "Deployed Compute Engine VMs and hosted a static website on Cloud Storage with IAM configurations.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3ODI2Mjk1Mjl8MA&ixlib=rb-4.1.0&q=80&w=800",
      tag: "Cloud",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Linux Server Hardening",
      description: "Configured firewall rules, SSH key auth, disabled root login, and secured critical services.",
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHNlcnZlciUyMHRlcm1pbmFsJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzgyNjI5NTI5fDA&ixlib=rb-4.1.0&q=80&w=800",
      tag: "Linux",
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 lg:mb-14 gap-4">
          <div>
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#1E88E5" }}>Portfolio</p>
            <h2 className="text-3xl lg:text-4xl" style={{ color: "#e2e8f0" }}>Featured Projects</h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "#64748b" }}>
            Real-world implementations showcasing technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
