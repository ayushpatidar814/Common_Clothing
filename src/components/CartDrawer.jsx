import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { name: "Noir Drift Hoodie", price: "₹3,490" },
  { name: "Chrome Oversized Tee", price: "₹1,990" },
];

export function CartDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[71] h-screen w-full max-w-md border-l border-white/10 bg-zinc-950/90 p-6 shadow-panel backdrop-blur-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 24, stiffness: 220 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Cart Drawer</p>
                <h3 className="mt-2 font-display text-3xl uppercase text-white">Selected Pieces</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 p-3 text-white/70 transition hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-10 space-y-4">
              {items.map((item) => (
                <div key={item.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl uppercase text-white">{item.name}</p>
                      <p className="mt-2 text-sm text-white/55">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 px-2 py-1">
                      <Minus size={14} className="text-white/50" />
                      <span className="text-sm text-white">1</span>
                      <Plus size={14} className="text-white/50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span>₹5,480</span>
              </div>
              <Button className="mt-5 w-full">Proceed to Checkout</Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
