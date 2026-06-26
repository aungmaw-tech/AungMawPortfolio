import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileDown,
  FolderKanban,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight = header.getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const proofPoints = [
    "5+ years supporting business-critical IT operations",
    "Windows, Linux, networking, CCTV/ELV, and cloud fundamentals",
    "Bangkok-based and ready for enterprise support environments",
  ];

  const capabilityCards = [
    {
      icon: <Server className="h-5 w-5" />,
      label: "Systems",
      detail: "Windows / Linux setup, maintenance, and support",
    },
    {
      icon: <Network className="h-5 w-5" />,
      label: "Networks",
      detail: "LAN, VLAN, WiFi, DHCP, DNS, and troubleshooting",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      label: "Infrastructure",
      detail: "CCTV/ELV deployment, remote support, and documentation",
    },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/20 bg-[#E3F2FD]/60 px-4 py-2 text-sm text-[#1565C0]">
              <span className="h-2 w-2 rounded-full bg-[#1E88E5]" />
              IT Support - System Administrator - Infrastructure Engineer
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                Enterprise-ready IT support for stable infrastructure.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
                I help teams keep networks, systems, cloud basics, and
                security infrastructure dependable, documented, and easy to
                support.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1E88E5]" />
                  <span className="leading-6">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1a9VVW9_fsJzX-q6Xmu4X9fUUpUYlBEvQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="h-12 w-full rounded-lg bg-[#1E88E5] px-6 text-white shadow-sm transition-all duration-200 hover:bg-[#1976D2] hover:shadow-md sm:w-auto">
                  <FileDown className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="h-12 rounded-lg border-gray-300 px-6 text-gray-800 transition-all duration-200 hover:border-[#1E88E5] hover:bg-[#E3F2FD]/70 hover:text-[#1565C0]"
              >
                <FolderKanban className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[#E3F2FD] via-white to-gray-100"
              aria-hidden="true"
            />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm text-gray-500">Operational focus</p>
                  <h2 className="text-xl text-[#111827]">
                    Infrastructure support profile
                  </h2>
                </div>
                <div className="rounded-full bg-[#E3F2FD] p-3 text-[#1E88E5]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-3">
                {capabilityCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-200 hover:border-[#1E88E5]/40 hover:bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-white p-2 text-[#1E88E5] shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-[#111827]">{item.label}</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[#1E88E5]/20 bg-[#E3F2FD]/50 p-4">
                <p className="text-sm leading-6 text-[#155A9F]">
                  Built for recruiter scanning: role fit, technical evidence,
                  and resume access are visible in the first view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
