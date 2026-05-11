import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SceneHero = lazy(() => import("./SceneHero").then((module) => ({ default: module.SceneHero })));

const tagline = "Redefining Modern Fashion Identity";

export function HeroSection({ onSoundToggle, soundOn }) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,242,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_18%),linear-gradient(180deg,#050505_0%,#0a0a0a_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="z-10 max-w-2xl">
          <motion.p
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/80 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Premium Streetwear Experience
          </motion.p>

          <motion.h1
            className="font-display text-5xl font-extrabold uppercase leading-[0.92] text-white sm:text-6xl xl:text-8xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {tagline.split(" ").map((word) => (
              <motion.span
                key={word}
                className="mr-4 inline-block"
                variants={{
                  hidden: { opacity: 0, y: 44 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 1, 0.3, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-white/65 md:text-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.85 }}
          >
            A cinematic fashion destination for modern shoppers chasing premium silhouettes, elevated styling, and unmistakable brand energy.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button size="lg">
              Explore Collection
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Visit Store
              <MapPin className="ml-2" size={18} />
            </Button>
            <Button size="icon" variant="outline" onClick={onSoundToggle} aria-label="Toggle sound">
              <Volume2 size={18} className={soundOn ? "text-cyan-200" : "text-white/60"} />
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              ["Luxury layers", "Editorial-grade silhouettes"],
              ["Store Hours", "Set your own daily opening times"],
              ["Brand Ready", "Easy to adapt for any clothing label"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="font-display text-sm uppercase tracking-[0.22em] text-white">{title}</p>
                <p className="mt-2 text-sm text-white/55">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative h-[30rem] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-panel backdrop-blur-2xl md:h-[42rem]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 1.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,242,255,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%)]" />
          <Suspense fallback={<div className="h-full w-full animate-pulse bg-white/5" />}>
            <SceneHero />
          </Suspense>
          <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">Interactive 3D Look</p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl uppercase text-white">Midnight Campaign Silhouette</p>
                <p className="mt-1 text-sm text-white/60">Mouse-reactive mannequin with chrome accents and optimized ambient motion.</p>
              </div>
              <div className="hidden h-12 w-12 rounded-full border border-cyan-300/40 bg-cyan-300/10 md:block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
