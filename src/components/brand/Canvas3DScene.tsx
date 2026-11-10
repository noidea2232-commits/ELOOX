import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Canvas3DSceneProps {
  className?: string;
  wireframeColor?: number;
  interactive?: boolean;
}

export const Canvas3DScene: React.FC<Canvas3DSceneProps> = ({
  className = '',
  wireframeColor = 0x0066FF,
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    // Parent group to handle subtle floating physics
    const techObjectGroup = new THREE.Group();
    scene.add(techObjectGroup);

    // Main 3D Tech Object: Nested geometric icosahedron & octahedron wireframes
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: wireframeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    techObjectGroup.add(outerMesh);

    // Inner core: Octahedron wireframe
    const innerGeo = new THREE.OctahedronGeometry(0.9, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0A0A0A,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    techObjectGroup.add(innerMesh);

    // Tech particle dust orbiting around
    const particleCount = 130;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.1 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: wireframeColor,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    techObjectGroup.add(particleSystem);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    if (interactive) {
      window.addEventListener('mousemove', onMouseMove);
    }

    const onResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle organic floating displacement & breathing scale
      techObjectGroup.position.y = Math.sin(elapsedTime * 1.1) * 0.09;
      techObjectGroup.position.x = Math.cos(elapsedTime * 0.7) * 0.04;
      const scale = 1 + Math.sin(elapsedTime * 0.9) * 0.02;
      techObjectGroup.scale.set(scale, scale, scale);

      // Rotation with parallax reaction
      outerMesh.rotation.y = elapsedTime * 0.18 + mouseX * 0.7;
      outerMesh.rotation.x = elapsedTime * 0.12 + mouseY * 0.7;

      innerMesh.rotation.y = -elapsedTime * 0.22 - mouseX * 0.5;
      innerMesh.rotation.z = elapsedTime * 0.15;

      particleSystem.rotation.y = elapsedTime * 0.06;
      particleSystem.rotation.x = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      if (interactive) {
        window.removeEventListener('mousemove', onMouseMove);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [wireframeColor, interactive]);

  return <div ref={mountRef} className={`w-full h-full relative pointer-events-none ${className}`} />;
};
