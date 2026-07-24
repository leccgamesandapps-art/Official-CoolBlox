'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <nav className="p-6 flex justify-between items-center">
        <div className="text-3xl font-bold">CoolBlox</div>
        <div className="flex gap-6">
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/register" className="bg-white text-black px-6 py-2 rounded-full font-semibold">Get Started</Link>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-7xl font-bold mb-6">Create. Play. Connect.</h1>
        <p className="text-2xl mb-12 max-w-2xl mx-auto">The ultimate platform for building and playing immersive 3D experiences.</p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/CoolBlox" className="bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-200">Enter CoolBlox</Link>
          <Link href="/CoolBlox/Studio" className="border-2 border-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white/10">Open Studio</Link>
        </div>
      </main>

      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Featured Experiences</h2>
          {/* Placeholder for games grid */}
          <div className="grid grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="font-semibold">Epic Adventure {i}</h3>
                  <p className="text-sm text-gray-400">By CoolCreator</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
