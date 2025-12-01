import React from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    // Small delay to allow mobile menu to close first
    setTimeout(() => {
      const element = document.getElementById(id);
      const header = document.querySelector('header');
      
      if (element && header) {
        const headerHeight = header.getBoundingClientRect().height;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight - 16; // 16px extra padding

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-4 lg:py-6 flex items-center justify-between">
        {/* Left: Name and Title */}
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-2xl text-[#1a1a1a] tracking-tight">Aung Maw</h1>
          <p className="text-xs lg:text-sm text-gray-600 mt-0.5">IT Support & System Administrator</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#1E88E5] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("certificates")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="px-4 py-4 space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("courses")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("certificates")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}