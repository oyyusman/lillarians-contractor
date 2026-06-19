import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceCategoryContent } from "@/components/ServiceCategoryContent";
import { getServiceBySlug } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug/")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Lillarians Contractor" }] };
    return {
      meta: [
        { title: `${s.title} — Lillarians Contractor | DMV` },
        { name: "description", content: `${s.tagline} Professional ${s.title.toLowerCase()} across DC, Maryland, and Virginia by Lillarians Contractor.` },
        { property: "og:title", content: `${s.title} — Lillarians Contractor` },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.image },
        { name: "twitter:image", content: s.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.longDescription,
            provider: { "@type": "LocalBusiness", name: "Lillarians Contractor" },
            areaServed: ["Washington DC", "Maryland", "Virginia"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: s.title,
              itemListElement: s.subServices.map((sub) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: sub.name } })),
            },
          }),
        },
      ],
    };
  },
  component: ServiceCategoryIndexPage,
});

function ServiceCategoryIndexPage() {
  const { service } = Route.useLoaderData() as { service: NonNullable<ReturnType<typeof getServiceBySlug>> };
  return <ServiceCategoryContent service={service} />;
}