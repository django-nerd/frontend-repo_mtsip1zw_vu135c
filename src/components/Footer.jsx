import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-yellow-500/20 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-yellow-200/70 text-sm">© {new Date().getFullYear()} Better Call AML. All rights reserved.</p>
        <div className="text-xs text-yellow-200/60 flex items-center gap-3">
          <span>Privacy</span>
          <span className="opacity-40">•</span>
          <span>Terms</span>
          <span className="opacity-40">•</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
}
