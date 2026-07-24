"use client";

import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { MouseEvent, PropsWithChildren } from "react";

type Spark = {
  x: number;
  y: number;
  angle: number;
  startTime: number;
};

type ClickSparkProps = PropsWithChildren<{
  className?: string;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}>;

const SPARK_PADDING = 24;

export function ClickSpark({
  className = "",
  sparkColor = "#c7ff3d",
  sparkSize = 8,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 420,
  children,
}: ClickSparkProps) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const frameRef = useRef(0);
  const drawRef = useRef<(timestamp: number) => void>(() => {});
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round((rect.width + SPARK_PADDING * 2) * dpr));
      canvas.height = Math.max(1, Math.round((rect.height + SPARK_PADDING * 2) * dpr));
      canvas.style.width = `${rect.width + SPARK_PADDING * 2}px`;
      canvas.style.height = `${rect.height + SPARK_PADDING * 2}px`;
      canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    return () => observer.disconnect();
  }, []);

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    sparksRef.current = sparksRef.current.filter((spark) => {
      const elapsed = timestamp - spark.startTime;
      if (elapsed >= duration) return false;
      const progress = elapsed / duration;
      const eased = progress * (2 - progress);
      const distance = eased * sparkRadius;
      const lineLength = sparkSize * (1 - eased);
      const startX = spark.x + distance * Math.cos(spark.angle);
      const startY = spark.y + distance * Math.sin(spark.angle);
      context.strokeStyle = sparkColor;
      context.lineWidth = 1.5;
      context.globalAlpha = 1 - eased;
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(
        spark.x + (distance + lineLength) * Math.cos(spark.angle),
        spark.y + (distance + lineLength) * Math.sin(spark.angle),
      );
      context.stroke();
      return true;
    });
    context.globalAlpha = 1;
    if (sparksRef.current.length) {
      frameRef.current = window.requestAnimationFrame((nextTimestamp) => drawRef.current(nextTimestamp));
    }
  }, [duration, sparkColor, sparkRadius, sparkSize]);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const now = performance.now();
    sparksRef.current.push(
      ...Array.from({ length: sparkCount }, (_, index) => ({
        x: event.clientX - rect.left + SPARK_PADDING,
        y: event.clientY - rect.top + SPARK_PADDING,
        angle: (Math.PI * 2 * index) / sparkCount,
        startTime: now,
      })),
    );
    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(draw);
  };

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), []);

  return (
    <span ref={hostRef} className={`click-spark ${className}`.trim()} onClick={handleClick}>
      <canvas ref={canvasRef} aria-hidden="true" />
      {children}
    </span>
  );
}
