import React, { useState, useRef, useEffect, type ReactNode, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { motion } from "motion/react";
import { Terminal, Send, Trash2, Maximize2, Minimize2, CornerDownLeft, Sparkles, ExternalLink } from "lucide-react";
import { ALL_PROJECTS, ALL_SERVICES } from "../data/portfolioData";

interface TerminalProps {
  onNavigate: (page: string) => void;
  isOpen?: boolean;
}

export function TerminalPlayground({ onNavigate }: TerminalProps) {
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<Array<{ command: string; output: ReactNode; time: string }>>([
    {
      command: "sys-init",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Maaz Khan Architecture Engine v3.0 [Initialized]</p>
          <p className="text-slate-400">Type <span className="text-cyan-400 font-bold">help</span> to view available system routines, or click the quick command chips below.</p>
        </div>
      ),
      time: "00:00:01"
    }
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMAND PROTOCOLS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-xs">
              <div><span className="text-emerald-400 font-bold">projects</span> - List operational architectures</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Inspect core engineering competencies</div>
              <div><span className="text-emerald-400 font-bold">services</span> - View client offerings & turnaround</div>
              <div><span className="text-emerald-400 font-bold">benchmark</span> - Run live client rendering benchmark</div>
              <div><span className="text-emerald-400 font-bold">about</span> - Background of Maaz Khan</div>
              <div><span className="text-emerald-400 font-bold">hire</span> - Transmit Fiverr / Contract inquiry</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal session output</div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-emerald-400 font-bold">ACTIVE ENTERPRISE FRAMEWORKS:</p>
            <div className="space-y-2 font-mono text-xs">
              {ALL_PROJECTS.map((p) => (
                <div key={p.id} className="p-2 rounded bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div>
                    <span className="text-white font-bold">{p.title}</span> <span className="text-slate-400 text-[11px]">({p.tags.join(", ")})</span>
                    <p className="text-slate-400 text-[11px]">{p.subtitle}</p>
                  </div>
                  <button
                    onClick={() => onNavigate("projects")}
                    className="px-2.5 py-1 text-[10px] uppercase font-bold text-emerald-400 border border-emerald-500/30 rounded hover:bg-emerald-500/20 w-fit"
                  >
                    Launch View →
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-purple-400 font-bold">TECHNICAL PROFICIENCY INDEX:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                <span className="text-emerald-400 font-bold">Frontend:</span> React 19 (98%), TypeScript (96%), Tailwind v4 (99%), Motion (94%), Vite (97%)
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                <span className="text-purple-400 font-bold">AI & LLM:</span> Google AI Studio (97%), Gemini API, Generative UI Streaming, Google IDX (98%)
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                <span className="text-cyan-400 font-bold">Performance:</span> Lighthouse 100/100 Tuning, Sub-1.2s FCP, WebSockets, Memory Profiling
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                <span className="text-yellow-400 font-bold">Backend/Edge:</span> Node.js, Express, Cloud Run, Real-time telemetry, REST APIs
              </div>
            </div>
          </div>
        );
        break;

      case "services":
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold">SERVICES & DELIVERABLES:</p>
            <div className="space-y-1.5 font-mono text-xs">
              {ALL_SERVICES.map(s => (
                <div key={s.id} className="flex justify-between items-center p-2 rounded bg-white/[0.02] border border-white/5">
                  <div>
                    <span className="text-white font-bold">{s.title}</span>
                    <span className="text-slate-400 text-[11px] block">{s.tagline}</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs">{s.turnaroundTime}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "benchmark":
        const randFps = Math.floor(Math.random() * 8) + 115;
        const randLatency = (Math.random() * 0.4 + 0.5).toFixed(2);
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-emerald-400 font-bold">LIVE TELEMETRY BENCHMARK AUDIT:</p>
            <div className="p-3 bg-black/40 border border-emerald-500/30 rounded font-mono text-xs space-y-1">
              <div className="flex justify-between"><span className="text-slate-400">Virtual DOM Frame Rate:</span> <span className="text-emerald-400 font-bold">{randFps} FPS</span></div>
              <div className="flex justify-between"><span className="text-slate-400">DOM Reconciliation Latency:</span> <span className="text-emerald-400 font-bold">{randLatency} ms</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Lighthouse Performance Index:</span> <span className="text-emerald-400 font-bold">100 / 100</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Memory Heap Delta:</span> <span className="text-cyan-400 font-bold">0.00 MB (Zero Leak)</span></div>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-2 text-slate-300 font-sans text-xs leading-relaxed">
            <p className="text-white font-bold text-sm">Maaz Khan — Lead AI Website Designer & React Architect</p>
            <p>Specializes in high-frequency React 19 application structures, Google IDX development pipelines, and autonomous AI integrations using Google AI Studio & Gemini models.</p>
            <p className="text-slate-400">Currently delivering client projects globally through verified Fiverr Pro contracts and direct enterprise consulting.</p>
          </div>
        );
        break;

      case "hire":
      case "contact":
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-emerald-400 font-bold">TRANSMIT ENGAGEMENT REQUEST:</p>
            <p className="text-xs">You can initialize contact directly via the contact portal or hire Maaz on Fiverr for instant project escrow protection.</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => onNavigate("contact")}
                className="px-3 py-1.5 bg-emerald-500 text-black font-bold text-[11px] rounded uppercase tracking-wider hover:bg-emerald-400"
              >
                Open Contact Portal
              </button>
              <a
                href="https://www.fiverr.com/s/m582w17"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-white/20 hover:border-white text-white font-bold text-[11px] rounded uppercase tracking-wider flex items-center gap-1.5"
              >
                Fiverr Pro Order <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-rose-400 font-mono text-xs">
            Command not recognized: "{cmdStr}". Type <span className="text-cyan-400 font-bold cursor-pointer underline" onClick={() => handleCommand("help")}>help</span> to view available routines.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmdStr, output, time }]);
    setInput("");
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    }
  };

  const quickChips = ["help", "projects", "skills", "benchmark", "hire", "clear"];

  return (
    <motion.div
      layout
      className={`w-full rounded-xl bg-[#070b14] border border-white/10 overflow-hidden shadow-2xl transition-all font-mono text-xs flex flex-col ${
        isExpanded ? "h-[500px]" : "h-[360px]"
      }`}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-300 font-bold text-[11px] tracking-wider ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            maaz-khan@architect-os:~$
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE
          </div>
          <button
            onClick={() => setHistory([])}
            title="Clear output"
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Minimize" : "Maximize"}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Output Console */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 overflow-y-auto space-y-4 cursor-text bg-[#070b14]/90 selection:bg-emerald-500/30"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <span className="text-[#10b981] font-bold">maaz@os ~ %</span>
              <span className="text-white font-bold">{item.command}</span>
              <span className="text-slate-600 text-[9px] ml-auto font-mono">{item.time}</span>
            </div>
            <div className="pl-3 border-l border-white/10">{item.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Quick Chips */}
      <div className="px-4 py-2 bg-[#090e1c] border-t border-white/5 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-emerald-400" /> Quick:
        </span>
        {quickChips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleCommand(chip)}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 text-[11px] font-mono border border-white/5 hover:border-emerald-500/30 transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Command Input Bar */}
      <div className="flex items-center px-4 py-2.5 bg-[#0d1424] border-t border-white/10">
        <span className="text-emerald-400 font-bold mr-2">›</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'projects', 'skills', 'benchmark')..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs"
        />
        <button
          onClick={() => handleCommand(input)}
          className="p-1 text-slate-400 hover:text-emerald-400 transition-colors ml-2"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
