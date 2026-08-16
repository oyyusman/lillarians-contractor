import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Testimonials } from "@/components/Testimonials";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Lillarians Contractor DMV" },
      { name: "description", content: "Real reviews from Lillarians Contractor clients across DC, Maryland, and Virginia." },
      { property: "og:title", content: "Testimonials — Lillarians Contractor" },
      { property: "og:description", content: "What DMV homeowners say about Lillarians Contractor." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { n: "Margaret H.", l: "Nokesville Virginia", q: "The pergola and paver patio Lillarians built is the centerpiece of our home. Every detail was considered.", s: 5 },
  { n: "David R.", l: "McLean, VA", q: "Three contractors over a decade. Lillarians is the only one we call now. Consistently exceptional.", s: 5 },
  { n: "Priya K.", l: "Washington, DC", q: "From consultation to walkthrough, they treat your property like it's their own.", s: 5 },
  { n: "James O.", l: "Potomac, MD", q: "Hired them for a single junk removal. Signed a seasonal lawn contract the same week.", s: 5 },
  { n: "Elena V.", l: "Arlington, VA", q: "I refer Lillarians for every pre-listing exterior refresh. My sellers always thank me.", s: 5 },
  { n: "Marcus T.", l: "Chevy Chase, MD", q: "Snow event response was within two hours. They saved us from a missed flight.", s: 5 },
];

function TestimonialsPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 animate-reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Testimonials</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4 max-w-4xl">
            Voices from <br />
            <span className="font-serif italic text-accent normal-case">across the DMV</span>
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 70}>
              <article className="border border-border p-8 h-full hover:border-accent transition-colors rounded-sm">
                <div className="flex gap-1 text-accent text-sm mb-4">
                  {Array.from({ length: r.s }).map((_, k) => <span key={k}>★</span>)}
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-foreground/85 mb-6">"{r.q}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-display font-semibold text-sm">{r.n}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/50 mt-1">{r.l}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
