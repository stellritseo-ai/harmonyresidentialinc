import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is the difference between your clinical medical services and residential care?",
    a: "Our clinical medical services include primary care, chronic disease management, in-office minor procedures, and 24/7 telehealth access provided by experienced medical professionals. Our residential care focuses on assisted living, personal care, homemaking, and daily activities to help individuals live safely and comfortably.",
  },
  {
    q: "Are your medical staff and caregivers trained and background-checked?",
    a: "Absolutely. All Harmony medical professionals and caregivers undergo rigorous background screenings, reference checks, and comprehensive training to meet and exceed local and state regulations, ensuring absolute safety and peace of mind.",
  },
  {
    q: "How are personalized support and treatment plans developed?",
    a: "We perform a thorough initial medical and lifestyle assessment to understand specific health histories, chronic conditions, daily routines, and personal goals. Based on this, we build a customized, comprehensive care plan that is regularly reviewed.",
  },
  {
    q: "Do you offer 24/7 care and telehealth support?",
    a: "Yes, we provide round-the-clock (24/7) Virtual Medical Access & Telehealth, alongside physical support and supervision as needed. Whether it is urgent medical advice, full-time residential care, or scheduled visits, we customize the support to suit your needs.",
  },
  {
    q: "How can we get started with Harmony?",
    a: "Getting started is simple. You can call us directly at (210) 243-1357 or fill out the contact form below. We will schedule a free, no-obligation consultation to discuss your medical and care needs and how we can support you.",
  },
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative overflow-hidden bg-background py-[60px]">
      {/* Decorative Blur Blobs */}
      <div className="pointer-events-none absolute -left-48 top-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            FAQs & Location
          </span>
          <h2 className="mt-5 font-display font-bold leading-tight text-foreground text-2xl sm:text-[37px]">
            Frequently Asked Questions & <span className="gradient-text">Our Location</span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Side: Map Block */}
          <div className="lg:col-span-5 h-full">
            <Reveal delay={0.1} className="h-full">
              <div className="relative group h-full flex flex-col justify-between rounded-3xl border border-border bg-white/70 p-6 shadow-soft backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">Pickerington Office</h3>
                      <p className="text-xs text-muted-foreground">Serving Pickerington & surrounding areas</p>
                    </div>
                  </div>
                  
                  {/* Google Map Iframe for Pickerington, OH */}
                  <div className="overflow-hidden rounded-2xl border border-border/80 shadow-inner aspect-[4/3] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.179055173161!2d-82.78813882392608!3d39.87022697153261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387bae2ebcd17f%3A0xdc37445d8105f6a0!2s101%20Kohler%20St%2C%20Pickerington%2C%20OH%2043147%2C%20USA!5e0!3m2!1sen!2snp!4v1779914920053!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Harmony Residential Care Services Pickerington Location"
                    />
                  </div>
                </div>

                <div className="relative mt-6 rounded-2xl bg-primary/5 p-4 border border-primary/10">
                  <p className="text-sm font-semibold text-primary">Contact & Support</p>
                  <p className="mt-1 text-xs text-foreground/80">
                    We are available 24/7 to answer your calls and coordinate customized personal care services.
                  </p>
                  <a href="tel:+12102431357" className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                    Call (210) 243-1357 →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-primary/30 bg-white shadow-soft" 
                      : "border-border bg-white/70 hover:bg-white hover:border-primary/20"
                  }`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`size-5 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="font-display font-bold text-foreground text-sm sm:text-base">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown className={`size-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="border-t border-border/50 px-6 pb-6 pt-4">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
