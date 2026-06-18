import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { getSubServiceBySlug } from "@/lib/services-data";
import { useQuote } from "@/lib/quote-context";

export const Route = createFileRoute("/services/$slug/$subSlug")({
  loader: ({ params }) => {
    const result = getSubServiceBySlug(params.slug, params.subSlug);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service — Lillarians Contractor" }] };
    const { service, subService } = loaderData;
    return {
      meta: [
        { title: `${subService.name} — ${service.title} | Lillarians Contractor DMV` },
        { name: "description", content: `${subService.blurb} Professional ${subService.name.toLowerCase()} by Lillarians Contractor across DC, Maryland, and Virginia.` },
        { property: "og:title", content: `${subService.name} — Lillarians Contractor` },
        { property: "og:description", content: subService.blurb },
        { property: "og:image", content: service.image },
        { name: "twitter:image", content: service.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}/${params.subSlug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}/${params.subSlug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: subService.name,
            description: subService.blurb,
            provider: { "@type": "LocalBusiness", name: "Lillarians Contractor" },
            areaServed: ["Washington DC", "Maryland", "Virginia"],
            serviceType: service.title,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold uppercase mb-4">Sub-service not found</h1>
          <Link to="/services" className="text-accent story-link">View all services</Link>
        </div>
      </div>
    </SiteLayout>
  ),
  component: SubServicePage,
});

function SubServicePage() {
  const { service, subService } = Route.useLoaderData();
  const { open } = useQuote();
  const related = service.subServices.filter((s) => s.slug !== subService.slug).slice(0, 4);

  return (
    <SiteLayout>
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src={service.image}
          alt={subService.name}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 animate-reveal w-full">
          <nav className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/60 mb-4 flex flex-wrap items-center gap-2">
            <Link to="/services" className="hover:text-accent">Services</Link>
            <span>/</span>
            <Link to="/services/$slug" params={{ slug: service.slug }} className="hover:text-accent">
              {service.shortTitle}
            </Link>
            <span>/</span>
            <span className="text-accent">{subService.name}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.95] max-w-4xl">
            {subService.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/80">{subService.blurb}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <Reveal className="md:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Overview</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-6">
              About this <span className="font-serif italic text-accent normal-case">service</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-lg mb-6">{subService.blurb}</p>
            <p className="text-foreground/65 leading-relaxed">
              Part of our {service.title} division. {service.longDescription}
            </p>
          </Reveal>
          <Reveal delay={150} className="border-l border-border md:pl-10">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6">What's Included</h3>
            <ul className="space-y-4">
              {subService.details.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-foreground/75">
                  <span className="text-accent shrink-0">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mt-3 mb-6">
              Request a quote for <br />
              <span className="font-serif italic text-accent normal-case">{subService.name}</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              On-site assessment, itemized written quote, and a guaranteed start date.
            </p>
            <button
              onClick={() => open(service.title)}
              className="px-10 py-5 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-accent/90 transition-colors rounded-sm"
            >
              Request a Quote
            </button>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-8">
            More {service.shortTitle} services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug/$subSlug"
                params={{ slug: service.slug, subSlug: r.slug }}
                className="group block border border-border p-5 rounded-sm hover:border-accent transition-colors"
              >
                <h4 className="text-sm font-display font-semibold uppercase mb-2 leading-snug">{r.name}</h4>
                <p className="text-xs text-foreground/55 line-clamp-2">{r.blurb}</p>
                <span className="mt-3 inline-block text-[10px] font-mono uppercase tracking-widest text-accent">View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
