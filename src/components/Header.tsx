import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuote } from "@/lib/quote-context";
import { SERVICES } from "@/lib/services-data";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/how-we-work", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { open } = useQuote();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Lillarians Contractor home">
          <img src={logo} alt="Lillarians Contractor" width={36} height={36} className="h-9 w-auto" />
          <span className="font-display font-bold tracking-tight text-base sm:text-lg uppercase hidden xs:inline">Lillarians</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          <Link to="/" className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>Home</Link>
          <Link to="/about" className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>About</Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-1"
              activeProps={{ className: "text-accent" }}
            >
              Services
              <span className="text-[8px]">▼</span>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px]">
                <div className="glass rounded-md p-2 animate-reveal">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block px-4 py-3 hover:bg-accent/10 rounded-sm transition-colors"
                    >
                      <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-0.5">{s.number}</div>
                      <div className="text-sm font-display font-semibold">{s.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Gallery</Link>
          <Link to="/testimonials" className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Testimonials</Link>
          <Link to="/how-we-work" className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Process</Link>
          <Link to="/contact" className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Contact</Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => open()}
            className="hidden sm:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest rounded-sm hover:bg-accent/90 transition-all"
          >
            Get a Quote
          </button>
          <button
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="w-6 h-px bg-foreground mb-1.5" />
            <div className="w-6 h-px bg-foreground mb-1.5" />
            <div className="w-6 h-px bg-foreground" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-reveal">
          <div className="px-6 py-6 space-y-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-mono uppercase tracking-widest py-2 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-3">Services</div>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm hover:text-accent"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <button
              onClick={() => { setMobileOpen(false); open(); }}
              className="w-full mt-4 px-5 py-3 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest rounded-sm"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
