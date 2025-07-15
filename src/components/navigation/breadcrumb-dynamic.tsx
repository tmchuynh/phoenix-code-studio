"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useSmallScreen from "@/hooks/useSmallScreen";
import { capitalize } from "@/lib/utils/format";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const isSmallScreen = useSmallScreen();

  return (
    <Breadcrumb
      className={
        isSmallScreen ? "hidden" : "my-6 w-11/12 mx-auto font-medium text-sm"
      }
    >
      <BreadcrumbList className="flex flex-wrap gap-1.5 items-center">
        <BreadcrumbItem className="duration-200 transition-all hover:scale-105">
          <BreadcrumbLink
            href="/"
            className="flex gap-1.5 items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Home size={16} className="mb-1 mr-4" />
            <span>Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator className="mx-1 text-muted-foreground">
                <ChevronRight size={14} />
              </BreadcrumbSeparator>
              <BreadcrumbItem
                className={`transition-all duration-200 ${
                  !isLast && "hover:scale-105"
                }`}
              >
                {isLast ? (
                  <BreadcrumbPage className="font-semibold text-primary">
                    {capitalize(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {capitalize(segment)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
