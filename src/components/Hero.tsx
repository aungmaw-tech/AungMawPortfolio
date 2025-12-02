import React from "react";
import { FileDown, FolderKanban } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight =
        header.getBoundingClientRect().height;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight - 16; // 16px extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight">
                Reliable IT Support & System Administration
              </h1>
              <p className="text-lg sm:text-xl text-[#1E88E5]">
                Networking • Windows/Linux • Google Cloud •
                CCTV/ELV Systems
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-xl">
              Hands-on experience in LAN/VLAN setups, system
              installation, technical troubleshooting, cloud
              basics, and CCTV deployment. Dedicated to
              delivering reliable IT solutions with a focus on
              efficiency and user satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 lg:pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1a9VVW9_fsJzX-q6Xmu4X9fUUpUYlBEvQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <Button className="w-full sm:w-auto bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-6 rounded-lg">
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white px-6 py-6 rounded-lg"
              >
                <FolderKanban className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Right: Professional Illustration */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-md">
              {/* Simple IT Illustration using SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="#E3F2FD"
                  opacity="0.5"
                />

                {/* Monitor/Screen */}
                <rect
                  x="100"
                  y="120"
                  width="200"
                  height="140"
                  rx="8"
                  fill="#1E88E5"
                />
                <rect
                  x="110"
                  y="130"
                  width="180"
                  height="110"
                  rx="4"
                  fill="#FFFFFF"
                />

                {/* Code Lines on Screen */}
                <rect
                  x="120"
                  y="145"
                  width="60"
                  height="6"
                  rx="3"
                  fill="#1E88E5"
                  opacity="0.6"
                />
                <rect
                  x="120"
                  y="160"
                  width="120"
                  height="6"
                  rx="3"
                  fill="#1E88E5"
                  opacity="0.4"
                />
                <rect
                  x="120"
                  y="175"
                  width="80"
                  height="6"
                  rx="3"
                  fill="#1E88E5"
                  opacity="0.6"
                />
                <rect
                  x="120"
                  y="190"
                  width="100"
                  height="6"
                  rx="3"
                  fill="#1E88E5"
                  opacity="0.4"
                />
                <rect
                  x="120"
                  y="205"
                  width="70"
                  height="6"
                  rx="3"
                  fill="#1E88E5"
                  opacity="0.6"
                />

                {/* Monitor Stand */}
                <rect
                  x="180"
                  y="260"
                  width="40"
                  height="8"
                  rx="4"
                  fill="#424242"
                />
                <rect
                  x="160"
                  y="268"
                  width="80"
                  height="4"
                  rx="2"
                  fill="#424242"
                />

                {/* Server Icon (Left) */}
                <g transform="translate(60, 280)">
                  <rect
                    width="60"
                    height="70"
                    rx="6"
                    fill="#F5F5F5"
                    stroke="#1E88E5"
                    strokeWidth="2"
                  />
                  <circle
                    cx="15"
                    cy="15"
                    r="4"
                    fill="#4CAF50"
                  />
                  <circle
                    cx="30"
                    cy="15"
                    r="4"
                    fill="#4CAF50"
                  />
                  <rect
                    x="10"
                    y="25"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#E0E0E0"
                  />
                  <rect
                    x="10"
                    y="35"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#E0E0E0"
                  />
                  <rect
                    x="10"
                    y="45"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#E0E0E0"
                  />
                </g>

                {/* Cloud Icon (Right) */}
                <g transform="translate(280, 290)">
                  <ellipse
                    cx="30"
                    cy="25"
                    rx="25"
                    ry="18"
                    fill="#1E88E5"
                    opacity="0.3"
                  />
                  <ellipse
                    cx="20"
                    cy="30"
                    rx="20"
                    ry="15"
                    fill="#1E88E5"
                    opacity="0.4"
                  />
                  <ellipse
                    cx="40"
                    cy="30"
                    rx="20"
                    ry="15"
                    fill="#1E88E5"
                    opacity="0.4"
                  />
                </g>

                {/* Network Connection Lines */}
                <line
                  x1="120"
                  y1="310"
                  x2="150"
                  y2="200"
                  stroke="#1E88E5"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <line
                  x1="310"
                  y1="310"
                  x2="260"
                  y2="200"
                  stroke="#1E88E5"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}