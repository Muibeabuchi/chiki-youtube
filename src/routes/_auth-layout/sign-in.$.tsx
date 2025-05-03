import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { createFileRoute } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";

export const Route = createFileRoute("/_auth-layout/sign-in/$")({
  component: Page,
});

function Page() {
  const { signIn } = useAuthActions();
  return (
    <div>
      <Button onClick={() => signIn("google")}>Sign In with Google</Button>
    </div>
  );
}
