import { useAuth, useClerk } from "@clerk/tanstack-react-start";

export default function useOpenSignInModal() {
  const { userId } = useAuth();
  const clerk = useClerk();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    auth: boolean
  ) => {
    if (!userId && auth) {
      e.preventDefault();
      clerk.openSignIn();
    }
  };
  return { handleClick };
}
