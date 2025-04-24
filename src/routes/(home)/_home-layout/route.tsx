import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/_home-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
}
