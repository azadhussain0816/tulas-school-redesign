
import Reveal from "./Reveal";

const statistics = [
  { value: "22", label: "Acres of Campus" },
  { value: "16+", label: "Sports Activities" },
  { value: "24×7", label: "Medical Assistance" },
  { value: "CBSE", label: "Curriculum" },
];

export default function Stats() {
  return (
    <section className="bg-[#101827] px-6 py-20 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4">
        {statistics.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.1}>
            <div className="border-l border-white/20 pl-5">
              <p className="text-4xl font-black text-amber-400 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
