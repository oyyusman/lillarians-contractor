import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services-data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="pt-28 pb-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <img src={logo} alt="Lillarians" width={48} height={48} className="h-12 w-auto" />
              <span className="font-display font-bold tracking-tight text-2xl uppercase">Lillarians</span>
            </Link>
            <p className="max-w-sm text-foreground/50 text-sm leading-relaxed mb-8">
              Master-tier contracting services for the discerning homeowners and property managers of DC, Maryland, and Virginia.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="size-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-xs font-mono"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-foreground transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/how-we-work" className="hover:text-foreground transition-colors">Process</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Reach Us</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><a href="tel:+17034004198" className="hover:text-foreground">+1 (703) 400-4198</a></li>
              <li><a href="mailto:info@lillarians.contractors" className="hover:text-foreground">info@lillarians.contractors</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40">
          <span>&copy; {new Date().getFullYear()} Lillarians Contractor Group</span>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>DMV Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
