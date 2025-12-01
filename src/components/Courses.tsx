import React from "react";
import { BookOpen, Calendar } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Google Cloud Computing Foundations",
      provider: "Google Cloud",
      date: "2025",
      description: "Comprehensive introduction to cloud computing concepts, infrastructure, and services"
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      provider: "Google Cloud",
      date: "2025",
      description: "In-depth training on security fundamentals, network security, and incident response"
    },
    {
      title: "MCSA 2016",
      provider: "Microsoft",
      date: "2019",
      description: "Microsoft Certified Solutions Associate - Windows Server 2016 administration and infrastructure"
    },
    {
      title: "AWS Solution Architect",
      provider: "Amazon Web Services",
      date: "2020",
      description: "Designing and deploying scalable, highly available systems on AWS"
    }
  ];

  return (
    <section id="courses" className="py-12 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-4">Courses</h2>
          <p className="text-gray-600 max-w-2xl px-4 sm:px-0">
            Continuous learning through structured courses and professional training programs
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#1E88E5]/10 rounded-lg flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl text-[#1a1a1a] mb-2">{course.title}</h3>
                  <p className="text-gray-600 font-[Inter]">{course.provider}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
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