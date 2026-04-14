import React from 'react';

export default function Hero() {
  return (
    <header className="text-center space-y-8 pt-16 pb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
        Open-Glass
      </h1>
      <p className="text-2xl md:text-3xl font-light text-slate-400 max-w-4xl mx-auto">
        Autonomous AI Defense for the Open-Source Supply Chain
      </p>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
        A proactive, community-driven cybersecurity initiative designed to protect the "long tail" of the open-source software ecosystem from the rapidly accelerating threat of asymmetric AI-generated exploits.
      </p>
    </header>
  );
}
