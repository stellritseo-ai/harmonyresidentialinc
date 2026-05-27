import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import {
  Award,
  HeartHandshake,
  ClipboardList,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  Stethoscope,
} from "lucide-react";

const features = [
  { icon: Award, title: "20+ Years Experience" },
  { icon: HeartHandshake, title: "Compassionate Caregivers" },
  { icon: ClipboardList, title: "Personalized Support Plans" },
  { icon: ShieldCheck, title: "Safe & Comfortable Care" },
  { icon: Clock, title: "Dependable Service" },
  { icon: Sparkles, title: "Dignity & Respect" },
  { icon: Users, title: "Family-Centered Approach" },
  { icon: Stethoscope, title: "Professional & Caring Team" },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden py-[60px]">
      <div className="pointer-events-none absolute -left-32 top-1/3 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-5 font-display font-bold leading-tight text-foreground text-2xl sm:text-[35px]">
            Why Families Trust{" "}
            <span className="gradient-text">Harmony Residential Care</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { n: 20, s: "+", l: "Years of Compassionate Experience" },
            { n: 500, s: "+", l: "Families Supported" },
            { n: 24, s: "/7", l: "Dependable Family Support" },
          ].map((stat, i) => (
            <Reveal key={stat.l} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl gradient-bg p-8 text-white shadow-soft transition-all duration-500 hover:shadow-glow">
                <div className="pointer-events-none absolute -top-10 -right-10 size-44 rounded-full bg-white/15 blur-2xl" />
                <p className="font-display font-bold leading-none text-3xl sm:text-[40px]">
                  <Counter to={stat.n} suffix={stat.s} />
                </p>
                <p className="mt-3 text-sm font-medium opacity-90 md:text-base">
                  {stat.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <f.icon className="size-6" />
                </div>
                <p className="font-display text-sm font-bold text-foreground md:text-base">
                  {f.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}