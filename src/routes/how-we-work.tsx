import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/lib/quote-context";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — Our Process | Lillarians Contractor" },
      { name: "description", content: "From consultation to implementation — our transparent 3-step process for every contractor project across the DMV." },
      { property: "og:title", content: "How We Work — Lillarians Process" },
      { property: "og:description", content: "Consultation, proposal, implementation — done right." },
      { property: "og:url", content: "/how-we-work" },
    ],
    links: [{ rel: "canonical", href: "/how-we-work" }],
  }),
  component: HowPage,
});

const STEPS = [
  {
    n: "01",
    t: "Consultation",
    d: "We discuss customer requirements, inspect the property, and understand project goals. On-site walk-through is always free.",
    details: ["On-site property inspection", "Goals & timeline alignment", "Material & design options", "Photo documentation for record"],
  },
  {
    n: "02",
    t: "Proposal",
    d: "We provide a detailed quote, project scope, timeline, and recommendations. Everything in writing, nothing hidden.",
    details: ["Itemized written proposal", "Material specs & options", "Project timeline & milestones", "Warranty terms"],
  },
  {
    n: "03",
    t: "Implementation",
    d: "Our team completes the project professionally, efficiently, and on schedule. Cleanup and final inspection included.",
    details: ["On-time crew arrival", "Daily site cleanup", "Senior lead sign-off", "Post-project walkthrough"],
  },
];

function HowPage() {
  const { open } = useQuote();
  return (
    <SiteLayout>
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 animate-reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Our Process</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4 max-w-4xl">
            A seamless <br />
            <span className="font-serif italic text-accent normal-case">three-step process</span>
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-border pt-12">
                <div>
                  <div className="text-7xl font-display font-bold text-accent">{s.n}</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/50 mt-3">Step {s.n}</div>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-4">{s.t}</h2>
                  <p className="text-foreground/75 leading-relaxed text-lg mb-6">{s.d}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-foreground/65">
                        <span className="text-accent shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-8">
              Start with <span className="font-serif italic text-accent normal-case">Step 01</span>
            </h2>
            <button
              onClick={() => open()}
              className="px-10 py-5 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.3em] rounded-sm hover:bg-accent/90 transition-colors"
            >
              Book a Consultation
            </button>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
