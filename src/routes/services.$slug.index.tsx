import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceCategoryContent } from "@/components/ServiceCategoryContent";
import { getServiceBySlug } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug/")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceCategoryIndexPage,
});

function ServiceCategoryIndexPage() {
  const { service } = Route.useLoaderData() as { service: NonNullable<ReturnType<typeof getServiceBySlug>> };
  return <ServiceCategoryContent service={service} />;
}