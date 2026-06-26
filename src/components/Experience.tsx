import React from "react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  scope: string[];
  isLast?: boolean;
}

function ExperienceCard({
  company,
  role,
  period,
  summary,
  achievements,
  scope,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-7 sm:pl-10">
      <div className="absolute left-0 top-1">
        <div className="h-4 w-4 rounded-full border-4 border-white bg-[#1E88E5] shadow-[0_0_0_4px_rgba(30,136,229,0.14)]" />
        {!isLast && (
          <div className="absolute left-1/2 top-5 h-[calc(100%+11rem)] w-px -translate-x-1/2 bg-gray-200" />
        )}
      </div>

      <article className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#1E88E5]/30 hover:shadow-md lg:p-6">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-[#1E88E5]">
              <Building2 className="h-4 w-4" />
              <span>{role}</span>
            </div>
            <h3 className="text-xl text-[#111827] lg:text-2xl">{company}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              {summary}
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <Calendar className="h-4 w-4 text-[#1E88E5]" />
            <span>{period}</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-[#1E88E5]/15 bg-[#E3F2FD]/40 p-4">
            <p className="mb-3 text-sm text-[#155A9F]">Recruiter evidence</p>
            <ul className="space-y-3">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-3 text-sm leading-6 text-gray-800"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1E88E5]" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-3 text-sm text-gray-500">Operational scope</p>
            <div className="flex flex-wrap gap-2">
              {scope.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Pyit Taing Htaung CCTV Co., Ltd",
      role: "System Administrator",
      period: "2022-2024",
      summary:
        "Owned day-to-day systems, network, remote support, and CCTV/ELV operations for a technical service environment.",
      achievements: [
        "Kept routers, switches, WiFi access points, and servers operating reliably for business users.",
        "Standardized Windows/Linux installation, troubleshooting, IT inventory, and SOP documentation.",
        "Supported CCTV/ELV deployments with remote access, storage planning, and field-ready support.",
      ],
      scope: ["Windows", "Linux", "Routers", "Switches", "WiFi", "CCTV/ELV", "RDP", "AnyDesk"],
    },
    {
      company: "GD Guardian Co., Ltd",
      role: "IT Consultant",
      period: "2020-2022",
      summary:
        "Designed and delivered infrastructure, server, LAN, WiFi, and CCTV solutions for client environments.",
      achievements: [
        "Planned practical infrastructure designs covering servers, network access, and security systems.",
        "Installed LAN networks, configured servers, deployed CCTV systems, and optimized WiFi coverage.",
        "Improved handoff quality through user training and clear technical documentation.",
      ],
      scope: ["LAN", "Servers", "WiFi", "CCTV", "Documentation", "Training"],
    },
    {
      company: "Southern Metal Industry Co., Ltd",
      role: "Junior IT Administrator",
      period: "2019-2020",
      summary:
        "Provided frontline IT administration support across devices, users, workspace tools, and basic server tasks.",
      achievements: [
        "Resolved hardware and software issues to reduce user downtime across daily operations.",
        "Managed Google Workspace users and supported account administration tasks.",
        "Prepared devices through OS installation, configuration, and maintenance support.",
      ],
      scope: ["Troubleshooting", "Google Workspace", "OS Install", "Devices", "User Support"],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <p className="mb-3 text-sm text-[#1E88E5]">Enterprise support history</p>
          <h2 className="mb-4 text-3xl text-[#111827] lg:text-4xl">
            Practical infrastructure experience recruiters can scan fast.
          </h2>
          <p className="text-gray-600">
            5+ years across IT support, system administration, networking,
            CCTV/ELV deployment, remote support, and documentation.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
