import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/_home-layout/playlists")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(home)/_home-layout/playlists"!</div>;
}
