import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, HelpCircle, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCurrentUser } from "../../api/use-get-current-user";
import UserButtonSkeleton from "./user-button-skeleton";
import { useConvexAuth } from "convex/react";

export const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuthActions();
  const { isLoading: loadingUser } = useConvexAuth();

  const { data: userInfo, isLoading } = useCurrentUser();

  if (isLoading || loadingUser) {
    return <UserButtonSkeleton />;
  }
  // Get initials from name for the avatar fallback
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="relative h-8 w-8 md:h-10 md:w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
          aria-label="User menu"
        >
          <Avatar className="h-full w-full border border-muted">
            <AvatarImage src={userInfo?.image} alt={userInfo?.name} />
            <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
              {getInitials(userInfo?.name ?? "")}
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 mt-1 p-1 rounded-lg border shadow-lg animate-in fade-in-50 zoom-in-95"
        align="end"
        sideOffset={8}
      >
        <div className="flex flex-col px-4 py-3">
          <p className="text-sm font-medium">{userInfo?.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {userInfo?.email}
          </p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="px-4 py-2.5 cursor-pointer">
            <User className="mr-3 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="px-4 py-2.5 cursor-pointer">
            <Settings className="mr-3 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="px-4 py-2.5 cursor-pointer">
            <HelpCircle className="mr-3 h-4 w-4" />
            <span>Help & Support</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={signOut}
          className="px-4 py-2.5 text-red-500 hover:text-red-500 hover:bg-red-50 cursor-pointer"
        >
          <LogOut className="mr-3 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
