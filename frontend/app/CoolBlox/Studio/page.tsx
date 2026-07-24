'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function CoolBloxStudio() {
  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Toolbar */}
      <div className="w-16 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 gap-8">
        <div className="text-2xl font-bold text-blue-400">CB</div>
        {['Move', 'Rotate', 'Scale', 'Terrain', 'Assets'].map(tool => (
          <div key={tool} className="w-10 h-10 bg-zinc-800 hover:bg-blue-600 rounded flex items-center justify-center cursor-pointer transition-colors">
            {tool[0]}
          </div>
        ))}
      </div>

      {/* Scene Explorer */}
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 overflow-auto">
        <h3 className="font-semibold mb-4">Scene Explorer</h3>
        <ul className="space-y-1 text-sm">
          <li className="pl-4 py-1 bg-blue-600 rounded">World</li>
          <li className="pl-8 py-1">Player Spawn</li>
          <li className="pl-8 py-1">Terrain</li>
        </ul>
      </div>

      {/* 3D Viewport */}
      <div className="flex-1 relative">
        <Canvas className="bg-[#0a0a0a]">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[4, 1, 4]} />
            <meshStandardMaterial color="orange" />
          </mesh>
          <OrbitControls />
        </Canvas>
        
        <div className="absolute top-4 left-4 bg-black/80 px-6 py-2 rounded-full flex gap-6 text-sm">
          <button className="hover:text-blue-400">Play</button>
          <button className="hover:text-blue-400">Test</button>
          <button className="hover:text-blue-400">Publish</button>
        </div>
      </div>

      {/* Properties Panel */}
      <div className="w-80 bg-zinc-900 border-l border-zinc-800 p-6 overflow-auto">
        <h3 className="font-semibold mb-6">Properties</h3>
        <div className="space-y-6 text-sm">
          <div>
            <label className="block text-zinc-400 mb-1">Position</label>
            <div className="grid grid-cols-3 gap-2">
              <input type="number" className="bg-zinc-800 p-2 rounded" defaultValue="0" />
              <input type="number" className="bg-zinc-800 p-2 rounded" defaultValue="0" />
              <input type="number" className="bg-zinc-800 p-2 rounded" defaultValue="0" />
            </div>
          </div>
          {/* More properties */}
        </div>
      </div>
    </div>
  );
}
