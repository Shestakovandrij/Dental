"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

function createToothGeometry(): THREE.BufferGeometry {
  const points: THREE.Vector2[] = [];
  points.push(new THREE.Vector2(0, -1.2));
  points.push(new THREE.Vector2(0.08, -1.1));
  points.push(new THREE.Vector2(0.12, -0.9));
  points.push(new THREE.Vector2(0.15, -0.7));
  points.push(new THREE.Vector2(0.2, -0.5));
  points.push(new THREE.Vector2(0.25, -0.3));
  points.push(new THREE.Vector2(0.28, -0.15));
  points.push(new THREE.Vector2(0.4, 0.0));
  points.push(new THREE.Vector2(0.5, 0.15));
  points.push(new THREE.Vector2(0.55, 0.3));
  points.push(new THREE.Vector2(0.55, 0.5));
  points.push(new THREE.Vector2(0.5, 0.65));
  points.push(new THREE.Vector2(0.4, 0.78));
  points.push(new THREE.Vector2(0.25, 0.88));
  points.push(new THREE.Vector2(0.1, 0.93));
  points.push(new THREE.Vector2(0, 0.95));
  return new THREE.LatheGeometry(points, 32);
}

function makeToothTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grd = g.createLinearGradient(0, 0, 128, 256);
  grd.addColorStop(0, "#A7D2E6");
  grd.addColorStop(0.5, "#1B6B93");
  grd.addColorStop(1, "#2EC4B6");
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 3000; i++) {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    g.fillStyle = `rgba(255,255,255,${Math.random() * 0.06 + 0.02})`;
    g.fillRect(x, y, 2, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function Tooth3D() {
  const ctxRef = useRef<gsap.Context | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const canvasElRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const wp1 = document.querySelector(".tooth-wp-1");
    const wp2 = document.querySelector(".tooth-wp-2 .tooth-marker");
    const wp3 = document.querySelector(".tooth-wp-3 .tooth-marker");
    const wp4 = document.querySelector(".tooth-wp-4 .tooth-marker");
    if (!wp1 || !wp2 || !wp3 || !wp4) return;

    // Create canvas appended to BODY so it's not clipped by overflow:hidden
    const canvas = document.createElement("canvas");
    canvas.className = "tooth-canvas";
    document.body.appendChild(canvas);
    canvasElRef.current = canvas;

    // Position canvas to match wp1 initially
    const wp1Rect = wp1.getBoundingClientRect();
    canvas.style.position = "fixed";
    canvas.style.left = `${wp1Rect.left}px`;
    canvas.style.top = `${wp1Rect.top}px`;

    // Three.js setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 3.5);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(2, 3, 4);
    scene.add(dir);

    const geo = createToothGeometry();
    const mat = new THREE.MeshStandardMaterial({ map: makeToothTexture(), roughness: 0.3, metalness: 0.1 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fit = (el: Element, state: any, opts: any) => Flip.fit(el, state, opts) as any;

    const buildTimeline = () => {
      ctxRef.current?.revert();

      ctxRef.current = gsap.context(() => {
        const s2 = Flip.getState(wp2);
        const s3 = Flip.getState(wp3);
        const s4 = Flip.getState(wp4);

        const tl = gsap.timeline({
          scrollTrigger: { start: 0, end: "max", scrub: 2 },
        });

        tl.add(fit(canvas, s2, { duration: 1, ease: "none" }), 0)
          .to(mesh.rotation, { x: `+=${Math.PI}`, y: `+=${Math.PI * 0.5}`, duration: 1, ease: "none" }, 0)
          .addLabel("m1", "+=0.3")
          .add(fit(canvas, s3, { duration: 1, ease: "none" }), "m1")
          .to(mesh.rotation, { x: `+=${Math.PI * 0.5}`, y: `+=${Math.PI}`, duration: 1, ease: "none" }, "m1")
          .addLabel("m2", "+=0.3")
          .add(fit(canvas, s4, { duration: 1, ease: "none" }), "m2")
          .to(mesh.rotation, { x: `+=${Math.PI}`, y: `+=${Math.PI * 0.5}`, duration: 1, ease: "none" }, "m2");
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
      canvas.remove();
    };
  }, []);

  return null;
}
