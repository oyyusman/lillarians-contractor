import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lillarians Contractor DMV" },
      { name: "description", content: "Reach Lillarians Contractor for service in DC, Maryland, and Virginia. Phone, email, address, and contact form." },
      { property: "og:title", content: "Contact Lillarians Contractor" },
      { property: "og:description", content: "Get in touch with our DMV contractor team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 animate-reveal">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">Contact</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4 max-w-4xl">
            Let's <span className="font-serif italic text-accent normal-case">talk.</span>
          </h1>
          <p className="mt-6 max-w-xl text-foreground/70">Serving the DMV — DC · Maryland · Virginia. We respond within one business day.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-8">Reach us directly</h2>
            <dl className="space-y-6">
              {[
                { l: "Phone", v: "+1 (202) 555-0192", href: "tel:+12025550192" },
                { l: "Email", v: "hello@lillarians.com", href: "mailto:hello@lillarians.com" },
                { l: "Address", v: "Bethesda, MD · Serving the entire DMV" },
                { l: "Hours", v: "Mon–Sat · 7am–7pm" },
              ].map((c) => (
                <div key={c.l} className="border-b border-border pb-6">
                  <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">{c.l}</dt>
                  <dd className="text-lg">
                    {c.href ? <a href={c.href} className="story-link">{c.v}</a> : c.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4">Service Area</h3>
              <div className="aspect-video rounded-sm overflow-hidden border border-border">
                <iframe
                  title="Service area map — DMV"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-77.5%2C38.8%2C-76.8%2C39.2&amp;layer=mapnik"
                  className="w-full h-full grayscale-[40%]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="border border-border p-8 md:p-10 rounded-sm bg-secondary/30">
              <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-8">Send a message</h2>
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent">✓</div>
                  <p className="font-serif italic text-xl text-accent mb-2">Message sent</p>
                  <p className="text-sm text-foreground/60">We'll reply within one business day.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-2">Message</label>
                    <textarea required rows={5} maxLength={1000} className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:border-accent transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full px-8 py-4 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-accent/90 transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-2">{label}</label>
      <input name={name} type={type} required={required} maxLength={120} className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:border-accent transition-colors" />
    </div>
  );
}
