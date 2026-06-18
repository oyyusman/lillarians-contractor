import lawnImg from "@/assets/svc-lawn.jpg";
import pressureImg from "@/assets/svc-pressure.jpg";
import outdoorImg from "@/assets/svc-outdoor.jpg";
import junkImg from "@/assets/svc-junk.jpg";
import homeImg from "@/assets/svc-home.jpg";
import seasonalImg from "@/assets/svc-seasonal.jpg";

export interface SubService {
  slug: string;
  name: string;
  blurb: string;
  details: string[];
}

export interface ServiceCategory {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  subServices: SubService[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const sub = (name: string, blurb: string, details: string[]): SubService => ({
  slug: slugify(name),
  name,
  blurb,
  details,
});

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
      sub("Lawn Mowing & Maintenance", "Weekly cuts, crisp edges, and clean blow-down for a manicured finish.", ["Weekly or bi-weekly visits", "String trimming & edging", "Hard-surface blow-down", "Blade sharpening between cuts"]),
      sub("Lawn Fertilization & Weed Control", "Programmed feeding and selective herbicide for a dense, deep-green turf.", ["6-step seasonal program", "Pre- and post-emergent weed control", "Spot treatments for broadleaf weeds", "Pet-safe once dry"]),
      sub("Aeration & Overseeding", "Relieve compaction and thicken your lawn with premium cool-season seed blends.", ["Core aeration in fall", "Premium turf-type tall fescue", "Starter fertilizer included", "Watering plan handout"]),
      sub("Mulching & Bed Maintenance", "Fresh hardwood or dyed mulch with crisp, hand-cut bed edges.", ["Double-shredded hardwood available", "Hand-cut spade edges", "Pre-emergent weed barrier", "Mulch ring around trees"]),
      sub("Sod Installation & Lawn Renovation", "Tear-out, regrade, and lay premium sod for instant-lawn results.", ["Site prep & grading", "Premium fescue or Bermuda sod", "Roller pass for seam contact", "Watering schedule included"]),
      sub("Leaf Removal & Seasonal Cleanup", "Backpack blowers and dump trailers — your property cleared in one visit.", ["Full property leaf removal", "Bed and gutter cleanup", "Curbside or hauled off-site", "Spring and fall packages"]),
      sub("Tree Trimming & Pruning", "Crown thinning, deadwood removal, and shape pruning by trained climbers.", ["ANSI A300 pruning standards", "Crown thinning & shaping", "Deadwood removal", "Sterilized tools between trees"]),
      sub("Tree Removal", "Insured, sectional take-downs in tight residential lots.", ["Insured up to large diameter", "Sectional drop in tight spaces", "Stump grinding available", "Debris hauled off-site"]),
      sub("Tree & Shrub Care", "Year-round care plans to keep ornamental plantings healthy and shaped.", ["Seasonal disease monitoring", "Selective shaping", "Soil amendments", "Insect treatments as needed"]),
      sub("Bush Removal", "Full root-ball removal of overgrown or dead shrubs.", ["Hand or mini-excavator removal", "Root ball extraction", "Bed restoration", "Replacement plant guidance"]),
      sub("Yard Cleanup", "One-time deep cleanups for neglected or storm-hit properties.", ["Debris and limb removal", "Bed weeding and edging", "Lawn detail mowing", "Haul-away included"]),
      sub("Landscape Design & Installation", "Full design-build of planting beds, foundation gardens, and entry features.", ["Site analysis & concept", "Plant palette selection", "Installation by in-house crew", "1-year plant warranty"]),
      sub("Hardscaping Services", "Paver patios, walkways, and stone accents engineered to last.", ["Belgard / Techo-Bloc materials", "Engineered base preparation", "Polymeric sand joints", "Multi-year structural warranty"]),
      sub("Retaining Walls & Stonework", "Engineered walls that solve grade changes and add usable terrain.", ["Block or natural stone", "Drainage and geo-grid where required", "Cap stones included", "Permits handled"]),
      sub("Drainage Solutions & Grading", "French drains, dry wells, and regrading to move water away from structures.", ["Site water assessment", "French drain & catch basin install", "Downspout extensions", "Final grade pitched away from house"]),
      sub("Irrigation & Sprinkler Systems", "Smart-controller irrigation zoned to your landscape.", ["Smart Wi-Fi controllers", "Zoned for turf vs. beds", "Backflow testing", "Winterization service"]),
      sub("Outdoor Lighting Installation", "Low-voltage LED path, accent, and architectural lighting.", ["Low-voltage LED systems", "Path, uplight, and downlight", "Photocell / timer control", "Hidden wire runs"]),
      sub("Lawn Pest & Disease Control", "Diagnose and treat grubs, fungus, and surface insects.", ["On-site diagnosis", "Targeted grub control", "Fungicide programs", "Pet-safe applications"]),
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
      sub("House Washing", "Soft-wash siding, trim, and shutters to lift mildew without damage.", ["Vinyl, stucco, brick & wood safe", "Plant-safe detergents", "Low-pressure rinse", "Window spot-rinse included"]),
      sub("Roof Cleaning", "ARMA-approved soft-wash to kill algae and moss without dislodging granules.", ["Low-pressure soft-wash only", "Sodium-hypochlorite biocide", "Gutter rinse included", "Shingle-warranty safe"]),
      sub("Driveway Cleaning", "Surface-cleaner concrete restoration with even, streak-free finish.", ["Rotary surface cleaner", "Oil-spot pre-treatment", "Post-rinse for clean edges", "Optional sealer"]),
      sub("Sidewalk & Walkway Cleaning", "Restore curb-appeal walkways from path to porch.", ["Surface-cleaner pass", "Edge detail by hand", "Joint cleaning", "Optional re-sand"]),
      sub("Patio Cleaning", "Lift years of grime from paver, stamped, or natural stone patios.", ["Material-appropriate pressure", "Joint sand replacement", "Stain pre-treatment", "Optional sealer"]),
      sub("Pool Deck Cleaning", "Slip-safe cleaning of concrete and stone pool decks.", ["Chlorine-safe detergents", "Slip-resistant rinse", "Hand-detail at coping", "Pool cover protection"]),
      sub("Deck Washing", "Wood-safe wash and brightener to prep for staining or seal.", ["Controlled detergent wash", "Wood brightener neutralize", "Sand & re-stain quote available", "Furniture moved & replaced"]),
      sub("Fence Washing", "Restore wood, vinyl, or aluminum fence panels to original color.", ["Wood, vinyl, aluminum safe", "Both sides of panels", "Plant protection", "Stain prep available"]),
      sub("Garage Floor & Concrete Cleaning", "Degrease and brighten garage floors and shop slabs.", ["Heavy-duty degreaser", "Surface-cleaner pass", "Oil-stain treatment", "Epoxy-prep available"]),
      sub("Exterior Cleaning", "Whole-property exterior reset including siding, trim, and hardscape.", ["House + roof + concrete bundle", "Single-visit scheduling", "Pre-sale package available", "Bundle pricing"]),
      sub("Exterior Window Cleaning", "Streak-free pure-water exterior window cleaning.", ["Water-fed pole system", "Screen rinse included", "Tracks blown out", "First-story focus or 2-story upgrade"]),
      sub("Gutter Cleaning & Brightening", "Clear blockages and remove black tiger-stripe staining.", ["Hand-clean debris", "Downspout flush test", "Exterior gutter brightening", "Optional guard install"]),
      sub("Rust & Stain Removal", "Specialty treatment for irrigation rust, battery, and tannin stains.", ["Oxalic & specialty cleaners", "Test-patch first", "Concrete, vinyl, brick", "Plant-safe protocols"]),
      sub("Trash Can Washing & Sanitizing", "Sanitized residential trash and recycling bins on a recurring schedule.", ["Inside + out wash", "EPA-approved sanitizer", "Curbside service", "Monthly or quarterly plans"]),
      sub("Pressure Washing Before Home Sale", "Pre-listing exterior package to maximize photo and showing appeal.", ["House wash + concrete + porch", "Scheduled before photo day", "Curb-appeal walk-through", "Realtor scheduling welcome"]),
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
      sub("Outdoor Living Design & Build", "Full design-build of outdoor rooms — concept, permits, construction.", ["3D concept renderings", "Material & finish board", "Single project manager", "Multi-year warranty"]),
      sub("Patios & Hardscapes", "Paver, stamped concrete, and natural stone patios engineered to last.", ["Engineered base", "Premium paver lines", "Polymeric joint sand", "Drainage solved into design"]),
      sub("Decks & Porches", "Composite or pressure-treated decks, screened porches, and deck repair.", ["Trex / TimberTech composites", "Code-compliant framing", "Permit handling", "Hidden fasteners"]),
      sub("Outdoor Kitchens", "Built-in grills, counters, refrigeration, and bar seating.", ["Stone or stucco enclosures", "Gas, electric, water rough-in", "Premium appliance brands", "Year-round materials"]),
      sub("Fire Pits & Fireplaces", "Wood or gas fire features designed to anchor your outdoor room.", ["Gas or wood-burning", "Code clearance from structures", "Natural stone or paver units", "Seat-wall integration"]),
      sub("Pergolas & Pavilions", "Wood, vinyl, or aluminum structures with optional motorized louvers.", ["Engineered footings", "Motorized louver upgrade", "Integrated lighting", "Permitted where required"]),
      sub("Retaining Walls & Seating Walls", "Engineered walls for grade changes and integrated outdoor seating.", ["Engineered for wall height", "Drainage and geo-grid", "Cap stones included", "Seat-wall heights designed for comfort"]),
      sub("Walkways & Pathways", "Front and side-yard walkways in paver, flagstone, or stamped concrete.", ["Code-pitched for drainage", "Hand-cut natural stone option", "Integrated lighting available", "Permits where required"]),
      sub("Driveways & Entrances", "Paver and stamped concrete driveways with structural base.", ["Engineered for vehicle loads", "Permitting handled", "Curb-cut coordination", "Sealing service"]),
      sub("Pool Patios & Surrounds", "Cool-deck pavers and natural stone surrounds for in-ground pools.", ["Pool-safe coping selection", "Slip-resistant finishes", "Coordination with pool builder", "Drainage built in"]),
      sub("Outdoor Lighting", "Low-voltage path, accent, and architectural lighting.", ["LED low-voltage systems", "Path, uplight, downlight", "Smart timer/photocell", "Hidden wire runs"]),
      sub("Water Features & Fountains", "Fountains, bubbling rocks, and pondless waterfalls for ambient sound.", ["Pondless or pond systems", "Auto-fill reservoirs", "Integrated lighting", "Winter shutdown service"]),
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
      sub("Junk Removal", "All-purpose pickup and hauling of unwanted household items.", ["Flat-rate by truck volume", "Two-person crews", "Sweep-up before leaving", "Donation & recycling sorting"]),
      sub("Furniture Removal", "Single-piece or full-room furniture pickup and disposal.", ["Couches, mattresses, dressers", "Disassembly included", "Donation routing where possible", "No-marks moving blankets"]),
      sub("Appliance Removal", "Refrigerators, washers, and large appliances removed responsibly.", ["EPA-compliant fridge handling", "Disconnect on request", "Stairs and basement OK", "Recycle where eligible"]),
      sub("Yard Waste Removal", "Brush, branches, leaves, and storm debris hauled off.", ["Brush and limbs", "Bagged leaves", "Storm debris", "Composted where possible"]),
      sub("Construction Debris Removal", "Post-project hauling of drywall, lumber, flooring, and demo debris.", ["Drywall, lumber, tile", "Roofing tear-off debris", "Demo cleanouts", "Dump-trailer drop available"]),
      sub("Garage Cleanout", "Full garage clear-outs with sort, haul, and sweep.", ["Sort donate / recycle / trash", "Boxes labeled if requested", "Final sweep-down", "Same-week scheduling"]),
      sub("Basement Cleanout", "Multi-decade basement clearing — including stairs and tight access.", ["Stairs and tight access OK", "Heavy item handling", "Donation routing", "Final sweep included"]),
      sub("Hauling Services", "On-demand hauling for any single load you need moved.", ["Dump-run service", "Per-load pricing", "Same-week scheduling", "Two-person crew"]),
      sub("Moving Help / Labor Help", "Two-person crews for load-in / load-out and heavy moves.", ["Hourly two-person crews", "Furniture pads & dollies", "Local DMV service", "Stairs and elevators OK"]),
      sub("Mulch Delivery", "Bulk mulch dropped where you want it — including spread service.", ["Hardwood or dyed mulch", "Cubic-yard pricing", "Driveway or backyard drop", "Spread service available"]),
      sub("Gravel / Soil Delivery", "Topsoil, fill dirt, gravel, and sand by the cubic yard.", ["Topsoil & fill dirt", "Stone & gravel options", "Cubic-yard pricing", "Driveway or yard drop"]),
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
      sub("Interior Painting", "Surface prep, premium paint, and clean lines for any interior room.", ["Sherwin-Williams or Benjamin Moore", "Cut-and-roll technique", "Trim and ceiling included", "Furniture protection"]),
      sub("Exterior Painting", "Siding, trim, and door painting with surface prep and primer.", ["Power-wash prep", "Primer where needed", "Caulk and seal", "Manufacturer warranty paints"]),
      sub("Drywall Repair", "Patch holes, tape seams, and texture-match for invisible repairs.", ["Hole and crack repair", "Tape-and-mud seams", "Texture match", "Prime-ready finish"]),
      sub("Flooring Installation", "Hardwood, LVP, tile, and carpet install by experienced crews.", ["LVP, hardwood, tile, carpet", "Subfloor prep", "Quarter-round & trim", "Haul-away of old flooring"]),
      sub("Fence Installation & Repair", "Wood, vinyl, and aluminum fencing — new builds or board-by-board repair.", ["Wood, vinyl, aluminum", "Post setting in concrete", "Gate hardware included", "Permits where required"]),
      sub("Deck Repair", "Board replacement, railing repair, and re-staining.", ["Board and joist replacement", "Railing repair", "Re-stain or seal", "Structural assessment"]),
      sub("Minor Remodeling", "Small-footprint remodels — vanities, backsplash, trim, and feature walls.", ["Vanity & sink swaps", "Backsplash tile install", "Trim and feature walls", "Coordinated trades"]),
      sub("Door Installation", "Interior, exterior, and storm doors — install or replace.", ["Pre-hung & slab doors", "Exterior weather sealing", "Hardware install", "Disposal of old door"]),
      sub("Window Installation", "Replacement windows with code-compliant install and trim-out.", ["Pre-finished windows", "Insulation & sealing", "Interior trim-out", "Haul-away old units"]),
      sub("Roof Repair", "Shingle replacement, flashing, and leak diagnosis.", ["Shingle replacement", "Flashing & boot replacement", "Leak diagnosis", "Tarp service for emergencies"]),
      sub("General Home Improvements", "Anything else on the punch list — ask us.", ["Single-project quotes", "Punch-list bundling", "Licensed general contractor", "Written workmanship warranty"]),
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
      sub("Snow Removal", "Per-event or seasonal contracts with priority routing.", ["Driveways and walkways", "Commercial lots", "Salt and ice-melt", "24-hour storm response"]),
      sub("Storm Cleanup", "Emergency response for fallen limbs, debris, and storm damage.", ["Emergency tree response", "Debris hauling", "Insured for emergency work", "Tarp service for roof damage"]),
      sub("Seasonal Yard Cleanup", "Spring and fall full-property resets.", ["Leaf & debris removal", "Bed weeding & re-edging", "Pruning where needed", "Mulch refresh available"]),
      sub("Mailbox Installation", "New mailbox post install, repair, and replacement.", ["Post setting in concrete", "Box & numbers included", "Code-compliant placement", "Old post removal"]),
      sub("Shed Assembly", "Pre-fab and kit shed assembly on-site.", ["Foundation prep", "Pre-fab kit assembly", "Anchor where required", "Site cleanup included"]),
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
  s.subServices.map((sub) => ({ category: s.title, sub: sub.name, slug: s.slug, subSlug: sub.slug })),
);

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const getSubServiceBySlug = (serviceSlug: string, subSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;
  const subService = service.subServices.find((s) => s.slug === subSlug);
  if (!subService) return null;
  return { service, subService };
};
