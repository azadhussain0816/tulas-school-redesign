import { ArrowUpRight, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-[#101827] px-6 py-24 text-white lg:px-10">
      <div aria-hidden="true" className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <GraduationCap className="mb-8 text-amber-400" size={42} />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Begin Your Journey</p>
          <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your future begins<br /><span className="text-amber-400">at Tulas.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">Discover a world of learning, leadership, creativity, and opportunity at Tulas International School.</p>
          <a href="https://tis.edu.in/boarding-school/admission-open/" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-amber-300">Explore Admissions <ArrowUpRight size={20} /></a>
        </Reveal>
      </div>
    </section>
  );
}
