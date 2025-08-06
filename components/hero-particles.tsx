"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroParticles() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 13);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create scattered blue dots across the entire hero
    const createScatteredDots = () => {
      const dotGroup = new THREE.Group();
      const numDots = 15000; // Slightly fewer for better performance

      // Blue colors for light theme
      const dotColors = [
        0x87ceeb, // Sky blue (light)
        0x4682b4, // Steel blue
        0x1e90ff, // Dodger blue
        0x0066cc, // Medium blue
        0x003d82, // Dark blue
        0x1a365d, // Very dark blue (theme color)
      ];

      for (let i = 0; i < numDots; i++) {
        // Create small sphere dots
        const dotGeometry = new THREE.SphereGeometry(
          0.02 + Math.random() * 0.03,
          8,
          8
        );
        const colorIndex = Math.floor(Math.random() * dotColors.length);
        const dotColor = dotColors[colorIndex];

        const dotMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(dotColor),
          transparent: true,
          opacity: 0.4 + Math.random() * 0.4,
        });

        const dot = new THREE.Mesh(dotGeometry, dotMaterial);

        // Position dots randomly across the entire hero area
        const x = (Math.random() - 0.5) * 100; // Spread across full width
        const y = (Math.random() - 0.5) * 100; // Spread across full height
        const z = (Math.random() - 0.5) * 50; // Some depth variation

        dot.position.set(x, y, z);

        // Store original position for animation
        dot.userData = {
          originalPosition: dot.position.clone(),
          floatSpeed: 0.5 + Math.random() * 1.0,
          floatOffset: Math.random() * Math.PI * 2,
        };

        dotGroup.add(dot);
      }

      return dotGroup;
    };

    const scatteredDots = createScatteredDots();
    scene.add(scatteredDots);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full absolute inset-0" />;
}
