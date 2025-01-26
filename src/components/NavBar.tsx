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
import { about, companies, content, services, websites } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { FaChevronDown } from "react-icons/fa";
import { Input } from "./ui/input";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menubar className="md:flex justify-between hidden">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center">
          <MenubarMenu>
            <div className="min-w-[12rem] flex gap-4">
              {about.map((about, index) => (
                <a
                  key={index}
                  onClick={() => router.push(about.href)}
                  className="text-sm hover:text-primary"
                >
                  {about.title}
                </a>
              ))}
            </div>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:text-primary">
              Services
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="hidden md:block">
              {services.map((service, index) => (
                <MenubarItem
                  key={index}
                  onClick={() => router.push(service.href)}
                >
                  {service.title}
                </MenubarItem>
              ))}
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger className="hover:text-primary">
                  Website Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {websites.map((website, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(website.href)}
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
                <MenubarSubContent className="mx-4">
                  {content.map((content, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(content.href)}
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
                <MenubarSubContent className="mx-4">
                  {companies.map((company, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(company.href)}
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

      <Popover open={isMenuOpen}>
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
        <PopoverContent className="w-full ml-4 h-72 p-0 md:hidden">
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
                      className="text-sm hover:text-primary"
                    >
                      {about.title}
                    </a>
                  ))}
                </div>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="hover:text-primary py-3 flex justify-between w-full">
                  Services
                  <FaChevronDown />
                </MenubarTrigger>
                <MenubarContent className="block md:hidden">
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
                    <MenubarSubContent className="absolute top-10 -right-10 w-40">
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
                    <MenubarSubContent className="absolute top-10 -right-10 w-40">
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
                    <MenubarSubContent className="absolute top-10 -right-10 w-40">
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
