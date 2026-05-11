import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-24 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-100/60">Your Clothing Brand</p>
            <h2 className="mt-4 font-display text-4xl uppercase text-white md:text-6xl">
              Built for city icons, styled for the next chapter.
            </h2>
          </div>
          <div className="grid gap-4 text-sm text-white/65">
            <a
              href="https://instagram.com/yourbrand"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-5 py-4 transition hover:border-cyan-200/35 hover:text-white"
            >
              <Instagram size={18} />
              @yourbrand
            </a>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-5 py-4">
              <MapPin size={18} />
              Your City, Your Country
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-5 py-4">
              <Phone size={18} />
              Open daily, customizable store hours
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
