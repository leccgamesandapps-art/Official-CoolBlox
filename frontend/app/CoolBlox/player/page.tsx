'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Avatar() {
  const groupRef = useRef<THREE.Group>(null!);
  
  return (
    <group ref={groupRef}>
      {/* Simple character representation */}
      <mesh position={[0, 1, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

export default function GamePlayer() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Avatar />
        
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
        
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
      
      <div className="absolute bottom-8 left-8 bg-black/70 p-4 rounded-xl text-white">
        WASD - Move | Mouse - Look | Space - Jump
      </div>
      
      <div className="absolute top-8 right-8 bg-black/70 p-6 rounded-2xl">
        <h3 className="font-bold mb-2">Multiplayer Chat</h3>
        <div className="h-64 w-80 bg-zinc-900 rounded p-3 text-sm overflow-auto">
          {/* Chat messages would go here */}
        </div>
      </div>
    </div>
  );
}
