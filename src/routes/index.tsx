import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1 className="text-red-500">Home</h1>
      <Button onClick={() => alert("I was clicked")}>Click Me</Button>
    </div>
  );
}
