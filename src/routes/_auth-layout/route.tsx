import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout")({
  component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
  return (
    <div className="justify-center min-h-screen flex items-center">
      <Outlet />
    </div>
  );
}
