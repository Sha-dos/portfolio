import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Bot, Code, Cpu, Database, Settings, Zap} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import React from "react";
import {Skill} from "@/lib/types";

const skillsData: Skill[] = [
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

export const AboutSection = () => {
    return (
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
                                    My journey into computer systems engineering began with robotics in elementary school, building my way up to the high school league FIRST Robotics Competition (FRC) where I served as the programming lead.
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
    )
}
