import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";

interface HomeNavbarProps {}

export default function HomeNavbar({}: HomeNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center shrink-0">
          <SidebarTrigger />
          <Link to="/">
            <div className="flex items-center p-4 gap-1">
              <img
                src="/public/youtube-logo.svg"
                alt="logo"
                height={32}
                width={32}
              />
              <p className="text-lg font-inter font-semibold tracking-tight">
                ChikiTube
              </p>
            </div>
          </Link>
        </div>
        {/* SearchBar */}
        <div className="flex-1 justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
