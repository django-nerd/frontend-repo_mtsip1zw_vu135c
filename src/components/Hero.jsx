import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onLogin }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_0_25px_rgba(250,204,21,0.35)]"
        >
          The one stop solution for all your AML Compliance needs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-yellow-200/80"
        >
          Experience a next‑gen platform with a slick, animated interface. Secure, fast, and beautiful on any device.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={onLogin}
            className="group relative inline-flex items-center justify-center gap-3 rounded-xl border border-yellow-500/30 bg-black/30 px-6 py-3 text-yellow-300 shadow-[0_0_30px_rgba(234,179,8,0.25)] transition hover:shadow-[0_0_45px_rgba(234,179,8,0.45)] hover:border-yellow-400/60"
          >
            <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-300/10 opacity-0 blur-xl transition group-hover:opacity-100" />
            <span className="relative font-semibold tracking-wide">Continue with Google</span>
          </button>
          <p className="mt-3 text-xs text-yellow-200/60">One-click secure sign in</p>
        </motion.div>
      </div>
    </section>
  );
}
