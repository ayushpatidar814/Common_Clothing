import { motion } from "framer-motion";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Praise that feels earned, not manufactured."
          description="Floating review panels reinforce the premium mood while keeping the social proof clean and modern."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-panel backdrop-blur-xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              animate={{ y: [0, -8, 0] }}
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-cyan-200/10 blur-2xl" />
              <p className="text-base leading-8 text-white/70">“{item.quote}”</p>
              <div className="mt-8">
                <p className="font-display text-xl uppercase text-white">{item.name}</p>
                <p className="mt-1 text-sm text-cyan-100/55">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
