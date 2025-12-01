import React from "react";
import {
  Network,
  Server,
  Terminal,
  Cloud,
  Video,
  Wrench,
  Monitor,
  Box,
  GitBranch,
  Users,
  MessageSquare,
  Lightbulb,
  Zap,
  Brain,
} from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#E3F2FD] rounded-lg flex items-center justify-center text-[#1E88E5]">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-[#1a1a1a] mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const technicalSkills = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking",
      description: "LAN/VLAN, DHCP, DNS configuration and management",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Windows Server",
      description: "Installation, configuration, and maintenance",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Linux Administration",
      description: "Ubuntu / RHEL server management",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Google Cloud",
      description: "Compute, Storage, IAM basics",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "CCTV/ELV Systems",
      description: "IP cameras, NVR/DVR, PoE deployment",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Troubleshooting",
      description: "Hardware and software issue resolution",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Remote Support",
      description: "AnyDesk, TeamViewer, RDP",
    },
  ];

  const toolsSkills = [
    {
      icon: <Box className="w-6 h-6" />,
      title: "VMware",
      description: "Virtual machine setup and management",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "VirtualBox",
      description: "Virtualization platform experience",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Git & GitHub",
      description: "Version control and collaboration",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Google Workspace",
      description: "Admin console and user management",
    },
  ];

  const softSkills = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communication",
      description: "Clear documentation and user interaction",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem-solving",
      description: "Analytical approach to technical challenges",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Handling",
      description: "Professional client support and relations",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Fast Learning",
      description: "Quick adaptation to new technologies",
    },
  ];

  return (
    <section id="skills" className="bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            A comprehensive skill set spanning networking, system administration, cloud platforms, and professional soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2 mb-4 lg:mb-6">
            <div className="w-1 h-8 bg-[#1E88E5] rounded-full"></div>
            <h3 className="text-xl lg:text-2xl text-[#1a1a1a]">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2 mb-4 lg:mb-6">
            <div className="w-1 h-8 bg-[#1E88E5] rounded-full"></div>
            <h3 className="text-xl lg:text-2xl text-[#1a1a1a]">Tools</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {toolsSkills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4 lg:mb-6">
            <div className="w-1 h-8 bg-[#1E88E5] rounded-full"></div>
            <h3 className="text-xl lg:text-2xl text-[#1a1a1a]">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}