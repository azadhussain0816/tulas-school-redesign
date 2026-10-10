
import Reveal from "./Reveal";
import { BookOpen, Lightbulb, Monitor, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "CBSE Curriculum",
    description: "A structured academic foundation focused on conceptual understanding.",
  },
  {
    icon: Lightbulb,
    title: "Experiential Learning",
    description: "Learning through exploration, activities, and real-world experiences.",
  },
  {
    icon: Monitor,
    title: "Technology in Education",
    description: "Modern tools and digital resources to support classroom learning.",
  },
  {
    icon: Users,
    title: "Holistic Development",
    description: "Encouraging confidence, creativity, collaboration, and leadership.",
  },
];

export default function Academics() {
  return (
    <section id="academics" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
            Academic Excellence
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Learning beyond the classroom.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover an educational approach that combines strong academics
            with curiosity, innovation, and personal growth.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-slate-100 bg-[#F8F6F0] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-8 inline-flex rounded-2xl bg-amber-100 p-4 text-amber-800">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
