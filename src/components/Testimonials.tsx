import { useEffect, useState } from "react";

const QUOTES = [
  {
    name: "Margaret H.",
    location: "Bethesda, MD",
    role: "Homeowner",
    stars: 5,
    text: "Lillarians completely transformed our backyard. The pergola and paver patio they built is the centerpiece of our home now. Every detail was considered.",
  },
  {
    name: "David R.",
    location: "McLean, VA",
    role: "Property Manager",
    stars: 5,
    text: "We've used three contractors over the last decade. Lillarians is the only one we call now. Professional, on-time, and the workmanship is consistently exceptional.",
  },
  {
    name: "Priya K.",
    location: "Washington, DC",
    role: "Homeowner",
    stars: 5,
    text: "From the initial consultation through the final walkthrough, this team treats your property like it's their own. The soft-wash on our roof made it look brand new.",
  },
  {
    name: "James O.",
    location: "Potomac, MD",
    role: "Homeowner",
    stars: 5,
    text: "Hired them for a single junk removal. Ended up signing a seasonal lawn contract the same week. That's how good the experience was.",
  },
  {
    name: "Elena V.",
    location: "Arlington, VA",
    role: "Realtor",
    stars: 5,
    text: "I refer Lillarians for every pre-listing exterior refresh. My sellers always thank me. They show up, do the work, and leave the property pristine.",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden min-h-[280px]">
        {QUOTES.map((q, i) => (
          <article
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ${
              i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="text-center px-4">
              <div className="flex justify-center gap-1 mb-6 text-accent" aria-label={`${q.stars} stars`}>
                {Array.from({ length: q.stars }).map((_, k) => (
                  <span key={k}>★</span>
                ))}
              </div>
              <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-foreground/90 mb-8 text-balance">
                "{q.text}"
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center font-display font-bold mb-2">
                  {q.name[0]}
                </div>
                <div className="font-display font-semibold text-sm">{q.name}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                  {q.role} · {q.location}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1 transition-all rounded-full ${
              i === idx ? "w-10 bg-accent" : "w-4 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
