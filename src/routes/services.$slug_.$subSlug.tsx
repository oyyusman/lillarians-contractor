import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { getSubServiceBySlug } from "@/lib/services-data";
import { useQuote } from "@/lib/quote-context";

// ----- Sub-service media helpers ---------------------------------------------
// We derive topical photography for each sub-service from its own name so the
// hero, gallery, and before/after imagery is visually relevant to that specific
// service (not a generic category photo). LoremFlickr returns real, topical
// Flickr (CC) photography keyed by search terms — perfect for a marketing site.

const STOP_WORDS = new Set([
  "and", "the", "of", "for", "with", "to", "a", "an", "or", "in", "on",
  "&", "services", "service", "installation", "removal", "cleaning",
]);

// Curated keyword overrides for a few sub-services whose names don't search well.
const KEYWORD_OVERRIDES: Record<string, string> = {
  "lawn-mowing-and-maintenance": "lawn,mowing,grass",
  "lawn-fertilization-and-weed-control": "lawn,fertilizer,green,grass",
  "aeration-and-overseeding": "lawn,aeration,grass",
  "mulching-and-bed-maintenance": "mulch,garden,bed",
  "sod-installation-and-lawn-renovation": "sod,lawn,turf",
  "leaf-removal-and-seasonal-cleanup": "leaves,autumn,yard",
  "tree-trimming-and-pruning": "tree,pruning,arborist",
  "tree-removal": "tree,removal,chainsaw",
  "tree-and-shrub-care": "shrub,garden,landscape",
  "bush-removal": "shrub,removal,landscape",
  "yard-cleanup": "yard,cleanup,landscape",
  "landscape-design-and-installation": "landscape,design,garden",
  "hardscaping-services": "paver,patio,hardscape",
  "retaining-walls-and-stonework": "retaining,wall,stone",
  "drainage-solutions-and-grading": "drainage,french,drain",
  "irrigation-and-sprinkler-systems": "sprinkler,irrigation,lawn",
  "outdoor-lighting-installation": "landscape,lighting,outdoor",
  "lawn-pest-and-disease-control": "lawn,treatment,green",
  "house-washing": "house,washing,siding",
  "roof-cleaning": "roof,cleaning,house",
  "driveway-cleaning": "driveway,concrete,clean",
  "sidewalk-and-walkway-cleaning": "sidewalk,clean,concrete",
  "patio-cleaning": "patio,paver,clean",
  "pool-deck-cleaning": "pool,deck,clean",
  "deck-washing": "wood,deck,washing",
  "fence-washing": "fence,wood,washing",
  "garage-floor-and-concrete-cleaning": "garage,floor,concrete",
  "exterior-cleaning": "house,exterior,clean",
  "exterior-window-cleaning": "window,cleaning,house",
  "gutter-cleaning-and-brightening": "gutter,cleaning,house",
  "rust-and-stain-removal": "stain,concrete,clean",
  "trash-can-washing-and-sanitizing": "trash,bin,clean",
  "pressure-washing-before-home-sale": "house,wash,exterior",
  "outdoor-living-design-and-build": "outdoor,living,patio",
  "patios-and-hardscapes": "patio,paver,backyard",
  "decks-and-porches": "deck,porch,backyard",
  "outdoor-kitchens": "outdoor,kitchen,grill",
  "fire-pits-and-fireplaces": "firepit,backyard,patio",
  "pergolas-and-pavilions": "pergola,backyard,patio",
  "retaining-walls-and-seating-walls": "retaining,wall,stone",
  "walkways-and-pathways": "walkway,stone,garden",
  "driveways-and-entrances": "driveway,paver,home",
  "pool-patios-and-surrounds": "pool,patio,backyard",
  "outdoor-lighting": "landscape,lighting,patio",
  "water-features-and-fountains": "fountain,garden,water",
  "junk-removal": "junk,hauling,truck",
  "furniture-removal": "furniture,sofa,moving",
  "appliance-removal": "refrigerator,appliance,kitchen",
  "yard-waste-removal": "yard,branches,debris",
  "construction-debris-removal": "construction,debris,demolition",
  "garage-cleanout": "garage,storage,cleanup",
  "basement-cleanout": "basement,storage,cleanup",
  "hauling-services": "truck,hauling,trailer",
  "moving-help-labor-help": "moving,boxes,furniture",
  "mulch-delivery": "mulch,garden,landscape",
  "gravel-soil-delivery": "gravel,soil,landscape",
  "interior-painting": "interior,painting,room",
  "exterior-painting": "house,exterior,paint",
  "drywall-repair": "drywall,wall,repair",
  "flooring-installation": "flooring,hardwood,floor",
  "fence-installation-and-repair": "fence,wood,yard",
  "deck-repair": "deck,wood,repair",
  "minor-remodeling": "remodel,renovation,home",
  "door-installation": "door,entry,home",
  "window-installation": "window,house,install",
  "roof-repair": "roof,shingles,house",
  "general-home-improvements": "home,improvement,renovation",
  "snow-removal": "snow,plow,driveway",
  "storm-cleanup": "storm,tree,debris",
  "seasonal-yard-cleanup": "yard,leaves,cleanup",
  "mailbox-installation": "mailbox,suburban,house",
  "shed-assembly": "shed,backyard,wood",
};

