import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout/sign-up/$")({
  component: SignUpPage,
});

function SignUpPage() {
  const { signIn } = useAuthActions();

  return (
    <div>
      <Button onClick={() => signIn("google")}>Sign Up with Google</Button>
    </div>
  );
}
