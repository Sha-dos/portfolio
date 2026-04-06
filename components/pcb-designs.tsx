import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PcbDesign {
    title: string;
    description: string;
    tools: string[];
    image: string;
}

const pcbData: PcbDesign[] = [
    {
        title: "FSAE Telemetry",
        description: "Custom telemetry board designed for Formula SAE, with an ESP32 microcontroller and CAN bus to stream live telemetry.",
        tools: ["KiCad", "ESP32", "CAN Bus"],
        image: "/pcb/telemetry.png",
    }
];

export const PcbDesignsSection = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">PCB Designs</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                        Custom hardware designed for embedded motorsports applications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {pcbData.map((design, i) => (
                        <Card key={i} className="bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                            <div className="overflow-hidden aspect-video bg-transparent">
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-full object-cover bg-transparent"
                                    style={{ backgroundColor: 'transparent' }}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-foreground text-lg">{design.title}</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm">{design.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex flex-wrap gap-1">
                                    {design.tools.map((tool, j) => (
                                        <Badge key={j} variant="outline" className="border-border text-muted-foreground text-xs">
                                            {tool}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
