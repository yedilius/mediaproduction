"use client";

import { useEffect, useRef } from "react";
import { sceneStates } from "@/components/webgl/sceneStates";

export function MediaSystemScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const captionRef = useRef<HTMLElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let disposed = false;
    let frameId = 0;
    let pageVisible = document.visibilityState === "visible";
    let canvasVisible = true;
    let cleanupScene = () => {};
    let activeStateIndex = 0;
    let targetStateIndex = 0;
    const pointer = { x: 0, y: 0 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stateSections = sceneStates.map((state) => document.querySelector(state.selector));
    const deviceNavigator = navigator as Navigator & {
      connection?: { saveData?: boolean };
      deviceMemory?: number;
    };

    if (deviceNavigator.connection?.saveData || (deviceNavigator.deviceMemory && deviceNavigator.deviceMemory < 4)) {
      host.classList.add("is-fallback");
      return;
    }

    const setInterfaceState = (stateIndex: number) => {
      const state = sceneStates[stateIndex];
      host.dataset.state = state.id;
      if (labelRef.current) labelRef.current.textContent = state.label;
      if (captionRef.current) captionRef.current.textContent = state.caption;
      if (modulesRef.current) {
        modulesRef.current.replaceChildren(
          ...state.modules.map((module) => {
            const node = document.createElement("span");
            node.textContent = module;
            return node;
          }),
        );
      }
    };

    const updateScrollState = () => {
      const viewportAnchor = window.innerHeight * 0.48;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      stateSections.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionAnchor = Math.min(Math.max(viewportAnchor, rect.top), rect.bottom);
        const distance = Math.abs(viewportAnchor - sectionAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      if (closestIndex !== targetStateIndex) {
        targetStateIndex = closestIndex;
        setInterfaceState(targetStateIndex);
      }
    };

    setInterfaceState(0);

    void import("three").then((THREE) => {
      if (disposed) return;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: window.devicePixelRatio <= 1.5,
          powerPreference: "high-performance",
        });
      } catch {
        host.classList.add("is-fallback");
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
      camera.position.set(0, 0, 8);
      const targetVector = new THREE.Vector3();
      const targetScale = new THREE.Vector3();

      const system = new THREE.Group();
      scene.add(system);

      const coreGeometry = new THREE.IcosahedronGeometry(0.82, 2);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x7fa61f,
        wireframe: true,
        transparent: true,
        opacity: 0.62,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      system.add(core);

      const innerGeometry = new THREE.IcosahedronGeometry(0.64, 2);
      const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0xdfe7d8,
        transparent: true,
        opacity: 0.92,
      });
      const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
      core.add(innerCore);

      const cardGeometry = new THREE.PlaneGeometry(0.74, 1.18, 3, 5);
      const cardMaterials = Array.from({ length: 6 }, (_, index) => new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0x7fa61f : 0x344037,
        wireframe: true,
        transparent: true,
        opacity: index % 2 === 0 ? 0.48 : 0.28,
        side: THREE.DoubleSide,
        depthWrite: false,
      }));
      const cards = cardMaterials.map((material) => {
        const card = new THREE.Mesh(cardGeometry, material);
        system.add(card);
        return card;
      });

      const linePositions = new Float32Array(cards.length * 6);
      const connectionsGeometry = new THREE.BufferGeometry();
      connectionsGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      const connectionsMaterial = new THREE.LineBasicMaterial({
        color: 0x6f921a,
        transparent: true,
        opacity: 0.18,
      });
      const connections = new THREE.LineSegments(connectionsGeometry, connectionsMaterial);
      system.add(connections);

      const barGeometry = new THREE.BoxGeometry(0.52, 1, 0.42);
      const barMaterials = Array.from({ length: 5 }, (_, index) => new THREE.MeshBasicMaterial({
        color: index === 0 ? 0x8db724 : index === 1 ? 0x59655b : 0x303a32,
        wireframe: index !== 0,
        transparent: true,
        opacity: 0,
      }));
      const bars = barMaterials.map((material, index) => {
        const bar = new THREE.Mesh(barGeometry, material);
        bar.position.x = (index - 2) * 0.9;
        bar.position.y = -1.8;
        system.add(bar);
        return bar;
      });

      const particlesCount = window.innerWidth < 700 ? 180 : 360;
      const particlePositions = new Float32Array(particlesCount * 3);
      for (let index = 0; index < particlesCount; index += 1) {
        particlePositions[index * 3] = (Math.random() - 0.5) * 7;
        particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 5;
        particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 2 - 1;
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x668817,
        size: 0.018,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
      });
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      system.add(particles);

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        const maxDpr = window.innerWidth < 760 ? 1 : 1.5;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDpr));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
      };
      const onVisibility = () => {
        pageVisible = document.visibilityState === "visible";
      };

      const clock = new THREE.Clock();
      const render = () => {
        if (disposed) return;
        const delta = Math.min(clock.getDelta(), 0.05);
        const canRender = pageVisible && canvasVisible;
        if (canRender) {
          const interpolation = reducedMotion ? 1 : 1 - Math.exp(-delta * 4.8);
          activeStateIndex += (targetStateIndex - activeStateIndex) * interpolation;
          const state = sceneStates[Math.round(activeStateIndex)];
          const isFinance = state.id === "finance";

          targetVector.set(...state.corePosition);
          core.position.lerp(targetVector, interpolation);
          const targetCoreScale = state.coreScale;
          targetScale.set(targetCoreScale, targetCoreScale, targetCoreScale);
          core.scale.lerp(targetScale, interpolation);

          cards.forEach((card, index) => {
            const position = state.cardPositions[index];
            const rotation = state.cardRotations[index];
            targetVector.set(...position);
            card.position.lerp(targetVector, interpolation);
            card.rotation.x += (rotation[0] - card.rotation.x) * interpolation;
            card.rotation.y += (rotation[1] - card.rotation.y) * interpolation;
            card.rotation.z += (rotation[2] - card.rotation.z) * interpolation;
            cardMaterials[index].opacity += ((isFinance ? 0.09 : index % 2 === 0 ? 0.48 : 0.28) - cardMaterials[index].opacity) * interpolation;

            const offset = index * 6;
            linePositions[offset] = core.position.x;
            linePositions[offset + 1] = core.position.y;
            linePositions[offset + 2] = core.position.z;
            linePositions[offset + 3] = card.position.x;
            linePositions[offset + 4] = card.position.y;
            linePositions[offset + 5] = card.position.z;
          });
          connectionsGeometry.attributes.position.needsUpdate = true;
          connectionsMaterial.opacity += ((isFinance ? 0.06 : 0.18) - connectionsMaterial.opacity) * interpolation;

          bars.forEach((bar, index) => {
            const height = state.barHeights[index];
            bar.scale.y += (height - bar.scale.y) * interpolation;
            bar.position.y += ((-1.75 + height / 2) - bar.position.y) * interpolation;
            barMaterials[index].opacity += ((isFinance ? 0.56 : 0) - barMaterials[index].opacity) * interpolation;
          });

          system.rotation.y += ((pointer.x * 0.08) - system.rotation.y) * interpolation * 0.45;
          system.rotation.x += ((-pointer.y * 0.045) - system.rotation.x) * interpolation * 0.45;
          if (!reducedMotion) {
            core.rotation.y += delta * 0.18;
            particles.rotation.y += delta * 0.025;
          }
          renderer.render(scene, camera);
        }
        if (!reducedMotion) frameId = window.requestAnimationFrame(render);
      };

      const resizeObserver = new ResizeObserver(resize);
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        canvasVisible = entry.isIntersecting;
      }, { threshold: 0.01 });

      resizeObserver.observe(host);
      intersectionObserver.observe(host);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      resize();
      updateScrollState();
      render();

      const cleanup = () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
        document.removeEventListener("visibilitychange", onVisibility);
        coreGeometry.dispose();
        coreMaterial.dispose();
        innerGeometry.dispose();
        innerMaterial.dispose();
        cardGeometry.dispose();
        cardMaterials.forEach((material) => material.dispose());
        connectionsGeometry.dispose();
        connectionsMaterial.dispose();
        barGeometry.dispose();
        barMaterials.forEach((material) => material.dispose());
        particlesGeometry.dispose();
        particlesMaterial.dispose();
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
      <div className="scene-state-copy" aria-hidden="true">
        <span ref={labelRef}>Content Production OS</span>
        <small ref={captionRef}>Стратегия превращается в готовые media-форматы</small>
      </div>
      <div className="scene-modules" ref={modulesRef} aria-hidden="true" />
    </div>
  );
}
