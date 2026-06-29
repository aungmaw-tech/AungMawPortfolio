import React from "react";
import { Linkedin, Github, Mail, MapPin, Heart, Phone, Book } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t" style={{ backgroundColor: "#16213e", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-6">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl mb-1" style={{ color: "#e2e8f0" }}>Aung Maw</h3>
            <p style={{ color: "#64748b" }}>IT Support &amp; System Administrator</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {[
              { href: "https://www.linkedin.com/in/michael-maw-76b596174/", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
              { href: "https://github.com/aungmaw-tech", label: "GitHub", icon: <Github className="w-5 h-5" /> },
              { href: "mailto:am.aungmaw2022@gmail.com", label: "Email", icon: <Mail className="w-5 h-5" /> },
              { href: "tel:+66947030071", label: "Phone", icon: <Phone className="w-5 h-5" /> },
              { href: "https://aung-maw-tech.gitbook.io/aung-maw-tech-docs/", label: "GitBook", icon: <Book className="w-5 h-5" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "#64748b" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1E88E5"; e.currentTarget.style.color = "#1E88E5"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#64748b"; }}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2" style={{ color: "#64748b" }}>
            <MapPin className="w-5 h-5" style={{ color: "#1E88E5" }} />
            <span>Bangkok, Thailand</span>
          </div>

          <div className="w-full max-w-md h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

          <div className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
            <span>© 2024 Aung Maw. Built with</span>
            <Heart className="w-4 h-4 fill-current" style={{ color: "#ef4444" }} />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
