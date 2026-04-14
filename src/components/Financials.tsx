import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const targetBudgetData = [
  { name: 'Staff Compensation', value: 305000, color: '#00E5FF' },
  { name: 'Overhead Costs', value: 120000, color: '#94A3B8' },
  { name: 'Maintainer Bounties', value: 100000, color: '#FFFFFF' },
];

const scenarioData = [
  {
    name: 'Minimum ($350k)',
    Staff: 200000,
    Overhead: 100000,
    Bounties: 50000,
  },
  {
    name: 'Target ($525k)',
    Staff: 305000,
    Overhead: 120000,
    Bounties: 100000,
  },
  {
    name: 'Stretch ($750k)',
    Staff: 400000,
    Overhead: 150000,
    Bounties: 200000,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#050608] border border-white/10 p-3 rounded-lg shadow-xl text-sm">
        <p className="font-bold text-white mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.color || entry.payload.fill }} />
            <span className="text-slate-400">{entry.name}:</span>
            <span className="text-white font-medium">${(entry.value / 1000).toFixed(0)}k</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Financials() {
  return (
    <section className="bg-card-bg rounded-2xl shadow-2xl p-8 md:p-12 border border-border-light relative">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Financial Operations & Grant Scaling</h2>
      <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-5xl">
        Our funding request targets between $350k and $750k over 24 months. The visualizations below contrast the budget allocation for our $525k base request against the Minimum and Ambitious operational scenarios. A core component of all budgets is the <strong className="text-white">Maintainer Compensation Fund</strong>, which directly pays open-source developers to review our patches.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card-bg p-6 rounded-2xl border border-border-light flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2 text-center border-b border-border-light pb-4">Target Operations ($525k)</h3>
          <p className="text-sm text-slate-400 mb-6 text-center mt-4">Fully funds core engineering and a robust maintainer compensation pool.</p>
          <div className="h-80 w-full flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={targetBudgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {targetBudgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-slate-400 text-sm">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card-bg p-6 rounded-2xl border border-border-light flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2 text-center border-b border-border-light pb-4">Funding Scenario Comparison</h3>
          <p className="text-sm text-slate-400 mb-6 text-center mt-4">Ambitious funding ($750k) unlocks AI-assisted C/C++ to Rust/Go memory-safe migrations.</p>
          <div className="h-80 w-full flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={scenarioData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-slate-400 text-sm">{value}</span>}
                />
                <Bar dataKey="Staff" stackId="a" fill="#00E5FF" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Overhead" stackId="a" fill="#94A3B8" />
                <Bar dataKey="Bounties" stackId="a" fill="#FFFFFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
