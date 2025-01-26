"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { about, companies, content, websites } from "@/lib/constants";
import useMediumScreen from "@/lib/useMediumScreen";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMediumScreen = useMediumScreen();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuOnClick = () => setIsMenuOpen(false);

  return (
    <section>
      <div className="flex justify-between items-center p-4">
        {!isMediumScreen && (
          <NavigationMenu className="h-full w-full mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services Overview
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Information</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {about.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Website Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {websites.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Services for Companies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {companies.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Content Creation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {content.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Mobile Menu */}
        {isMediumScreen && (
          <Sheet>
            {/* Hamburger Button for Mobile */}
            <SheetTrigger
              onClick={toggleMenu}
              className="p-2 rounded-md absolute top-5 left-5"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>

            <SheetContent
              className="space-y-2 py-14"
              aria-describedby="mobile-navigation-bar"
            >
              <Button
                variant={"link"}
                onClick={() => {
                  closeMenuOnClick;
                  router.push("/services");
                }}
                className="p-2 h-fit self-start no-underline text-foreground text-sm"
              >
                Services Overview
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="w-full bg-transparent text-start"
                >
                  <button className="p-2 text-sm rounded">Information</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {about.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
                        closeMenuOnClick;
                        router.push(component.href);
                      }}
                    >
                      {component.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="w-full bg-transparent text-start"
                >
                  <button className="p-2 text-sm rounded">
                    Website Services
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {websites.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
                        closeMenuOnClick;
                        router.push(component.href);
                      }}
                    >
                      {component.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="w-full bg-transparent text-start"
                >
                  <button className="p-2 text-sm rounded">
                    Services for Companies
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {companies.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
                        closeMenuOnClick;
                        router.push(component.href);
                      }}
                    >
                      {component.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="w-full bg-transparent text-start"
                >
                  <button className="p-2 text-sm rounded">
                    Content Creation
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {content.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
                        closeMenuOnClick;
                        router.push(component.href);
                      }}
                    >
                      {component.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant={"link"}
                onClick={() => {
                  closeMenuOnClick;
                  router.push("/contact-us");
                }}
                className="p-2 h-fit self-start no-underline text-foreground text-sm"
              >
                Contact Us
              </Button>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </section>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary font-Notable",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 pt-2 text-sm leading-snug text-muted-foreground font-Buda">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
