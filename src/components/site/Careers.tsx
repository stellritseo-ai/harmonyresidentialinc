import { Reveal } from "./Reveal";
import { HeartHandshake } from "lucide-react";

export function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-white p-10 shadow-soft md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 size-96 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Careers
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Join Our <span className="gradient-text">Caring Team</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Become part of a compassionate organization dedicated to making a
                positive impact in the lives of individuals and families every
                day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:harmonyresicare@gmail.com?subject=Career%20Application"
                  className="inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-4 text-base font-semibold text-white shadow-soft transition-all hover:shadow-glow"
                >
                  Apply Now →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-7 py-4 text-base font-semibold text-primary hover:bg-primary/5"
                >
                  Talk to Us
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Competitive Pay",
                  "Flexible Schedules",
                  "Supportive Team",
                  "Meaningful Work",
                ].map((b) => (
                  <div
                    key={b}
                    className="glass rounded-2xl p-5 shadow-soft"
                  >
                    <div className="grid size-10 place-items-center rounded-xl gradient-bg text-white">
                      <HeartHandshake className="size-5" />
                    </div>
                    <p className="mt-3 font-display text-base font-bold text-foreground">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}