import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { skillsData } from '../../data/portfolioData';

interface SkillsOrbitSceneProps {
  selectedCategory: string;
  onSelectSkill?: (skillName: string) => void;
}

export const SkillsOrbitScene: React.FC<SkillsOrbitSceneProps> = ({
  selectedCategory,
  onSelectSkill
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const selectedCategoryRef = useRef(selectedCategory);
  selectedCategoryRef.current = selectedCategory;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Ambient & Directional
    const amb = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(amb);
    const dir = new THREE.DirectionalLight(0x818cf8, 2.0);
    dir.position.set(4, 5, 6);
    scene.add(dir);

    // Orbit group
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // Central Sphere (Tech Nucleus)
    const nucleusGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      emissive: 0x312e81,
      roughness: 0.3,
      metalness: 0.8,
      wireframe: true,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    orbitGroup.add(nucleus);

    // Category Color Mapping
    const getCategoryColor = (cat: string) => {
      switch (cat) {
        case 'Frontend': return 0x38bdf8; // Sky
        case 'Backend': return 0x34d399; // Emerald
        case 'Database': return 0xf59e0b; // Amber
        case 'Cloud & Tools': return 0xa78bfa; // Violet
        default: return 0xf43f5e; // Rose
      }
    };

    // Filter skills according to active category or all
    const filteredSkills = skillsData.filter(s =>
      selectedCategoryRef.current === 'All' || s.category === selectedCategoryRef.current
    );

    // Node meshes map for raycasting/interaction
    const nodes: { mesh: THREE.Mesh; skillName: string; category: string; basePos: THREE.Vector3 }[] = [];
    const sphereRadius = 3.2;
    const nodeCount = filteredSkills.length;

    // Distribute nodes evenly on sphere surface (Fibonacci Sphere algorithm)
    const phi = Math.PI * (Math.sqrt(5) - 1); // golden ratio angle

    filteredSkills.forEach((skill, i) => {
      const y = 1 - (i / (nodeCount - 1 || 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY * sphereRadius;
      const z = Math.sin(theta) * radiusAtY * sphereRadius;
      const pos = new THREE.Vector3(x, y * sphereRadius * 0.85, z);

      const colorHex = getCategoryColor(skill.category);
      const nodeGeo = new THREE.SphereGeometry(0.24, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.7,
      });

      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.copy(pos);
      mesh.userData = { skillName: skill.name, category: skill.category };
      orbitGroup.add(mesh);

      nodes.push({ mesh, skillName: skill.name, category: skill.category, basePos: pos.clone() });
    });

    // Connecting Lines (Constellation Network)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.25,
    });

    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].basePos.distanceTo(nodes[j].basePos) < 2.2) {
          linePoints.push(nodes[i].basePos);
          linePoints.push(nodes[j].basePos);
        }
      }
    }

    if (linePoints.length > 0) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      orbitGroup.add(lines);
    }

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = normX;
      mouse.targetY = normY;

      mouseVector.x = normX;
      mouseVector.y = normY;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodes.map(n => n.mesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        setActiveSkillHover(hit.userData.skillName || null);
        container.style.cursor = 'pointer';
      } else {
        setActiveSkillHover(null);
        container.style.cursor = 'default';
      }
    };

    const onClick = () => {
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodes.map(n => n.mesh));
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (onSelectSkill && hit.userData.skillName) {
          onSelectSkill(hit.userData.skillName);
        }
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('click', onClick);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.targetX, 4.0, delta);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.targetY, 4.0, delta);

      orbitGroup.rotation.y += delta * 0.25;
      orbitGroup.rotation.x = THREE.MathUtils.damp(orbitGroup.rotation.x, mouse.y * 0.4, 2.5, delta);
      orbitGroup.rotation.z = THREE.MathUtils.damp(orbitGroup.rotation.z, -mouse.x * 0.2, 2.5, delta);

      nucleus.rotation.y += delta * 0.4;
      nucleus.rotation.x -= delta * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      nucleusGeo.dispose();
      nucleusMat.dispose();
      renderer.dispose();
    };
  }, [selectedCategory, onSelectSkill]);

  return (
    <div className="relative w-full h-[380px] md:h-[440px] rounded-2xl overflow-hidden glass-panel">
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating Hover Indicator */}
      {activeSkillHover && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 text-sm font-medium text-white shadow-xl pointer-events-none transition-all">
          <span className="text-indigo-400 font-mono text-xs mr-2">FOCUSED NODE:</span>
          {activeSkillHover}
        </div>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-slate-400 text-xs font-mono bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800">
        3D Constellation Orbit · Hover to inspect nodes
      </div>
    </div>
  );
};
