import { motion } from "framer-motion";
import { storySteps } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function BrandStorySection() {
  return (
    <section id="story" className="px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Brand Story"
          title="A reset that sharpened the vision."
          description="Classic Clothes Bhopal is not starting over quietly. It is returning with more confidence, a clearer identity, and a stronger luxury streetwear language."
        />

        <div className="relative space-y-8 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-200/70 before:to-transparent">
          {storySteps.map((step, index) => (
            <motion.article
              key={step.year}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
            >
              <div className="absolute -left-[2.05rem] top-8 h-4 w-4 rounded-full border border-cyan-200/70 bg-black shadow-glow" />
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">{step.year}</p>
              <h3 className="mt-4 font-display text-3xl uppercase text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/60">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
