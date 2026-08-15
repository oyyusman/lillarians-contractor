import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/services-data";
import { useQuote } from "@/lib/quote-context";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import heroImg from "@/assets/hero-dusk.jpg";
import baBefore from "@/assets/ba-before.jpg";
import baAfter from "@/assets/ba-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lillarians Contractor — Premium DMV Landscaping, Pressure Washing & Outdoor Living" },
      { name: "description", content: "Premium contractor services across DC, Maryland & Virginia. Landscaping, pressure washing, outdoor living builds, junk removal, home improvement, and seasonal property care." },
      { property: "og:title", content: "Lillarians Contractor — Premium DMV Property Services" },
      { property: "og:description", content: "Transforming outdoor spaces with professional contractor services across the DMV area." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />

      <ServicesGrid />
      <About />
      <BeforeAfterSection />
      <HowWeWork />
      <TestimonialsSection />
      <CTABand />
    </SiteLayout>
  );
}

function Hero() {
  const { open } = useQuote();
  return (
    <header className="relative h-[92vh] min-h-[640px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury dusk patio with landscape lighting and hedges"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-5xl text-center px-6 animate-reveal">
        <span className="inline-block text-[10px] font-mono uppercase tracking-[0.4em] text-accent mb-6 animate-shimmer">
          DMV · Licensed & Insured · Est. Premier Contractor
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-balance mb-7 uppercase leading-[0.95]">
          Transforming <br />
          <span className="font-serif italic text-accent normal-case tracking-normal">Outdoor Spaces</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/75 text-pretty mb-10">
          Landscaping, pressure washing, outdoor living, home improvement, and property maintenance across the DMV area.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => open()}
            className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors rounded-sm"
          >
            Get Free Quote
          </button>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-colors rounded-sm"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-white/30 animate-line" />
      </div>
    </header>
  );
}


function ServicesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
            Specialized <br />
            <span className="font-serif italic text-accent lowercase">capabilities</span>
          </h2>
          <p className="max-w-md text-foreground/60 text-sm font-mono leading-relaxed uppercase tracking-tight">
            From structural builds to seasonal restoration, we manage the lifecycle of your estate's exterior with surgical precision.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative block aspect-[4/5] bg-card border border-border overflow-hidden hover:border-accent transition-colors rounded-sm"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-background/70 uppercase tracking-widest mb-2 block">{s.number}</span>
                  <h3 className="text-2xl font-display font-bold uppercase mb-3 leading-tight text-background">{s.title}</h3>
                  <p className="text-sm text-background/80 mb-4">{s.tagline}</p>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-background story-link">Learn more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">About Lillarians</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mt-4 mb-6 tracking-tighter">
            Rooted in craft, <br />
            <span className="font-serif italic text-accent normal-case">driven by excellence.</span>
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Lillarians Contractor delivers high-end exterior solutions tailored to the unique terrain and architecture of the Mid-Atlantic. Our crews bring technical expertise to every square foot of your residential or commercial property — across DC, Maryland, and Virginia.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-8">
            We treat every site as a premium asset. From a single weekend pressure wash to a multi-month outdoor living build, the same standard of quality applies.
          </p>
          <Link to="/about" className="text-xs font-mono uppercase tracking-widest text-accent story-link">
            Read our story →
          </Link>
        </Reveal>

        <Reveal delay={150} className="grid grid-cols-2 gap-px bg-border rounded-sm overflow-hidden border border-border">
          {[
            { v: "Residential", l: "& Commercial" },
            { v: "Licensed", l: "DC · MD · VA" },
            { v: "Insured", l: "Workers' Comp" },
            { v: "Warrantied", l: "Workmanship" },
          ].map((b) => (
            <div key={b.v} className="bg-background p-8">
              <span className="block text-2xl font-display font-bold mb-1">{b.v}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{b.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32 bg-primary/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Before & After</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mt-4 mb-6 tracking-tighter">
            The Standard <br />
            <span className="font-serif italic text-accent normal-case">of excellence</span>
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Drag the slider to see what we mean. We don't just maintain properties — we restore and elevate them.
          </p>
          <Link
            to="/gallery"
            className="inline-block px-7 py-3.5 border border-accent text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm"
          >
            View Full Gallery
          </Link>
        </Reveal>
        <Reveal delay={150}>
          <BeforeAfter before={baBefore} after={baAfter} alt="Backyard transformation" />
        </Reveal>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { n: "01", t: "Consultation", d: "We walk your property with you, identify hidden issues, and understand your project goals." },
    { n: "02", t: "Proposal", d: "Detailed quote, project scope, timeline, materials, and recommendations — all in writing." },
    { n: "03", t: "Implementation", d: "Our crew arrives on time, works clean, and executes with a level of detail that lasts seasons." },
  ];
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mt-4 tracking-tighter">
            A seamless <span className="font-serif italic text-accent normal-case">process</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="absolute hidden md:block top-8 left-[16%] right-[16%] h-px bg-border" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 150} className="relative text-center">
              <div className="mx-auto size-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-lg mb-8 ring-8 ring-background relative z-10">
                {s.n}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase">{s.t}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mt-4 tracking-tighter">
            Trusted across <span className="font-serif italic text-accent normal-case">the DMV</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <Testimonials />
        </Reveal>
      </div>
    </section>
  );
}

function CTABand() {
  const { open } = useQuote();
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Ready to <span className="font-serif italic text-accent normal-case">transform?</span>
          </h2>
          <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
            Book your private consultation. We'll be on-site within the week.
          </p>
          <button
            onClick={() => open()}
            className="px-10 py-5 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-accent/90 transition-colors rounded-sm"
          >
            Request Your Quote
          </button>
        </Reveal>
      </div>
    </section>
  );
}
