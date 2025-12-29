import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from '../../shaders/BayerDitheringShader.js';
import './BackgroundShader.css';

const SHAPE_MAP = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3,
};

const BackgroundShader = ({ 
  shape = 'square', 
  pixelSize = 4, 
  inkColor = '#ff5555', 
  bgColor = '#001d1d' 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- SETUP ---
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    renderer.domElement.classList.add('shader-canvas');
    
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // --- UNIFORMS ---
    const uniforms = {
      uResolution: { value: new THREE.Vector2(width, height) },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(inkColor) },
      uShapeType: { value: SHAPE_MAP[shape] ?? 0 },
      uPixelSize: { value: pixelSize },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      glslVersion: THREE.GLSL3
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // --- LOOP ---
    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // --- RESIZE ---
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [shape, pixelSize, inkColor]);

  return (
    <div 
      ref={containerRef} 
      className="shader-container"
      style={{ backgroundColor: bgColor }}
    />
  );
};

export default BackgroundShader;
