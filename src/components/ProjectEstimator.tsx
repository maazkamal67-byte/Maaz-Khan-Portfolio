import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, CheckCircle2, ArrowRight, Zap, Clock, ShieldCheck } from "lucide-react";

interface ProjectEstimatorProps {
  onTransmitScope?: (scopeDetails: string) => void;
}

export function ProjectEstimator({ onTransmitScope }: ProjectEstimatorProps) {
  const [projectType, setProjectType] = useState<"ai-web" | "react-saas" | "performance-tune" | "custom-enterprise">("react-saas");
  const [complexity, setComplexity] = useState<"mvp" | "standard" | "enterprise">("standard");
  const [aiIntegration, setAiIntegration] = useState(true);
  const [speedOptimization, setSpeedOptimization] = useState(true);
  const [timeline, setTimeline] = useState<"rush" | "standard" | "flexible">("standard");

  // Calculations
  const calculateEstimates = () => {
    let days = 5;
    let baseScore = 9.5;

    // Type adjustments
    if (projectType === "ai-web") days += 3;
    if (projectType === "react-saas") days += 4;
    if (projectType === "performance-tune") days -= 1;
    if (projectType === "custom-enterprise") days += 8;

    // Complexity
    if (complexity === "mvp") days -= 2;
    if (complexity === "enterprise") days += 6;

    // Addons
    if (aiIntegration) days += 2;
    if (speedOptimization) days += 1;

    // Timeline modifier
    if (timeline === "rush") days = Math.max(2, Math.ceil(days * 0.6));
    if (timeline === "flexible") days = Math.ceil(days * 1.2);

    return {
      days: Math.max(2, days),
      score: baseScore,
      deliverablesCount: 5 + (aiIntegration ? 2 : 0) + (speedOptimization ? 2 : 0)
    };
  };

  const estimate = calculateEstimates();

  const handleExportToContact = () => {
    const scopeSummary = `Project Scope Estimate: [Type: ${projectType.toUpperCase()}], [Complexity: ${complexity.toUpperCase()}], [AI Integration: ${aiIntegration ? 'YES' : 'NO'}], [Speed 100/100 Tuning: ${speedOptimization ? 'YES' : 'NO'}], [Timeline Target: ${timeline.toUpperCase()} (${estimate.days} Days Est.)]`;
    if (onTransmitScope) {
      onTransmitScope(scopeSummary);
    }
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between relative z-10">
        {/* Left: Interactive Controls */}
        <div className="flex-1 space-y-8 w-full">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
              <Calculator className="w-3.5 h-3.5" /> Interactive Scope & Architecture Configurator
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight">
              Estimate Your Next Software Engagement
            </h3>
            <p className="text-slate-400 text-sm font-light mt-1">
              Select parameters to preview engineering scope, turnaround speed, and production architecture.
            </p>
          </div>

          {/* 1. Project Type */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              1. Architecture Archetype
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: "react-saas", label: "React Enterprise SaaS", desc: "Full modular app with state & hooks" },
                { id: "ai-web", label: "Autonomous AI Web App", desc: "Gemini / LLM streaming UI" },
                { id: "performance-tune", label: "Speed Tuning (<1.5s)", desc: "100/100 Lighthouse overhaul" },
                { id: "custom-enterprise", label: "Custom Multi-Tenant Hub", desc: "Large-scale design system" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t.id as any)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    projectType === t.id
                      ? "bg-emerald-500/15 border-emerald-500/60 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="font-bold text-xs text-white flex items-center justify-between">
                    {t.label}
                    {projectType === t.id && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Complexity */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              2. Structural Complexity
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "mvp", label: "MVP Core" },
                { id: "standard", label: "Production Tier" },
                { id: "enterprise", label: "Enterprise Scale" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setComplexity(c.id as any)}
                  className={`py-2.5 px-3 rounded-lg border text-center text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    complexity === c.id
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                      : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Add-on Toggles */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              3. Advanced Capabilities Included
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
                <input
                  type="checkbox"
                  checked={aiIntegration}
                  onChange={(e) => setAiIntegration(e.target.checked)}
                  className="w-4 h-4 rounded accent-emerald-500"
                />
                <div>
                  <div className="text-xs font-bold text-white">Google AI Studio (Gemini)</div>
                  <div className="text-[10px] text-slate-400">Context routing & streaming UI</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
                <input
                  type="checkbox"
                  checked={speedOptimization}
                  onChange={(e) => setSpeedOptimization(e.target.checked)}
                  className="w-4 h-4 rounded accent-emerald-500"
                />
                <div>
                  <div className="text-xs font-bold text-white">Lighthouse 100/100 Guarantee</div>
                  <div className="text-[10px] text-slate-400">Sub-1.2s FCP optimization</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Real-time Estimate Card */}
        <div className="w-full lg:w-80 p-6 rounded-xl bg-[#070b14] border border-white/15 flex flex-col justify-between space-y-6 shadow-2xl shrink-0">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5 border-b border-white/10 pb-3">
              <Zap className="w-3.5 h-3.5" /> Calculated Deliverables Matrix
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-slate-400 text-xs font-mono">Est. Turnaround:</span>
                <span className="text-2xl font-bold text-white font-sans flex items-center gap-1">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  {estimate.days} Days
                </span>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-slate-400 text-xs font-mono">Deliverables:</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {estimate.deliverablesCount} Modules Verified
                </span>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-slate-400 text-xs font-mono">Code Guarantee:</span>
                <span className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Strict Types
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Google IDX Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Fiverr Escrow Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero Third-Party Lag</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <button
              onClick={handleExportToContact}
              className="w-full py-3.5 bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              Lock In Scope & Connect
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-slate-400 font-mono">
              Prefills instant requirements into contact transmission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
