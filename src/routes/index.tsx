import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Mission } from "@/components/site/Mission";
import { Testimonials } from "@/components/site/Testimonials";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harmony Residential Care Services Inc | Compassionate Home Care in Pickerington, OH" },
      { name: "description", content: "Trusted residential care & non-skilled nursing services in Pickerington, OH. 20+ years of compassionate, personalized home care helping families live safely and independently." },
      { property: "og:title", content: "Harmony Residential Care Services Inc" },
      { property: "og:description", content: "Compassionate, personalized residential care & non-skilled nursing services in Pickerington, OH." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Mission />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
