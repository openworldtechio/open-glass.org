import React from 'react';
import { ArrowDown, Eye, Activity, Clock, Database } from 'lucide-react';

export default function Architecture() {
  return (
    <section className="bg-card-bg rounded-2xl p-8 md:p-12 border border-border-light relative">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Platform Architecture & Flow</h2>
      <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-5xl">
        The Open-Glass solution combines state-of-the-art LLM development with robust Platform Engineering and grassroots community organizing. The flowchart below details the lifecycle of an autonomous security patch.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-grow flex flex-col items-center w-full lg:w-2/3 bg-card-bg rounded-2xl p-8 border border-border-light">
          
          <div className="w-full bg-card-bg rounded-xl p-6 border border-border-light text-center">
            <h4 className="font-bold text-lg text-white mb-2">1. Vulnerability Ingestion</h4>
            <p className="text-sm text-slate-400">Continuous monitoring of OSV / CVE Databases & GitHub Metadata via Webhooks and Kafka Event Bus.</p>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-500 my-4" />

          <div className="w-full bg-card-bg rounded-xl p-6 border border-border-light">
            <h4 className="font-bold text-lg text-white mb-4 text-center">2. Open-Glass AI Swarm (Frontier LLMs)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card-bg p-4 rounded-lg text-center border border-border-light">
                <span className="block font-bold text-white mb-2 text-sm">Triage Agent</span>
                <span className="text-xs text-slate-400">Analyzes AST, scores via OpenSSF Criticality.</span>
              </div>
              <div className="bg-card-bg p-4 rounded-lg text-center border border-border-light">
                <span className="block font-bold text-white mb-2 text-sm">Patching Agent</span>
                <span className="text-xs text-slate-400">Generates memory-safe code corrections.</span>
              </div>
              <div className="bg-card-bg p-4 rounded-lg text-center border border-border-light">
                <span className="block font-bold text-white mb-2 text-sm">Verify Agent</span>
                <span className="text-xs text-slate-400">Iterative refinement via compiler feedback.</span>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-500 my-4" />

          <div className="w-full bg-card-bg rounded-xl p-6 border border-border-light text-center">
            <h4 className="font-bold text-lg text-white mb-2">3. K8s Execution & Sandboxing</h4>
            <p className="text-sm text-slate-400">Ephemeral, network-isolated Docker containers execute unit tests/fuzzing. Strict Zero-Trust & resource quotas enforced.</p>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-500 my-4" />

          <div className="w-full bg-card-bg rounded-xl p-6 border border-border-light text-center">
            <h4 className="font-bold text-lg text-white mb-2">4. Deployment & Bounty Trigger</h4>
            <p className="text-sm text-slate-400">On 100% test pass, an automated PR is submitted. Upon maintainer merge, the Maintainer Bounty Trigger is activated.</p>
          </div>

        </div>

        <div className="w-full lg:w-1/3 bg-card-bg rounded-2xl p-8 border border-border-light flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h4 className="font-bold text-xl text-white mb-3">Deep Observability</h4>
            <p className="text-sm text-slate-400 leading-relaxed">Industry-standard observability stack constantly monitors the health of the entire pipeline.</p>
          </div>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="bg-card-bg p-4 rounded-xl border border-border-light flex items-start gap-3">
              <Database className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Logs</strong>
                Captures raw AI reasoning and decisions.
              </div>
            </li>
            <li className="bg-card-bg p-4 rounded-xl border border-border-light flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Tracing</strong>
                Visualizes exact latency through the agentic swarm.
              </div>
            </li>
            <li className="bg-card-bg p-4 rounded-xl border border-border-light flex items-start gap-3">
              <Activity className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Metrics</strong>
                Scrapes custom metrics for LLM API token consumption & utilization.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
