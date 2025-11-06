import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.4)]">
            <Sparkles className="h-6 w-6 text-black" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-yellow-300">
              Better Call AML
            </h1>
            <p className="text-xs text-yellow-200/60">Futuristic Compliance Platform</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 text-yellow-200/70">
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-sm">Secure • Scalable • Smart</span>
        </div>
      </div>
    </header>
  );
}
