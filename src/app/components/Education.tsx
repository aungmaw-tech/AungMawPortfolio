import React from "react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="resume" className="py-12 lg:py-20" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#1E88E5" }}>Background</p>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: "#e2e8f0" }}>Education</h2>
          <p className="max-w-2xl mx-auto px-4" style={{ color: "#64748b" }}>
            Academic foundation in computer science and information systems
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border rounded-xl p-6 lg:p-8" style={{ backgroundColor: "#16213e", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(30,136,229,0.15)" }}>
                <GraduationCap className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: "#1E88E5" }} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl lg:text-2xl" style={{ color: "#e2e8f0" }}>Bachelor of Computer Science (B.C.Sc.)</h3>
                  <span className="text-sm px-3 py-1 rounded-lg self-start whitespace-nowrap" style={{ backgroundColor: "rgba(30,136,229,0.12)", color: "#1E88E5" }}>
                    2012 – 2018
                  </span>
                </div>
                <p className="mb-4" style={{ color: "#94a3b8" }}>University of Computer Studies, Yangon (UCSY)</p>

                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5" style={{ color: "#1E88E5" }} />
                  <span style={{ color: "#94a3b8" }}>Distinctions:</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Information Assurance & Security", "Project-Based Supply Chain Management"].map((d) => (
                    <span key={d} className="px-4 py-2 rounded-lg text-sm" style={{ backgroundColor: "rgba(30,136,229,0.15)", color: "#1E88E5" }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
