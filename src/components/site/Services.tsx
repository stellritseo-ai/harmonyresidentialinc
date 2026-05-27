import { Reveal } from "./Reveal";
import {
  Users,
  HandHeart,
  Home,
  Sparkles,
  Pill,
  Car,
  Sun,
  Coffee,
  Globe2,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Companion Care",
    desc: "Meaningful companionship, conversation, and emotional support every day.",
  },
  {
    icon: HandHeart,
    title: "Personal Care Assistance",
    desc: "Dignified help with bathing, grooming, dressing, and daily hygiene.",
  },
  {
    icon: Home,
    title: "Homemaker Services",
    desc: "Light housekeeping, laundry, and meal preparation for a clean home.",
  },
  {
    icon: Sparkles,
    title: "Shared Living Support",
    desc: "Warm, family-style residential environments tailored to each individual.",
  },
  {
    icon: Pill,
    title: "Medication Reminders",
    desc: "Timely, reliable reminders to keep wellness routines on track.",
  },
  {
    icon: Car,
    title: "Transportation Assistance",
    desc: "Safe rides to appointments, errands, and community activities.",
  },
  {
    icon: Sun,
    title: "Daily Living Support",
    desc: "Personalized help with the everyday tasks that bring comfort and routine.",
  },
  {
    icon: Coffee,
    title: "Respite Care",
    desc: "Short-term relief for family caregivers, with full peace of mind.",
  },
  {
    icon: Globe2,
    title: "Community Integration",
    desc: "Encouraging social connection, hobbies, and meaningful engagement.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-background to-white py-[60px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Services
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Comprehensive personalized support designed to help individuals
            thrive comfortably and independently.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                {/* gradient border */}
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(29,122,67,0.08), rgba(108,203,142,0.12))" }} />
                <div className="pointer-events-none absolute -top-20 -right-20 size-44 rounded-full bg-accent/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="grid size-14 place-items-center rounded-2xl gradient-bg text-white shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="size-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more →
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}