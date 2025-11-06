import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function MockGoogleAuth({ onSuccess }) {
  // Placeholder interaction for now; can be wired to real backend OAuth later
  return (
    <button
      onClick={onSuccess}
      className="hidden"
      aria-hidden
    >Sign in</button>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  const handleGoogleLogin = () => {
    // Simulated login success for demo; replace with real Google OAuth later
    setUser({ name: 'AML Pro', email: 'user@example.com' });
  };

  const handleSelect = (title) => {
    setActiveTab(title);
  };

  return (
    <div className="min-h-screen w-full bg-black text-yellow-300">
      <Header />
      <main>
        {!user ? (
          <Hero onLogin={handleGoogleLogin} />
        ) : (
          <>
            <section className="relative">
              <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Welcome, {user.name}</h2>
                    <p className="text-yellow-200/70 text-sm">Choose a module to begin</p>
                  </div>
                  <button
                    onClick={() => setUser(null)}
                    className="rounded-lg border border-yellow-500/30 bg-black/30 px-4 py-2 text-sm text-yellow-300 hover:border-yellow-400/60"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </section>
            <FeatureGrid onSelect={handleSelect} />
            <AnimatePresence>
              {activeTab && (
                <motion.section
                  key="panel"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-black"
                >
                  <div className="max-w-5xl mx-auto px-4 pb-16">
                    <div className="rounded-2xl border border-yellow-500/20 bg-black/50 p-6 shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                      <h3 className="text-xl font-semibold">{activeTab}</h3>
                      <p className="mt-2 text-sm text-yellow-200/70">
                        This is a preview panel. We can wire this to your backend next and build out full workflows for {activeTab.toLowerCase()}.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <button onClick={() => setActiveTab('')} className="rounded-lg border border-yellow-500/30 px-4 py-2 text-yellow-300 hover:border-yellow-400/60">
                          Close
                        </button>
                        <button className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-yellow-300 hover:border-yellow-400/60">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
      <Footer />
      <MockGoogleAuth onSuccess={() => setUser({ name: 'AML Pro' })} />
    </div>
  );
}
