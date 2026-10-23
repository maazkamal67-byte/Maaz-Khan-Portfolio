import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Code2, Briefcase, Mail, FileText, Search, Hexagon, ExternalLink, Menu, X, Sparkles } from "lucide-react";

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenCommandPalette: () => void;
  onOpenTerminal?: () => void;
}

export function Navigation({
  activePage,
  setActivePage,
  searchQuery,
  setSearchQuery,
  onOpenCommandPalette,
  onOpenTerminal
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Terminal },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "application", label: "Application", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 lg:px-12 h-20 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActivePage("home");
              setSearchQuery("");
            }}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="relative">
              <Hexagon className="w-6 h-6 text-[#10b981] group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.2} />
              <div className="absolute inset-0 bg-[#10b981]/20 blur-sm rounded-full group-hover:bg-[#10b981]/40 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-widest text-white uppercase font-sans leading-none flex items-center gap-1.5">
                MAAZ KHAN
              </span>
              <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                AI ARCHITECT // IDX
              </span>
            </div>
          </button>

          {/* Availability Pill */}
          <div className="hidden xl:flex items-center gap-2 ml-4 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR HIRE</span>
          </div>
        </div>

        {/* Center / Right Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 lg:gap-8 text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setSearchQuery("");
                  }}
                  className={`transition-colors py-2 relative hover:text-white ${
                    isActive ? "text-white font-bold" : ""
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-gradient-to-r from-[#10b981] to-[#06b6d4]"
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 text-xs transition-colors"
            title="Open Quick Command Palette (Cmd+K / Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-mono text-[10px] text-slate-400 hidden lg:inline">Search (⌘K)</span>
          </button>

          {/* Terminal button */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open CLI Terminal"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-purple-400 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Terminal / Hire Action */}
          <a
            href="https://www.fiverr.com/s/m582w17"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-white font-bold rounded-full hover:opacity-90 transition-all text-[11px] tracking-widest uppercase flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
          >
            <span>Hire Me</span>
            <ExternalLink className="w-3 h-3 text-white" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-0 bg-[#070b14]/95 backdrop-blur-2xl border-b border-white/10 p-6 z-40 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      setSearchQuery("");
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-mono transition-colors ${
                      isActive
                        ? "bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://www.fiverr.com/s/m582w17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-white text-center font-bold rounded-lg uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Hire Maaz Khan on Fiverr <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
