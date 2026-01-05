import "./BackgroundShader.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "../../shaders/BayerDitheringShader.js";
import PropTypes from "prop-types";

const SHAPE_MAP = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3,
};

const BackgroundShader = ({
  shape = "square",
  pixelSize = 4,
  inkColor = "#ff5555",
  bgColor = "#001d1d",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- SETUP ---
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.classList.add("shader-canvas");

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

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
      glslVersion: THREE.GLSL3,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- LOOP ---
    const clock = new THREE.Clock();
    let animationId = 0;

    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // --- RESIZE ---
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      scene.remove(mesh);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      container.innerHTML = "";
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

BackgroundShader.propTypes = {
  shape: PropTypes.oneOf(["square", "circle", "triangle", "diamond"]),
  pixelSize: PropTypes.number,
  inkColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default BackgroundShader;
