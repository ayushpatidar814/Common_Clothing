import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingNav } from "@/components/FloatingNav";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { TrendingSection } from "@/components/TrendingSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { StoreExperience } from "@/components/StoreExperience";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AmbientEffects } from "@/components/AmbientEffects";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId = 0;
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // This global reveal treatment keeps the editorial sections feeling tied
    // together while still allowing each component to own its local motion.
    const sections = gsap.utils.toArray("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.82, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Loader loading={loading} />
      <CustomCursor />
      <FloatingNav onCartOpen={() => setCartOpen(true)} />

      <AnimatePresence>
        {!loading ? (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AmbientEffects />

            <HeroSection onSoundToggle={() => setSoundOn((value) => !value)} soundOn={soundOn} />
            <CollectionsSection />
            <TrendingSection />
            <BrandStorySection />
            <InstagramShowcase />
            <StoreExperience />
            <TestimonialsSection />
            <Footer />

            <div className="pb-8 text-center text-xs uppercase tracking-[0.35em] text-white/30">
              {year} Classic Clothes Bhopal
            </div>
          </motion.main>
        ) : null}
      </AnimatePresence>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
