"use client";

import { useEffect, useRef } from "react";

type NodePoint = { x: number; y: number; vx: number; vy: number; r: number };

export function SystemField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: NodePoint[] = [];

    const reset = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 700 ? 28 : 58;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 1.7 + 0.7
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(66, 211, 255, 0.6)";
      ctx.strokeStyle = "rgba(82, 113, 255, 0.13)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        if (!reduceMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 145) {
            ctx.globalAlpha = 1 - distance / 145;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    reset();
    draw();
    window.addEventListener("resize", reset);
    return () => {
      window.removeEventListener("resize", reset);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="system-field" aria-hidden="true" />;
}
