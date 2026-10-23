import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, X, Mail, Copy, CheckCheck, ExternalLink, ShieldCheck, Sparkles, Send } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";

interface ContactProps {
  prefillScope?: string;
}

export function Contact({ prefillScope = "" }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showToast, setShowToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("React Modular SaaS");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$1k - $5k",
    message: prefillScope || ""
  });

  useEffect(() => {
    if (prefillScope) {
      setFormData(prev => ({
        ...prev,
        message: prefillScope
      }));
    }
  }, [prefillScope]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network transmission
    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      setTimeout(() => {
        setStatus("idle");
        setShowToast(false);
      }, 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("maazkamal67@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const services = [
    "AI Website Design Frameworks",
    "React Modular SaaS",
    "Speed Optimization (<1.5s)",
    "Enterprise UI Systems"
  ];

  return (
    <div className="flex flex-col flex-1 items-start justify-start pt-28 pb-20 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 w-full"
      >
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
          <Mail className="w-3.5 h-3.5" /> Encrypted Transmission Channel
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-sans text-white tracking-tighter">
          Initialize Contact.
        </h1>
        <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl">
          Direct communication pipeline with Maaz Khan. Inquire about freelance engagements, enterprise contracts, or technical consultations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Left 2 Cols: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="lg:col-span-2 p-8 sm:p-12 bg-[#090d16] border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl space-y-8"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Service Scope Chips */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                Select Service Scope
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedService === srv
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold"
                        : "bg-white/[0.02] text-slate-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Client / Applicant Designation *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all font-sans"
                  placeholder="e.g. Sarah Jenkins"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Secure Comm Channel (Email) *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all font-sans"
                  placeholder="client@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                Estimated Budget Bracket
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-[#090d16] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500 font-sans cursor-pointer"
              >
                <option value="<$1k">Micro Sprint (&lt; $1,000)</option>
                <option value="$1k - $5k">Production MVP ($1,000 - $5,000)</option>
                <option value="$5k - $15k">Enterprise Full-Stack ($5,000 - $15,000)</option>
                <option value="$15k+">Custom Retainer / Strategic ($15,000+)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                Transmission Data & Project Specifications *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all resize-none font-sans"
                placeholder="Enter objective, tech requirements, target launch window, or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold uppercase py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 tracking-widest text-xs shadow-lg shadow-emerald-500/20"
            >
              {status === "idle" && (
                <>
                  <span>Transmit Request to Maaz Khan</span>
                  <Send className="w-4 h-4" />
                </>
              )}
              {status === "submitting" && (
                <span className="opacity-80 flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Encrypting & Transmitting...
                </span>
              )}
              {status === "success" && (
                <>
                  <span>Transmission Successful</span>
                  <Check className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right Col: Quick Channels & Fiverr Order */}
        <div className="space-y-6">
          {/* 1. Fiverr Order Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> Escrow Protected
            </div>
            <h3 className="text-xl font-bold text-white">Hire on Fiverr Pro</h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              Order directly with 100% money-back escrow guarantee, milestones, and verified delivery reviews.
            </p>
            <a
              href="https://www.fiverr.com/s/m582w17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all font-mono"
            >
              <span>Launch Fiverr Gig</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>

          {/* 2. Direct Email Copy */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-white/10 space-y-4 shadow-xl">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              Direct Contact Coordinates
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white">maazkamal67@gmail.com</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-slate-400 text-[11px] font-light">
              Typical response time: Under 4 hours across all standard time zones.
            </p>
          </div>

          {/* 3. Availability Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-purple-500/10 border border-emerald-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q3/Q4 Projects</span>
            </div>
            <p className="text-slate-300 text-xs font-light">
              Currently accepting 2 new client engagements for bespoke AI web apps and React 19 dashboards.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-8 right-8 z-[250] bg-[#090d16] border border-emerald-500/50 p-5 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[340px]"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono mb-0.5">Transmission Transmitted</h4>
              <p className="text-slate-400 text-xs font-light">Your connection request and scope has been securely dispatched to Maaz Khan.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
