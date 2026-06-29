import React from "react";
import { Building2, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  companyDetail: string;
  role: string;
  period: string;
  responsibilities: string[];
  isLast?: boolean;
}

function ExperienceCard({ company, companyDetail, role, period, responsibilities, isLast = false }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 lg:pl-12">
      <div className="absolute left-0 top-2">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 lg:border-4" style={{ backgroundColor: "#1E88E5", borderColor: "#1a1a2e", boxShadow: "0 0 0 4px rgba(30,136,229,0.2)" }} />
        {!isLast && <div className="absolute left-1/2 top-4 -ml-px h-full w-0.5" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />}
      </div>

      <div className="border rounded-xl p-4 lg:p-6 mb-6 lg:mb-8 hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: "#16213e", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" style={{ color: "#1E88E5" }} />
              <h3 className="text-lg lg:text-xl" style={{ color: "#e2e8f0" }}>{company}</h3>
            </div>
            <p className="text-sm mb-1" style={{ color: "#475569" }}>{companyDetail}</p>
            <p style={{ color: "#94a3b8" }}>{role}</p>
          </div>
          <div className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg self-start whitespace-nowrap" style={{ backgroundColor: "rgba(30,136,229,0.12)", color: "#1E88E5" }}>
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span className="mt-1.5 flex-shrink-0" style={{ color: "#1E88E5" }}>•</span>
              <span className="leading-relaxed" style={{ color: "#94a3b8" }}>{item}</span>
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
      company: "Pyit Taing Htaung CCTV",
      companyDetail: "SMB Infrastructure System Integrator — Myanmar",
      role: "IT Administrator",
      period: "Sep 2022 – Apr 2024",
      responsibilities: [
        "Led end-to-end client engagements — consultation, site survey, solution design, and deployment — for network, server, and CCTV infrastructure projects across multiple SMB clients.",
        "Designed and deployed a multi-hop Ubiquiti point-to-point wireless backbone to deliver internet to a hotel with no fiber access; extended the design to two additional properties, including a Wi-Fi 6 upgrade.",
        "Delivered a combined network and ~100-camera CCTV deployment for a private school campus, covering wired/wireless infrastructure from site survey through installation.",
        "Deployed CCTV systems across four convenience store branches; integrated a Dahua NVR with IMOU wireless cameras for remote two-way monitoring.",
        "Administered Windows Server, Active Directory, DNS/DHCP, file servers, and Google Workspace for clients; provided remote support via AnyDesk and TeamViewer.",
      ],
    },
    {
      company: "GD Guardian",
      companyDetail: "Network Distribution (Ruijie / Reyee) — Myanmar",
      role: "Presales Engineer",
      period: "Dec 2020 – Aug 2022",
      responsibilities: [
        "Conducted requirements analysis and on-site surveys for systems integrator partners across Southeast Asia, translating client needs into wireless network designs using Ruijie heat-mapping tools.",
        "Configured switches, gateways, and access points (VLAN, SSID, captive portal, PoE, QoS) to support proposed network solutions.",
        "Delivered remote technical demonstrations to SI partners over Zoom during COVID-19 travel restrictions, supporting continued project rollout.",
        "Provided post-installation support, client training, and technical documentation following project rollout.",
      ],
    },
    {
      company: "Southern Metal Industry",
      companyDetail: "Manufacturing (Internal IT) — Myanmar",
      role: "IT Support",
      period: "Jun 2019 – Nov 2020",
      responsibilities: [
        "Provided desktop and infrastructure support for ~30–50 users, managing Windows Server, Active Directory, DNS/DHCP, file servers, and Google Workspace.",
        "Restored full server operations after a ransomware incident using Windows Server Backup procedures, avoiding data loss and any ransom payment.",
        "Identified and blocked phishing attempts before user credentials were compromised.",
        "Administered Synology NAS storage and supported pfSense firewall configuration; managed user account provisioning and hardware/software deployment.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 lg:py-20" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#1E88E5" }}>Career</p>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: "#e2e8f0" }}>Professional Experience</h2>
          <p className="max-w-2xl mx-auto px-4" style={{ color: "#64748b" }}>
            5+ years of hands-on experience in IT support, systems administration, and infrastructure deployment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
