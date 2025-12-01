import React from "react";
import { Linkedin, Github, Mail, MapPin, Heart, Phone, Book } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#F6F7F9] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-6">
          {/* Name and Title */}
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl text-[#1a1a1a] mb-1">Aung Maw</h3>
            <p className="text-gray-600">IT Support & System Administrator</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            <a
              href="https://www.linkedin.com/in/aung-maw-76b596174/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#1E88E5] hover:border-[#1E88E5] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/aungmaw-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#1E88E5] hover:border-[#1E88E5] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:am.aungmaw2022@gmail.com"
              className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#1E88E5] hover:border-[#1E88E5] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+66947030071"
              className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#1E88E5] hover:border-[#1E88E5] transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://aung-maw-tech.gitbook.io/aung-maw-tech-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#1E88E5] hover:border-[#1E88E5] transition-all duration-300"
              aria-label="GitBook"
            >
              <Book className="w-5 h-5" />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-[#1E88E5]" />
            <span>Bangkok, Thailand</span>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-200"></div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>© 2024 Aung Maw. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}