import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal } from "@/components/Reveal";
import lawnBefore from "@/assets/lawn-before.png";
import lawnAfter from "@/assets/lawn-after.jpg";
import fertBefore from "@/assets/fertilizer-before.png";
import fertAfter from "@/assets/fertilizer-after.png";
import b3 from "@/assets/ba3-before.jpg";
import a3 from "@/assets/ba3-after.jpg";
import snowbefore from "@/assets/Snow Removal/Before.png";
import snowafter from "@/assets/Snow Removal/After.png";
import fencebefore from "@/assets/Fence Installation & Repair/before.png";
import fenceafter from "@/assets/Fence Installation & Repair/after.png";
import paintbefore from "@/assets/Interior Painting/before.png";
import paintafter from "@/assets/Interior Painting/after.png";




const PAIRS = [
  { category: "Lawn Care", title: "Lawn Mowing & Maintenance", before: lawnBefore, after: lawnAfter, note: "Overgrown grass restored with professional mowing and edging." },
  { category: "Lawn Care", title: "Lawn Fertilization", before: fertBefore, after: fertAfter, note: "Weed control and fertilization program transformed a patchy lawn into a dense, deep-green turf." },
  { category: "Seasonal Services", title: "Snow Removal ", before: snowbefore, after: snowafter, note: "From snow-covered to safe and accessible—see the difference we make." },
  { category: "Contractor & Home Improvement", title: "Fence Installation & Repair", before: fencebefore, after: fenceafter, note: "See how our expert fence installation and repair services enhance security and curb appeal." },
  { category: "Contractor & Home Improvement", title: "Interior Painting", before: paintbefore, after: paintafter, note: "See how a fresh coat of paint transforms interiors into bright, beautiful spaces." },


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
