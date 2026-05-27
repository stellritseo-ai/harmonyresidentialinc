import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import b3 from "@/assets/b3.jpg";
import b4 from "@/assets/b4.jpg";

const bgImages = [b1, b2, b3, b4];

const badges = [
  { icon: ShieldCheck, label: "Trusted Care" },
  { icon: Sparkles, label: "Experienced Team" },
  { icon: HeartHandshake, label: "Personalized Support" },
];

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      {/* Background slider with smooth crossfade and continuous slow pan/zoom */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            alt="Harmony Residential Care Services Background"
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-primary/35 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(108,203,142,0.25),transparent_60%)] z-10" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-32 size-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-primary/30 blur-3xl animate-float-slower" />
        <div className="absolute left-1/2 top-1/3 size-40 rounded-full bg-white/10 blur-2xl animate-float-slow" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-12 lg:grid-cols-12 lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 mt-[50px] sm:mt-[100px]">
            <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
            20+ Years of Compassionate Care
          </div>
 
          <h1 className="mt-6 max-w-3xl font-display font-bold text-white text-3xl leading-snug sm:text-[39px] sm:leading-[55px]">
            Professional Residential Care &amp; Non-Skilled Nursing{" "}
            <span className="bg-gradient-to-r from-[#9be3b3] via-[#6CCB8E] to-white bg-clip-text text-transparent">
              That Feels Like Family
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Providing compassionate, personalized, and dependable home care
            services that empower individuals to live safely, comfortably, and
            independently.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-bg px-7 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
            >
              <span>Get Started</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white"
              >
                <b.icon className="size-4 text-accent" />
                {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 mt-[40px] lg:mt-[200px]"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/40 to-primary/40 blur-xl" />
            <div className="relative glass rounded-3xl p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl gradient-bg text-white shadow-glow">
                  <HeartHandshake className="size-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Available now</p>
                  <p className="font-display text-lg font-bold text-foreground">24/7 Family Support</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { n: "20+", l: "Years" },
                  { n: "500+", l: "Families" },
                  { n: "24/7", l: "Care" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white/70 p-3 text-center">
                    <p className="gradient-text font-display text-2xl font-bold">{s.n}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">
                “Care that respects dignity, supports independence, and feels like family.”
              </p>
              <a
                href="tel:+12102431357"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/20 bg-white/80 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Call (210) 243-1357
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}