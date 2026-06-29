import React from "react";
import { BookOpen, Calendar } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Google Cloud Cyber Security Certificate",
      provider: "Google Cloud",
      date: "2024 – 2025",
      description: "In-depth training on security fundamentals, network security, threat detection, and incident response.",
    },
    {
      title: "AWS Solutions Architect Associate — Training",
      provider: "Myanmar Business and Technology College",
      date: "2020",
      description: "Designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
    },
    {
      title: "Professional Certificate in Linux (Red Hat)",
      provider: "India-Myanmar Centre for Enhancement of IT Skills",
      date: "2020",
      description: "Linux system administration, shell scripting, and Red Hat Enterprise Linux fundamentals.",
    },
    {
      title: "Microsoft Windows Server 2016 (MCSA)",
      provider: "Myanmar Business and Technology College",
      date: "2019",
      description: "Windows Server administration, Active Directory, DNS/DHCP, Group Policy, and infrastructure management.",
    },
  ];

  return (
    <section id="courses" className="py-12 lg:py-24" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mb-12 lg:mb-16">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#1E88E5" }}>Learning</p>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: "#e2e8f0" }}>Courses & Training</h2>
          <p className="max-w-2xl" style={{ color: "#64748b" }}>
            Continuous learning through structured courses and professional training programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "#16213e", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: "rgba(30,136,229,0.15)" }}>
                  <BookOpen className="w-6 h-6" style={{ color: "#1E88E5" }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl mb-1" style={{ color: "#e2e8f0" }}>{course.title}</h3>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>{course.provider}</p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed" style={{ color: "#64748b" }}>{course.description}</p>

              <div className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
                <Calendar className="w-4 h-4" />
                <span>{course.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
