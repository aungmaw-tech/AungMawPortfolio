import React from "react";
import { Award, ExternalLink } from "lucide-react";

export function Certificates() {
  const certificates = [
    { 
      name: "Google Cloud Computing Foundations Certificate", 
      issuer: "Google Cloud",
      credlyUrl: "https://www.credly.com/earner/earned/badge/92c6b316-d148-4f25-8bd8-ddd2faec13ec"
    },
    { 
      name: "Google Cloud Cybersecurity Certificate", 
      issuer: "Google Cloud",
      credlyUrl: "https://www.credly.com/earner/earned/badge/2bc5161a-02a6-487f-8419-b3977896dba5"
    },
  ];

  return (
    <section id="certificates" className="bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Professional certifications demonstrating continuous learning and expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 hover:shadow-md hover:border-[#1E88E5]/30 transition-all duration-300 flex items-center gap-3 group"
              >
                <Award className="w-5 h-5 text-[#1E88E5] flex-shrink-0" />
                <div className="flex flex-col items-start flex-1">
                  <span className="text-gray-700">{cert.name}</span>
                  <span className="text-sm text-gray-500">{cert.issuer}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#1E88E5] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}