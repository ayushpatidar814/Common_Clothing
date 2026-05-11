import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { instagramTiles } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { ProductImage } from "./ProductImage";

export function InstagramShowcase() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Instagram Showcase"
          title="A feed designed like a luxury campaign wall."
          description="The grid is built to feel alive, with layered depth, hover previews, and a strong editorial hierarchy."
          align="center"
        />

        <div className="mt-14 columns-1 gap-6 md:columns-2 xl:columns-3">
          {instagramTiles.map((tile, index) => (
            <motion.article
              key={tile.title}
              className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-panel ${
                index % 3 === 0 ? "h-[24rem]" : index % 3 === 1 ? "h-[30rem]" : "h-[26rem]"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.07 }}
            >
              <div className="absolute inset-0">
                <ProductImage
                  src={tile.image}
                  alt={tile.imageAlt}
                  className="transition duration-700 group-hover:scale-105"
                  fallbackLabel="Add showcase image"
                  fallbackHint="Place the file in public/instagram/ using the configured name."
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,242,255,0.15),transparent_25%),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.62))]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 fill=%27none%27%3E%3Cpath d=%27M0 40h80M40 0v80%27 stroke=%27rgba(255,255,255,0.05)%27/%3E%3C/svg%3E')]" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="flex justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/55">{tile.type}</p>
                  <div className="rounded-full border border-white/15 bg-black/30 p-3 backdrop-blur-xl">
                    <Play size={16} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-display text-3xl uppercase text-white">{tile.title}</p>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/60">
                    Smooth transitions, premium mood lighting, and streetwear-first storytelling.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
