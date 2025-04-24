import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/_home-layout/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1 className="text-red-500 font-inter">Home</h1>
      Will Render Videos soon
    </div>
  );
}
