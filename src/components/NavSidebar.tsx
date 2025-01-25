"use client";
import * as React from "react";

import { NavMain } from "@/components/sidebar/NavMain";
import { NavSecondary } from "@/components/sidebar/NavSecondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { menu } from "@/lib/constants";
import { NavFooter } from "./sidebar/NavFooter";

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
            <SidebarMenuButton
              size="xl"
              asChild
              className="hover:bg-transparent"
            >
              <a href="/">
                <div className="grid flex-1 text-left leading-tight w-full">
                  <span className="font-extrabold font-Buda text-xl text-primary">
                    Phoenix Code Studio
                  </span>
                  <span className="slogan tracking-widest font-bold text-lg text-secondary">
                    Transforming Visions into Digital Elegance
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          title="Services"
          items={menu.navMain}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <SidebarSeparator />
        <NavMain
          title="Information"
          items={menu.information}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <NavSecondary items={menu.navSecondary} className="mt-auto" />
        <NavFooter />
      </SidebarContent>
    </Sidebar>
  );
}
