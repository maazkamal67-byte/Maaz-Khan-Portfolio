import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Clock, ExternalLink, Sparkles, Cpu, Layers } from "lucide-react";
import { ALL_SERVICES } from "../data/portfolioData";
import { Service } from "../types";
import { ProjectEstimator } from "./ProjectEstimator";

interface ServicesProps {
  searchQuery?: string;
  setActivePage?: (page: string) => void;
  onTransmitScopeToContact?: (scope: string) => void;
}

interface ServiceCardProps {
  key?: string | number;
  service: Service;
  delay: number;
  setActivePage?: (page: string) => void;
}

export function Services({ searchQuery = "", setActivePage, onTransmitScopeToContact }: ServicesProps) {
  const services = ALL_SERVICES.filter(service => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.tagline.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex flex-col items-start justify-start pt-28 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" /> Capabilities & Engineering Services
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans text-white tracking-tighter">
          Core Competencies.
        </h1>
        <p className="text-slate-300 text-base sm:text-xl leading-relaxed pt-2 font-light">
          A definitive, explicit outline of professional engineering expertise by Maaz Khan. Each capability acts as a structurally sound foundation enforcing strict technical standards, zero-lag performance, and visual mastery.
        </p>
      </motion.div>

      {/* Services Grid */}
      {services.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {services.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              delay={idx * 0.15} 
              setActivePage={setActivePage}
            />
          ))}
        </div>
      ) : (
        <div className="w-full text-center py-24 text-slate-400 font-mono text-sm tracking-widest uppercase border border-white/5 rounded-2xl">
          No competencies found matching "{searchQuery}"
        </div>
      )}

      {/* Interactive Scope & Price Estimator */}
      <div className="w-full pt-8">
        <ProjectEstimator 
          onTransmitScope={(scope) => {
            if (onTransmitScopeToContact) {
              onTransmitScopeToContact(scope);
            }
            if (setActivePage) {
              setActivePage("contact");
            }
          }}
        />
      </div>

      {/* Enterprise SLA Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6">
        <div className="p-6 rounded-xl bg-[#090d16] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-white font-bold text-base">Sub-1.5s Speed Guarantee</h4>
          <p className="text-slate-400 text-xs font-light leading-relaxed">
            Every web application is engineered for sub-1.5s cold boot times and 99-100 Lighthouse benchmark ratings.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#090d16] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-white font-bold text-base">100% Strict TypeScript</h4>
          <p className="text-slate-400 text-xs font-light leading-relaxed">
            Strict runtime typing and defensive boundary guards guarantee zero unhandled production runtime crashes.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#090d16] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Clock className="w-5 h-5" />
          </div>
          <h4 className="text-white font-bold text-base">Rapid Turnaround & Escrow</h4>
          <p className="text-slate-400 text-xs font-light leading-relaxed">
            Fast 3-7 day project delivery with verified Fiverr Pro milestone protection and clear daily commits.
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, delay, setActivePage }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="p-8 sm:p-10 rounded-2xl bg-[#090d16] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between h-full shadow-2xl relative overflow-hidden group"
    >
      {/* Background glow on hover */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

      <div className="space-y-6 relative z-10">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full">
              Module // {service.id}
            </span>
            <span className="text-xs font-mono text-slate-400 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> {service.turnaroundTime}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            {service.title}
          </h3>
          <p className="text-emerald-400 font-mono text-xs mt-1">
            {service.tagline}
          </p>

          <div className="text-slate-300 font-light leading-relaxed text-sm space-y-3 mt-4">
            {service.description.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Deliverables Checklist */}
          {service.deliverables && (
            <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
              <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                Included Deliverables
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lighthouse Gauge */}
          {service.showGauge && (
            <div className="mt-6 p-5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between shadow-inner">
              <div>
                <h5 className="text-white font-bold text-sm tracking-wide">Lighthouse Audit Validated</h5>
                <p className="text-slate-400 font-mono text-[10px] uppercase tracking-wider mt-1">Performance · SEO · Best Practices</p>
              </div>
              <div className="text-4xl font-light text-emerald-400 font-sans tracking-tight">
                99<span className="text-base text-slate-400">/100</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Proficiency & CTA */}
      <div className="pt-8 mt-8 border-t border-white/10 relative z-10 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 uppercase tracking-wider font-bold">System Proficiency Index</span>
            <span className="text-emerald-400 font-bold">{service.percent}</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: service.percent }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.fiverr.com/s/m582w17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-center font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <span>Order on Fiverr</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {setActivePage && (
            <button
              onClick={() => setActivePage("contact")}
              className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Inquire
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
