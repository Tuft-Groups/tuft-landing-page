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
}

interface SectionStarfieldProps {
    starCount?: number;
    className?: string;
    speedFactor?: number;
    backgroundColor?: string;
}

export function SectionStarfield({
    starCount = 150,
    className = "",
    speedFactor = 0.05,
}: SectionStarfieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const initStars = (width: number, height: number) => {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseX: Math.random() * width,
                    baseY: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.1,
                    speed: speedFactor * (0.5 + Math.random()),
                    driftAngle: Math.random() * Math.PI * 2,
                    driftSpeed: (Math.random() - 0.5) * 0.002,
                });
            }
        };

        const resize = () => {
            const { width, height } = container.getBoundingClientRect();
            // Handle high DPI
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            initStars(width, height);
        };

        // Initial resize
        resize();

        // Observer for container resize
        const resizeObserver = new ResizeObserver(() => resize());
        resizeObserver.observe(container);

        const render = () => {
            if (!ctx || !canvas) return;

            // Get container position for parallax-like accumulation or just rely on natural scroll
            // Since this component is absolute inside the container, it scrolls naturally with the container.
            // We only need internal drift here.
            // If we want additional parallax (stars moving slower than container), we'd need rect logic.
            // For now, let's stick to simple drift to be safe and "calm".

            // Clear
            const width = parseFloat(canvas.style.width);
            const height = parseFloat(canvas.style.height);
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                // Drift
                star.driftAngle += star.driftSpeed;
                star.x += Math.cos(star.driftAngle) * star.speed;
                star.y += Math.sin(star.driftAngle) * star.speed;

                // Wrap
                if (star.x < 0) star.x += width;
                if (star.x > width) star.x -= width;
                if (star.y < 0) star.y += height;
                if (star.y > height) star.y -= height;

                // Draw
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [starCount, speedFactor]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full opacity-60"
            />
        </div>
    );
}
