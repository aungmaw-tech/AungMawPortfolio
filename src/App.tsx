import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Courses } from "./components/Courses";
import { Certificates } from "./components/Certificates";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Courses />
        <Certificates />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}