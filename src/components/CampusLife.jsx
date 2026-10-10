
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    title: "Sports & Fitness",
    description: "Building teamwork, discipline, and confidence.",
    image: "/images/sports.jpg",
  },
  {
    title: "Boarding Life",
    description: "A supportive environment for personal growth.",
    image: "/images/campus.jpg",
  },
  {
    title: "Creative Learning",
    description: "Encouraging imagination and self-expression.",
    image: "/images/students.webp",
  },
];

export default function CampusLife() {
  return (
    <section id="campus" className="bg-[#F8F6F0] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
            Beyond Academics
          </p>
          <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Life at Tulas.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Discover experiences that help students learn, connect, and grow
            beyond the classroom.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.1}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {activity.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {activity.description}
                    </p>
                  </div>
                  <ArrowUpRight className="shrink-0 text-amber-700" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
