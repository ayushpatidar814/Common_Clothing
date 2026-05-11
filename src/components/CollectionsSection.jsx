import { motion } from "framer-motion";
import { collections } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { ProductImage } from "./ProductImage";

export function CollectionsSection() {
  return (
    <section id="collections" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Collections"
          title="Editorial product worlds, not ordinary categories."
          description="Each collection is framed like a campaign chapter, with layered motion, elevated surfaces, and premium depth."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {collections.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-xl lg:min-h-[28rem]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -12, rotateX: -6, rotateY: index % 2 === 0 ? 4 : -4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/10 opacity-80 transition duration-500 group-hover:scale-110" />
              <div className="absolute right-[-10%] top-[-8%] h-36 w-36 rounded-full bg-cyan-200/10 blur-3xl transition duration-500 group-hover:bg-cyan-200/20" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.38em] text-cyan-100/60">{item.tag}</p>
                  <h3 className="mt-5 font-display text-3xl uppercase text-white">{item.title}</h3>
                </div>
                <div className="space-y-5">
                  <div className="h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
                  <p className="max-w-[15rem] text-sm leading-7 text-white/60">{item.accent}</p>
                  <div className="h-24 overflow-hidden rounded-[1.5rem] border border-white/10">
                    <ProductImage
                      src={item.image}
                      alt={item.imageAlt}
                      fallbackLabel="Add collection image"
                      fallbackHint="Place the file in public/collections/ using the configured name."
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
