"use client";

import { useEffect, useRef } from "react";

export function MediaSystemScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let disposed = false;
    let frameId = 0;
    let visible = true;
    let intersecting = true;
    let cleanupScene = () => {};
    const pointer = { x: 0, y: 0 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const deviceNavigator = navigator as Navigator & {
      connection?: { saveData?: boolean };
      deviceMemory?: number;
    };
    if (deviceNavigator.connection?.saveData || (deviceNavigator.deviceMemory && deviceNavigator.deviceMemory < 4)) {
      host.classList.add("is-fallback");
      return;
    }

    void import("three").then((THREE) => {
      if (disposed) return;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: window.devicePixelRatio < 2,
          powerPreference: "high-performance",
        });
      } catch {
        host.classList.add("is-fallback");
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
      camera.position.set(0, 0, 7);

      const system = new THREE.Group();
      scene.add(system);

      const coreGeometry = new THREE.IcosahedronGeometry(1.55, 2);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0xc7ff3d,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.rotation.set(0.24, 0.42, 0);
      system.add(core);

      const shellGeometry = new THREE.IcosahedronGeometry(1.28, 3);
      const shellMaterial = new THREE.MeshBasicMaterial({
        color: 0x273329,
        transparent: true,
        opacity: 0.72,
      });
      const shell = new THREE.Mesh(shellGeometry, shellMaterial);
      system.add(shell);

      const particleCount = window.innerWidth < 600 ? 560 : 1100;
      const positions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const radius = 1.7 + Math.random() * 0.48;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[index * 3 + 2] = radius * Math.cos(phi);
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xc7ff3d,
        size: window.innerWidth < 600 ? 0.018 : 0.014,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
      });
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      system.add(particles);

      const orbitMaterials: InstanceType<typeof THREE.LineBasicMaterial>[] = [];
      const orbitGeometries: InstanceType<typeof THREE.BufferGeometry>[] = [];
      [2.05, 2.48, 2.82].forEach((radius, index) => {
        const curve = new THREE.EllipseCurve(0, 0, radius, radius * (0.64 + index * 0.06));
        const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(160));
        const material = new THREE.LineBasicMaterial({
          color: index === 1 ? 0xc7ff3d : 0x748174,
          transparent: true,
          opacity: index === 1 ? 0.28 : 0.16,
        });
        const line = new THREE.LineLoop(geometry, material);
        line.rotation.x = Math.PI * (0.22 + index * 0.17);
        line.rotation.z = index * 0.64;
        system.add(line);
        orbitGeometries.push(geometry);
        orbitMaterials.push(material);
      });

      const nodeGeometry = new THREE.SphereGeometry(0.07, 12, 12);
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xc7ff3d });
      const nodes = Array.from({ length: 4 }, (_, index) => {
        const pivot = new THREE.Group();
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.x = 2.05 + index * 0.2;
        pivot.rotation.set(index * 0.7, index * 1.2, index * 0.45);
        pivot.add(node);
        system.add(pivot);
        return pivot;
      });

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 600 ? 1.2 : 1.6));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const onPointerMove = (event: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      };
      const onPointerLeave = () => {
        pointer.x = 0;
        pointer.y = 0;
      };

      const clock = new THREE.Clock();
      const render = () => {
        if (disposed) return;
        if (visible) {
          const elapsed = clock.getElapsedTime();
          system.rotation.y += (pointer.x * 0.28 - system.rotation.y) * 0.035;
          system.rotation.x += (-pointer.y * 0.16 - system.rotation.x) * 0.035;
          core.rotation.y = elapsed * 0.13;
          core.rotation.z = elapsed * 0.055;
          shell.rotation.y = -elapsed * 0.045;
          particles.rotation.y = elapsed * 0.025;
          nodes.forEach((node, index) => {
            node.rotation.z = elapsed * (0.11 + index * 0.018) + index;
          });
          renderer.render(scene, camera);
        }
        if (!reducedMotion) frameId = window.requestAnimationFrame(render);
      };

      const resizeObserver = new ResizeObserver(resize);
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        intersecting = entry.isIntersecting;
        visible = intersecting && document.visibilityState === "visible";
      }, { threshold: 0.05 });
      const onVisibility = () => {
        visible = intersecting && document.visibilityState === "visible";
      };

      resizeObserver.observe(host);
      intersectionObserver.observe(host);
      host.addEventListener("pointermove", onPointerMove, { passive: true });
      host.addEventListener("pointerleave", onPointerLeave, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      resize();
      render();

      const cleanup = () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        host.removeEventListener("pointermove", onPointerMove);
        host.removeEventListener("pointerleave", onPointerLeave);
        document.removeEventListener("visibilitychange", onVisibility);
        coreGeometry.dispose();
        coreMaterial.dispose();
        shellGeometry.dispose();
        shellMaterial.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        orbitGeometries.forEach((geometry) => geometry.dispose());
        orbitMaterials.forEach((material) => material.dispose());
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
      };

      if (disposed) cleanup();
      else {
        cleanupScene = cleanup;
        host.dataset.ready = "true";
      }
    }).catch(() => host.classList.add("is-fallback"));

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      cleanupScene();
    };
  }, []);

  return (
    <div className="media-system-scene" ref={hostRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="scene-fallback" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </div>
      <div className="scene-core-label">
        <span>24h</span>
        <small>delivery</small>
      </div>
      <div className="scene-caption"><i /> Interactive system / WebGL</div>
    </div>
  );
}
