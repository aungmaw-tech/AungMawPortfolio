import image_me_3 from '../../imports/me-3.jpeg'
import image_me_2 from '../../imports/me-2.jpeg'
import React from "react";
import { FileDown, Mail, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector("header");
    if (element && header) {
      const headerHeight = header.getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden" style={{ backgroundColor: "#1a1a2e" }}>
      {/* Background subtle grid pattern */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10">
              <span className="w-2 h-2 rounded-full bg-[#1E88E5] animate-pulse" />
              <span className="text-[#1E88E5] text-sm tracking-widest uppercase">Available for work</span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]"
                style={{ color: "#ffffff" }}
              >
                Aung
                <br />
                <span style={{ color: "#1E88E5" }}>Maw</span>
              </h1>
              <p className="text-xl sm:text-2xl" style={{ color: "#94a3b8" }}>
                IT Support Engineer &amp; Systems Administrator
              </p>
            </div>

            {/* Specialities row */}
            <div className="flex flex-wrap gap-2">
              {["Windows Server / AD", "Networking & Wireless", "CCTV / Surveillance", "Google Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-sm border"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "#cbd5e1", backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="leading-relaxed max-w-lg" style={{ color: "#94a3b8" }}>
              5+ years delivering end-to-end IT solutions for SMBs — from Windows Server &amp; Active
              Directory administration and enterprise wireless networking (Ruijie, Ubiquiti) to
              CCTV/access control integration and Google Cloud fundamentals. Known for designing
              infrastructure that fits the client&apos;s actual needs and budget.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1a9VVW9_fsJzX-q6Xmu4X9fUUpUYlBEvQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#1E88E5" }}
                >
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </button>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-200 hover:border-[#1E88E5] hover:text-[#1E88E5]"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#e2e8f0", backgroundColor: "transparent" }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {[
                { value: "5+", label: "Years Experience" },
                { value: "3", label: "Companies" },
                { value: "4+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl" style={{ color: "#1E88E5" }}>{stat.value}</p>
                  <p className="text-xs tracking-wide uppercase" style={{ color: "#64748b" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              {/* Decorative background circle */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: "#1E88E5", transform: "scale(1.2)" }}
              />

              {/* Decorative accent shapes */}
              <div
                className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl rotate-12 opacity-80"
                style={{ backgroundColor: "#1E88E5" }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl -rotate-12 opacity-60"
                style={{ backgroundColor: "#0d47a1" }}
              />
              <div
                className="absolute top-1/2 -right-8 w-8 h-8 rounded-full opacity-50"
                style={{ backgroundColor: "#42a5f5" }}
              />
              <div
                className="absolute top-1/4 -left-6 w-6 h-6 rounded-full opacity-40"
                style={{ backgroundColor: "#90caf9" }}
              />

              {/* Photo frame */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
                style={{ border: "6px solid #1E88E5", boxShadow: "0 0 0 4px rgba(30,136,229,0.2), 0 0 80px rgba(30,136,229,0.5), 0 0 120px rgba(30,136,229,0.2)" }}
              >
                <ImageWithFallback
                  src={image_me_3}
                  alt="Aung Maw — IT Support & System Administrator"
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20"
                  style={{ background: "linear-gradient(to top, rgba(26,26,46,0.6), transparent)" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
