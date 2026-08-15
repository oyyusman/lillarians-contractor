import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Lillarians Contractor | DMV Landscaping, Pressure Washing, Outdoor Living" },
      { name: "description", content: "Complete contractor services for DMV properties: lawn care, landscaping, pressure washing, outdoor living builds, junk removal, home improvement, and seasonal services." },
      { property: "og:title", content: "All Services — Lillarians Contractor" },
      { property: "og:description", content: "Full-spectrum contractor services across DC, Maryland, and Virginia." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 animate-reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Services</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4 max-w-4xl">
            Full-spectrum <br />
            <span className="font-serif italic text-accent normal-case">contractor care</span>
          </h1>
          <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
            Six service categories. Dozens of specialized offerings. One crew committed to your property.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative block aspect-[4/5] bg-card border border-border overflow-hidden hover:border-accent transition-colors rounded-sm"
              >
                <img src={s.image} alt={s.title} width={800} height={1000} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-background/70 uppercase tracking-widest mb-2 block">{s.number}</span>
                  <h2 className="text-2xl font-display font-bold uppercase mb-3 leading-tight">{s.title}</h2>
                  <p className="text-sm text-background/80 mb-4">{s.tagline}</p>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-background story-link">Learn more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
