import { motion } from "framer-motion";

export function AmbientEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,242,255,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%)]" />
      <motion.div
        className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 80, 0] }}
        transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[6%] top-[28%] h-96 w-96 rounded-full bg-white/8 blur-[160px]"
        animate={{ x: [0, -50, 20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-1/3 h-80 w-80 rounded-full bg-cyan-100/5 blur-[140px]"
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}
