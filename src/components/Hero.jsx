
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#101827] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,15,29,.95), rgba(7,15,29,.55)), url('/images/hero.webp')",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400"
        >
          Welcome to Tulas International School
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl"
        >
          The Modern
          <br />
          <span className="text-amber-400">Gurukul.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg"
        >
          Where tradition meets tomorrow. Discover academic excellence,
          holistic development, and a world of opportunities in Dehradun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Discover TIS <ArrowUpRight size={19} />
          </a>

          <a
            href="https://tis.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Admissions
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 inline-flex items-center gap-3 text-sm text-white/70"
        >
          <ArrowDown size={18} />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
