import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, ExternalLink, ShieldCheck, Download, Award, Terminal, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCE } from "../data/portfolioData";

export function Application() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col justify-center pt-28 pb-24 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full space-y-12 items-start text-left">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 w-full"
      >
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
          <Briefcase className="w-3.5 h-3.5" /> Career Profile & Executive Briefing
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/10 pb-6">
          <h1 className="text-4xl sm:text-6xl font-bold font-sans text-white tracking-tighter">
            Executive Briefing.
          </h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-wider transition-colors w-fit"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </motion.div>

      {/* Main Application Letter Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="w-full space-y-8 border border-white/10 bg-[#090d16] p-8 sm:p-12 rounded-2xl relative overflow-hidden shadow-2xl"
      >
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="border-b border-white/10 pb-8 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Target Engagement
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
                Application: WSP TECH
              </h2>
              <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">
                Target Role: AI Product Builder Intern & Lead Frontend Architect
              </p>
            </div>
            <div className="flex flex-col space-y-2 text-xs font-mono text-slate-400 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Location: Remote / Global</div>
              <div className="flex items-center gap-2"><Briefcase className="w-3.5 h-3.5 text-purple-400" /> Engagement: Full-Stack / AI</div>
              <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> Target Window: May 2026</div>
            </div>
          </div>
        </motion.div>

        {/* Letter Body */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="space-y-6 text-slate-300 leading-relaxed font-light text-base sm:text-lg"
        >
          <p className="font-semibold text-white">Hi Hiring Team at WSP TECH,</p>

          <p>
            I am highly interested in the AI Product Builder position. My technical stack aligns 100% with your focus areas in modern Frontend UI/UX, Google IDX workflows, and AI Automation pipelines.
          </p>

          <p>
            I architect responsive, pixel-perfect layouts from scratch using React 19, TypeScript, and Tailwind CSS within optimized developer workspaces like Google IDX. Recently, I engineered a high-performance framework called "VORTEX" featuring real-time data counters, custom glassmorphic shaders, sub-millisecond memoization, and active component-state micro-routing. Furthermore, I have extensive hands-on experience connecting functional code environments with Google AI Studio (Gemini models) to build autonomous generative UI streaming engines.
          </p>

          <p>
            I am serious, consistent, and ready to contribute to WSP Tech's real-world software products immediately. My full portfolio case studies are pinned on my verified LinkedIn and Fiverr profiles. Thank you for your consideration!
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <span className="text-slate-400 text-xs font-mono uppercase tracking-wider block">Signature:</span>
              <span className="text-white font-bold text-xl font-sans mt-0.5 block">Maaz Khan</span>
              <span className="text-emerald-400 text-xs font-mono">Lead AI Website Designer & React Architect</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Candidate Status</span>
            </div>
          </div>
        </motion.div>

        {/* Verification / Profiles */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="pt-8 border-t border-white/10 flex flex-wrap gap-4"
        >
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-bold rounded-xl flex items-center gap-2 text-xs tracking-wider uppercase font-mono transition-colors"
          >
            <span>View LinkedIn Profile</span> 
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </a>
          <a 
            href="https://www.fiverr.com/s/m582w17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold rounded-xl flex items-center gap-2 text-xs tracking-wider uppercase font-mono hover:opacity-90 transition-all shadow-lg shadow-emerald-500/15"
          >
            <span>Hire on Fiverr Pro</span> 
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Experience History Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-6"
      >
        <div className="space-y-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
            <Award className="w-3.5 h-3.5" /> Track Record of Execution
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
            Professional Experience & Milestones
          </h3>
        </div>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#090d16] border border-white/10 space-y-4 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <div className="text-emerald-400 text-xs font-mono mt-0.5">{exp.company} · {exp.location}</div>
                </div>
                <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {exp.description}
              </p>
              <div className="space-y-2 pt-2">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
