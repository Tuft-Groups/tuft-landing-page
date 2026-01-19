"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Paintbrush, GraduationCap, Users, Building2, CheckCircle2 } from "lucide-react";
import { SectionStarfield } from "@/components/ui/SectionStarfield";

interface LeaderCardProps {
    title: string;
    subtitle: string;
    valueStatement: string;
    examples: string[];
    icon: LucideIcon;
    direction: "left" | "right";
    delay?: number;
}

const LeaderCard = ({ title, subtitle, valueStatement, examples, icon: Icon, direction, delay = 0 }: LeaderCardProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: direction === "left" ? -50 : 50,
                filter: "blur(4px)" // Reduced initial blur for performance
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)"
            }}
            viewport={{ once: false, margin: "-50px" }} // Adjusted margin for better mobile trigger
            transition={{
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98], // "Out back" feel or smooth exponential
                delay
            }}
            className="group relative flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500 overflow-hidden shadow-lg shadow-black/20"
        >
            {/* Subtle Gradient Blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

            <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                        <Icon className="w-6 h-6 text-blue-200" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                        {subtitle}
                    </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-lg text-blue-100/80 mb-8 leading-relaxed font-light">
                    {valueStatement}
                </p>

                <div className="space-y-3 mt-auto border-t border-white/10 pt-6">
                    <p className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Ideally used for</p>
                    {examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-400/80 flex-shrink-0" />
                            <span>{example}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const BuiltForLeaders = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505]">
            {/* Background Ambience */}
            <SectionStarfield starCount={150} />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent opacity-50" />
            </div>

            <div className="relative container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">Every Leader</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60"
                    >
                        One powerful platform. Endless possibilities for how you lead.
                    </motion.p>
                </div>

                <div className="space-y-24">
                    {/* First Row */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <LeaderCard
                            direction="left"
                            icon={Paintbrush}
                            title="Creators"
                            subtitle="The Visionaries"
                            valueStatement="Turn your engaged audience into a thriving, sustainable membership business."
                            examples={["Exclusive content feeds", "Subscriber-only chat", "Digital product drops"]}
                        />
                        <LeaderCard
                            direction="right"
                            icon={GraduationCap}
                            title="Educators"
                            subtitle="The Mentors"
                            valueStatement="Extend the classroom with a structured space for learning and discussion."
                            examples={["Course material libraries", "Cohort-based discussions", "Assignment tracking"]}
                        />
                    </div>

                    {/* Second Row */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <LeaderCard
                            direction="left"
                            icon={Users}
                            title="Community Leaders"
                            subtitle="The Connectors"
                            valueStatement="Bring people together with purpose, away from the noise of social media."
                            examples={["Interest-based groups", "Local event planning", "Member directories"]}
                        />
                        <LeaderCard
                            direction="right"
                            icon={Building2}
                            title="Institutions & Teams"
                            subtitle="The Builders"
                            valueStatement="Streamline communication and resources for your entire organization."
                            examples={["Internal updates feed", "Team resource hubs", "Secure messaging"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
