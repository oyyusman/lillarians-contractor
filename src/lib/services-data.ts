import lawnImg from "@/assets/svc-lawn.jpg";
import pressureImg from "@/assets/svc-pressure.jpg";
import outdoorImg from "@/assets/svc-outdoor.jpg";
import junkImg from "@/assets/svc-junk.jpg";
import homeImg from "@/assets/svc-home.jpg";
import seasonalImg from "@/assets/svc-seasonal.jpg";

export interface ServiceCategory {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  subServices: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceCategory[] = [
  {
    slug: "lawn-care-landscaping",
    number: "01",
    title: "Lawn Care & Landscaping",
    shortTitle: "Lawn & Landscape",
    tagline: "Precision maintenance and architectural garden design.",
    description:
      "Surgical precision in grading, planting, and turf maintenance for vibrant DMV curb appeal year round.",
    longDescription:
      "From weekly mowing to estate-scale landscape architecture, our crews treat every property as a living design. We pair agronomic expertise with hardscape craftsmanship, so your lawn looks intentional, your beds stay clean, and your trees mature beautifully.",
    image: lawnImg,
    subServices: [
      "Lawn mowing & maintenance",
      "Lawn fertilization & weed control",
      "Aeration & overseeding",
      "Mulching & bed maintenance",
      "Sod installation & lawn renovation",
      "Leaf removal & seasonal cleanup",
      "Tree trimming & pruning",
      "Tree removal",
      "Tree & shrub care",
      "Bush removal",
      "Yard cleanup",
      "Landscape design & installation",
      "Hardscaping services",
      "Retaining walls & stonework",
      "Drainage solutions & grading",
      "Irrigation & sprinkler systems",
      "Outdoor lighting installation",
      "Lawn pest & disease control",
    ],
    benefits: [
      "Healthier, denser turf within one growing season",
      "Trained agronomists, not seasonal labor",
      "Fully insured, licensed across DC, MD, VA",
      "Detailed care plan after every visit",
    ],
    faqs: [
      { q: "How often should my lawn be mowed?", a: "Cool-season DMV lawns typically need weekly mowing March through November; our crews adjust the cadence based on growth rate and weather." },
      { q: "Do you offer one-time clean-ups?", a: "Yes. Spring and fall cleanups are popular standalone services, and they pair well with a seasonal maintenance plan." },
      { q: "Is your fertilizer pet safe?", a: "We use professional-grade granular and liquid programs that are safe for pets and family once dry — usually within 1–2 hours." },
    ],
  },
  {
    slug: "pressure-washing",
    number: "02",
    title: "Pressure Washing",
    shortTitle: "Pressure Washing",
    tagline: "Industrial-grade restoration of hardscape and wood surfaces.",
    description:
      "Commercial-grade removal of moss, mildew, and grime from stone, brick, siding, and decks.",
    longDescription:
      "Our soft-wash and high-pressure systems are calibrated by surface — never one-size-fits-all. Roofs get low-pressure biocide treatment; concrete gets surface cleaning with even, line-free finish; wood and siding get controlled detergent to lift without damage.",
    image: pressureImg,
    subServices: [
      "House washing",
      "Roof cleaning",
      "Driveway cleaning",
      "Sidewalk & walkway cleaning",
      "Patio cleaning",
      "Pool deck cleaning",
      "Deck washing",
      "Fence washing",
      "Garage floor & concrete cleaning",
      "Exterior cleaning",
      "Exterior window cleaning",
      "Gutter cleaning & brightening",
      "Rust & stain removal",
      "Trash can / dustbin washing & sanitizing",
      "Pressure washing before home sale",
    ],
    benefits: [
      "Soft-wash safe for shingles & siding",
      "Surface cleaners for streak-free concrete",
      "Eco-conscious detergents",
      "Pre-sale curb-appeal packages",
    ],
    faqs: [
      { q: "Will pressure washing damage my siding?", a: "Not when done by professionals. We use soft-wash methods for vinyl, wood, and stucco — pressure stays low while a detergent does the work." },
      { q: "How long does a typical house wash take?", a: "Most single-family homes are completed in 2–4 hours depending on size and access." },
      { q: "Do you clean roofs?", a: "Yes — using the ARMA-approved low-pressure soft-wash method that kills algae and moss without dislodging granules." },
    ],
  },
  {
    slug: "build-outdoor-living",
    number: "03",
    title: "Build & Outdoor Living",
    shortTitle: "Outdoor Living",
    tagline: "Custom decks, pergolas, and structural hardscaping.",
    description:
      "Architectural outdoor builds — patios, kitchens, pergolas, and fire features built to last.",
    longDescription:
      "We design and build outdoor rooms that extend your home's footprint. Every project starts with a site survey and 3D concept, then moves through permitting, material selection, and crew execution under a single project manager.",
    image: outdoorImg,
    subServices: [
      "Outdoor living design & build",
      "Patios & hardscapes",
      "Decks & porches",
      "Outdoor kitchens",
      "Fire pits & fireplaces",
      "Pergolas & pavilions",
      "Retaining walls & seating walls",
      "Walkways & pathways",
      "Driveways & entrances",
      "Pool patios & surrounds",
      "Outdoor lighting",
      "Water features & fountains",
    ],
    benefits: [
      "In-house design and build — one point of contact",
      "Premium materials: Belgard, Techo-Bloc, Trex",
      "Permit handling included in DC, MD, VA",
      "Multi-year structural warranty",
    ],
    faqs: [
      { q: "Do you handle permits?", a: "Yes — we pull and manage all permits required by your jurisdiction across the DMV." },
      { q: "How long does a typical patio build take?", a: "Most paver patios run 1–2 weeks of site work after the design is approved." },
      { q: "Do you provide 3D renderings?", a: "For all design-build projects we provide a 3D concept and material board before signing." },
    ],
  },
  {
    slug: "junk-removal",
    number: "04",
    title: "Junk Removal & Hauling",
    shortTitle: "Junk Removal",
    tagline: "Fast, responsible hauling of debris and clutter.",
    description:
      "Professional removal of junk, debris, and unwanted items — residential and commercial.",
    longDescription:
      "From single-item pickups to full estate cleanouts, our trucks and crews handle the heavy lifting. We sort for donation, recycling, and proper disposal — leaving the property clean, swept, and ready.",
    image: junkImg,
    subServices: [
      "Junk removal",
      "Furniture removal",
      "Appliance removal",
      "Yard waste removal",
      "Construction debris removal",
      "Garage cleanout",
      "Basement cleanout",
      "Hauling services",
      "Moving help / labor help",
      "Mulch delivery",
      "Gravel / soil delivery",
    ],
    benefits: [
      "Same-week scheduling",
      "Donation & recycling sorting included",
      "Transparent flat-rate pricing",
      "Fully licensed haulers",
    ],
    faqs: [
      { q: "How is pricing calculated?", a: "By truck volume, not hourly. You get a firm quote on-site before any work begins." },
      { q: "Do you recycle?", a: "Yes — over 60% of what we haul is donated, recycled, or repurposed." },
      { q: "Can you do same-day service?", a: "Often, depending on schedule. Call before 10am for best chance of same-day pickup." },
    ],
  },
  {
    slug: "home-improvement",
    number: "05",
    title: "Contractor & Home Improvement",
    shortTitle: "Home Improvement",
    tagline: "Structural repairs and aesthetic upgrades that add value.",
    description:
      "Interior and exterior improvements: painting, drywall, flooring, doors, windows, and minor remodels.",
    longDescription:
      "Our licensed general contractors handle the projects most homeowners can't fit into a weekend — from a precise drywall patch to a multi-room flooring refresh. Clean job sites, clear timelines, written warranties.",
    image: homeImg,
    subServices: [
      "Interior painting",
      "Exterior painting",
      "Drywall repair",
      "Flooring installation",
      "Fence installation & repair",
      "Deck repair",
      "Minor remodeling",
      "Door installation",
      "Window installation",
      "Roof repair",
      "General home improvements",
    ],
    benefits: [
      "Licensed general contractors",
      "Written workmanship warranty",
      "Clean, dust-controlled job sites",
      "Itemized quotes with no surprise line items",
    ],
    faqs: [
      { q: "Are you licensed and insured?", a: "Yes, fully licensed in DC, Maryland, and Virginia, with general liability and workers' comp coverage." },
      { q: "Do you offer financing?", a: "For projects over $5,000 we partner with third-party financing providers — ask during your quote." },
      { q: "How quickly can you start?", a: "Most improvement projects start within 2–3 weeks of contract signing." },
    ],
  },
  {
    slug: "seasonal-services",
    number: "06",
    title: "Seasonal Services",
    shortTitle: "Seasonal",
    tagline: "Winterizing, leaf management, and storm prep.",
    description:
      "Snow removal, storm cleanup, and seasonal property care — year-round peace of mind.",
    longDescription:
      "DMV weather doesn't take a season off, and neither do we. Our seasonal crews handle the heavy snow, the fallen oak limb after a summer storm, and the leaf load that buries fall lawns.",
    image: seasonalImg,
    subServices: [
      "Snow removal",
      "Storm cleanup",
      "Seasonal yard cleanup",
      "Mailbox installation",
      "Shed assembly",
    ],
    benefits: [
      "24-hour storm response",
      "Priority routing for service contracts",
      "Commercial-grade snow equipment",
      "Insured for emergency tree work",
    ],
    faqs: [
      { q: "Do you offer seasonal snow contracts?", a: "Yes — per-event and seasonal contracts available with priority response." },
      { q: "Can you handle storm-downed trees?", a: "Yes, our seasonal crews are insured and equipped for emergency tree removal." },
      { q: "When should I book fall cleanup?", a: "Book by September for guaranteed scheduling in October and November." },
    ],
  },
];

export const ALL_SUB_SERVICES = SERVICES.flatMap((s) =>
  s.subServices.map((sub) => ({ category: s.title, sub, slug: s.slug })),
);

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
