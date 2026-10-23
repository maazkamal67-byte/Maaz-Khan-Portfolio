import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Terminal, Code2, Briefcase, Mail, FileText, ArrowRight, X, Sparkles, ExternalLink } from "lucide-react";
import { ALL_PROJECTS } from "../data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  setActivePage: (page: string) => void;
  onOpenTerminal?: () => void;
}

export function CommandPalette({ isOpen, onClose, setActivePage, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle escape & keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const quickNav = [
    { id: "home", label: "Home Overview", icon: Terminal, desc: "Hero, system telemetry & tech stack" },
    { id: "projects", label: "Deployed Projects", icon: Code2, desc: "VORTEX, Elite Suite, AURA AI" },
    { id: "services", label: "Core Competencies", icon: Briefcase, desc: "AI frameworks, React 19, Speed optimization" },
    { id: "application", label: "Executive Briefing", icon: FileText, desc: "Career profile & WSP Tech application" },
    { id: "contact", label: "Initialize Contact", icon: Mail, desc: "Send transmission & hire Maaz Khan" },
  ];

  const filteredProjects = ALL_PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNav = quickNav.filter(n =>
    n.label.toLowerCase().includes(query.toLowerCase()) ||
    n.desc.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#090d16] border border-white/15 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
            <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search commands, projects, skills, or navigation..."
              className="w-full bg-transparent text-white text-sm placeholder-slate-500 focus:outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results Box */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs">
            {/* Quick Actions */}
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#10b981]" /> Navigation Hub
              </div>
              <div className="space-y-1">
                {filteredNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-slate-400 group-hover:text-[#10b981] transition-colors" />
                      <div>
                        <div className="text-white font-medium text-sm group-hover:text-[#10b981] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-slate-400 text-xs font-light">{item.desc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Hub */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 border-t border-white/5 pt-3">
                  Operational Projects ({filteredProjects.length})
                </div>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActivePage("projects");
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                    >
                      <div>
                        <div className="text-white font-medium text-sm flex items-center gap-2">
                          {p.title}
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {p.scaleScore}
                          </span>
                        </div>
                        <div className="text-slate-400 text-xs line-clamp-1 mt-0.5">{p.subtitle}</div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#10b981]">
                        View Framework →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Links */}
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 border-t border-white/5 pt-3">
                Quick Shortcuts
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.fiverr.com/s/m582w17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="font-mono text-xs">Fiverr Pro Order</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
                <button
                  onClick={() => {
                    if (onOpenTerminal) onOpenTerminal();
                    setActivePage("home");
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5 hover:border-purple-500/40 text-slate-300 hover:text-white transition-colors text-left"
                >
                  <span className="font-mono text-xs">Developer CLI / Terminal</span>
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Navigation: Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">ESC</kbd> to exit</span>
            <span className="text-emerald-400">MAAZ KHAN PORTFOLIO OS</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
