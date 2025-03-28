import * as React from "react";

import {
  Home,
  FileText,
  BookOpen,
  Code,
  Database,
  Upload,
  Binoculars,
} from "lucide-react";

import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Upload",
      url: "#",
      icon: Home, // <-- Added an icon
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: FileText,
        },
        {
          title: "Upload",
          url: "/dashboard/upload",
          icon: Upload,
        },
      ],
    },
    {
      title: "Data Analysis",
      url: "#",
      icon: Code, // <-- Added an icon
      items: [
        {
          title: "Data Overview",
          url: "/dashboard/data-analysis",
          icon: BookOpen,
        },
        {
          title: "Connections",
          url: "/dashboard/connections",
          icon: Database,
          isActive: true,
        },
        {
          title: "Root-cause Analysis",
          url: "/dashboard/root-cause",
          icon: Binoculars,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        {item.icon && <item.icon size={16} />}{" "}
                        {/* Icon before text */}
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
