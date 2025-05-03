import { Button } from "@/components/ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { UserCircleIcon } from "lucide-react";
import useSignInModal from "../../hooks/store/auth-modal-store";

function AuthButton() {
  const { openModal } = useSignInModal();
  return (
    <>
      {/* <Authenticated>
      <UserButton />
      </Authenticated> */}
      <Unauthenticated>
        {/* <SignInButton mode="modal"> */}
        <Button
          variant={"outline"}
          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&svg]:size-5"
          onClick={openModal}
        >
          <UserCircleIcon />
          Sign In
        </Button>
        {/* </SignInButton> */}
      </Unauthenticated>
    </>
  );
}

export default AuthButton;
