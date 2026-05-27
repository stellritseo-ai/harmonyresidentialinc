import { useState } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Send, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-20 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Let's start a <span className="gradient-text">conversation</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We respond quickly. Reach out anytime — we're here to help your family.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/30 blur-xl" />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSending(true);
                  setTimeout(() => {
                    setSending(false);
                    toast.success("Thanks! We'll reach out within 24 hours.");
                    (e.target as HTMLFormElement).reset();
                  }, 900);
                }}
                className="relative glass rounded-[2rem] p-7 shadow-soft md:p-9"
              >
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold text-primary">
                  <Clock className="size-3.5" /> Quick response within 24 hours
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little about your care needs..."
                    className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-7 py-4 text-base font-semibold text-white shadow-soft transition-all hover:shadow-glow disabled:opacity-70"
                >
                  {sending ? "Sending..." : (<>Send Message <Send className="size-4" /></>)}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-white p-7 shadow-soft md:p-9">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Harmony Residential Care Services Inc
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Compassionate care, when your family needs it most.
                </p>
                <ul className="mt-6 space-y-4">
                  <InfoRow icon={MapPin} label="Address" value="101 Kohler St, Pickerington, OH 43147" />
                  <InfoRow icon={Phone} label="Phone" value="(210) 243-1357" href="tel:+12102431357" />
                  <InfoRow icon={Mail} label="Email" value="harmonyresicare@gmail.com" href="mailto:harmonyresicare@gmail.com" />
                </ul>

                <div className="mt-7 flex items-center gap-3">
                  {[Facebook, Instagram, Linkedin].map((I, k) => (
                    <a
                      key={k}
                      href="#"
                      aria-label="Social"
                      className="grid size-10 place-items-center rounded-full border border-border bg-white text-foreground transition-colors hover:bg-primary hover:text-white"
                    >
                      <I className="size-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
                <iframe
                  title="Map"
                  className="h-72 w-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=101+Kohler+St,+Pickerington,+OH+43147&output=embed"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <li>
      <Wrap
        {...(href ? { href } : {})}
        className="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-primary/5"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
          <span className="block break-words font-medium text-foreground">
            {value}
          </span>
        </span>
      </Wrap>
    </li>
  );
}