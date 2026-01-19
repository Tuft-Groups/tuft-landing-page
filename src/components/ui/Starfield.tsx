"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    opacity: number;
    speed: number;
    driftAngle: number;
    driftSpeed: number;
    parallaxFactor: number;
}

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        // Configuration
        const starCount = 400;

        const initStars = (width: number, height: number) => {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                const depth = Math.random(); // 0 (far) to 1 (close)
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseX: Math.random() * width,
                    baseY: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.1,
                    speed: 0.05 * (0.5 + depth),
                    driftAngle: Math.random() * Math.PI * 2,
                    driftSpeed: (Math.random() - 0.5) * 0.002,
                    parallaxFactor: 0.2 + depth * 0.3 // Moves at 20-50% of scroll speed
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars(canvas.width, canvas.height);
        };

        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resize);
        resize();

        const render = () => {
            if (!ctx || !canvas) return;

            const scrollY = window.scrollY;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw calm cursor glow
            // "Light around the dot"
            if (mouse.x > 0) {
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
                gradient.addColorStop(0, "rgba(255, 255, 255, 0.08)"); // Soft center
                gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.03)"); // Feathered edge
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI * 2);
                ctx.fill();
            }

            stars.forEach((star) => {
                // Curved drift logic
                star.driftAngle += star.driftSpeed;
                star.baseX += Math.cos(star.driftAngle) * star.speed;
                star.baseY += Math.sin(star.driftAngle) * star.speed;

                // Calculate final position with wrapping
                let effectiveX = (star.baseX % canvas.width);
                if (effectiveX < 0) effectiveX += canvas.width;

                let effectiveY = (star.baseY - scrollY * star.parallaxFactor);
                // Wrap around vertically
                effectiveY = (effectiveY % canvas.height + canvas.height) % canvas.height;

                // Interaction Logic
                const dx = mouse.x - effectiveX;
                const dy = mouse.y - effectiveY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 200;

                let currentOpacity = star.opacity;
                let currentSize = star.size;

                if (dist < interactionRadius) {
                    const highlight = 1 - (dist / interactionRadius);
                    currentOpacity += highlight * 0.8; // Boost opacity up to +0.8
                    currentSize += highlight * 0.5; // Slight size boost
                }

                // Draw star
                ctx.beginPath();
                ctx.arc(effectiveX, effectiveY, currentSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(currentOpacity, 1)})`;

                if (currentSize > 1.5 || dist < interactionRadius) {
                    ctx.shadowBlur = dist < interactionRadius ? 8 : 4;
                    ctx.shadowColor = `rgba(255, 255, 255, ${Math.min(currentOpacity * 0.8, 0.8)})`;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block opacity-60"
            />
        </div>
    );
}
