import { Button } from "@/components/ui/button";
import { UserButton, SignInButton } from "@clerk/tanstack-react-start";
import { Authenticated, Unauthenticated } from "convex/react";
import { UserCircleIcon } from "lucide-react";

interface AuthButtonProps {}

function AuthButton({}: AuthButtonProps) {
  return (
    <>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&svg]:size-5"
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </Unauthenticated>
    </>
  );
}

export default AuthButton;
