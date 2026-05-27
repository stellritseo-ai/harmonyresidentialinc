import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const items = [
  {
    name: "Sarah M.",
    role: "Daughter of Client",
    img: a1,
    quote:
      "Harmony has been a blessing for our family. The caregivers treat my mother with such warmth and respect — we finally feel at ease knowing she's safe and happy.",
  },
  {
    name: "Robert D.",
    role: "Client",
    img: a2,
    quote:
      "The team is dependable, professional and genuinely kind. They've helped me keep my independence at home with dignity, every single day.",
  },
  {
    name: "Emily R.",
    role: "Family Member",
    img: a3,
    quote:
      "From the first call to the daily visits, every detail is handled with care. It really does feel like family taking care of family.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Stories from the families we{" "}
            <span className="gradient-text">serve</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent/30 blur-2xl" />
          <div className="relative glass rounded-[2rem] p-8 shadow-soft md:p-12">
            <Quote className="size-10 text-primary/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-4 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="size-14 rounded-full object-cover ring-4 ring-white shadow-soft"
                    />
                    <div>
                      <p className="font-display text-base font-bold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={prev}
              className="grid size-11 place-items-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to slide ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 gradient-bg" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={next}
              className="grid size-11 place-items-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}