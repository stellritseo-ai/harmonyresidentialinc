import { Star, Quote } from "lucide-react";
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
  return (
    <section className="relative overflow-hidden bg-background py-[60px]">
      {/* Background blobs for premium depth */}
      <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Stories from the families we <span className="gradient-text">serve</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.15}>
              <div className="relative group h-full">
                {/* Accent glow on hover */}
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Card body */}
                <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-border/80 bg-white/70 p-8 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <Quote className="size-8 text-primary/30" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="size-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-6 font-display text-base leading-relaxed text-foreground/90 italic">
                      “{t.quote}”
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4 border-t border-border/50 pt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="size-12 rounded-full object-cover ring-2 ring-primary/10 shadow-soft"
                    />
                    <div>
                      <p className="font-display text-sm font-bold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}