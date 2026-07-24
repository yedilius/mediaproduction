# OHZI Interactive public repository audit

Reviewed on 2026-07-25 for the Media Production investor platform.

No OHZI source code or branded assets were copied. The production implementation is a custom Three.js scene informed by reusable architectural patterns from the MIT-licensed projects below.

| Repository | Purpose | License | Decision for Media Production |
| --- | --- | --- | --- |
| [glb-viewer-vscode](https://github.com/ohzinteractive/glb-viewer-vscode) | VS Code wrapper around the GLB viewer core | MIT | Not integrated. It is developer tooling, not a public-site component. |
| [core](https://github.com/ohzinteractive/core) | WebGL/WebGPU rendering, time, screen, resources, scene lifecycle | MIT | Architecture reference: capped DPR, explicit render lifecycle, resize handling and resource disposal. |
| [glb-viewer-core](https://github.com/ohzinteractive/glb-viewer-core) | GLB/GLTF inspection UI and rendering core | MIT | Not integrated. The site has no approved GLB asset and does not need an inspector UI. |
| [glb-viewer-web](https://github.com/ohzinteractive/glb-viewer-web) | Browser application for GLB/GLTF inspection | MIT | Not integrated. Its panels, material tooling and loaders would add weight without investor-facing value. |
| [PIT](https://github.com/ohzinteractive/PIT) | Pollable pointer and touch input for real-time applications | MIT | Interaction reference: normalized pointer input with touch-safe behavior and neutral-position easing. |
| [boilerplate](https://github.com/ohzinteractive/boilerplate) | Production WebGL/WebGPU project scaffold | MIT | Architecture reference: isolated scene component, progressive enhancement, fallbacks and controlled application lifecycle. |
| [ohzinteractive.github.io](https://github.com/ohzinteractive/ohzinteractive.github.io) | Minimal static GitHub Pages repository | No license detected | Not integrated; no reusable 3D implementation was present. |
| [data-plotter](https://github.com/ohzinteractive/data-plotter) | Small live 2D data graph library | MIT | Not integrated. Recharts already covers the financial visualization use case. |
| [components](https://github.com/ohzinteractive/components) | Reusable performance, scroll, audio and UI helpers | MIT | Architecture reference: viewport awareness and performance-aware behavior. |

## Resulting implementation

`src/components/MediaSystemScene.tsx` provides one focused interactive scene:

- Three.js is loaded asynchronously after client hydration.
- Device pixel ratio is capped.
- Particle count and pixel ratio are reduced on small screens.
- Rendering pauses outside the viewport and in hidden tabs.
- `prefers-reduced-motion` renders a static frame.
- Data Saver and low-memory devices receive the CSS fallback.
- Pointer input is normalized within the scene.
- All geometries, materials, observers and the WebGL context are disposed on unmount.
- No external GLB, texture, shader or OHZI runtime is shipped.
