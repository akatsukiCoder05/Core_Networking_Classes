import React, { useEffect, useRef, useState } from 'react';

const Interactive3DBackground = ({ activeMode = 'constellation', isPaused = false }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ y: 0, targetY: 0 });

  // Track window size to optimize performance
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates relative to center
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - cx) / cx; // -1 to 1
      mouseRef.current.targetY = (e.clientY - cy) / cy; // -1 to 1
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Track scroll position for parallax drift
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollRef.current.targetY = window.scrollY / maxScroll; // 0 to 1
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Base settings
    const FOV = 400; // Field of view depth
    let rotationX = 0;
    let rotationY = 0;
    
    // Theme colors from CSS variables
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      return {
        primary: style.getPropertyValue('--primary-color').trim() || '#0066FF',
        secondary: style.getPropertyValue('--secondary-color').trim() || '#7B61FF',
        accent: style.getPropertyValue('--accent-color').trim() || '#10B981',
      };
    };

    // ----------------------------------------------------
    // Mode 1: 3D Constellation / Network Node Grid Settings
    // ----------------------------------------------------
    const nodeCount = isMobile ? 25 : 55;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 800,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1.5,
        colorType: Math.random() > 0.4 ? 'primary' : 'secondary',
      });
    }

    // ----------------------------------------------------
    // Mode 2: 3D Floating Geometry Settings
    // ----------------------------------------------------
    // Vertices for a unit Cube
    const cubeVertices = [
      { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
    ];
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connectors
    ];

    // Vertices for a unit Octahedron (Double Pyramid)
    const octVertices = [
      { x: 0, y: -1.4, z: 0 },
      { x: 1.2, y: 0, z: 1.2 }, { x: 1.2, y: 0, z: -1.2 },
      { x: -1.2, y: 0, z: -1.2 }, { x: -1.2, y: 0, z: 1.2 },
      { x: 0, y: 1.4, z: 0 }
    ];
    const octEdges = [
      [0, 1], [0, 2], [0, 3], [0, 4], // Top pyramid sides
      [1, 2], [2, 3], [3, 4], [4, 1], // Base ring
      [5, 1], [5, 2], [5, 3], [5, 4]  // Bottom pyramid sides
    ];

    const shapeCount = isMobile ? 3 : 7;
    const shapes = [];
    for (let i = 0; i < shapeCount; i++) {
      const type = Math.random() > 0.5 ? 'cube' : 'octahedron';
      shapes.push({
        type,
        vertices: type === 'cube' ? cubeVertices : octVertices,
        edges: type === 'cube' ? cubeEdges : octEdges,
        x: (Math.random() - 0.5) * 700,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 500,
        scale: Math.random() * 30 + 20,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        spinX: (Math.random() - 0.5) * 0.015,
        spinY: (Math.random() - 0.5) * 0.015,
        spinZ: (Math.random() - 0.5) * 0.015,
        driftX: (Math.random() - 0.5) * 0.3,
        driftY: (Math.random() - 0.5) * 0.3,
        driftZ: (Math.random() - 0.25) * 0.2,
      });
    }

    // ----------------------------------------------------
    // Mode 3: 3D Code Streams (Matrix Perspective Rain)
    // ----------------------------------------------------
    const streamCount = isMobile ? 18 : 45;
    const streams = [];
    const hexChars = "0101100110001101ABCDEF#$<>[]{}".split("");
    for (let i = 0; i < streamCount; i++) {
      streams.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 600,
        z: Math.random() * 800 - 400, // Starts randomly back and front
        speedZ: Math.random() * 2.5 + 1.5,
        chars: Array.from({ length: 8 }, () => hexChars[Math.floor(Math.random() * hexChars.length)]),
        charSpacing: 18,
      });
    }

    // 3D Rotation helper
    const rotate3D = (point, sinX, cosX, sinY, cosY) => {
      // Pitch (X-axis)
      let y1 = point.y * cosX - point.z * sinX;
      let z1 = point.y * sinX + point.z * cosX;
      // Yaw (Y-axis)
      let x2 = point.x * cosY - z1 * sinY;
      let z2 = point.x * sinY + z1 * cosY;
      return { x: x2, y: y1, z: z2 };
    };

    // Easing variables for inputs
    let currentScrollDrift = 0;

    // ----------------------------------------------------
    // Core Animation Frame Loop
    // ----------------------------------------------------
    const drawFrame = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(drawFrame);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colors = getColors();
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Smooth mouse tracker easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Scroll easing for parallax Y drift
      scrollRef.current.y += (scrollRef.current.targetY - scrollRef.current.y) * 0.08;
      currentScrollDrift = scrollRef.current.y * 300;

      // Base rotation angles combining automatic spin + mouse position offset
      const timeFactor = Date.now() * 0.00005;
      rotationY = timeFactor + (mouseRef.current.x * 0.4);
      rotationX = (mouseRef.current.y * 0.4);

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      // Render backgrounds based on active mode
      if (activeMode === 'constellation') {
        const projectedNodes = [];

        // 1. Move and project nodes
        nodes.forEach((node) => {
          // Update particle position
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          // Keep in bounds
          const bound = 400;
          if (node.x < -bound || node.x > bound) node.vx *= -1;
          if (node.y < -bound || node.y > bound) node.vy *= -1;
          if (node.z < -bound || node.z > bound) node.vz *= -1;

          // Parallax scroll adjustment
          const adjustedPoint = {
            x: node.x,
            y: node.y - currentScrollDrift * 0.4,
            z: node.z
          };

          // Rotate
          const rotated = rotate3D(adjustedPoint, sinX, cosX, sinY, cosY);

          // Project
          const scale = FOV / (FOV + rotated.z);
          const screenX = centerX + rotated.x * scale;
          const screenY = centerY + rotated.y * scale;

          projectedNodes.push({
            x: screenX,
            y: screenY,
            z: rotated.z,
            scale,
            color: node.colorType === 'primary' ? colors.primary : colors.secondary,
            size: node.size * scale,
            visible: rotated.z > -FOV
          });
        });

        // 2. Draw connections
        const maxDist = isMobile ? 120 : 160;
        for (let i = 0; i < projectedNodes.length; i++) {
          const n1 = projectedNodes[i];
          if (!n1.visible) continue;

          for (let j = i + 1; j < projectedNodes.length; j++) {
            const n2 = projectedNodes[j];
            if (!n2.visible) continue;

            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < maxDist) {
              // Fade connection line based on depth and proximity
              const alpha = (1 - dist / maxDist) * 0.12 * Math.min(n1.scale, n2.scale);
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = n1.color === colors.primary ? `rgba(0, 102, 255, ${alpha})` : `rgba(123, 97, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        // 3. Draw nodes
        projectedNodes.forEach((node) => {
          if (!node.visible) return;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          // Apply depth opacity
          ctx.globalAlpha = Math.min(1, Math.max(0.1, node.scale * 0.8));
          ctx.fill();
          ctx.globalAlpha = 1.0; // Reset
        });

      } else if (activeMode === 'geometry') {
        shapes.forEach((shape) => {
          // Update rotation angles of individual shapes
          shape.rotX += shape.spinX;
          shape.rotY += shape.spinY;
          shape.rotZ += shape.spinZ;

          // Drift positions
          shape.x += shape.driftX;
          shape.y += shape.driftY;
          shape.z += shape.driftZ;

          const limit = 350;
          if (shape.x < -limit || shape.x > limit) shape.driftX *= -1;
          if (shape.y < -limit || shape.y > limit) shape.driftY *= -1;
          if (shape.z < -limit || shape.z > limit) shape.driftZ *= -1;

          // Scroll adjustment
          const adjustedCenter = {
            x: shape.x,
            y: shape.y - currentScrollDrift * 0.5,
            z: shape.z
          };

          // Project vertex coordinates
          const projectedVertices = shape.vertices.map((v) => {
            // Local shape rotations
            const cX = Math.cos(shape.rotX), sX = Math.sin(shape.rotX);
            const cY = Math.cos(shape.rotY), sY = Math.sin(shape.rotY);
            const cZ = Math.cos(shape.rotZ), sZ = Math.sin(shape.rotZ);

            // Rotate locally around shape center
            let lx = v.x * shape.scale;
            let ly = v.y * shape.scale;
            let lz = v.z * shape.scale;

            // X local
            let ly1 = ly * cX - lz * sX;
            let lz1 = ly * sX + lz * cX;
            // Y local
            let lx2 = lx * cY - lz1 * sY;
            let lz2 = lx * sY + lz1 * cY;
            // Z local
            let lx3 = lx2 * cZ - ly1 * sZ;
            let ly3 = lx2 * sZ + ly1 * cZ;

            // Translate locally rotated vertex relative to shape center
            const translatedPoint = {
              x: lx3 + adjustedCenter.x,
              y: ly3 + adjustedCenter.y,
              z: lz2 + adjustedCenter.z
            };

            // Global Camera Rotations
            const globalRot = rotate3D(translatedPoint, sinX, cosX, sinY, cosY);

            // Perspective project
            const scale = FOV / (FOV + globalRot.z);
            return {
              x: centerX + globalRot.x * scale,
              y: centerY + globalRot.y * scale,
              z: globalRot.z,
              scale,
              visible: globalRot.z > -FOV
            };
          });

          // Draw Edges
          shape.edges.forEach(([vIdx1, vIdx2]) => {
            const v1 = projectedVertices[vIdx1];
            const v2 = projectedVertices[vIdx2];

            if (v1.visible && v2.visible) {
              const depthFactor = Math.min(v1.scale, v2.scale);
              const alpha = 0.16 * depthFactor;
              ctx.beginPath();
              ctx.moveTo(v1.x, v1.y);
              ctx.lineTo(v2.x, v2.y);
              ctx.strokeStyle = `rgba(123, 97, 255, ${alpha})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          });

          // Draw Vertices points
          projectedVertices.forEach((v) => {
            if (!v.visible) return;
            ctx.beginPath();
            ctx.arc(v.x, v.y, 2 * v.scale, 0, Math.PI * 2);
            ctx.fillStyle = colors.primary;
            ctx.globalAlpha = Math.min(1, Math.max(0.1, v.scale * 0.7));
            ctx.fill();
            ctx.globalAlpha = 1.0;
          });
        });

      } else if (activeMode === 'streams') {
        streams.forEach((stream) => {
          // Make streams fly forward by reducing depth z
          stream.z -= stream.speedZ;

          // If stream passes camera, recycle to back
          if (stream.z < -FOV + 100) {
            stream.z = 400 + Math.random() * 200;
            stream.x = (Math.random() - 0.5) * 800;
            stream.y = (Math.random() - 0.5) * 600;
          }

          // Camera rotation projection
          const adjustedPoint = {
            x: stream.x,
            y: stream.y - currentScrollDrift * 0.3,
            z: stream.z
          };

          const rotated = rotate3D(adjustedPoint, sinX, cosX, sinY, cosY);
          const scale = FOV / (FOV + rotated.z);

          if (rotated.z > -FOV) {
            const screenX = centerX + rotated.x * scale;
            const screenY = centerY + rotated.y * scale;

            // Render characters in the stream
            ctx.font = `bold ${Math.max(8, Math.floor(14 * scale))}px monospace`;
            ctx.textAlign = 'center';

            // Alpha fades depending on depth
            const baseAlpha = Math.min(0.6, Math.max(0.02, scale * 0.7));

            stream.chars.forEach((char, index) => {
              const charY = screenY + (index * stream.charSpacing * scale);
              
              // Only draw if within bounds
              if (charY > 0 && charY < canvas.height) {
                const headAlpha = index === 0 ? baseAlpha * 1.5 : baseAlpha * (1 - index / stream.chars.length);
                ctx.fillStyle = index === 0 
                  ? `rgba(255, 255, 255, ${headAlpha})` 
                  : (stream.x > 0 ? `rgba(0, 102, 255, ${headAlpha})` : `rgba(16, 185, 129, ${headAlpha})`);
                
                ctx.fillText(char, screenX, charY);
              }
            });

            // Randomly shift character details
            if (Math.random() < 0.05) {
              stream.chars[Math.floor(Math.random() * stream.chars.length)] = hexChars[Math.floor(Math.random() * hexChars.length)];
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode, isPaused, isMobile]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: activeMode === 'streams' ? 0.35 : 0.65, // Adjust opacity depending on the layout style
        transition: 'opacity 0.5s ease'
      }}
    />
  );
};

export default Interactive3DBackground;
