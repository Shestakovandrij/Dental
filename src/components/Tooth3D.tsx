"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

function createToothGeometry(): THREE.BufferGeometry {
  const pts: THREE.Vector2[] = [];
  // Root
  pts.push(new THREE.Vector2(0, -1.2));
  pts.push(new THREE.Vector2(0.08, -1.1));
  pts.push(new THREE.Vector2(0.12, -0.9));
  pts.push(new THREE.Vector2(0.15, -0.7));
  pts.push(new THREE.Vector2(0.2, -0.5));
  // Neck
  pts.push(new THREE.Vector2(0.25, -0.3));
  pts.push(new THREE.Vector2(0.28, -0.15));
  // Crown
  pts.push(new THREE.Vector2(0.4, 0.0));
  pts.push(new THREE.Vector2(0.5, 0.15));
  pts.push(new THREE.Vector2(0.55, 0.3));
  pts.push(new THREE.Vector2(0.55, 0.5));
  pts.push(new THREE.Vector2(0.5, 0.65));
  pts.push(new THREE.Vector2(0.4, 0.78));
  pts.push(new THREE.Vector2(0.25, 0.88));
  pts.push(new THREE.Vector2(0.1, 0.93));
  pts.push(new THREE.Vector2(0, 0.95));
  return new THREE.LatheGeometry(pts, 32);
}

function makeTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grd = g.createLinearGradient(0, 0, 128, 256);
  grd.addColorStop(0, "#A7D2E6");
  grd.addColorStop(0.5, "#1B6B93");
  grd.addColorStop(1, "#2EC4B6");
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2000; i++) {
    g.fillStyle = `rgba(255,255,255,${Math.random() * 0.06 + 0.02})`;
    g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function Tooth3D() {
  const mainRef = useRef<HTMLDivElement>(null);
  const initialRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const mainEl = mainRef.current;
    const startContainer = initialRef.current;
    if (!mainEl || !startContainer) return;

    // Match main height to document
    const syncHeight = () => {
      mainEl.style.height = `${document.documentElement.scrollHeight}px`;
    };
    syncHeight();

    // Create canvas inside the starting container (like the demo)
    const canvas = document.createElement("canvas");
    canvas.className = "tooth-canvas";
    startContainer.appendChild(canvas);
    canvasRef.current = canvas;

    // Three.js
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 3.5);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(2, 3, 4);
    scene.add(dirLight);

    const mesh = new THREE.Mesh(
      createToothGeometry(),
      new THREE.MeshStandardMaterial({ map: makeTexture(), roughness: 0.3, metalness: 0.1 })
    );
    scene.add(mesh);
    meshRef.current = mesh;

    const render = () => renderer.render(scene, camera);
    gsap.ticker.add(render);

    const onResize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(1);
      renderer.setSize(Math.max(1, r.width * dpr), Math.max(1, r.height * dpr), false);
      camera.aspect = (r.width || 1) / (r.height || 1);
      camera.updateProjectionMatrix();
    };
    onResize();

    // Build Flip timeline — exactly like the demo
    const buildTimeline = () => {
      ctxRef.current?.revert();
      syncHeight();

      ctxRef.current = gsap.context(() => {
        const s2 = Flip.getState(".tooth-target-2");
        const s3 = Flip.getState(".tooth-target-3");
        const s4 = Flip.getState(".tooth-target-4");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fitTo = (state: any) => Flip.fit(canvas, state, { duration: 1, ease: "none" }) as any;

        const tl = gsap.timeline({
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: 2,
          },
        });

        // Hop 1 → 2
        tl.add(fitTo(s2), 0)
          .to(mesh.rotation, { x: `+=${Math.PI}`, y: `+=${Math.PI * 0.5}`, duration: 1, ease: "none" }, "<")
          .addLabel("mid1", "+=0.5")
          // Hop 2 → 3
          .add(fitTo(s3), "mid1")
          .to(mesh.rotation, { x: `+=${Math.PI * 0.5}`, y: `+=${Math.PI}`, duration: 1, ease: "none" }, "<")
          .addLabel("mid2", "+=0.5")
          // Hop 3 → 4
          .add(fitTo(s4), "mid2")
          .to(mesh.rotation, { x: `+=${Math.PI}`, y: `+=${Math.PI * 0.5}`, duration: 1, ease: "none" }, "<");
      });
    };

    buildTimeline();

    const handleResize = () => {
      onResize();
      buildTimeline();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("resize", handleResize);
      ctxRef.current?.revert();
      renderer.dispose();
    };
  }, []);

  // Overlay that spans full document height, pointer-events: none
  // Contains absolute-positioned waypoint containers (like the demo's .main)
  return (
    <div
      ref={mainRef}
      className="hidden sm:block"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
        zIndex: 25,
      }}
    >
      {/* WP1: About section area — top right (start, canvas goes here) */}
      <div
        ref={initialRef}
        className="tooth-container"
        style={{ position: "absolute", top: "120vh", right: "8%", width: 150, height: 150 }}
      />

      {/* WP2: Advantages section area — left */}
      <div
        className="tooth-container"
        style={{ position: "absolute", top: "320vh", left: "5%", width: 120, height: 120 }}
      >
        <div className="tooth-target-2" style={{ width: 120, height: 120 }} />
      </div>

      {/* WP3: after Process — right */}
      <div
        className="tooth-container"
        style={{ position: "absolute", top: "550vh", right: "6%", width: 140, height: 140 }}
      >
        <div className="tooth-target-3" style={{ width: 140, height: 140 }} />
      </div>

      {/* WP4: near Final CTA — center */}
      <div
        className="tooth-container"
        style={{ position: "absolute", bottom: "15vh", left: "50%", marginLeft: -75, width: 150, height: 150 }}
      >
        <div className="tooth-target-4" style={{ width: 150, height: 150 }} />
      </div>
    </div>
  );
}
