"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Bot, Moon, Sun } from 'lucide-react';
import {ProjectsSection} from "@/components/projects";
import {AboutSection} from "@/components/about";
import { useTheme } from "@/components/theme-provider";
import {Separator} from "@/components/ui/separator";

const Portfolio = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
      <div className="min-h-screen bg-background">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full bg-card border-b border-border z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6 text-foreground" />
                <span className="text-xl font-bold text-foreground">Nolan Peterson</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <button
                    onClick={() => scrollToSection('about')}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  About
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  Projects
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="text-muted-foreground hover:text-foreground"
                >
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => window.open('https://github.com/Sha-dos', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => window.open('https://linkedin.com/in/nolandpeterson', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open('mailto:peterson.nolan@icloud.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Top Section */}
        <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Bot className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Nolan Peterson
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Computer Systems Engineering Student at Arizona State University
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building robust systems from robotics to software. Passionate about performance, reliability, and elegant solutions.
              </p>
            </div>
          </div>
        </header>

        <Separator />

        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        <Separator />

        {/* Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              © 2026 Nolan Peterson. Built with Next.js, TypeScript, and shadcn/ui
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => window.open('https://github.com/Sha-dos', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => window.open('https://linkedin.com/in/nolandpeterson', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => window.open('mailto:peterson.nolan@icloud.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Portfolio;
