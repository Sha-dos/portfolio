"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, Cpu, Database, Zap, Bot, Settings } from 'lucide-react';
import {ProjectsSection} from "@/components/projects";
import {AboutSection} from "@/components/about";

const Portfolio = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-teal-800/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <Bot className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Nolan Peterson
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-4 max-w-3xl mx-auto">
                Computer Systems Engineering Student at Arizona State University
              </p>
              {/*<p className="text-lg text-teal-200 mb-8 max-w-2xl mx-auto">*/}
              {/*  Robotics Software Developer | Systems Programming Enthusiast*/}
              {/*</p>*/}
              <div className="flex justify-center space-x-6">
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => window.open('https://github.com/Sha-dos', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => window.open('https://linkedin.com/in/nolandpeterson', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => window.open('mailto:Peterson.nolan@icloud.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Nolan Peterson. Built with Next.js, TypeScript, and shadcn/ui
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                  onClick={() => window.open('https://github.com/Sha-dos', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                  onClick={() => window.open('https://linkedin.com/in/nolandpeterson', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                  onClick={() => window.open('mailto:Peterson.nolan@icloud.com', '_blank')}
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
