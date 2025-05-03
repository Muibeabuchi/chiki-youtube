import useSignInModal from "@/modules/auth/hooks/store/auth-modal-store";
import { useConvexAuth } from "convex/react";

export default function useOpenSignInModal() {
  const { isAuthenticated } = useConvexAuth();
  const { openModal } = useSignInModal();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    auth: boolean
  ) => {
    if (!isAuthenticated && auth) {
      e.preventDefault();
      openModal();
    }
  };
  return { handleClick };
}
