import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero-dusk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lillarians Contractor | DMV Premium Contractor" },
      { name: "description", content: "Twelve years of premium contractor work across DC, Maryland, and Virginia. Meet the team behind Lillarians Contractor." },
      { property: "og:title", content: "About Lillarians Contractor" },
      { property: "og:description", content: "Premium contractor services across the DMV — built on craft, accountability, and lasting workmanship." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[460px] flex items-end overflow-hidden">
        <img src={heroImg} alt="" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 animate-reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">About</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4">
            Built on craft, <br />
            <span className="font-serif italic text-accent normal-case">accountable to detail.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-lg leading-relaxed text-foreground/80">
          <Reveal>
            <p>
              Lillarians Contractor was founded with one premise: the DMV deserved a contractor that treated outdoor work as architecture, not maintenance. Twelve years later, that premise still drives every project.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              We serve homeowners, property managers, and commercial clients across Washington DC, Maryland, and Virginia. From a single estate cleanup to multi-property maintenance contracts, our crews bring the same agronomic and structural expertise to every job.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Our promise is simple: licensed work, written warranties, transparent pricing, and a crew that respects your home as if it were their own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { v: 850, s: "+", l: "Properties Served" },
            { v: 12, s: "", l: "Years in DMV" },
            { v: 60, s: "+", l: "Trained Crew" },
            { v: 98, s: "%", l: "Retention Rate" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-50">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12">
              What we <span className="font-serif italic text-accent normal-case">stand for</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "Quality of workmanship", d: "Every job is signed off by a senior crew lead before invoicing. If it's not right, we fix it." },
              { t: "Customer satisfaction", d: "98% of our annual revenue comes from repeat clients or their direct referrals." },
              { t: "Residential & commercial", d: "From single-family yards to mixed-use property portfolios — same standard." },
              { t: "DMV coverage", d: "Crews based in Bethesda with daily routes through DC, Northern Virginia, and Montgomery County." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100} className="border border-border p-8 hover:border-accent transition-colors rounded-sm">
                <h3 className="text-xl font-display font-bold mb-3 uppercase">{v.t}</h3>
                <p className="text-foreground/65 leading-relaxed">{v.d}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-block px-8 py-4 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-accent/90 transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
