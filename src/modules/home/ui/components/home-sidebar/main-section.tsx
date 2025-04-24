import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";

type MainSectionProps = {};

const items = [
  {
    title: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscriptions",
    to: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    to: "/feed/trending",
    icon: FlameIcon,
  },
] as const;

const MainSection = (props: MainSectionProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} //TODO: Change to look at current pathname
                onClick={() => {}}
              >
                <Link to={item.to} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default MainSection;
