import { useState } from "react";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { products } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { ProductQuickView } from "./ProductQuickView";
import { ProductImage } from "./ProductImage";

export function TrendingSection() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section id="trending" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trending Products"
          title="Statement pieces with magnetic depth."
          description="Cards tilt, glow, and reveal premium cues that make each piece feel collected rather than simply listed."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.button
              key={product.name}
              type="button"
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 text-left shadow-panel backdrop-blur-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -10, rotateX: -6, rotateY: 5, scale: 1.01 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setActiveProduct(product)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.glow} opacity-90 transition duration-500 group-hover:scale-110`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/55">{product.category}</p>
                    <h3 className="mt-4 font-display text-3xl uppercase text-white">{product.name}</h3>
                  </div>
                  <MoveUpRight className="text-white/65 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
                <div className="mt-14 rounded-[1.6rem] border border-white/10 bg-black/25 p-4">
                  <div className="h-48 overflow-hidden rounded-[1.25rem] border border-white/10">
                    <ProductImage
                      src={product.image}
                      alt={product.imageAlt}
                      priority={index === 0}
                      fallbackLabel="Add product image"
                      fallbackHint="Place the file in public/products/ using the configured name."
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-display text-2xl uppercase text-white">{product.price}</p>
                  <p className="text-sm text-white/55">Quick view</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProductQuickView
        product={activeProduct}
        open={Boolean(activeProduct)}
        onOpenChange={(open) => {
          if (!open) setActiveProduct(null);
        }}
      />
    </section>
  );
}
