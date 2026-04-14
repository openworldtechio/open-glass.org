import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function Team() {
  return (
    <section className="bg-card-bg rounded-2xl shadow-2xl p-8 md:p-12 border border-border-light relative">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Proposed Organizational Structure</h2>
      <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-5xl">
        Open-Glass operates as a lean, agile initiative structured to prioritize rapid technical execution alongside dedicated community outreach. We bridge the gap between heavy enterprise Platform Engineering and grassroots open-source advocacy.
      </p>

      <div className="bg-card-bg rounded-2xl p-8 border border-border-light flex flex-col items-center">
        
        {/* Top Node */}
        <div className="bg-card-bg rounded-xl p-8 w-full max-w-md text-center border border-border-light relative z-10">
          <p className="text-accent font-semibold mb-4 text-sm">Executive Director / Lead Platform Engineer</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Oversees architecture of container orchestration, CI/CD pipelines, and observability stacks. Guides the overall system reliability and security of the agentic swarm.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/mpursley" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mpursley/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://mattpursley.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Tree Lines */}
        <div className="w-[1px] bg-border-light h-8"></div>
        <div className="h-[1px] bg-border-light w-full max-w-2xl"></div>
        <div className="flex justify-between w-full max-w-2xl relative h-8">
          <div className="absolute left-0 top-0 w-[1px] h-8 bg-border-light"></div>
          <div className="absolute right-0 top-0 w-[1px] h-8 bg-border-light"></div>
        </div>

        {/* Bottom Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl relative z-10">
          <div className="bg-card-bg rounded-xl p-8 text-center border border-border-light">
            <h4 className="font-bold text-lg text-white mb-3">Lead LLM Researcher</h4>
            <span className="inline-block px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full mb-4 font-medium border border-border-light">To Be Filled / Fractional</span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fine-tunes open-weight models for secure code generation, manages API integration with frontier models, and designs Triage/Patch logic.
            </p>
          </div>
          <div className="bg-card-bg rounded-xl p-8 text-center border border-border-light">
            <h4 className="font-bold text-lg text-white mb-3">Community Manager</h4>
            <span className="inline-block px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full mb-4 font-medium border border-border-light">To Be Filled / Fractional</span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Manages "Maintainer Evangelism", handles responsible disclosure pipelines, and coordinates the volunteer "Defender's Guild" network.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-4xl border-t border-border-light pt-8 text-center">
          <h4 className="font-bold text-base text-white mb-2">Board of Directors / Advisory Board (Future Formation)</h4>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            To be comprised of experts from open-source security foundations (e.g., OpenSSF) and AI safety advocates to provide strategic oversight, governance, and fund allocation auditing.
          </p>
        </div>
      </div>
    </section>
  );
}
