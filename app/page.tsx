"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Database, Zap, Bot, Settings } from 'lucide-react';
import {ProjectCard, projectsData} from "@/components/projects";

const skillsData = [
  {
    name: "Programming Languages",
    items: ["Rust", "C/C++", "TypeScript", "Python", "Java", "Swift"],
    icon: <Code className="w-5 h-5" />
  },
  {
    name: "Robotics & Control",
    items: ["FRC Programming", "PID Control", "Path Planning", "Computer Vision", "Sensors", "Motor Control"],
    icon: <Bot className="w-5 h-5" />
  },
  {
    name: "Systems & Hardware",
    items: ["Embedded Systems", "RoboRIO", "ARM Cortex", "Real-Time Systems", "CAN Bus", "IOS"],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    name: "Software Engineering",
    items: ["Git", "CI/CD", "React", "Node.js", "WebSockets", "System Design"],
    icon: <Settings className="w-5 h-5" />
  },
];

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
      <div className="flex justify-center mb-12">
        <div className="flex space-x-2 p-1 bg-white/10 rounded-lg backdrop-blur-sm">
          {categories.map((category) => (
              <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
              >
                {category}
              </Button>
          ))}
        </div>
      </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = selectedCategory === "All"
      ? projectsData
      : projectsData.filter(project => project.category === selectedCategory);

  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              From competitive robotics to systems programming, here are some projects that showcase my journey
            </p>
          </div>

          <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
  );
};

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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Bot className="w-6 h-6 mr-3 text-blue-400" />
                      From Robotics to Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="leading-relaxed">
                      My journey into computer systems engineering began with competitive robotics through FIRST Robotics Competition (FRC).
                      Working with teams to build and program robots in eight-week challenges taught me the importance of reliable,
                      real-time systems and efficient software design. This experience sparked my passion for systems-level programming
                      and led me to explore languages like Rust for their performance and safety guarantees.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Zap className="w-6 h-6 mr-3 text-teal-400" />
                      What Drives Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="leading-relaxed">
                      I'm passionate about building robust, performant systems that bridge the gap between software and hardware.
                      From programming robot control systems, developing embedded applications, or simulating a dice game,
                      I love solving complex problems where reliability and efficiency are required. My goal is to contribute to the next
                      generation of intelligent systems and autonomous technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Database className="w-6 h-6 mr-3 text-blue-400" />
                      Technical Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {skillsData.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-blue-300 font-semibold mb-3 flex items-center">
                            <span className="text-teal-400 mr-2">{category.icon}</span>
                            {category.name}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.items.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                                  {skill}
                                </Badge>
                            ))}
                          </div>
                        </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

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
