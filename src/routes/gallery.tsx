import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal } from "@/components/Reveal";
import b1 from "@/assets/ba-before.jpg";
import a1 from "@/assets/ba-after.jpg";
import b2 from "@/assets/ba2-before.jpg";
import a2 from "@/assets/ba2-after.jpg";
import b3 from "@/assets/ba3-before.jpg";
import a3 from "@/assets/ba3-after.jpg";

const PAIRS = [
  { category: "Landscape Renovation", title: "Bethesda backyard transformation", before: b1, after: a1, note: "Overgrown yard restored to a curated estate landscape with new patio, plantings, and bed work." },
  { category: "Pressure Washing", title: "Algae-stained driveway restored", before: b2, after: a2, note: "Soft-wash and surface cleaner combo removed years of buildup without damaging the concrete finish." },
  { category: "Build & Outdoor Living", title: "Empty yard to outdoor kitchen", before: b3, after: a3, note: "Full design-build: pergola, outdoor kitchen, lighting, and pavers — completed in 18 working days." },
  { category: "Landscape Renovation", title: "Front yard curb appeal refresh", before: b1, after: a1, note: "Sod replacement, mulching, and architectural plantings before a real estate listing." },
  { category: "Pressure Washing", title: "Walkway brightening", before: b2, after: a2, note: "Specialty rust and tannin removal applied to a heavily shaded north-facing walkway." },
  { category: "Build & Outdoor Living", title: "Pavilion & seating wall build", before: b3, after: a3, note: "Cedar pavilion with built-in seating walls and ambient low-voltage lighting." },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery — Lillarians Contractor DMV" },
      { name: "description", content: "Drag-to-compare before & after photos of recent Lillarians Contractor projects across DC, Maryland, and Virginia." },
      { property: "og:title", content: "Before & After Gallery — Lillarians" },
      { property: "og:description", content: "Real DMV project transformations, side by side." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 animate-reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Before & After</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4 max-w-4xl">
            Real <span className="font-serif italic text-accent normal-case">transformations</span>
          </h1>
          <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
            Drag the slider on each comparison. These are real before/after pairs from recent DMV projects.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {PAIRS.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex flex-col gap-4 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">{p.category}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight">{p.title}</h2>
                <p className="text-foreground/65 max-w-2xl">{p.note}</p>
              </div>
              <BeforeAfter before={p.before} after={p.after} alt={p.title} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
