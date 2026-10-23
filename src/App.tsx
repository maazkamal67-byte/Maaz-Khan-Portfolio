import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Application } from "./components/Application";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { TerminalPlayground } from "./components/TerminalPlayground";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Terminal as TerminalIcon, Sparkles, X } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [prefillScope, setPrefillScope] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

      // Cmd+K or Ctrl+K to toggle Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      if (e.key === 'Escape') {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
          return;
        }
        if (isTerminalModalOpen) {
          setIsTerminalModalOpen(false);
          return;
        }
        if (isInput) target.blur();
        setSearchQuery("");
        return;
      }

      if (isInput) return;

      switch (e.key.toLowerCase()) {
        case 'h': setActivePage("home"); break;
        case 'p': setActivePage("projects"); break;
        case 's': setActivePage("services"); break;
        case 'a':
        case 'w': setActivePage("application"); break;
        case 'c': setActivePage("contact"); break;
        case 't': setIsTerminalModalOpen(prev => !prev); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage, isCommandPaletteOpen, isTerminalModalOpen]);

  const handleTransmitScopeToContact = (scope: string) => {
    setPrefillScope(scope);
    setActivePage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans flex flex-col relative overflow-x-hidden selection:bg-[#10b981]/30 selection:text-white">
      {/* Background ambient mesh */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_900px_at_50%_15%,rgba(15,23,42,0.6),rgba(3,7,18,0.95)_70%,#030712)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-dot-pattern opacity-40" />

      {/* Top progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#a855f7] z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <Navigation 
        activePage={activePage} 
        setActivePage={setActivePage} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 w-full mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            {activePage === "home" && (
              <Home 
                setActivePage={setActivePage} 
                onOpenTerminal={() => setIsTerminalModalOpen(true)}
                onTransmitScopeToContact={handleTransmitScopeToContact}
              />
            )}
            {activePage === "projects" && <Projects searchQuery={searchQuery} />}
            {activePage === "services" && (
              <Services 
                searchQuery={searchQuery} 
                setActivePage={setActivePage}
                onTransmitScopeToContact={handleTransmitScopeToContact}
              />
            )}
            {activePage === "application" && <Application />}
            {activePage === "contact" && <Contact prefillScope={prefillScope} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Command Palette Modal (Cmd+K) */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        setActivePage={setActivePage}
        onOpenTerminal={() => setIsTerminalModalOpen(true)}
      />

      {/* Floating CLI Terminal Modal */}
      <AnimatePresence>
        {isTerminalModalOpen && (
          <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#070b14] border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center px-4 py-3 bg-[#0d1424] border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-white font-bold">
                  <TerminalIcon className="w-4 h-4 text-emerald-400" />
                  <span>Maaz Khan Interactive Developer CLI</span>
                </div>
                <button
                  onClick={() => setIsTerminalModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-2 sm:p-4">
                <TerminalPlayground 
                  onNavigate={(page) => {
                    setActivePage(page);
                    setIsTerminalModalOpen(false);
                  }} 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Quick Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsTerminalModalOpen(true)}
          className="p-3 rounded-full bg-[#0d1424] hover:bg-[#131d33] border border-white/15 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 shadow-xl transition-all group flex items-center gap-2"
          title="Open Developer Terminal (T)"
        >
          <TerminalIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono pr-1 hidden group-hover:inline transition-all text-white">CLI</span>
        </button>
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="p-3 rounded-full bg-[#0d1424] hover:bg-[#131d33] border border-white/15 hover:border-purple-500/50 text-slate-300 hover:text-purple-400 shadow-xl transition-all group flex items-center gap-2"
          title="Spotlight Search (Cmd+K)"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono pr-1 hidden group-hover:inline transition-all text-white">⌘K</span>
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
