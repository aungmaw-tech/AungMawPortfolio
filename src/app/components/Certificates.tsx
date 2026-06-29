import React from "react";
import { Award, ExternalLink } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      name: "Google Cloud Cyber Security Certificate",
      issuer: "Google Cloud",
      year: "2024 – 2025",
      credlyUrl: "https://www.credly.com/earner/earned/badge/2bc5161a-02a6-487f-8419-b3977896dba5",
    },
    {
      name: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      year: "2024",
      credlyUrl: "https://www.credly.com/earner/earned/badge/92c6b316-d148-4f25-8bd8-ddd2faec13ec",
    },
    {
      name: "AWS Solutions Architect Associate — Training",
      issuer: "Myanmar Business and Technology College",
      year: "2020",
      credlyUrl: null,
    },
    {
      name: "Professional Certificate in Linux (Red Hat)",
      issuer: "India-Myanmar Centre for Enhancement of IT Skills",
      year: "2020",
      credlyUrl: null,
    },
    {
      name: "Microsoft Windows Server 2016 (MCSA)",
      issuer: "Myanmar Business and Technology College",
      year: "2019",
      credlyUrl: null,
    },
  ];

  return (
    <section id="certificates" className="py-12 lg:py-20" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#1E88E5" }}>Credentials</p>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: "#e2e8f0" }}>Certifications</h2>
          <p className="max-w-2xl mx-auto px-4" style={{ color: "#64748b" }}>
            Professional certifications demonstrating continuous learning and expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {certificates.map((cert, index) => {
            const inner = (
              <>
                <Award className="w-5 h-5 flex-shrink-0" style={{ color: "#1E88E5" }} />
                <div className="flex flex-col flex-1">
                  <span style={{ color: "#e2e8f0" }}>{cert.name}</span>
                  <span className="text-sm" style={{ color: "#64748b" }}>{cert.issuer}</span>
                </div>
                <span className="text-sm px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(30,136,229,0.12)", color: "#1E88E5" }}>{cert.year}</span>
                {cert.credlyUrl && <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: "#475569" }} />}
              </>
            );

            const sharedStyle = { backgroundColor: "#16213e", borderColor: "rgba(255,255,255,0.08)" };

            return cert.credlyUrl ? (
              <a
                key={index}
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-xl px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:shadow-lg"
                style={sharedStyle}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(30,136,229,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {inner}
              </a>
            ) : (
              <div key={index} className="border rounded-xl px-6 py-4 flex items-center gap-3" style={sharedStyle}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
