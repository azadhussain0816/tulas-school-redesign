import { ArrowUpRight } from "lucide-react";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus Life", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
];
export default function Footer() {
  return (
    <footer className="bg-[#0A101C] px-6 py-14 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2">
          <div>
            <a href="#home" className="text-3xl font-black tracking-wider">TULAS<span className="text-amber-400">.</span></a>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">Tulas International School, Dehradun. A modern Gurukul nurturing future-ready learners.</p>
          </div>
          <div className="md:justify-self-end">
            <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {links.map(link => <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-amber-400">{link.label}</a>)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tulas International School. Unofficial homepage redesign concept.</p>
          <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-amber-400">Official Website <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
