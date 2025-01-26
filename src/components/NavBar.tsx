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
import { FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ModeButton } from "./ModeButton";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMediumScreen = useMediumScreen();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuOnClick = () => setIsMenuOpen(false);

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isWebsiteServicesOpen, setIsWebsiteServicesOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);
  const toggleWebsiteServices = () =>
    setIsWebsiteServicesOpen(!isWebsiteServicesOpen);
  const toggleCompanies = () => setIsCompaniesOpen(!isCompaniesOpen);
  const toggleContent = () => setIsContentOpen(!isContentOpen);

  return (
    <section>
      <div className="flex justify-between items-center p-4">
        {!isMediumScreen && (
          <NavigationMenu className="h-full w-full mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
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
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-lg">
                          <h2 className="text-lg font-medium mt-4 mb-2">
                            Websites
                          </h2>
                          <p className="text-sm leading-tight">
                            Explore expertly crafted solutions designed to meet
                            your business needs. Beautiful, functional, and
                            tailored just for you.
                          </p>
                        </div>
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
              <ModeButton className="w-12" />
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
                  <button
                    className="p-2 text-sm rounded flex justify-between transition-transform"
                    onClick={toggleInfo}
                  >
                    Information
                    <FaChevronDown
                      className={`transition-transform ${
                        isInfoOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {about.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
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
                  <button
                    className="p-2 text-sm rounded flex justify-between transition-transform"
                    onClick={toggleWebsiteServices}
                  >
                    Website Services
                    <FaChevronDown
                      className={`transition-transform ${
                        isWebsiteServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {websites.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
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
                  <button
                    className="p-2 text-sm rounded flex justify-between transition-transform"
                    onClick={toggleCompanies}
                  >
                    Services for Companies
                    <FaChevronDown
                      className={`transition-transform ${
                        isCompaniesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {companies.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
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
                  <button
                    className="p-2 text-sm rounded flex justify-between transition-transform"
                    onClick={toggleContent}
                  >
                    Content Creation
                    <FaChevronDown
                      className={`transition-transform ${
                        isContentOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {content.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      title={component.title}
                      onClick={() => {
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
              <ModeButton className="absolute bottom-5 left-5" />
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
