import { Reveal } from "./Reveal";
import {
  Stethoscope,
  Activity,
  MonitorSmartphone,
  ClipboardList,
  Syringe,
  Home,
  Users,
  Car,
  Pill,
  BookOpen,
} from "lucide-react";

import bg1 from "@/assets/b1.jpg";
import bg2 from "@/assets/about-1.jpg";
import bg3 from "@/assets/b2.jpg";
import bg4 from "@/assets/about-2.jpg";
import bg5 from "@/assets/b3.jpg";
import bg6 from "@/assets/hero.jpg";
import bg7 from "@/assets/about-3.jpg";
import bg8 from "@/assets/b4.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care Treatments",
    desc: "Colds, viruses, skin conditions, wounds, and injuries.",
    img: bg1,
  },
  {
    icon: Activity,
    title: "Chronic Care Management",
    desc: "Diabetes, hypertension, asthma, and thyroid conditions.",
    img: bg2,
  },
  {
    icon: MonitorSmartphone,
    title: "24/7 Virtual Medical Access",
    desc: "Round-the-clock telehealth services for immediate care.",
    img: bg3,
  },
  {
    icon: ClipboardList,
    title: "Wellness & Physical Exams",
    desc: "Routine check-ups and preventative care for all ages.",
    img: bg4,
  },
  {
    icon: Syringe,
    title: "In-Office Minor Procedures",
    desc: "Point-of-care testing and essential minor medical procedures.",
    img: bg5,
  },
  {
    icon: Home,
    title: "Homemaker & Personal Care",
    desc: "Daily living and independent living support to thrive comfortably.",
    img: bg6,
  },
  {
    icon: Users,
    title: "Shared Living & Respite Care",
    desc: "Residential environments and short-term relief for family caregivers.",
    img: bg7,
  },
  {
    icon: Car,
    title: "Transportation Assistance",
    desc: "Medical and non-medical transportation to appointments and errands.",
    img: bg8,
  },
  {
    icon: Pill,
    title: "Medication Administration",
    desc: "Reliable support and reminders to keep wellness routines on track.",
    img: bg1,
  },
  {
    icon: BookOpen,
    title: "Community & Skill-Building",
    desc: "Engaging programs tailored to foster connection and personal growth.",
    img: bg2,
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-background to-white py-[60px] lg:py-[100px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Services
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Comprehensive <span className="gradient-text">Medical & Care</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            From essential primary care to 24/7 virtual access and community support, we provide everything you need to thrive comfortably and independently.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[300px]">
          {services.map((s, i) => {
            const gridClass =
              i === 0 ? "sm:col-span-2 lg:row-span-2" :
              i === 3 ? "sm:col-span-2 lg:row-span-1" :
              i === 8 ? "sm:col-span-2 lg:row-span-1" :
              i === 9 ? "sm:col-span-2 lg:row-span-1" :
              "sm:col-span-1 lg:row-span-1";

            return (
              <Reveal key={s.title} delay={i * 0.05} className={`h-[340px] lg:h-auto ${gridClass}`}>
                <div className="group relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-900 border border-border shadow-soft transition-all duration-500 lg:hover:-translate-y-1 lg:hover:shadow-glow">
                  
                  {/* Image Background */}
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-[2000ms] ease-out group-hover:scale-110 group-hover:opacity-60" 
                  />
                  
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Top Right badge/icon */}
                  <div className="absolute top-5 right-5">
                    <div className="grid size-11 place-items-center rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:border-primary shadow-soft">
                      <s.icon className="size-5" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 flex flex-col justify-end">
                    <h3 className={`font-display font-bold text-white transition-colors duration-300 ${i === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"}`}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-2 transition-colors duration-300 group-hover:text-white/95">
                      {s.desc}
                    </p>
                    
                    {/* Learn More link that slides up slightly */}
                    <div className="mt-0 overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-12 group-hover:mt-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#9be3b3] translate-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Learn more <span className="text-xl leading-none">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}