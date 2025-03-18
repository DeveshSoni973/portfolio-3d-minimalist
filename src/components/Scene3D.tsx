
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const Scene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setClearColor(0x000000, 0);
    
    // Add renderer to DOM
    mountRef.current?.appendChild(renderer.domElement);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffbb00, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    
    // Neural network node geometry
    const nodeGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const nodeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffbb00,
      emissive: 0xffbb00,
      emissiveIntensity: 0.2,
    });
    
    // Connection geometry
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffbb00,
      transparent: true,
      opacity: 0.5
    });
    
    // Create nodes in a network structure (3 layers)
    const nodes = [];
    const nodePositions = [];
    const lines = [];
    
    // Input layer (4 nodes)
    for (let i = 0; i < 4; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(-2, i * 0.6 - 0.9, 0);
      nodePositions.push(node.position);
      scene.add(node);
      nodes.push(node);
    }
    
    // Hidden layer (6 nodes)
    for (let i = 0; i < 6; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(0, i * 0.5 - 1.25, 0);
      nodePositions.push(node.position);
      scene.add(node);
      nodes.push(node);
    }
    
    // Output layer (2 nodes)
    for (let i = 0; i < 2; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(2, i * 0.7 - 0.35, 0);
      nodePositions.push(node.position);
      scene.add(node);
      nodes.push(node);
    }
    
    // Create connections between layers
    // Input to hidden
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodePositions[i],
          nodePositions[4 + j],
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
        lines.push({line, start: i, end: 4 + j});
      }
    }
    
    // Hidden to output
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 2; j++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodePositions[4 + i],
          nodePositions[10 + j],
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
        lines.push({line, start: 4 + i, end: 10 + j});
      }
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the model slightly
      scene.rotation.y += 0.002;
      
      // Pulse effect for nodes
      nodes.forEach((node, i) => {
        node.scale.x = 1 + 0.2 * Math.sin(Date.now() * 0.002 + i * 0.5);
        node.scale.y = 1 + 0.2 * Math.sin(Date.now() * 0.002 + i * 0.5);
        node.scale.z = 1 + 0.2 * Math.sin(Date.now() * 0.002 + i * 0.5);
      });
      
      // Update controls
      controls.update();
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      
      // Dispose geometries and materials
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      
      nodes.forEach(node => {
        scene.remove(node);
        node.geometry.dispose();
      });
      
      lines.forEach(({ line }) => {
        scene.remove(line);
        line.geometry.dispose();
      });
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div ref={mountRef} className="w-full h-full" />
  );
};

export default Scene3D;
