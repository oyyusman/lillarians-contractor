import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services/$slug")({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold uppercase mb-4">Service not found</h1>
          <Link to="/services" className="text-accent story-link">View all services</Link>
        </div>
      </div>
    </SiteLayout>
  ),
});