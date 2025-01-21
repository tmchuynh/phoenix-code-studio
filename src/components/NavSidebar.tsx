"use client";
import * as React from "react";
import { Command } from "lucide-react";

import { NavMain } from "@/components/sidebar/NavMain";
import { NavSecondary } from "@/components/sidebar/NavSecondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { data } from "@/lib/constants";

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [openItemKey, setOpenItemKey] = React.useState<string | null>(null);

  return (
    <Sidebar
      variant="inset"
      {...props}
      className="rounded-3xl shadow-md border hover:shadow-md"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Knowledge Knockout
                  </span>
                  <span className="truncate text-xs slogan">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          title="Platforms"
          items={data.navMain}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <SidebarSeparator />
        <NavMain
          title="Information"
          items={data.information}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <SidebarSeparator />
        <NavMain
          title="For You"
          items={data.foryou}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
