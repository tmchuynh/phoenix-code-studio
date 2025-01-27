import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  about,
  companies,
  content,
  paymentOptions,
  services,
  websites,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ModeButton } from "./ModeButton";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();

  return (
    <>
      <Menubar className="md:flex h-full justify-between hidden mb-10">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center cursor-default">
          <MenubarMenu>
            <a
              onClick={() => router.push("/")}
              className="text-sm md:text-md lg:text-xl mx-4"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <div className="min-w-[12rem] flex gap-4">
              {about.map((about, index) => (
                <a
                  key={index}
                  onClick={() => router.push(about.href)}
                  className="text-sm md:text-md lg:text-xl  hover:text-primary"
                >
                  {about.title}
                </a>
              ))}
            </div>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl">
              Services
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="hidden md:block mt-3">
              {services.map((service, index) => (
                <MenubarItem
                  key={index}
                  onClick={() => router.push(service.href)}
                  className="text-sm md:text-md lg:text-xl"
                >
                  {service.title}
                </MenubarItem>
              ))}
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9">
                  Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {paymentOptions.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(plan.href)}
                      className="text-sm md:text-md lg:text-xl justify-end text-end"
                    >
                      {plan.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9">
                  Website Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 w-72">
                  {websites.map((website, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(website.href)}
                      className="text-sm md:text-md lg:text-xl justify-end text-end"
                    >
                      {website.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9">
                  Content Creation
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 w-72">
                  {content.map((content, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(content.href)}
                      className="text-sm md:text-md lg:text-xl justify-end text-end"
                    >
                      {content.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9">
                  Company Specific Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 w-72">
                  {companies.map((company, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(company.href)}
                      className="text-sm md:text-md lg:text-xl justify-end text-end"
                    >
                      {company.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>

      <Popover>
        <PopoverTrigger
          asChild
          className="md:hidden"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <Button size={"icon"} variant="outline">
            <IoMdMenu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full ml-4 mt-3 h-72 p-0 md:hidden">
          <Menubar className="flex flex-col h-72 space-y-4 p-3 items-start">
            <MenubarMenu>
              <span className="p-0">Phoenix Code Studio</span>
            </MenubarMenu>
            <div className="flex flex-col">
              <MenubarMenu>
                <div className="min-w-[12rem] flex flex-col ml-3 gap-4">
                  {about.map((about, index) => (
                    <a
                      key={index}
                      onClick={() => {
                        router.push(about.href);
                        setIsMenuOpen(false);
                      }}
                      className="text-sm md:text-md lg:text-xl  hover:text-primary"
                    >
                      {about.title}
                    </a>
                  ))}
                </div>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="py-3 flex justify-between w-full">
                  Services
                  <FaChevronDown />
                </MenubarTrigger>
                <MenubarContent className="block md:hidden ml-9 -mt-2">
                  {services.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        router.push(service.href);
                        setIsMenuOpen(false);
                      }}
                    >
                      {service.title}
                    </MenubarItem>
                  ))}
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger className="hover:text-primary">
                      Website Services
                    </MenubarSubTrigger>
                    <MenubarSubContent className="absolute top-10 -right-10 w-48">
                      {websites.map((website, index) => (
                        <MenubarItem
                          key={index}
                          onClick={() => {
                            router.push(website.href);
                            setIsMenuOpen(false);
                          }}
                        >
                          {website.title}
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger className="hover:text-primary">
                      Content Creation
                    </MenubarSubTrigger>
                    <MenubarSubContent className="absolute top-10 -right-10 w-48">
                      {content.map((content, index) => (
                        <MenubarItem
                          key={index}
                          onClick={() => {
                            router.push(content.href);
                            setIsMenuOpen(false);
                          }}
                        >
                          {content.title}
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger className="hover:text-primary">
                      Company Specific Services
                    </MenubarSubTrigger>
                    <MenubarSubContent className="absolute top-10 -right-10 w-48">
                      {companies.map((company, index) => (
                        <MenubarItem
                          key={index}
                          onClick={() => {
                            router.push(company.href);
                            setIsMenuOpen(false);
                          }}
                        >
                          {company.title}
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </div>
          </Menubar>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavBar;
