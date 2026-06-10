import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#0c1410] text-white/85">
      <div className="pointer-events-none absolute -top-20 left-1/4 size-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 size-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white p-3 inline-block">
              <img src={logo} alt="Harmony Residential Care Services Inc" className="h-10 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Compassionate residential care &amp; non-skilled nursing services
              that empower individuals to live safely, comfortably, and
              independently.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((I, k) => (
                <a
                  key={k}
                  href="#"
                  aria-label="Social"
                  className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white hover:text-primary"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Careers", "#careers"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-white/70 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Companion Care",
                "Personal Care",
                "Homemaker Services",
                "Respite Care",
                "Community Integration",
              ].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-white/70 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-accent" /> 101 Kohler St, Pickerington, OH 43147</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 text-accent" /> <a href="tel:+12102431357" className="hover:text-white">(210) 243-1357</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 text-accent" /> <a href="mailto:harmonyresicare@gmail.com" className="hover:text-white">harmonyresicare@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {year} Harmony Residential Care Services Inc. All rights reserved.</p>
          <p>Design By StellR IT LLC</p>
        </div>
      </div>
    </footer>
  );
}