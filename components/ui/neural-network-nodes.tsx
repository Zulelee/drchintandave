"use client";

import React, { useEffect, useRef, useState } from 'react';

interface TinyNeuralGrid {
  id: string;
  x: number;
  y: number;
  z: number;
  nodes: TinyNode[];
  connections: TinyConnection[];
  rotation: number;
  opacity: number;
  speedX: number;
  speedY: number;
  scale: number;
}

interface TinyNode {
  x: number;
  y: number;
  activity: number;
}

interface TinyConnection {
  from: number;
  to: number;
  strength: number;
}

interface NeuralNetworkNodesProps {
  nodeCount?: number;
  connectionDensity?: number;
  pulseSpeed?: number;
  interactionRadius?: number;
  colors?: string[];
  className?: string;
}

export const NeuralNetworkNodes: React.FC<NeuralNetworkNodesProps> = ({
  nodeCount = 12,
  connectionDensity = 0.3,
  pulseSpeed = 1.0,
  interactionRadius = 120,
  colors = ['#00D4FF', '#A855F7', '#4A90E2'],
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const gridsRef = useRef<TinyNeuralGrid[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize tiny neural grids
  const initializeGrids = () => {
    const grids: TinyNeuralGrid[] = [];

    for (let i = 0; i < 45; i++) { // Only 5 tiny grids floating in space
      const grid: TinyNeuralGrid = {
        id: `grid-${i}`,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        z: Math.random() * 100,
        nodes: [],
        connections: [],
        rotation: Math.random() * Math.PI * 2,
        opacity: 0.3 + Math.random() * 0.4, // Very subtle
        speedX: (Math.random() - 0.5) * 0.1, // Very slow floating
        speedY: (Math.random() - 0.5) * 0.1,
        scale: 0.5 + Math.random() * 0.5 // Small scale (0.5-1.0)
      };

      // Create a tiny 4x4 or 3x3 grid of nodes
      const gridSize = 3 + Math.floor(Math.random() * 2); // 3 or 4 nodes per side
      const nodeSpacing = 8; // Very small spacing

      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          grid.nodes.push({
            x: (col - gridSize / 2) * nodeSpacing,
            y: (row - gridSize / 2) * nodeSpacing,
            activity: Math.random()
          });
        }
      }

      // Create connections between nearby nodes in the grid
      for (let j = 0; j < grid.nodes.length; j++) {
        for (let k = j + 1; k < grid.nodes.length; k++) {
          const nodeA = grid.nodes[j];
          const nodeB = grid.nodes[k];
          const distance = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
          );

          if (distance < nodeSpacing * 1.5 && Math.random() < 0.6) {
            grid.connections.push({
              from: j,
              to: k,
              strength: 0.3 + Math.random() * 0.4
            });
          }
        }
      }

      grids.push(grid);
    }

    gridsRef.current = grids;
  };

  // Draw a tiny neural grid
  const drawTinyGrid = (
    ctx: CanvasRenderingContext2D,
    grid: TinyNeuralGrid,
    time: number
  ) => {
    const { x, y, nodes, connections, rotation, opacity, scale } = grid;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation + time * 0.0005); // Very slow rotation
    ctx.scale(scale, scale);
    ctx.globalAlpha = opacity;

    // Draw connections first (very thin lines)
    ctx.strokeStyle = colors[1];
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = opacity * 0.4;

    connections.forEach((connection) => {
      const fromNode = nodes[connection.from];
      const toNode = nodes[connection.to];

      if (fromNode && toNode) {
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      }
    });

    // Draw tiny nodes (very small circles)
    nodes.forEach((node) => {
      const nodeRadius = 1 + node.activity * 0.5; // Very tiny nodes (1-1.5px)

      // Subtle glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeRadius * 2);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.globalAlpha = opacity * 0.6;
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Main node
      ctx.fillStyle = colors[0];
      ctx.globalAlpha = opacity * 0.8;
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  };

  // Animation loop
  const animate = (time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Respect reduced motion preference
    const animationSpeed = reducedMotion ? pulseSpeed * 0.1 : pulseSpeed;

    // Update and draw grids
    gridsRef.current.forEach((grid) => {
      // Very gentle floating movement
      grid.x += grid.speedX * animationSpeed;
      grid.y += grid.speedY * animationSpeed;

      // Update node activities (subtle pulsing)
      grid.nodes.forEach((node) => {
        node.activity += (Math.random() - 0.5) * 0.01;
        node.activity = Math.max(0, Math.min(1, node.activity));
      });

      // Subtle mouse interaction
      const dx = mouseRef.current.x - grid.x;
      const dy = mouseRef.current.y - grid.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < interactionRadius) {
        const force = (interactionRadius - distance) / interactionRadius;
        grid.opacity = Math.min(0.8, grid.opacity + force * 0.1);
      } else {
        grid.opacity = Math.max(0.3, grid.opacity - 0.01);
      }

      // Boundary wrapping
      if (grid.x > dimensions.width + 50) grid.x = -50;
      if (grid.x < -50) grid.x = dimensions.width + 50;
      if (grid.y > dimensions.height + 50) grid.y = -50;
      if (grid.y < -50) grid.y = dimensions.height + 50;

      // Draw the tiny grid
      drawTinyGrid(ctx, grid, time);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setDimensions({
      width: rect.width,
      height: rect.height
    });

    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initializeGrids();
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, nodeCount, connectionDensity, pulseSpeed]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
};