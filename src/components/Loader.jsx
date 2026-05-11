import { motion, AnimatePresence } from "framer-motion";

export function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              className="h-24 w-24 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute inset-3 rounded-full border border-cyan-300/40" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-300/40 to-transparent blur-md" />
            </motion.div>
            <motion.p
              className="font-display text-xs uppercase tracking-[0.6em] text-white/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Your Clothing Brand
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
