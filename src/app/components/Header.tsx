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
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#1a1a2e", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-4 lg:py-6 flex items-center justify-between">
        {/* Left: Name and Title */}
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-2xl tracking-tight" style={{ color: "#ffffff" }}>Aung Maw</h1>
          <p className="text-xs lg:text-sm mt-0.5" style={{ color: "#94a3b8" }}>IT Support &amp; System Administrator</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 transition-colors" style={{ color: "#94a3b8" }}
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
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("courses")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("certificates")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="transition-colors" style={{ color: "#94a3b8" }} onMouseEnter={e => (e.currentTarget.style.color='#1E88E5')} onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#1a1a2e" }}>
          <ul className="px-4 py-4 space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("courses")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("certificates")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 rounded-lg transition-colors" style={{ color: "#94a3b8" }}
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