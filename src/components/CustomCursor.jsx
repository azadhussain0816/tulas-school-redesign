import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 350, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 350, damping: 30 });
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      const target = event.target;
      setHovered(target instanceof Element && Boolean(target.closest("a, button, [role='button']")));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, mouseX, mouseY]);
  if (!enabled) return null;
  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[99] hidden rounded-full border-2 border-amber-400 mix-blend-difference lg:block" style={{ x, y, translateX: "-50%", translateY: "-50%" }} animate={{ width: hovered ? 56 : 28, height: hovered ? 56 : 28, opacity: 0.9 }} transition={{ duration: 0.2 }} />;
}
