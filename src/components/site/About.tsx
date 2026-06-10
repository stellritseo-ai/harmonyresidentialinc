import { Reveal } from "./Reveal";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Expert Primary & Chronic Care Management",
  "24/7 Telehealth & Virtual Medical Access",
  "Dignity-Centered Residential & Respite Care",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-[60px]">
      <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 size-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[560px] md:h-[620px]">
            <div className="col-span-4 row-span-4 overflow-hidden rounded-[2rem] shadow-soft group">
              <img
                src={about1}
                alt="Caregiver assisting elderly man at home"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-[2rem] shadow-soft group">
              <img
                src={about3}
                alt="Happy elderly woman in garden"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="col-span-3 row-span-2 overflow-hidden rounded-[2rem] shadow-soft group">
              <img
                src={about2}
                alt="Hands holding gently"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="col-span-3 row-span-2 rounded-[2rem] gradient-bg p-6 text-white shadow-glow">
              <p className="font-display text-5xl font-bold">20+</p>
              <p className="mt-1 text-sm font-medium opacity-90">Years dedicated to compassionate care</p>
            </div>

            {/* Floating glass badge */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <span className="size-9 rounded-full bg-gradient-to-br from-primary to-accent ring-2 ring-white" />
                  <span className="size-9 rounded-full bg-gradient-to-br from-secondary to-primary ring-2 ring-white" />
                  <span className="size-9 rounded-full bg-gradient-to-br from-accent to-secondary ring-2 ring-white" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">500+ Families</p>
                  <p className="text-xs text-muted-foreground">trust Harmony</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About Us
          </span>
          <h2 className="mt-5 font-display font-bold leading-tight text-foreground text-[32px] md:text-[43px]">
            Comprehensive Care{" "}
            <span className="gradient-text">Rooted in Medical Expertise</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Harmony Residential Care Services Inc provides a seamless blend of expert clinical medical services and compassionate residential care. From primary care and chronic disease management to daily homemaking and respite support, we are dedicated to enhancing the quality of life for individuals through comprehensive, dignity-centered assistance tailored to each client's unique health and lifestyle needs.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-glow"
            >
              Explore Services →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}