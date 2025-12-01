import React from "react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="resume" className="bg-gray-50 py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Academic foundation in computer science and information systems
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-[#E3F2FD] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 lg:w-8 lg:h-8 text-[#1E88E5]" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl text-[#1a1a1a] mb-2">Bachelor of Computer Science</h3>
                <p className="text-gray-700 mb-4">University of Computer Studies Yangon</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#1E88E5]" />
                  <span className="text-gray-700">Distinctions:</span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#E3F2FD] text-[#1E88E5] px-4 py-2 rounded-lg text-sm">
                    Information Assurance & Security
                  </span>
                  <span className="bg-[#E3F2FD] text-[#1E88E5] px-4 py-2 rounded-lg text-sm">
                    Project-Based SCM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}