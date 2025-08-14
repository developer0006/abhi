import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TradingChart = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
  });

  // Generate chart bars
  const bars = [0.5, 1.2, 0.8, 1.8, 1.5, 0.9, 2.1, 1.7, 1.3, 2.3];

  return (
    <group ref={groupRef} position={[-2, 0, 0]}>
      {/* Chart Background */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2.5, 0.1]} />
        <meshStandardMaterial color="#0f0f23" transparent opacity={0.8} />
      </mesh>
      
      {/* Chart Bars */}
      {bars.map((height, i) => (
        <mesh
          key={i}
          position={[-1.2 + i * 0.26, height / 2 - 0.5, 0.1]}
        >
          <boxGeometry args={[0.2, height, 0.15]} />
          <meshStandardMaterial 
            color={height > 1.5 ? "#00ff88" : "#ff4444"}
            emissive={height > 1.5 ? "#00ff88" : "#ff4444"}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Trend Line */}
      <mesh position={[0, 0.5, 0.2]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[2.5, 0.05, 0.05]} />
        <meshStandardMaterial 
          color="#00bcd4"
          emissive="#00bcd4"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

export default TradingChart;