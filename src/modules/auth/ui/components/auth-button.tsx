import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

interface AuthButtonProps {}

function AuthButton({}: AuthButtonProps) {
  // Add different Auth States
  return (
    <Button
      variant={"outline"}
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&svg]:size-5"
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
}

export default AuthButton;
