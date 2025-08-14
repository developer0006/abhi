import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingLaptop = () => {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
    
    if (screenRef.current) {
      // Add subtle glow effect to screen
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 1, -0.9]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#0f0f23" />
      </mesh>
      
      {/* Screen Content */}
      <mesh ref={screenRef} position={[0, 1, -0.85]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2.6, 1.6, 0.05]} />
        <meshStandardMaterial 
          color="#00bcd4" 
          emissive="#00bcd4"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Keyboard Keys */}
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            -1.2 + (i % 5) * 0.3,
            0.12,
            -0.6 + Math.floor(i / 5) * 0.3
          ]}
        >
          <boxGeometry args={[0.15, 0.05, 0.15]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingLaptop;