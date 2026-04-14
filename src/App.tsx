/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from './components/Hero';
import Crisis from './components/Crisis';
import Architecture from './components/Architecture';
import Financials from './components/Financials';
import Team from './components/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans selection:bg-accent/30 relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,229,255,0.1)_0%,transparent_70%)] z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 relative z-10">
        <Hero />
        <Crisis />
        <Architecture />
        <Financials />
        <Team />
      </div>
    </div>
  );
}
