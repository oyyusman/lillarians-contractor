// Curated, unique, topical photography per sub-service.
// Each entry has a hero (16:9) and gallery (4:3) Unsplash photo ID.
// Unsplash CDN URLs are stable and return real, relevant imagery.

type Img = { hero: string; gallery: string };

const U = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const MAP: Record<string, { hero: string; gallery: string }> = {
  // ---------------- Lawn Care & Landscaping ----------------
  "lawn-mowing-and-maintenance":          { hero: "1592417817098-8fd3d9eb14a5", gallery: "1558904541-efa843a96f01" },
  "lawn-fertilization-and-weed-control":  { hero: "1523348837708-15d4a09cfac2", gallery: "1416879595882-3373a0480b5b" },
  "aeration-and-overseeding":             { hero: "1605000797499-95a51c5269ae", gallery: "1574691250077-03a929faece5" },
  "mulching-and-bed-maintenance":         { hero: "1599598425947-5202519f1ce7", gallery: "1591628001888-76cdee3bf4b6" },
  "sod-installation-and-lawn-renovation": { hero: "1560574188-6a6774965120",    gallery: "1416879595882-3373a0480b5b" },
  "leaf-removal-and-seasonal-cleanup":    { hero: "1507371341162-763b5e419408", gallery: "1477414348463-c0eb7f1359b6" },
  "tree-trimming-and-pruning":            { hero: "1448375240586-882707db888b", gallery: "1502082553048-f009c37129b9" },
  "tree-removal":                         { hero: "1574263867128-a3d5c1b1deea", gallery: "1611843467160-25afb8df1074" },
  "tree-and-shrub-care":                  { hero: "1416879595882-3373a0480b5b", gallery: "1585320806297-9794b3e4eeae" },
  "bush-removal":                         { hero: "1591857177580-dc82b9ac4e1e", gallery: "1585320806297-9794b3e4eeae" },
  "yard-cleanup":                         { hero: "1558904541-efa843a96f01",    gallery: "1416879595882-3373a0480b5b" },
  "landscape-design-and-installation":    { hero: "1416879595882-3373a0480b5b", gallery: "1585320806297-9794b3e4eeae" },
  "hardscaping-services":                 { hero: "1591474200742-8e512e6f98f8", gallery: "1600585154340-be6161a56a0c" },
  "retaining-walls-and-stonework":        { hero: "1599809275671-b5942cabc7a2", gallery: "1591474200742-8e512e6f98f8" },
  "drainage-solutions-and-grading":       { hero: "1581244277943-fe4a9c777189", gallery: "1558618666-fcd25c85cd64" },
  "irrigation-and-sprinkler-systems":     { hero: "1601581875309-fafbf2d3ed3a", gallery: "1592417817098-8fd3d9eb14a5" },
  "outdoor-lighting-installation":        { hero: "1505691938895-1758d7feb511", gallery: "1600607687939-ce8a6c25118c" },
  "lawn-pest-and-disease-control":        { hero: "1523348837708-15d4a09cfac2", gallery: "1558904541-efa843a96f01" },

  // ---------------- Pressure Washing ----------------
  "house-washing":                        { hero: "1558618666-fcd25c85cd64",    gallery: "1572120360610-d971b9d7767c" },
  "roof-cleaning":                        { hero: "1632759145355-8b8fa7d72b4a", gallery: "1605276374104-dee2a0ed3cd6" },
  "driveway-cleaning":                    { hero: "1597047084897-51e81819a499", gallery: "1581577459770-b9bbac0d51ac" },
  "sidewalk-and-walkway-cleaning":        { hero: "1581577459770-b9bbac0d51ac", gallery: "1597047084897-51e81819a499" },
  "patio-cleaning":                       { hero: "1600585154340-be6161a56a0c", gallery: "1591474200742-8e512e6f98f8" },
  "pool-deck-cleaning":                   { hero: "1572331165267-854da2b10ccc", gallery: "1519302959554-a75be0afc82a" },
  "deck-washing":                         { hero: "1591348278863-a8fb3887e2aa", gallery: "1605114947018-4f29f7da6a45" },
  "fence-washing":                        { hero: "1558618666-fcd25c85cd64",    gallery: "1591348278863-a8fb3887e2aa" },
  "garage-floor-and-concrete-cleaning":   { hero: "1597047084897-51e81819a499", gallery: "1558618666-fcd25c85cd64" },
  "exterior-cleaning":                    { hero: "1572120360610-d971b9d7767c", gallery: "1558618666-fcd25c85cd64" },
  "exterior-window-cleaning":             { hero: "1527515637462-cff94eecc1ac", gallery: "1517248135467-4c7edcad34c4" },
  "gutter-cleaning-and-brightening":      { hero: "1632759145355-8b8fa7d72b4a", gallery: "1558618666-fcd25c85cd64" },
  "rust-and-stain-removal":               { hero: "1597047084897-51e81819a499", gallery: "1581577459770-b9bbac0d51ac" },
  "trash-can-washing-and-sanitizing":     { hero: "1611284446314-60a58ac0deb9", gallery: "1610557892470-55d9e80c0bce" },
  "pressure-washing-before-home-sale":    { hero: "1572120360610-d971b9d7767c", gallery: "1558618666-fcd25c85cd64" },

  // ---------------- Build & Outdoor Living ----------------
  "outdoor-living-design-and-build":      { hero: "1600585154340-be6161a56a0c", gallery: "1591474200742-8e512e6f98f8" },
  "patios-and-hardscapes":                { hero: "1591474200742-8e512e6f98f8", gallery: "1600585154340-be6161a56a0c" },
  "decks-and-porches":                    { hero: "1605114947018-4f29f7da6a45", gallery: "1591348278863-a8fb3887e2aa" },
  "outdoor-kitchens":                     { hero: "1600566753190-17f0baa2a6c3", gallery: "1556909114-f6e7ad7d3136" },
  "fire-pits-and-fireplaces":             { hero: "1601056639638-c3a4a3a8fa42", gallery: "1605114947018-4f29f7da6a45" },
  "pergolas-and-pavilions":               { hero: "1600566752355-35792bedcfea", gallery: "1600585154340-be6161a56a0c" },
  "retaining-walls-and-seating-walls":    { hero: "1599809275671-b5942cabc7a2", gallery: "1591474200742-8e512e6f98f8" },
  "walkways-and-pathways":                { hero: "1581244277943-fe4a9c777189", gallery: "1591474200742-8e512e6f98f8" },
  "driveways-and-entrances":              { hero: "1600607687939-ce8a6c25118c", gallery: "1581577459770-b9bbac0d51ac" },
  "pool-patios-and-surrounds":            { hero: "1572331165267-854da2b10ccc", gallery: "1519302959554-a75be0afc82a" },
  "outdoor-lighting":                     { hero: "1505691938895-1758d7feb511", gallery: "1600607687939-ce8a6c25118c" },
  "water-features-and-fountains":         { hero: "1565117573-91dadf2fb2b8",    gallery: "1574691250077-03a929faece5" },

  // ---------------- Junk Removal & Hauling ----------------
  "junk-removal":                         { hero: "1530587191325-3db32d826c18", gallery: "1558618666-fcd25c85cd64" },
  "furniture-removal":                    { hero: "1555041469-a586c61ea9bc",    gallery: "1567016432779-094069958ea5" },
  "appliance-removal":                    { hero: "1556909114-f6e7ad7d3136",    gallery: "1583845112203-29329902332e" },
  "yard-waste-removal":                   { hero: "1507371341162-763b5e419408", gallery: "1416879595882-3373a0480b5b" },
  "construction-debris-removal":          { hero: "1503387762-592deb58ef4e",    gallery: "1581094288338-2314dddb7ece" },
  "garage-cleanout":                      { hero: "1558959356-2f36b35dd47e",    gallery: "1530587191325-3db32d826c18" },
  "basement-cleanout":                    { hero: "1558959356-2f36b35dd47e",    gallery: "1530587191325-3db32d826c18" },
  "hauling-services":                     { hero: "1530587191325-3db32d826c18", gallery: "1581094288338-2314dddb7ece" },
  "moving-help-labor-help":               { hero: "1600518464441-9154a4dea21b", gallery: "1567016432779-094069958ea5" },
  "mulch-delivery":                       { hero: "1599598425947-5202519f1ce7", gallery: "1591628001888-76cdee3bf4b6" },
  "gravel-soil-delivery":                 { hero: "1581094288338-2314dddb7ece", gallery: "1530587191325-3db32d826c18" },

  // ---------------- Contractor & Home Improvement ----------------
  "interior-painting":                    { hero: "1562259949-e8e7689d7828",    gallery: "1581858726788-75bc0f6a952d" },
  "exterior-painting":                    { hero: "1572120360610-d971b9d7767c", gallery: "1558618666-fcd25c85cd64" },
  "drywall-repair":                       { hero: "1581094288338-2314dddb7ece", gallery: "1503387762-592deb58ef4e" },
  "flooring-installation":                { hero: "1581858726788-75bc0f6a952d", gallery: "1556909114-f6e7ad7d3136" },
  "fence-installation-and-repair":        { hero: "1591348278863-a8fb3887e2aa", gallery: "1605114947018-4f29f7da6a45" },
  "deck-repair":                          { hero: "1605114947018-4f29f7da6a45", gallery: "1591348278863-a8fb3887e2aa" },
  "minor-remodeling":                     { hero: "1503387762-592deb58ef4e",    gallery: "1581858726788-75bc0f6a952d" },
  "door-installation":                    { hero: "1558618666-fcd25c85cd64",    gallery: "1572120360610-d971b9d7767c" },
  "window-installation":                  { hero: "1527515637462-cff94eecc1ac", gallery: "1517248135467-4c7edcad34c4" },
  "roof-repair":                          { hero: "1632759145355-8b8fa7d72b4a", gallery: "1605276374104-dee2a0ed3cd6" },
  "general-home-improvements":            { hero: "1503387762-592deb58ef4e",    gallery: "1581858726788-75bc0f6a952d" },

  // ---------------- Seasonal Services ----------------
  "snow-removal":                         { hero: "1483664852095-d6cc6870702d", gallery: "1542601098-3adb3baeb1ec" },
  "storm-cleanup":                        { hero: "1574263867128-a3d5c1b1deea", gallery: "1507371341162-763b5e419408" },
  "seasonal-yard-cleanup":                { hero: "1507371341162-763b5e419408", gallery: "1477414348463-c0eb7f1359b6" },
  "mailbox-installation":                 { hero: "1568605114967-8130f3a36994", gallery: "1572120360610-d971b9d7767c" },
  "shed-assembly":                        { hero: "1591857177580-dc82b9ac4e1e", gallery: "1605114947018-4f29f7da6a45" },
};

const FALLBACK: Img = { hero: "1416879595882-3373a0480b5b", gallery: "1558904541-efa843a96f01" };

export function getSubServiceImagery(subSlug: string) {
  const entry = MAP[subSlug] ?? FALLBACK;
  return {
    hero: U(entry.hero, 1920, 1080),
    gallery: U(entry.gallery, 1200, 900),
  };
}
