import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";

type PersonalSectionProps = {};

const items = [
  {
    title: "History",
    to: "/playlists/history",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked videos",
    to: "/playlists/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All Playlists",
    to: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
] as const;

const PersonalSection = (props: PersonalSectionProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
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

export default PersonalSection;
