import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-4 text-xs uppercase tracking-[0.45em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-white/60 md:text-lg">{description}</p>
    </motion.div>
  );
}
