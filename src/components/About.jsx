
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#F8F6F0] px-6 py-24 text-slate-900 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
            Discover Our Story
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A place to learn.
            <br />
            A place to <span className="text-amber-700">become.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Tulas International School in Dehradun brings together academic
            learning, sports, creativity, and character development in a
            nurturing school environment.
          </p>

          <a
            href="https://tis.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-800 hover:text-amber-600"
          >
            Discover More <ArrowUpRight size={19} />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200">
              <img
                src="/images/campus.jpg"
                alt="Tulas International School campus"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 rounded-2xl bg-amber-400 px-7 py-5 shadow-xl sm:-left-5">
              <p className="text-4xl font-black text-slate-950">22</p>
              <p className="text-sm font-semibold text-slate-900">
                Acres of Campus
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
