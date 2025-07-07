import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";
import React from "react";

export const projectsData = [
    {
        title: "FRCRS - Rust FRC Framework",
        description: "A Rust framework for FIRST Robotics Competition robot programming, providing safe and performant abstractions over WPILib for real-time robot control.",
        technologies: ["Rust", "WPILib", "RoboRIO", "CAN Bus", "Real-Time Systems", "FFI", "Java", "C/C++"],
        status: "Completed",
        link: "https://github.com/Team-2502/frcrs",
        category: "Robotics"
    },
    {
        title: "RobotCode2025 - FRC Competition Robot",
        description: "Complete robot code for the 2025 FRC season built with Rust, featuring autonomous routines, teleop control, and subsystem management. Not to mention the only robot code for 2025 written in Rust.",
        technologies: ["Rust", "FRCRS", "Autonomous Programming", "PID Control", "State Machines"],
        status: "Completed",
        link: "https://github.com/Team-2502/RobotCode2025",
        category: "Robotics"
    },
    {
        title: "trajectory-rs - Path Planning Library",
        description: "A Rust library for decoding Choreo trajectory files and providing path planning capabilities for FRC robots.",
        technologies: ["Rust", "Path Planning", "Spline Generation", "Motion Profiling", "Mathematics"],
        status: "Completed",
        link: "https://github.com/Sha-dos/trajectory-rs",
        category: "Robotics"
    },
    {
        title: "LCR - Left Center Right Simulation",
        description: "A C++ simulation of the Left Center Right dice game, demonstrating object-oriented programming principles and game state management with statistical features.",
        technologies: ["C++", "Object-Oriented Programming", "Game Simulation", "Statistical Analysis"],
        status: "Completed",
        link: "https://github.com/Sha-dos/lcr",
        category: "Software"
    },
    {
        title: "Scouting 2024 - FRC Scouting App",
        description: "A web-based scouting application for FRC teams, built with NextJS and TypeScript, providing data collection and analysis during competitions.",
        technologies: ["NextJS", "TypeScript", "Web Development", "Firebase"],
        status: "Completed",
        link: "https://github.com/Sha-dos/scouting2024",
        category: "Web"
    }
];

export const ProjectCard = ({ project }) => {
    return (
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group flex flex-col h-full">
            <CardHeader className="flex-1">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center mb-2">
                            <Badge variant="outline" className="border-teal-500/30 text-teal-200 text-xs">
                                {project.category}
                            </Badge>
                        </div>
                        <CardTitle className="text-white group-hover:text-blue-300 transition-colors text-lg">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-2 text-sm">
                            {project.description}
                        </CardDescription>
                    </div>
                    <Badge
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className={project.status === 'Completed'
                            ? 'bg-green-500/20 text-green-300 border-green-500/30 text-xs'
                            : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs'
                        }
                    >
                        {project.status}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-blue-500/30 text-blue-200 text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 group"
                    onClick={() => window.open(project.link, '_blank')}
                >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardContent>
        </Card>
    );
};
