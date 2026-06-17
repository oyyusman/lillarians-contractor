import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import { useQuote } from "@/lib/quote-context";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Lillarians Contractor" }] };
    return {
      meta: [
        { title: `${s.title} — Lillarians Contractor | DMV` },
        { name: "description", content: `${s.tagline} Professional ${s.title.toLowerCase()} across DC, Maryland, and Virginia by Lillarians Contractor.` },
        { property: "og:title", content: `${s.title} — Lillarians Contractor` },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.image },
        { name: "twitter:image", content: s.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.longDescription,
            provider: { "@type": "LocalBusiness", name: "Lillarians Contractor" },
            areaServed: ["Washington DC", "Maryland", "Virginia"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: s.title,
              itemListElement: s.subServices.map((sub) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: sub } })),
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold uppercase mb-4">Service not found</h1>
          <Link to="/services" className="text-accent story-link">View all services</Link>
        </div>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const { open } = useQuote();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 animate-reveal w-full">
          <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent mb-3">
            Service · {service.number}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.95] max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{service.tagline}</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <Reveal className="md:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Overview</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-6">
              What we <span className="font-serif italic text-accent normal-case">deliver</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-lg">{service.longDescription}</p>
          </Reveal>
          <Reveal delay={150} className="border-l border-border md:pl-12">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6">Why Lillarians</h3>
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foreground/75">
                  <span className="text-accent shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">All Offerings</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-12">
              Every <span className="font-serif italic text-accent normal-case">sub-service</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.subServices.map((sub, i) => (
              <Reveal key={sub} delay={i * 30} className="group border border-border bg-background p-5 hover:border-accent transition-colors rounded-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[10px] font-mono text-accent mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium leading-snug">{sub}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-16">
              How a project <span className="font-serif italic text-accent normal-case">unfolds</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Consultation", d: "On-site assessment and detailed conversation about your goals, timeline, and budget." },
              { n: "02", t: "Proposal", d: "Itemized written proposal with materials, scope, and a guaranteed start date." },
              { n: "03", t: "Execution", d: "Crew arrives on time, works clean, and signs off with a senior lead inspection." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 120} className="border border-border p-8 rounded-sm">
                <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">{p.n}</div>
                <h3 className="text-xl font-display font-bold uppercase mb-3">{p.t}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-12">
              Common <span className="font-serif italic text-accent normal-case">questions</span>
            </h2>
          </Reveal>
          <div className="space-y-4">
            {service.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <details className="group border border-border p-6 rounded-sm bg-background open:border-accent transition-colors">
                  <summary className="cursor-pointer flex items-start justify-between gap-6 font-display font-semibold list-none">
                    <span>{f.q}</span>
                    <span className="text-accent text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-foreground/65 leading-relaxed text-sm">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
              Get a quote for <br />
              <span className="font-serif italic text-accent normal-case">{service.shortTitle}</span>
            </h2>
            <button
              onClick={() => open(service.title)}
              className="px-10 py-5 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-accent/90 transition-colors rounded-sm"
            >
              Request a Quote
            </button>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-8">Related Services</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group block border border-border p-6 rounded-sm hover:border-accent transition-colors">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{r.number}</span>
                <h4 className="text-xl font-display font-bold mt-2 mb-2 uppercase">{r.title}</h4>
                <p className="text-sm text-foreground/60">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
