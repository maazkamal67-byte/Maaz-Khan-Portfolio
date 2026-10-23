import React, { useState, useMemo, useRef, useEffect, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, Activity, Star, Clock, ExternalLink, ShieldCheck, Play, CheckCircle2, Zap, Layers, Sparkles } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import { ALL_PROJECTS } from "../data/portfolioData";
import { Project } from "../types";

const HighlightText = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-emerald-500/20 text-emerald-300 font-semibold rounded px-1">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export function Projects({ searchQuery = "" }: { searchQuery?: string }) {
  const [sortBy, setSortBy] = useState<"default" | "devTime" | "lastUpdated">("default");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [inspectingProject, setInspectingProject] = useState<Project | null>(null);

  const handleToggleCompare = (id: string) => {
    setSelectedForCompare(prev => {
      if (prev.includes(id)) return prev.filter(p => p !== id);
      if (prev.length < 2) return [...prev, id];
      return [prev[1], id];
    });
  };

  const allTags = useMemo(() => Array.from(new Set(ALL_PROJECTS.flatMap(p => p.tags))).sort(), []);

  const projects = useMemo(() => {
    let filtered = ALL_PROJECTS.filter((project) => {
      const matchesSearch = !searchQuery || (
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });

    if (sortBy === "devTime") {
      filtered.sort((a, b) => {
        const timeA = parseInt(a.devTime.replace(/\D/g, ""), 10);
        const timeB = parseInt(b.devTime.replace(/\D/g, ""), 10);
        return timeB - timeA;
      });
    } else if (sortBy === "lastUpdated") {
      filtered.sort((a, b) => {
        const dateA = new Date(a.lastUpdated).getTime();
        const dateB = new Date(b.lastUpdated).getTime();
        return dateB - dateA;
      });
    }

    return filtered;
  }, [searchQuery, sortBy, selectedTag]);

  return (
    <div className="flex flex-col items-start justify-start pt-28 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 w-full"
      >
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
          <Layers className="w-3.5 h-3.5" /> Deployed Infrastructure & Case Studies
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans text-white tracking-tighter">
          Live Operational Frameworks.
        </h1>
        <p className="text-slate-300 max-w-3xl text-base sm:text-xl leading-relaxed pt-2 font-light">
          A showcase of production-grade architectures deployed at the edge by Maaz Khan. Rigorously engineered for enterprise scalability, sub-millisecond execution, and uncompromised visual luxury.
        </p>

        {/* Filter and sorting toolbar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag("All")}
              className={`px-4 py-2 text-xs font-bold font-mono rounded-lg border uppercase tracking-wider transition-all ${
                selectedTag === "All"
                  ? "bg-emerald-500 text-black border-emerald-500 shadow-lg shadow-emerald-500/20"
                  : "bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              All ({ALL_PROJECTS.length})
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-2 text-xs font-bold font-mono rounded-lg border uppercase tracking-wider transition-all ${
                  selectedTag === tag
                    ? "bg-emerald-500 text-black border-emerald-500 shadow-lg shadow-emerald-500/20"
                    : "bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 items-center w-full lg:w-auto">
            <button
              onClick={() => {
                setIsCompareMode(!isCompareMode);
                setSelectedForCompare([]);
              }}
              className={`px-4 py-2.5 text-xs font-bold font-mono rounded-lg border uppercase tracking-wider transition-all ${
                isCompareMode
                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                  : "bg-white/[0.02] text-slate-300 border-white/10 hover:border-white/30"
              }`}
            >
              {isCompareMode ? "Exit Compare Mode" : "Compare Mode"}
            </button>

            <div className="relative flex-1 lg:flex-initial">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full appearance-none bg-[#090d16] border border-white/15 text-white text-xs font-mono font-bold tracking-wider uppercase py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="default">Sort: Default</option>
                <option value="devTime">Sort: Dev Hours</option>
                <option value="lastUpdated">Sort: Last Updated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Compare View */}
      {isCompareMode && selectedForCompare.length === 2 ? (
        <CompareView 
          project1={ALL_PROJECTS.find(p => p.id === selectedForCompare[0])!}
          project2={ALL_PROJECTS.find(p => p.id === selectedForCompare[1])!}
          onClose={() => {
            setSelectedForCompare([]);
            setIsCompareMode(false);
          }}
        />
      ) : projects.length > 0 ? (
        <>
          {isCompareMode && (
            <div className="w-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl text-xs font-mono tracking-wider flex justify-between items-center">
              <span>Compare Mode Active: Select {2 - selectedForCompare.length} more framework{2 - selectedForCompare.length > 1 ? 's' : ''} to compare architectures side-by-side.</span>
            </div>
          )}

          <div className="flex flex-col gap-12 w-full">
            {projects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={idx * 0.1} 
                searchQuery={searchQuery}
                isCompareMode={isCompareMode}
                isSelected={selectedForCompare.includes(project.id)}
                onToggleCompare={() => handleToggleCompare(project.id)}
                onInspect={() => setInspectingProject(project)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full text-center py-24 text-slate-400 font-mono text-sm tracking-widest uppercase border border-white/5 rounded-2xl">
          No operational frameworks found matching "{searchQuery}"
        </div>
      )}

      {/* Deep-Dive Architecture Inspection Modal */}
      <AnimatePresence>
        {inspectingProject && (
          <div className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#090d16] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                    Deep Architectural Specification // {inspectingProject.id}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">
                    {inspectingProject.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">{inspectingProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setInspectingProject(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {inspectingProject.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                    <div className="text-xl font-bold text-emerald-400 font-sans mt-1">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">Architecture Analysis & System Notes:</h4>
                <p className="text-slate-300 text-sm font-light leading-relaxed p-4 rounded-xl bg-black/40 border border-white/5">
                  {inspectingProject.architectureNotes}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">Verified Feature Matrix:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {inspectingProject.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <a
                  href={inspectingProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition-all flex items-center gap-2"
                >
                  Launch Deployed App <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const techDefinitions: Record<string, string> = {
  "React": "UI Library for interactive structures",
  "React 19": "Latest concurrent React engine with server actions",
  "TypeScript": "Strict syntactical superset of JavaScript",
  "Node.js": "V8 asynchronous server engine runtime",
  "Express": "Minimalist backend API routing framework",
  "WebSockets": "Full-duplex persistent TCP communication",
  "GenAI SDK": "Model integration & inference pipeline",
  "Google GenAI SDK": "Gemini 2.5 Pro & Flash model bindings",
  "Tailwind CSS": "Utility-first zero-overhead CSS engine",
  "Recharts": "Composable D3-based charting components",
  "Module Federation": "Independent micro-frontend orchestrator"
};

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  delay: number;
  searchQuery: string;
  isCompareMode?: boolean;
  isSelected?: boolean;
  onToggleCompare?: () => void;
  onInspect?: () => void;
}

function ProjectCard({
  project,
  delay,
  searchQuery,
  isCompareMode,
  isSelected,
  onToggleCompare,
  onInspect
}: ProjectCardProps) {
  const [note, setNote] = useState<string>(() => {
    return sessionStorage.getItem(`project_note_${project.id}`) || "";
  });
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const readTime = useMemo(() => {
    const textToRead = `${project.description} ${(project.features || []).join(" ")}`;
    const wordCount = textToRead.trim().split(/\s+/).length;
    const time = Math.max(1, Math.ceil(wordCount / 200));
    return `${time} min read`;
  }, [project]);

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    setNote(newNote);
    setSaveStatus('saving');
    sessionStorage.setItem(`project_note_${project.id}`, newNote);
    
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      setSaveStatus('saved');
      saveTimeoutRef.current = setTimeout(() => setSaveStatus('idle'), 2000);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#090d16] hover:border-white/20 shadow-2xl flex flex-col lg:flex-row gap-10 lg:gap-14 relative overflow-hidden group"
    >
      {/* Accent corner light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

      {/* Left Column: Title, Telemetry, Descriptions */}
      <div className="flex-1 space-y-6">
        <div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Module_{project.id}
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              {readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            <HighlightText text={project.title} highlight={searchQuery} />
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
            {project.subtitle}
          </p>

          {/* Metric Bar */}
          <div className="flex flex-wrap items-center gap-6 my-6 border-y border-white/10 py-4 text-xs font-mono">
            <div>
              <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Engineering Hours</span>
              <span className="text-white font-bold">{project.devTime}</span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Scale Index</span>
              <span className="text-emerald-400 font-bold">{project.scaleScore}</span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Lighthouse</span>
              <span className="text-emerald-400 font-bold">{project.lighthouseScore}/100</span>
            </div>
            {project.deploymentStatus && (
              <>
                <div className="w-px h-6 bg-white/10 hidden sm:block" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Status</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.deploymentStatus}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Body description */}
          <div className="text-slate-300 text-sm leading-relaxed font-light space-y-3">
            {project.description.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i}><HighlightText text={paragraph} highlight={searchQuery} /></p>
            ))}
          </div>

          {/* Tech stack */}
          <div className="pt-6 border-t border-white/10 space-y-2">
            <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              Core Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono font-medium">
              {project.techStack.map((tech) => (
                <div key={tech} className="relative group/tech cursor-pointer">
                  <span className="px-3 py-1 rounded-md bg-white/[0.03] text-slate-200 border border-white/10 hover:border-emerald-500/50 hover:text-white transition-colors block">
                    {tech}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] opacity-0 group-hover/tech:opacity-100 transition-all duration-200 translate-y-1 group-hover/tech:translate-y-0 pointer-events-none z-20">
                    <div className="bg-[#0b1120] text-slate-300 text-[10px] px-3 py-1.5 rounded-lg shadow-xl border border-white/15 font-sans text-center">
                      {techDefinitions[tech] || "Production standard"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[10px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: Architectural Specifications & Session Notes */}
      <div className="w-full lg:w-96 flex flex-col justify-between space-y-6 pt-6 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-white/10">
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans border-b border-white/10 pb-3 flex items-center justify-between">
            <span>Architectural Specs</span>
            <span className="text-[10px] font-mono text-emerald-400">{project.lighthouseScore}/100 Score</span>
          </h4>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs font-light leading-relaxed">
                <div className="w-1.5 h-1.5 bg-emerald-400 mt-1.5 rounded-full shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Session Notes with Auto-Save Indicator */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              Reviewer Notes (Session Storage)
            </label>
            <span className={`text-[10px] font-mono uppercase tracking-widest font-bold transition-opacity duration-300 ${
              saveStatus === 'saved' ? 'text-emerald-400 opacity-100' : saveStatus === 'saving' ? 'text-slate-400 opacity-100' : 'opacity-0'
            }`}>
              {saveStatus === 'saving' ? 'Saving...' : '✓ Auto-Saved'}
            </span>
          </div>
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Add personal notes or evaluation scores for this framework..."
            className="w-full bg-white/[0.02] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all resize-none h-20 font-sans"
          />
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <div className="flex gap-2">
            {onInspect && (
              <button
                onClick={onInspect}
                className="flex-1 py-3 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 font-mono"
              >
                <span>Deep Specs</span>
              </button>
            )}

            {isCompareMode && (
              <button 
                onClick={onToggleCompare}
                className={`flex-1 py-3 text-xs font-bold font-mono rounded-xl border uppercase tracking-wider transition-all ${
                  isSelected 
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50" 
                    : "bg-white/[0.02] text-slate-300 border-white/10 hover:border-white/30"
                }`}
              >
                {isSelected ? "Selected" : "Select"}
              </button>
            )}
          </div>

          <a
            href={project.link}
            target={project.link === "#" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15"
          >
            <span>Access Live Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CompareView({ project1, project2, onClose }: { project1: Project; project2: Project; onClose: () => void }) {
  if (!project1 || !project2) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col pt-4 space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#090d16] border border-white/10 p-6 rounded-2xl gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">Comparative Architecture Matrix</h3>
          <p className="text-slate-400 text-xs font-mono tracking-wider mt-1">Side-by-side technical evaluation of selected frameworks</p>
        </div>
        <button 
          onClick={onClose}
          className="px-5 py-2.5 text-xs font-bold font-mono rounded-xl border border-white/20 text-white uppercase tracking-wider hover:bg-white/10 transition-all shrink-0"
        >
          Exit Compare View
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[project1, project2].map((project, idx) => (
          <div key={idx} className="bg-[#090d16] border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-emerald-400">
                Module_{project.id}
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1 border-b border-white/10 pb-4">
                {project.title}
              </h2>
            </div>
               
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase block">Dev Time</span>
                <span className="text-white font-bold text-sm mt-0.5 block">{project.devTime}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase block">Scale Index</span>
                <span className="text-emerald-400 font-bold text-sm mt-0.5 block">{project.scaleScore}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase block">Lighthouse</span>
                <span className="text-white font-bold text-sm mt-0.5 block">{project.lighthouseScore}/100</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 text-[10px] uppercase block">FPS Benchmark</span>
                <span className="text-cyan-400 font-bold text-sm mt-0.5 block">{project.benchmarkFps} FPS</span>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider font-mono">Core Specifications:</h4>
              <ul className="space-y-2.5">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs font-light">
                    <div className="w-1.5 h-1.5 bg-emerald-400 mt-1.5 rounded-full shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={project.link}
                target={project.link === "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-full text-center block px-6 py-3.5 text-xs font-bold font-mono rounded-xl border border-white/20 uppercase tracking-widest text-white hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
              >
                Access {project.id} Portal
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
