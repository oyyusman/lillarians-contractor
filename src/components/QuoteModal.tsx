import { useEffect, useMemo, useState } from "react";
import { useQuote } from "@/lib/quote-context";
import { SERVICES } from "@/lib/services-data";

export function QuoteModal() {
  const { isOpen, close, presetCategory } = useQuote();
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState(presetCategory ?? "");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (presetCategory) setCategory(presetCategory);
  }, [presetCategory]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const subOptions = useMemo(() => {
    const svc = SERVICES.find((s) => s.title === category);
    return svc?.subServices ?? [];
  }, [category]);

  if (!isOpen) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.phone || !data.email || !category || !data.details) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "09ed372d-6835-4dc0-9b66-acdc893ec531",
          subject: "New Quote Request from Lillarians Website",
          category,
          ...data,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          close();
        }, 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
    >
      <button
        type="button"
        aria-label="Close quote form"
        onClick={close}
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
      />
      <div className="relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto glass rounded-md p-8 md:p-10 animate-reveal">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors text-2xl leading-none"
        >
          ×
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif italic text-2xl mb-3 text-accent">Response has been sent</h3>
            <p className="text-sm text-foreground/70 max-w-sm mx-auto">
              You will be contacted by the team shortly.
            </p>
          </div>
        ) : (
          <>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Step 01 / Consultation</span>
            <h2 id="quote-title" className="font-display font-bold text-3xl uppercase tracking-tighter mt-2 mb-2">
              Request a <span className="font-serif italic text-accent normal-case">Quote</span>
            </h2>
            <p className="text-sm text-foreground/60 mb-7">
              Tell us about your property. We'll reply within one business day.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-sm">
                  {error}
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Full Name" name="name" required placeholder="Jane Smith" />
                <FormField
                  label="Phone Number (US)"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(703) 400-4198"
                  inputMode="tel"
                  pattern="^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                  title="Enter a valid US phone number, e.g. (703) 400-4198"
                />
              </div>
              <FormField label="Email" name="email" type="email" required placeholder="you@example.com" />

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-2">
                  Service Category
                </label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:border-accent transition-colors"
                >
                  <option value="">Select a category…</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              {subOptions.length > 0 && (
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-2">
                    Sub-Service
                  </label>
                  <select
                    name="subService"
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:border-accent transition-colors"
                  >
                    <option value="">Optional — pick a sub-service</option>
                    {subOptions.map((sub) => (
                      <option key={sub.slug} value={sub.name}>{sub.name}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-2">
                  Project Details
                </label>
                <textarea
                  name="details"
                  rows={4}
                  maxLength={1000}
                  required
                  placeholder="Briefly describe what you're looking to have done…"
                  className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 px-8 py-4 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors rounded-sm disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
              <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 text-center pt-2">
                Serving DC · Maryland · Virginia
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type" | "required">) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={120}
        {...rest}
        className="w-full bg-card border border-input rounded-sm px-4 py-3 text-sm focus:border-accent transition-colors"
      />
    </div>
  );
}
