import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Activity, Zap, Code2, Blocks, Layout, Cpu, ShieldCheck, Terminal, Star, Sparkles, CheckCircle2, ChevronRight, MessageSquare, Award } from "lucide-react";
import { ArchitectureInspector } from "./ArchitectureInspector";
import { ProjectEstimator } from "./ProjectEstimator";
import { TerminalPlayground } from "./TerminalPlayground";
import { TESTIMONIALS, SKILL_CATEGORIES } from "../data/portfolioData";

interface HomeProps {
  setActivePage: (page: string) => void;
  onOpenTerminal?: () => void;
  onTransmitScopeToContact?: (scope: string) => void;
}

export function Home({ setActivePage, onTransmitScopeToContact }: HomeProps) {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);
  const [liveUptime, setLiveUptime] = useState("99.99%");
  const [liveLatency, setLiveLatency] = useState("0.8ms");

  useEffect(() => {
    const interval = setInterval(() => {
      const ms = (0.7 + Math.random() * 0.3).toFixed(1);
      setLiveLatency(`${ms}ms`);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stack = [
    { name: "React 19 Core Engine", icon: Code2, desc: "A highly-optimized functional architecture built for extremely fast virtual DOM manipulation and seamless client-side routing. Employs advanced memoization techniques to ensure rendering happens at sub-millisecond speeds without unnecessary component repaints." },
    { name: "Strict TypeScript Safety", icon: Blocks, desc: "Structural type safety integrated natively into the build pipeline. Enforcing robust payload typing and exhaustive error boundaries allows for scalable enterprise codebases that fail predictably at compile time, never in production." },
    { name: "Tailwind CSS v4 Utilities", icon: Layout, desc: "Direct manipulation of responsive geometric layouts without leaving the component scope. All styling is processed with zero runtime CSS-in-JS overhead, enforcing strict mathematical padding and WCAG contrast." },
    { name: "Google AI Studio & Gemini", icon: Cpu, desc: "Intelligent workflow parsing using Google AI Studio. Contextually aware model injections allow the framework to dynamically generate component scaffolding and structural boundaries automatically, bypassing legacy wireframing formats." },
    { name: "Lighthouse 100/100 Tuning", icon: Zap, desc: "Aggressive Core Web Vitals optimization guaranteeing sub-1.5s time-to-interactive paint cycles and zero Cumulative Layout Shift (CLS) on cold boot across all devices." },
    { name: "Defensive Error Boundaries", icon: ShieldCheck, desc: "Isolated micro-component fallback states preventing cascading DOM crashes during unexpected telemetry payload anomalies or edge-case network disconnects." }
  ];

  const technologies = [
    "REACT 19",
    "TYPESCRIPT",
    "GOOGLE IDX",
    "GOOGLE AI STUDIO",
    "GEMINI 2.5",
    "TAILWIND CSS",
    "VITE",
    "CLOUD RUN",
    "FIVERR PRO",
    "FIGMA"
  ];

  return (
    <div className="flex flex-col justify-center pt-8 sm:pt-16 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-28 sm:space-y-36 items-start text-left relative z-10">
      
      {/* 1. HERO DISPLAY SYSTEM */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full min-h-[75vh] flex justify-center items-center flex-col gap-10 text-center relative"
      >
        <div className="w-full flex flex-col items-center gap-8 relative z-10">
          
          {/* Telemetry Status Badge */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex items-center gap-2.5 bg-[#111827]/70 border border-white/10 px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/5 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-200 font-bold">
              MAAZ KHAN // ARCHITECT ENGINE V3.0 ONLINE
            </span>
          </motion.div>

          <div className="space-y-6 max-w-5xl flex flex-col items-center">
            {/* Hero Display Typography */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="w-full text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.95] flex flex-col"
            >
              <span className="text-white">Redefining</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10b981] to-[#a855f7] pb-2">
                Digital Frontiers
              </span>
            </motion.h1>
            
            {/* Description Sub-Row */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } }
              }}
              className="text-slate-300 max-w-2xl text-center leading-relaxed font-sans text-base sm:text-xl font-light pt-2"
            >
              Lead AI Website Designer & React Developer specializing in building lightning-fast, pixel-perfect, responsive architectures and enterprise-grade performance systems within Google IDX workspaces.
            </motion.p>
          </div>

          {/* Floating Action CTA System */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href="https://www.fiverr.com/s/m582w17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-white font-bold rounded-full flex items-center justify-center gap-3 hover:opacity-90 transition-all focus:outline-none shadow-lg shadow-emerald-500/25 text-xs tracking-widest uppercase"
            >
              <span>Explore Services / Hire</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => setActivePage("projects")}
              className="w-full sm:w-auto px-8 py-4 border border-white/15 bg-[#111827]/40 hover:bg-[#111827]/70 text-slate-200 font-bold rounded-full flex items-center justify-center gap-3 transition-colors focus:outline-none text-xs tracking-widest uppercase"
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Initialize Modules</span>
            </button>

            <button
              onClick={() => setActivePage("contact")}
              className="w-full sm:w-auto px-6 py-4 border border-white/10 hover:border-purple-500/50 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-white font-mono rounded-full flex items-center justify-center gap-2 transition-colors text-xs uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Get Instant Quote</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. TECHNICAL CORE METHODOLOGY */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 w-full max-w-5xl"
      >
        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-widest uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Technical Core Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Architectural Engineering Approach</h2>
        </div>
        <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            My engineering philosophy centers around the precise intersection of pure functional architecture and extreme visual fidelity. Working extensively within the Google IDX environment, I leverage cutting-edge component optimization strategies to ensure application layers render at sub-millisecond speeds. By avoiding bloated third-party dependencies, I maintain strict control over the Document Object Model, manipulating virtual sub-trees directly via highly contextualized React logic and memoization patterns.
          </p>
          <p>
            Fluid Geometry Layouts dictate the structural rhythm of the user interface. Rather than relying on rigid column grids, the layouts are dynamically mapped using CSS Grid and Flexbox primitives parameterized strictly through Tailwind's utility constraints. This mathematical approach to spacing, typography, and negative space guarantees that interfaces fluidly adjust across the widest array of device spectrums—from ultra-wide cinematic displays down to highly compressed vertical viewports without a single broken breakpoint. 
          </p>
          <p>
            State Architecture remains completely decoupled from the rendering pipeline. By deploying a strict separation of concerns, global application states, telemetry relays, and semantic AI routing integrations operate in complete environmental isolation. Custom hooks process incoming streams and dispatch predictable, typed mutations. The result is a fault-tolerant software framework capable of sustaining intensive real-time payload updates while projecting a profoundly clean, luxurious minimalist aesthetic on the client side.
          </p>
        </div>
      </motion.div>

      {/* 3. INTERACTIVE ARCHITECTURE & CODE INSPECTOR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 w-full"
      >
        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Interactive Sandbox</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">Real-Time Architecture & Code Inspector</h2>
          <p className="text-slate-400 text-sm font-light">
            Examine the exact structural implementations powering Maaz Khan's production codebases.
          </p>
        </div>
        <ArchitectureInspector />
      </motion.div>

      {/* 4. CORE COMPETENCIES & ARCHITECTURE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 w-full"
      >
        <div className="space-y-3 pb-4 border-b border-white/10">
          <h3 className="text-xs font-semibold text-emerald-400 tracking-widest uppercase font-mono">Core Capabilities</h3>
          <h2 className="text-3xl font-bold text-white tracking-tight">Core Competencies & Architecture</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.4)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start justify-start p-8 rounded-2xl bg-[#090d16] border border-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all group relative overflow-hidden"
            >
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-6 text-white group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                <item.icon className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">[{String(idx + 1).padStart(2, "0")}]</span>
                <span className="text-base font-bold text-white tracking-wide">{item.name}</span>
              </div>
              <span className="text-sm font-light text-slate-300 leading-relaxed">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 5. INTERACTIVE SKILLS MATRIX */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 w-full p-8 sm:p-12 rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl"
      >
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Technical Matrix</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Verified Technical Skill Proficiency</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveSkillCategory(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeSkillCategory === idx
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill, i) => (
            <div key={skill.name} className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white font-bold">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">{skill.tag}</span>
                  <span className="text-emerald-400 font-bold">{skill.level}%</span>
                </div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. SYSTEM TELEMETRY & PRODUCTION METRICS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 w-full border border-white/10 bg-white/[0.01] p-8 rounded-2xl shadow-2xl"
      >
        <div className="space-y-3 pb-4 border-b border-white/10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold text-emerald-400 tracking-widest uppercase font-mono">Operational Analytics</h3>
            <h2 className="text-3xl font-bold text-white tracking-tight">System Telemetry & Production Metrics</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Telemetry Pulse: {liveLatency}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <MetricCard 
            label="Core System Uptime" 
            value={liveUptime} 
            desc="Sustained availability across globally distributed edge nodes. By decoupling the static frontend from dynamic backend telemetry pipelines, infrastructural downtime events are minimized to negligible margins. Traffic routing is entirely automated to ensure absolute fault tolerance."
            delay={0.2} 
          />
          <MetricCard 
            label="API Latency Time" 
            value="< 1.2s" 
            desc="End-to-end payload resolution times optimized aggressively for sub-1.5s time-to-interactive paint cycles. Data streams are parsed through serverless edge functions, utilizing localized caching layers to intercept redundant queries and reduce blocking operations."
            delay={0.3} 
          />
          <MetricCard 
            label="Modular Components Built" 
            value="150+" 
            desc="Rigorous, highly-typed React components deployed and cataloged for scalable enterprise-grade component libraries. Each modular node is strictly isolated, allowing complex matrices to be imported securely without injecting scope pollution or CSS collisions."
            delay={0.4} 
          />
          <MetricCard 
            label="Client Visual Satisfaction" 
            value="100%" 
            desc="Unanimous conversion validation resulting from intense psychological design targeting and pixel-perfect rendering. By mapping exact layout variables to fluid geometric constants, the aesthetic output perfectly matches requested client specifications every time."
            delay={0.5} 
          />
        </div>
      </motion.div>

      {/* 7. INTERACTIVE PROJECT SCOPE ESTIMATOR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <ProjectEstimator onTransmitScope={(scope) => {
          if (onTransmitScopeToContact) {
            onTransmitScopeToContact(scope);
          }
          setActivePage("contact");
        }} />
      </motion.div>

      {/* 8. DEVELOPER CLI TERMINAL PLAYGROUND */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 w-full"
      >
        <div className="space-y-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
            <Terminal className="w-3.5 h-3.5" /> Interactive CLI Terminal
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Command-Line Developer Console</h2>
          <p className="text-slate-400 text-sm font-light">
            Query Maaz Khan's codebase, run telemetry benchmarks, and test system routines.
          </p>
        </div>
        <TerminalPlayground onNavigate={setActivePage} />
      </motion.div>

      {/* 9. CLIENT TESTIMONIALS & VERIFICATION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 w-full"
      >
        <div className="space-y-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
            <Award className="w-3.5 h-3.5" /> Verified Client Validation
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Enterprise Client Reviews & Ratings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-white/10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified Order
                  </span>
                </div>
                <p className="text-slate-300 text-sm font-light italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.client}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 10. TECHNOLOGY STACK & PLATFORMS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-10 overflow-hidden relative w-full pt-8 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Core Technologies & Production Stack</span>
          <span className="text-[10px] font-mono text-emerald-400">100% Type-Safe & High-Performance</span>
        </div>
        <div className="flex w-full space-x-16 animate-[marquee_28s_linear_infinite] overflow-hidden whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="inline-flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white select-none">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function MetricCard({ label, value, desc, delay }: { label: string; value: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-8 rounded-2xl border border-white/10 bg-[#090d16] hover:border-white/20 flex items-start flex-col gap-6 transition-all"
    >
      <div className="relative">
        <div className="text-5xl lg:text-6xl font-light font-sans tracking-tight text-white">{value}</div>
        <motion.div 
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
        />
      </div>
      <div className="flex flex-col gap-3">
         <div className="text-[11px] font-bold uppercase tracking-widest text-white font-mono">
           {label}
         </div>
         <p className="text-xs text-slate-400 font-light leading-relaxed">
           {desc}
         </p>
      </div>
    </motion.div>
  );
}
