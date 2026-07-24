"use client";

import { useEffect, useRef } from "react";

type LightRaysProps = {
  className?: string;
  followMouse?: boolean;
  mouseInfluence?: number;
};

export function LightRays({
  className = "",
  followMouse = true,
  mouseInfluence = 0.1,
}: LightRaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !followMouse || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let visible = true;
    const pointer = { x: 0.5, y: 0 };
    const smooth = { x: 0.5, y: 0 };

    const render = () => {
      if (visible) {
        smooth.x += (pointer.x - smooth.x) * 0.06;
        smooth.y += (pointer.y - smooth.y) * 0.06;
        container.style.setProperty("--ray-x", `${smooth.x * 100}%`);
        container.style.setProperty("--ray-y", `${smooth.y * 100}%`);
        container.style.setProperty("--ray-rotate", `${(smooth.x - 0.5) * mouseInfluence * 80}deg`);
      }
      frameId = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      pointer.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === "visible";
    }, { threshold: 0.01 });
    const onVisibility = () => {
      visible = !document.hidden;
    };

    observer.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [followMouse, mouseInfluence]);

  return (
    <div ref={containerRef} className={`light-rays ${className}`.trim()} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}
