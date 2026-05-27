import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";

export function Mission() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 gradient-bg" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 size-72 rounded-full bg-white/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-1/4 size-96 rounded-full bg-accent/30 blur-3xl animate-float-slower" />
        <div className="absolute left-10 bottom-1/4 size-48 rounded-full bg-white/10 blur-2xl animate-float-slow" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)]" />

      <div className="mx-auto max-w-4xl px-5 text-center text-white lg:px-8">
        <Reveal>
          <div className="glass-dark mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="size-3.5" />
            Our Mission
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-6xl">
            Care that honors dignity, supports independence, and lifts quality of life.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Our mission is to provide compassionate, dependable, and
            personalized residential care services that promote dignity,
            independence, and quality of life for every individual we serve.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-glow transition-transform hover:scale-[1.03]"
          >
            Start Your Care Journey →
          </a>
        </Reveal>
      </div>
    </section>
  );
}