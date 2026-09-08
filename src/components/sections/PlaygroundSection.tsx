"use client";

import React, { useRef, useEffect, useState } from "react";
import { Terminal, Volume2, Sparkles, Sliders } from "lucide-react";

export const PlaygroundSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [soundActive, setSoundActive] = useState(false);
  const [particleSpeed, setParticleSpeed] = useState(1);

  // Canvas Vector Physics Experiment Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 320;
    };
    window.addEventListener("resize", handleResize);

    // Generate grid of spring particles
    const cols = 16;
    const rows = 8;
    const particles: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];

    const spacingX = width / (cols + 1);
    const spacingY = height / (rows + 1);

    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= cols; c++) {
        const x = c * spacingX;
        const y = r * spacingY;
        particles.push({ x, y, originX: x, originY: y, vx: 0, vy: 0 });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = "rgba(127, 0, 224, 0.25)";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse force
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 90;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 5 * particleSpeed;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force;
          p.vy -= Math.sin(angle) * force;
        }

        // Return to origin spring force
        const springDx = p.originX - p.x;
        const springDy = p.originY - p.y;
        p.vx += springDx * 0.05;
        p.vy += springDy * 0.05;

        // Friction damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Render particle dot
        ctx.fillStyle = "var(--theme-line)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p2.x - p.x;
          const pdy = p2.y - p.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pdist < spacingX * 1.4) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [particleSpeed]);

  // WebAudio API Sound FX Synth Trigger
  const playRetroBleep = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.15);
      setSoundActive(true);
      setTimeout(() => setSoundActive(false), 300);
    } catch (err) {
      console.log("Audio not allowed yet");
    }
  };

  return (
    <section id="playground" className="py-20 px-6 md:px-12 bg-theme-bg relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-theme-line pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-subtext mb-2">
              <Terminal className="w-4 h-4 text-theme-line" />
              <span>Interactive Experiments</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-theme-text">
              Canvas Playground
            </h2>
          </div>
          <p className="text-sm text-theme-subtext max-w-md">
            Interactive web toys and vector math sketches. Hover your cursor over the lattice below to distort particle spring physics.
          </p>
        </div>

        {/* Main Canvas Widget Container */}
        <div className="bg-theme-card border-2 border-theme-line rounded-2xl p-6 shadow-neo-lg space-y-6">
          
          {/* Canvas Top Bar Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-theme-line/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 border border-theme-line" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 border border-theme-line" />
                <span className="w-3 h-3 rounded-full bg-green-400 border border-theme-line" />
              </div>
              <span className="text-xs font-mono font-bold text-theme-text">
                spring_mesh_vector.canvas
              </span>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-theme-bg px-3 py-1.5 rounded-lg border border-theme-line/40 text-xs font-mono">
                <Sliders className="w-3.5 h-3.5 text-theme-line" />
                <span>Force:</span>
                <button
                  onClick={() => setParticleSpeed(s => (s === 1 ? 2.5 : 1))}
                  className="font-bold text-theme-line underline"
                >
                  {particleSpeed === 1 ? "Normal" : "High Turbo"}
                </button>
              </div>

              <button
                onClick={playRetroBleep}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono border-2 border-theme-line shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2 ${
                  soundActive ? "bg-theme-accent text-white" : "bg-theme-fill text-theme-text"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Test WebAudio Synth</span>
              </button>
            </div>
          </div>

          {/* Interactive Canvas Canvas Element */}
          <div className="relative w-full rounded-xl overflow-hidden bg-theme-bg border-2 border-theme-line cursor-crosshair">
            <canvas ref={canvasRef} className="w-full h-80 block" />
            <div className="absolute bottom-3 right-4 text-[10px] font-mono text-theme-subtext bg-theme-card/80 px-2 py-1 rounded border border-theme-line/20">
              Move cursor across canvas to apply spring displacement
            </div>
          </div>

          {/* Experiment Specs Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-theme-subtext">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-theme-line" />
              <span>Canvas 2D Context + Spring Physics</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-theme-line" />
              <span>60 FPS RequestAnimationFrame</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-theme-line" />
              <span>Zero external canvas dependencies</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
