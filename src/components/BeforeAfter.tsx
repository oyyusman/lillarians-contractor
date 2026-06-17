import { useCallback, useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export function BeforeAfter({ before, after, beforeLabel = "Before", afterLabel = "After", alt = "Before and after comparison" }: Props) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] w-full overflow-hidden rounded-md border-4 border-white/5 shadow-2xl select-none touch-none cursor-ew-resize"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
    >
      <img src={after} alt={`${alt} — after`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`${alt} — before`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      <span className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest rounded-sm">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-[10px] font-mono uppercase tracking-widest rounded-sm">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 size-10 bg-accent rounded-full border-4 border-background flex items-center justify-center shadow-xl">
          <span className="text-accent-foreground text-xs">⇆</span>
        </div>
      </div>
    </div>
  );
}
