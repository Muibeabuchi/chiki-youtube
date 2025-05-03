import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocation } from "@tanstack/react-router";
import { useAuthActions } from "@convex-dev/auth/react";

import useSignInModal from "../../hooks/store/auth-modal-store";

const SignInModal = () => {
  const { isOpen, closeModal } = useSignInModal();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuthActions();

  const location = useLocation();

  console.log(location.pathname);
  console.log(location.href);
  console.log(location.state);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      // Implement your Google sign-in logic here
      // For example: await signInWithGoogle();
      await signIn("google", {
        redirectTo: `${location.href}`,
      });

      // Close modal on successful sign in
      closeModal();
    } catch (error) {
      console.error("Google sign-in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-md rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Sign In
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center space-y-4 py-6">
          <p className="text-center text-muted-foreground">
            Sign in to access your account and preferences
          </p>

          <Button
            onClick={handleGoogleSignIn}
            className="w-full max-w-sm flex items-center justify-center gap-2 py-6 mt-4 transition-all hover:shadow-md"
            variant="outline"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
            ) : (
              <img src="/google.png" className="h-5 w-5" />
            )}
            <span className="ml-2">Continue with Google</span>
          </Button>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <a className="underline hover:text-primary">Terms of Service</a> and{" "}
            <a className="underline hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
