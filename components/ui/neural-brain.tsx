"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

export default function NeuralBrainCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f5f0); // Light theme cream background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 13); // Zoomed out 10% more for better spacing

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff4444, 1, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Create scattered blue dots around the scene
    const createScatteredDots = () => {
      const dotGroup = new THREE.Group();
      const numDots = 20000;

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

        // Position dots randomly around the scene
        const radius = 15 + Math.random() * 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        dot.position.x = radius * Math.sin(phi) * Math.cos(theta);
        dot.position.y = radius * Math.sin(phi) * Math.sin(theta);
        dot.position.z = radius * Math.cos(phi);

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

    // Load 3D Brain Model
    const brainGroup = new THREE.Group();
    brainGroup.name = "brainGroup"; // Add name for easy identification
    const loader = new GLTFLoader();

    // Load the brain model
    loader.load(
      "/brain_hologram.glb",
      (gltf) => {
        const brainModel = gltf.scene;

        // Scale and position the brain
        brainModel.scale.setScalar(3);
        brainModel.position.set(0, 0, 0);

        // Apply blue gradient materials
        let meshIndex = 0;
        brainModel.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Apply blue gradient materials
            const blueShades = [
              0x87ceeb, // Sky blue (light)
              0x4682b4, // Steel blue
              0x1e90ff, // Dodger blue
              0x0066cc, // Medium blue
              0x003d82, // Dark blue
              0x1a365d, // Very dark blue (theme color)
            ];

            const colorIndex = meshIndex % blueShades.length;
            const blueColor = blueShades[colorIndex];

            const blueMaterial = new THREE.MeshPhongMaterial({
              color: new THREE.Color(blueColor),
              shininess: 80,
              transparent: true,
              opacity: 0.85,
              specular: new THREE.Color(0x87ceeb),
            });
            child.material = blueMaterial;
            meshIndex++;
          }
        });

        brainGroup.add(brainModel);
      },
      (progress) => {
        console.log(
          "Loading progress:",
          (progress.loaded / progress.total) * 100 + "%"
        );
      },
      (error) => {
        console.error("Error loading brain model:", error);
        // Fallback: create a simple brain-like shape
        const fallbackBrain = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32),
          new THREE.MeshBasicMaterial({
            color: 0x888888,
            wireframe: true,
          })
        );
        brainGroup.add(fallbackBrain);
      }
    );

    scene.add(brainGroup);

    // Enhanced mouse controls for drag and zoom
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let userRotation = { x: 0, y: Math.PI / 2 }; // Start with side view (90 degrees rotation)

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
      if (mountRef.current) {
        mountRef.current.style.cursor = "grabbing";
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      // Update user rotation based on drag
      userRotation.y += deltaMove.x * 0.01;
      userRotation.x += deltaMove.y * 0.01;

      // Set rotation velocity for smooth movement
      rotationVelocity.x = deltaMove.y * 0.01;
      rotationVelocity.y = deltaMove.x * 0.01;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
      if (mountRef.current) {
        mountRef.current.style.cursor = "grab";
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const zoomSpeed = 0.1;
      const zoomDelta = event.deltaY > 0 ? zoomSpeed : -zoomSpeed;

      camera.position.z += zoomDelta;
      // Limit zoom range - adjusted for better fit
      camera.position.z = Math.max(5, Math.min(15, camera.position.z));
    };

    // Add event listeners
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Apply user rotation from dragging
      brainGroup.rotation.x = userRotation.x;
      brainGroup.rotation.y = userRotation.y;

      // Continuous auto rotation on Y-axis (very slow rotation)
      if (!isDragging) {
        userRotation.y += 0.001; // Much slower continuous Y-axis rotation
      }

      // Subtle pulsing effect for brain
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time * 0.8) * 0.03 + 1;
      brainGroup.scale.setScalar(pulse * 3); // Keep the 3x scale with pulse

      // Animate scattered dots with gentle floating motion
      const currentScatteredDots = scene.getObjectByName("scatteredDots");
      if (currentScatteredDots) {
        currentScatteredDots.children.forEach((dot) => {
          const userData = dot.userData;
          if (userData && userData.originalPosition) {
            // Gentle floating animation
            const floatY =
              Math.sin(time * userData.floatSpeed + userData.floatOffset) * 0.5;
            const floatX =
              Math.cos(
                time * userData.floatSpeed * 0.7 + userData.floatOffset
              ) * 0.3;

            dot.position.x = userData.originalPosition.x + floatX;
            dot.position.y = userData.originalPosition.y + floatY;

            // Subtle opacity pulsing
            if (
              dot instanceof THREE.Mesh &&
              dot.material &&
              "opacity" in dot.material
            ) {
              const baseopacity = 0.6;
              const opacityPulse =
                Math.sin(time * 2 + userData.floatOffset) * 0.2;
              dot.material.opacity = baseopacity + opacityPulse;
            }
          }
        });
      }

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
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("wheel", handleWheel);
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

  return (
    <div ref={mountRef} className="w-full h-full" style={{ cursor: "grab" }} />
  );
}
