import React from "react";
import {
  Network, Server, Terminal, Cloud, Video, Wrench,
  Monitor, Box, GitBranch, Users, MessageSquare,
  Lightbulb, Brain,
} from "lucide-react";

const CARD = { backgroundColor: "#16213e", borderColor: "rgba(255,255,255,0.08)" };

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="border rounded-xl p-6 transition-shadow duration-300 hover:shadow-lg" style={CARD}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(30,136,229,0.15)", color: "#1E88E5" }}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="mb-2" style={{ color: "#e2e8f0" }}>{title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function GroupLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4 lg:mb-6">
      <div className="w-1 h-8 rounded-full" style={{ backgroundColor: "#1E88E5" }} />
      <h3 className="text-xl lg:text-2xl" style={{ color: "#e2e8f0" }}>{label}</h3>
    </div>
  );
}

export function Skills() {
  const technicalSkills = [
    { icon: <Network className="w-6 h-6" />, title: "Networking", description: "LAN/VLAN, DHCP, DNS configuration and management" },
    { icon: <Server className="w-6 h-6" />, title: "Windows Server", description: "Installation, configuration, and maintenance" },
    { icon: <Terminal className="w-6 h-6" />, title: "Linux Administration", description: "Ubuntu / RHEL server management" },
    { icon: <Cloud className="w-6 h-6" />, title: "Google Cloud", description: "Compute, Storage, IAM basics" },
    { icon: <Video className="w-6 h-6" />, title: "CCTV/ELV Systems", description: "IP cameras, NVR/DVR, PoE deployment" },
    { icon: <Wrench className="w-6 h-6" />, title: "Troubleshooting", description: "Hardware and software issue resolution" },
    { icon: <Monitor className="w-6 h-6" />, title: "Remote Support", description: "AnyDesk, TeamViewer, RDP" },
  ];

  const toolsSkills = [
    { icon: <Box className="w-6 h-6" />, title: "VMware", description: "Virtual machine setup and management" },
    { icon: <Box className="w-6 h-6" />, title: "VirtualBox", description: "Virtualization platform experience" },
    { icon: <GitBranch className="w-6 h-6" />, title: "Git & GitHub", description: "Version control and collaboration" },
    { icon: <Users className="w-6 h-6" />, title: "Google Workspace", description: "Admin console and user management" },
  ];

  const softSkills = [
    { icon: <MessageSquare className="w-6 h-6" />, title: "Communication", description: "Clear documentation and user interaction" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Problem-solving", description: "Analytical approach to technical challenges" },
    { icon: <Users className="w-6 h-6" />, title: "Customer Handling", description: "Professional client support and relations" },
    { icon: <Brain className="w-6 h-6" />, title: "Fast Learning", description: "Quick adaptation to new technologies" },
  ];

  return (
    <section id="skills" className="py-12 lg:py-20" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#1E88E5" }}>Expertise</p>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: "#e2e8f0" }}>Skills & Expertise</h2>
          <p className="max-w-2xl mx-auto px-4" style={{ color: "#64748b" }}>
            A comprehensive skill set spanning networking, system administration, cloud platforms, and professional soft skills
          </p>
        </div>

        <div className="mb-8 lg:mb-12">
          <GroupLabel label="Technical Skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {technicalSkills.map((s, i) => <SkillCard key={i} {...s} />)}
          </div>
        </div>

        <div className="mb-8 lg:mb-12">
          <GroupLabel label="Tools" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {toolsSkills.map((s, i) => <SkillCard key={i} {...s} />)}
          </div>
        </div>

        <div>
          <GroupLabel label="Soft Skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {softSkills.map((s, i) => <SkillCard key={i} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
