import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Layers } from 'lucide-react';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  // References to communicate with the render loop without re-instantiating scene
  const wireframeRef = useRef(false);
  wireframeRef.current = isWireframe;

  const rotatingRef = useRef(true);
  rotatingRef.current = isRotating;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 3. Lighting Rig (3-Point Studio + Ambient)
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x6366f1, 3.5);
    keyLight.position.set(5, 6, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    fillLight.position.set(-6, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.8);
    rimLight.position.set(0, -6, -5);
    scene.add(rimLight);

    // 4. Central Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Core Geometry: Crystal Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5,
      emissive: 0x1e1b4b,
      roughness: 0.2,
      metalness: 0.85,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Wireframe Outer Cage
    const cageGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(0.85, 24, 24);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.6, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    // Orbital Ring 2
    const ring2Geo = new THREE.TorusGeometry(3.1, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    scene.add(ring2);

    // Satellite Nodes orbiting
    const satellites: THREE.Mesh[] = [];
    const satCount = 6;
    const satGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const satColors = [0x60a5fa, 0x818cf8, 0x34d399, 0xf472b6, 0xa78bfa, 0x38bdf8];

    for (let i = 0; i < satCount; i++) {
      const satMat = new THREE.MeshStandardMaterial({
        color: satColors[i % satColors.length],
        emissive: satColors[i % satColors.length],
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.8,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      scene.add(sat);
      satellites.push(sat);
    }

    // Particle Dust Field (Optimized BufferGeometry, zero allocations in loop)
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      colors[i] = 0.4 + Math.random() * 0.4; // R
      colors[i + 1] = 0.5 + Math.random() * 0.4; // G
      colors[i + 2] = 0.9 + Math.random() * 0.1; // B
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = normX * 0.8;
      mouse.targetY = normY * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop with Clock & Silky Exponential Damping
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Exponential damping for mouse tracking
      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.targetX, 4.0, delta);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.targetY, 4.0, delta);

      // Core rotation
      if (rotatingRef.current) {
        coreGroup.rotation.y += delta * 0.35;
        coreGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.25;
      }

      // Mouse influence
      coreGroup.rotation.y += mouse.x * 0.02;
      coreGroup.rotation.x += mouse.y * 0.02;

      // Cage pulse
      cageMesh.rotation.y -= delta * 0.15;
      cageMesh.rotation.z += delta * 0.1;

      // Update wireframe state
      coreMat.wireframe = wireframeRef.current;

      // Orbital rings rotation
      ring1.rotation.z = elapsed * 0.2;
      ring2.rotation.z = -elapsed * 0.15;

      // Update Satellites
      satellites.forEach((sat, i) => {
        const radius = i % 2 === 0 ? 2.6 : 3.1;
        const speed = (i % 2 === 0 ? 0.8 : -0.6) * 0.7;
        const angle = elapsed * speed + (i * Math.PI * 2) / satCount;

        if (i % 2 === 0) {
          sat.position.x = Math.cos(angle) * radius;
          sat.position.y = Math.sin(angle) * radius * Math.sin(Math.PI / 3);
          sat.position.z = Math.sin(angle) * radius * Math.cos(Math.PI / 3);
        } else {
          sat.position.x = Math.cos(angle) * radius;
          sat.position.y = Math.sin(angle) * radius * 0.8;
          sat.position.z = Math.cos(angle) * radius * 0.5;
        }

        sat.rotation.x += delta * 2;
        sat.rotation.y += delta * 1.5;
      });

      // Slowly rotate particle dust
      particlePoints.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center p-8 bg-slate-900/40 rounded-2xl border border-slate-800">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Eye className="w-8 h-8" />
          </div>
          <h4 className="text-base font-semibold text-slate-200">Interactive 3D Engine</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">WebGL is initializing or hardware acceleration is limited.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] md:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden group select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Spatial Tech Labels around the 3D core */}
      <div className="absolute top-6 left-6 pointer-events-none hidden sm:block">
        <div className="px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-indigo-300">
          Core Engine: Three.js r160+
        </div>
      </div>

      <div className="absolute top-6 right-6 pointer-events-none hidden sm:block">
        <div className="px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300">
          Physically Based Shading
        </div>
      </div>

      {/* Unified Bottom Control Dock (Zero Viewport Occlusion, Ergonomic) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg text-xs z-10">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
            isRotating ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
          title="Toggle Core Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isRotating ? 'Spinning' : 'Paused'}</span>
        </button>

        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
            isWireframe ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
          title="Toggle Wireframe Mode"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isWireframe ? 'Wireframe' : 'Solid PBR'}</span>
        </button>
      </div>
    </div>
  );
};
