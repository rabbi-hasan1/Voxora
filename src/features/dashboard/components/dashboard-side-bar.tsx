"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  type LucideIcon,
  Home,
  LayoutGrid,
  AudioLines,
  Volume2,
  Settings,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { AvatarDropdown } from "@/components/own/user-button";

interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface NavSectionProps {
  label?: string;
  items: MenuItem[];
  pathname: string;
}

function NavSection({ label, items, pathname }: NavSectionProps) {
    const {setOpenMobile} = useSidebar();
  return (
    <SidebarGroup className="peer-data-[active=true]/menu-button:opacity-100">
      {label && (
        <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
          {label}
        </SidebarGroupLabel>
      )}

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const href = item.url?.startsWith("/") ? item.url : `/${item.url}`;

            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<Link href={href} />}
                  isActive={isActive}
                  tooltip={item.title}
                  onClick={() => setOpenMobile(false)}
                  className="h-9 px-3 py-2 my-0.5 text-[14px] tracking-tight font-medium border border-transparent data-[active=true]:border-border "
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default function DashboardSidebar() {
  const pathname = usePathname();

  const mainMenueItems: MenuItem[] = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Explore voices",
      url: "/voices",
      icon: LayoutGrid,
    },
    {
      title: "Text to speech",
      url: "/text-to-speech",
      icon: AudioLines,
    },
    {
      title: "Voice cloning",
      url: "/voice-cloning",
      icon: Volume2,
    },
  ];

  const otherMenuItems: MenuItem[] = [
    {
      title: "Settings",
      icon: Settings,
      url:"/users/settings",
      onClick: () => {},
    },
    {
      title: "Help and support",
      url: "mailto:rabbi.builds@gmail.com",
      icon: Headphones,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-col gap-2.5 pt-4">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={24}
            height={24}
            className="rounded-sm"
          ></Image>
          <span className="group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground">
            Voice Studio
          </span>
          <SidebarTrigger className="ml-auto lg:hidden" />
        </div>
        <SidebarMenu>
          <SidebarMenuItem>{/* organization */}</SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="border-b border-dashed border-border" />
      <SidebarContent>
        <NavSection items={mainMenueItems} pathname={pathname} />
        <NavSection label="Others" items={otherMenuItems} pathname={pathname} />
      </SidebarContent>
      <div className="border-b border-dashed border-border"></div>
      <SidebarFooter className="gap-3 py-3 ">
        <SidebarMenu>
          <SidebarMenuItem>
            <AvatarDropdown />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
