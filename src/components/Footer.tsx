import { useState, useEffect } from "react";
import { ArrowUp, Terminal, Shield, Hexagon, ExternalLink } from "lucide-react";

export function Footer() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "Fiverr Pro", url: "https://www.fiverr.com/s/m582w17" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Facebook", url: "https://web.facebook.com/share/p/1KWpNj5VqV/" },
    { name: "Instagram", url: "https://www.instagram.com/maazk8798/" },
  ];

  return (
    <footer className="w-full py-10 px-4 sm:px-8 lg:px-12 bg-[#030712] border-t border-white/10 relative z-10 space-y-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Stack */}
        <div className="flex items-center gap-3">
          <Hexagon className="w-5 h-5 text-[#10b981]" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white uppercase tracking-widest font-sans">
              MAAZ KHAN
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">
              AI ARCHITECT // GOOGLE IDX // REACT 19
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-xs font-mono font-medium flex items-center gap-1 group"
            >
              <span>{link.name}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </div>

      {/* Bottom Status Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
        <div>
          SYSTEM VERSION 3.0.0 // © {new Date().getFullYear()} MAAZ KHAN. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex items-center gap-6">
          {timeStr && <span>TIME: {timeStr}</span>}
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
