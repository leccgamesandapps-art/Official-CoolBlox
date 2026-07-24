'use client';

export default function CoolBloxHome() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Welcome to CoolBlox</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h2 className="text-3xl mb-4">Discover Games</h2>
          <p>Browse thousands of user-created experiences.</p>
        </div>
        {/* More sections for Friends, Marketplace etc. */}
      </div>
      <div className="mt-12">
        <iframe 
          src="/CoolBlox/player" 
          className="w-full h-[600px] border-0 rounded-2xl" 
          title="Game Player"
        />
      </div>
    </div>
  );
}
