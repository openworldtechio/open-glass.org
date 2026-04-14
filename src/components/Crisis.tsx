import React from 'react';
import { AlertTriangle, Bot, ShieldAlert } from 'lucide-react';

export default function Crisis() {
  return (
    <section className="bg-card-bg rounded-2xl p-8 md:p-12 border border-border-light relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">The Crisis: Asymmetric AI Warfare</h2>
      <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-5xl">
        The barrier to entry for finding and exploiting software zero-days has collapsed. Frontier models can now read complex codebases and autonomously develop exploits. While major tech conglomerates deploy these models defensively, solo open-source maintainers—who steward the software running global banking and healthcare—do not have the resources to compete.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-bg rounded-2xl p-8 border border-border-light transition-colors group">
          <div className="mb-4">
            <AlertTriangle className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">High Risk</h3>
          <p className="text-white font-medium text-sm mb-2">Systemic Vulnerability</p>
          <p className="text-sm text-slate-400 leading-relaxed">Overwhelmed volunteer maintainers steward critical global digital infrastructure with zero funding.</p>
        </div>
        <div className="bg-card-bg rounded-2xl p-8 border border-border-light transition-colors group">
          <div className="mb-4">
            <Bot className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Exploits</h3>
          <p className="text-white font-medium text-sm mb-2">Autonomous Threats</p>
          <p className="text-sm text-slate-400 leading-relaxed">Malicious actors are weaponizing LLMs to generate highly convincing malicious packages and invisible code injections.</p>
        </div>
        <div className="bg-card-bg rounded-2xl p-8 border border-border-light transition-colors group">
          <div className="mb-4">
            <ShieldAlert className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Zero Defense</h3>
          <p className="text-white font-medium text-sm mb-2">The Security Divide</p>
          <p className="text-sm text-slate-400 leading-relaxed">Without intervention, corporate systems will fortify while the public open-source "long tail" is repeatedly exploited.</p>
        </div>
      </div>
    </section>
  );
}