function deriveKeywords(serviceTitle: string, subName: string, subSlug: string): string {
  if (KEYWORD_OVERRIDES[subSlug]) return KEYWORD_OVERRIDES[subSlug];
  const words = `${subName} ${serviceTitle}`
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOP_WORDS.has(w));
  const uniq = Array.from(new Set(words)).slice(0, 4);
  return uniq.length ? uniq.join(",") : "landscape,home";
}

// Stable seed from a string so each sub-service gets consistent photography.
function hashSeed(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function buildImagery(serviceSlug: string, subSlug: string, serviceTitle: string, subName: string) {
  const keywords = deriveKeywords(serviceTitle, subName, subSlug);
  const base = hashSeed(`${serviceSlug}/${subSlug}`);
  const url = (w: number, h: number, salt: string) =>
    `https://loremflickr.com/${w}/${h}/${encodeURIComponent(keywords)}?lock=${base + hashSeed(salt)}`;
  return {
    hero: url(1920, 1080, "hero"),
    gallery: url(1200, 900, "gallery"),
    before: url(1200, 800, "before"),
    after: url(1200, 800, "after"),
  };
}

// ----- Route -----------------------------------------------------------------

export const Route = createFileRoute("/services/$slug_/$subSlug")({
  loader: ({ params }) => {
    const result = getSubServiceBySlug(params.slug, params.subSlug);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service — Lillarians Contractor" }] };
    const { service, subService } = loaderData;
    const imagery = buildImagery(service.slug, subService.slug, service.title, subService.name);
    return {
      meta: [
        { title: `${subService.name} — ${service.title} | Lillarians Contractor DMV` },
        { name: "description", content: `${subService.blurb} Professional ${subService.name.toLowerCase()} by Lillarians Contractor across DC, Maryland, and Virginia.` },
        { property: "og:title", content: `${subService.name} — Lillarians Contractor` },
        { property: "og:description", content: subService.blurb },
        { property: "og:image", content: imagery.hero },
        { name: "twitter:image", content: imagery.hero },
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
            image: imagery.hero,
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
  const { service, subService } = Route.useLoaderData() as NonNullable<ReturnType<typeof getSubServiceBySlug>>;
  const { open } = useQuote();
  const related = service.subServices.filter((s) => s.slug !== subService.slug).slice(0, 4);
  const imagery = buildImagery(service.slug, subService.slug, service.title, subService.name);

  const processSteps = [
    {
      n: "01",
      title: "On-Site Assessment",
      body: `We walk the property, measure the work area, and confirm exactly what your ${subService.name.toLowerCase()} project requires — no guesswork, no surprises.`,
    },
    {
      n: "02",
      title: "Written Proposal",
      body: `You receive a clear, itemized written quote covering scope, materials, crew size, schedule, and warranty for the ${subService.name.toLowerCase()} work.`,
    },
    {
      n: "03",
      title: "Scheduled Execution",
      body: `A dedicated Lillarians crew arrives on time, protects the surrounding property, and completes the ${subService.name.toLowerCase()} work to the agreed standard.`,
    },
    {
      n: "04",
      title: "Walk-Through & Warranty",
      body: `We finish with a final walk-through, leave the site cleaner than we found it, and stand behind every ${subService.name.toLowerCase()} job with a written workmanship guarantee.`,
    },
  ];

  return (
    <SiteLayout>
      {/* HERO ----------------------------------------------------------- */}
      <section className="relative h-[58vh] min-h-[460px] flex items-end overflow-hidden">
        <img
          src={imagery.hero}
          alt={`${subService.name} — professional ${service.title.toLowerCase()} in the DMV`}
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

      {/* OVERVIEW + WHAT'S INCLUDED -------------------------------------- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <Reveal className="md:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Overview</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-6">
              About <span className="font-serif italic text-accent normal-case">{subService.name}</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-lg mb-5">{subService.blurb}</p>
            <p className="text-foreground/70 leading-relaxed mb-5">
              {subService.name} is one of the most requested offerings inside our {service.title} division across
              Washington DC, Maryland, and Virginia. Whether you own a single-family home, a townhome, or a small
              commercial property, our crews approach the work the same way — methodically, with the right equipment
              for the surface, and with a finish standard you can actually see when we leave the property.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-5">
              {service.longDescription}
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Every {subService.name.toLowerCase()} job is supervised by a Lillarians lead, fully insured, and backed
              by a written workmanship warranty. You get one point of contact from quote to final walk-through —
              no subcontractor shuffle, no day-of surprises.
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

      {/* PROJECT VISUALS + BEFORE/AFTER ---------------------------------- */}
      <section className="py-20 md:py-28 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Project Visuals</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-6">
              {subService.name} <span className="font-serif italic text-accent normal-case">in the field</span>
            </h2>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border mb-6">
              <img
                src={imagery.gallery}
                alt={`${subService.name} project example by Lillarians Contractor`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm text-foreground/85">
                  {subService.name} planned, prepared, executed, and cleaned up by a dedicated Lillarians crew.
                </p>
              </div>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Every {subService.name.toLowerCase()} project receives a documented scope, on-site protection of
              surrounding plantings and surfaces, professional execution by trained crews, and a final walk-through
              so the finished result matches the written proposal you approved.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Before & After Gallery</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mt-3 mb-3">
              {subService.name} transformation
            </h3>
            <p className="text-foreground/70 mb-6">
              Real {subService.name.toLowerCase()} results. Drag the divider to compare the starting condition with
              the finished work delivered by our crew.
            </p>
            <BeforeAfter
              before={imagery.before}
              after={imagery.after}
              alt={`${subService.name} before and after`}
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESS --------------------------------------------------------- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-12 max-w-2xl">
              How a {subService.name.toLowerCase()} project <span className="font-serif italic text-accent normal-case">moves forward</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="h-full border border-border p-6 rounded-sm bg-background/40 hover:border-accent transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">{step.n}</span>
                  <h3 className="text-lg font-display font-bold uppercase tracking-tight mt-3 mb-3">{step.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LILLARIANS -------------------------------------------------- */}
      <section className="py-20 md:py-24 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Why Lillarians</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mt-3 mb-6">
              The right team for <span className="font-serif italic text-accent normal-case">{subService.name.toLowerCase()}</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Homeowners across the DMV hire Lillarians Contractor for {subService.name.toLowerCase()} because we
              treat every property like our own — careful site prep, the correct equipment for the surface, and a
              crew that respects your time, your landscaping, and your neighbors.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Licensed, insured, and reachable seven days a week at{" "}
              <a href="tel:7034004198" className="text-accent story-link">703-400-4198</a> or{" "}
              <a href="mailto:info@lillarians.contractors" className="text-accent story-link">info@lillarians.contractors</a>.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foreground/80 border border-border/70 p-4 rounded-sm bg-background/40">
                  <span className="text-accent shrink-0">●</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA ------------------------------------------------------------- */}
      <section className="py-20 border-b border-border">
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

      {/* RELATED --------------------------------------------------------- */}
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
