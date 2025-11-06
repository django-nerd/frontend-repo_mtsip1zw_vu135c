import React from 'react';
import { ShieldCheck, FileBadge, Contact, SearchCheck, BookMarked, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { title: 'GoAML Registration', icon: ShieldCheck, desc: 'Onboard swiftly with compliant entity setup and validation.' },
  { title: 'AML Policy Framework', icon: FileBadge, desc: 'Generate and maintain robust AML/CFT policies with AI assist.' },
  { title: 'KYC', icon: Contact, desc: 'Streamlined verification flows and risk scoring for customers.' },
  { title: 'AML Inspection', icon: SearchCheck, desc: 'Prepare, simulate, and pass inspections with confidence.' },
  { title: 'AML Logs', icon: BookMarked, desc: 'Immutable activity trails and audit-ready reports.' },
  { title: 'Hire a Compliance officer', icon: UserPlus, desc: 'Connect with vetted experts to scale your compliance team.' },
];

export default function FeatureGrid({ onSelect }) {
  return (
    <section className="relative w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center">
          Explore the Suite
        </h3>
        <p className="text-center mt-2 text-yellow-200/70">
          Six powerful modules, one unified experience.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.button
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => onSelect && onSelect(f.title)}
                className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-b from-black/60 to-black/40 p-6 text-left shadow-[0_0_25px_rgba(234,179,8,0.15)] hover:shadow-[0_0_40px_rgba(234,179,8,0.35)] focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-400/30 shadow-inner shadow-yellow-500/20">
                    <Icon className="h-7 w-7 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-300">{f.title}</h4>
                    <p className="mt-1 text-sm text-yellow-200/70">{f.desc}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-yellow-300/80">
                  <span className="text-xs uppercase tracking-wider">Open</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
