import { motion } from "framer-motion";
import { MapPin, Clock3 } from "lucide-react";
import { storeExperience } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { ProductImage } from "./ProductImage";

export function StoreExperience() {
  return (
    <section id="store" className="px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <SectionHeading
          eyebrow="Store Experience"
          title="A showroom with campaign-level atmosphere."
          description="The physical experience mirrors the digital one: focused lighting, premium curation, and a sense of discovery from the moment you walk in."
        />

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,242,255,0.2),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_26%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-4">
              <div className="relative h-[22rem] overflow-hidden rounded-[1.4rem] border border-white/10">
                <ProductImage
                  src={storeExperience.showroomImage}
                  alt={storeExperience.showroomImageAlt}
                  className="absolute inset-0"
                  fallbackLabel="Add showroom image"
                  fallbackHint="Place the file in public/store/showroom.webp."
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.52))]" />
                <motion.div
                  className="absolute left-[56%] top-[48%] h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(124,242,255,0.9)]"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.2 }}
                />
                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
                  Your City, Your Country
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <MapPin className="text-cyan-200" size={20} />
                <p className="mt-4 font-display text-2xl uppercase text-white">Your Clothing Brand</p>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  A premium fashion destination crafted for modern shoppers, adaptable to your brand voice and local market.
                </p>
                <div className="mt-4 overflow-hidden rounded-[1rem] border border-white/10">
                  <ProductImage
                    src={storeExperience.mapImage}
                    alt={storeExperience.mapImageAlt}
                    className="h-32 w-full object-cover"
                    fallbackLabel="Add map image"
                    fallbackHint="Place the file in public/store/map-preview.webp."
                  />
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <Clock3 className="text-cyan-200" size={20} />
                <p className="mt-4 font-display text-2xl uppercase text-white">Store Timings</p>
                <p className="mt-2 text-sm leading-7 text-white/60">Open daily from 11 AM to 11 PM for in-store discovery and styling.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Showroom Mood</p>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Controlled light, sculptural displays, monochrome styling, and statement fits staged like a fashion editorial.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
