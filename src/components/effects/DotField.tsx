"use client";

import { memo, useEffect, useRef } from "react";

type Dot = {
  anchorX: number;
  anchorY: number;
  x: number;
  y: number;
};

type DotFieldProps = {
  className?: string;
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  bulgeStrength?: number;
  gradientFrom?: string;
  gradientTo?: string;
};

export const DotField = memo(function DotField({
  className = "",
  dotRadius = 1.15,
  dotSpacing = 20,
  cursorRadius = 220,
  bulgeStrength = 20,
  gradientFrom = "rgba(199,255,61,.24)",
  gradientTo = "rgba(242,245,239,.06)",
}: DotFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let frameId = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const buildDots = () => {
      const step = dotRadius * 2 + dotSpacing;
      const columns = Math.ceil(width / step);
      const rows = Math.ceil(height / step);
      dots = [];
      for (let row = 0; row <= rows; row += 1) {
        for (let column = 0; column <= columns; column += 1) {
          const anchorX = column * step;
          const anchorY = row * step;
          dots.push({ anchorX, anchorY, x: anchorX, y: anchorY });
        }
      }
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const maxDpr = window.innerWidth < 760 ? 1 : 1.25;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
    };

    const draw = () => {
      if (visible) {
        context.clearRect(0, 0, width, height);
        const gradient = context.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, gradientFrom);
        gradient.addColorStop(1, gradientTo);
        context.fillStyle = gradient;
        context.beginPath();

        for (const dot of dots) {
          if (!reducedMotion && pointer.active) {
            const deltaX = pointer.x - dot.anchorX;
            const deltaY = pointer.y - dot.anchorY;
            const distance = Math.hypot(deltaX, deltaY);
            if (distance < cursorRadius) {
              const strength = (1 - distance / cursorRadius) ** 2 * bulgeStrength;
              const angle = Math.atan2(deltaY, deltaX);
              const targetX = dot.anchorX - Math.cos(angle) * strength;
              const targetY = dot.anchorY - Math.sin(angle) * strength;
              dot.x += (targetX - dot.x) * 0.12;
              dot.y += (targetY - dot.y) * 0.12;
            } else {
              dot.x += (dot.anchorX - dot.x) * 0.1;
              dot.y += (dot.anchorY - dot.y) * 0.1;
            }
          }

          context.moveTo(dot.x + dotRadius, dot.y);
          context.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        }
        context.fill();
      }
      if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
    }, { threshold: 0.01 });
    const onVisibility = () => {
      visible = !document.hidden;
    };

    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    draw();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [bulgeStrength, cursorRadius, dotRadius, dotSpacing, gradientFrom, gradientTo]);

  return (
    <div ref={hostRef} className={`dot-field ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
});
