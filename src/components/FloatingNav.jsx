import { motion } from "framer-motion";
import { Menu, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Trending", href: "#trending" },
  { label: "Story", href: "#story" },
  { label: "Visit", href: "#store" },
];

export function FloatingNav({ onCartOpen }) {
  return (
    <motion.header
      className="fixed left-1/2 top-5 z-50 w-[min(94vw,1200px)] -translate-x-1/2"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-panel backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Menu size={16} />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-white">Your Clothing Brand</p>
            <p className="text-xs text-white/45">@yourbrand</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Wishlist">
            <Heart size={16} />
          </Button>
          <Button variant="outline" size="icon" aria-label="Cart" onClick={onCartOpen}>
            <ShoppingBag size={16} />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
