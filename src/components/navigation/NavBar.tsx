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
import { about, serviceCategories } from "@/lib/constants/navigation";
import { allServices } from "@/lib/constants/services/service-categories";
import { subServiceDetails } from "@/lib/constants/services/sub-services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ModeButton } from "../buttons/ModeButton";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { capitalize } from "@/lib/utils/format";
export default function Navbar() {
  const router = useRouter();
  const [_, setIsMenuOpen] = useState(false);
  return (
    <>
      <Menubar className="xl:flex justify-between hidden lg:hidden mx-auto mb-10 w-11/12 h-full">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center 2xl:space-x-10 xl:space-x-5 cursor-pointer">
          <MenubarMenu>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/");
              }}
              className="mx-4 text-sm md:text-md lg:text-xl hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <div className="flex gap-4 2xl:space-x-10 xl:space-x-5 min-w-[12rem]">
              {about.map((about, index) => (
                <a
                  key={index}
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push(about.href);
                  }}
                  className="text-sm md:text-md lg:text-xl hover:text-primary"
                >
                  {about.title}
                </a>
              ))}
            </div>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              Services
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="md:block hidden mt-3">
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="gap-2 grid grid-cols-3 mx-4">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(service.href);
                      }}
                      className="flex flex-col items-start rounded-lg w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                    >
                      <p className="mb-0 font-semibold text-tertiary">
                        {service.title}
                      </p>
                      <small>{service.description}</small>
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              {allServices.map((serviceCategory, serviceIndex) => {
                const triggerLabel =
                  serviceCategory.name === "seo-optimized-content-creation"
                    ? "SEO Optimized Content Creation"
                    : capitalize(serviceCategory.name);
                return (
                  <MenubarSub
                    key={`${serviceCategory.name}-${serviceCategory.short}-${serviceIndex}`}
                  >
                    <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                      {triggerLabel}
                    </MenubarSubTrigger>
                    <MenubarSubContent className="gap-2 grid grid-cols-3 mx-4">
                      <MenubarItem
                        key={`${serviceCategory.short}-${serviceCategory.name}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                        className="flex flex-col items-start w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                      >
                        <p className="mb-0 font-semibold text-tertiary">
                          {serviceCategory.short || serviceCategory.title}
                        </p>
                      </MenubarItem>
                      {serviceCategory.info.sub.map(
                        (subServiceName, subIndex) => {
                          const subServiceData = subServiceDetails.find(
                            (detail) =>
                              detail.name === subServiceName &&
                              detail.category === serviceCategory.name
                          );
                          // 2) Return null if no match
                          if (!subServiceData) {
                            return null;
                          }
                          return (
                            <MenubarItem
                              key={`${subServiceName}-${subServiceData.category}-${subServiceData.name}-${subIndex}`}
                              onClick={() => {
                                {
                                  setIsMenuOpen(false);
                                  router.push(
                                    `/services/${subServiceData.category}/${subServiceData.name}`
                                  );
                                }
                              }}
                              className="flex flex-col items-start w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                            >
                              <p className="mb-0 font-semibold text-tertiary">
                                {subServiceData.info?.title ||
                                  subServiceData.info?.name}
                              </p>
                              <small>
                                {subServiceData.info?.menuCaption ||
                                  subServiceData.info?.short}
                              </small>
                            </MenubarItem>
                          );
                        }
                      )}
                    </MenubarSubContent>
                  </MenubarSub>
                );
              })}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact-us");
              }}
              className="mx-4 text-sm md:text-md lg:text-xl hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>
      <Menubar className="lg:flex justify-between hidden xl:hidden mx-auto mb-10 w-11/12 h-full">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center cursor-pointer">
          <MenubarMenu>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/");
              }}
              className="mx-4 text-sm md:text-md lg:text-xl hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              About Us
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="md:block hidden mt-3">
              {about.map((service, index) => (
                <MenubarItem
                  key={`${service.title}-${index}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push(service.href);
                  }}
                  className="text-sm md:text-md lg:text-xl cursor-pointer"
                >
                  {service.title}
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              Services
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="md:block hidden mt-3 -ml-8 w-11/12">
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={`${service.title}-${index}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(service.href);
                      }}
                      className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                    >
                      {service.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              {allServices.map((serviceCategory, serviceIndex) => {
                const triggerLabel =
                  serviceCategory.name === "seo-optimized-content-creation"
                    ? "SEO Optimized Content Creation"
                    : capitalize(serviceCategory.name);
                return (
                  <MenubarSub
                    key={`${serviceCategory.name}-${serviceCategory.short}-${serviceIndex}`}
                  >
                    <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                      {triggerLabel}
                    </MenubarSubTrigger>
                    <MenubarSubContent className="mx-4">
                      <MenubarItem
                        key={`overview-${serviceCategory.name}-${serviceCategory.short}-${serviceIndex}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                        className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                      >
                        Overview
                      </MenubarItem>
                      {serviceCategory.info.sub.map(
                        (subServiceName, subIndex) => {
                          const subServiceData = subServiceDetails.find(
                            (detail) =>
                              detail.name === subServiceName &&
                              detail.category === serviceCategory.name
                          );
                          // Return null if no match
                          if (!subServiceData) {
                            return null;
                          }
                          return (
                            <MenubarItem
                              key={`subService-${subServiceData.category}-${subServiceData.name}-${subIndex}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push(
                                  `/services/${subServiceData.category}/${subServiceData.name}`
                                );
                              }}
                              className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                            >
                              {subServiceData.info?.title ||
                                subServiceData.info?.name}
                            </MenubarItem>
                          );
                        }
                      )}
                    </MenubarSubContent>
                  </MenubarSub>
                );
              })}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact-us");
              }}
              className="mx-4 text-sm md:text-md lg:text-xl hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>
      <Menubar className="md:flex justify-between hidden lg:hidden mx-auto mb-10 w-11/12 h-full">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center cursor-pointer">
          <MenubarMenu>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/");
              }}
              className="mx-4 text-sm md:text-md lg:text-xl hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              About Us
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="md:block hidden mt-3">
              {about.map((service, index) => (
                <MenubarItem
                  key={`${service.title}-${index}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push(service.href);
                  }}
                  className="text-sm md:text-md lg:text-xl cursor-pointer"
                >
                  {service.title}
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              Services
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="md:block hidden mt-3 -ml-8 w-11/12">
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={`${service.title}-${index}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(service.href);
                      }}
                      className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                    >
                      {service.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              {allServices.map((serviceCategory, serviceIndex) => {
                const triggerLabel =
                  serviceCategory.name === "seo-optimized-content-creation"
                    ? "SEO Optimized Content Creation"
                    : capitalize(serviceCategory.name);

                return (
                  <MenubarSub key={`${serviceCategory.name}-${serviceIndex}`}>
                    {" "}
                    <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                      {triggerLabel}
                    </MenubarSubTrigger>
                    <MenubarSubContent
                      key={`${serviceCategory.name}-${serviceIndex}-subcontent`}
                      className="mx-4"
                    >
                      <MenubarItem
                        key={`${serviceCategory.name}-overview`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                        className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                      >
                        Overview
                      </MenubarItem>

                      {serviceCategory.info.sub.map(
                        (subServiceName, subIndex) => {
                          const subServiceData = subServiceDetails.find(
                            (detail) =>
                              detail.name === subServiceName &&
                              detail.category === serviceCategory.name
                          );

                          if (!subServiceData) {
                            return null;
                          }

                          return (
                            <MenubarItem
                              key={`subservice-${subServiceData.category}-${subServiceData.name}-${subIndex}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push(
                                  `/services/${subServiceData.category}/${subServiceData.name}`
                                );
                              }}
                              className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                            >
                              {subServiceData.info?.title ||
                                subServiceData.info?.name}
                            </MenubarItem>
                          );
                        }
                      )}
                    </MenubarSubContent>
                  </MenubarSub>
                );
              })}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact-us");
              }}
              className="mx-4 text-sm md:text-md lg:text-xl hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>
      <Popover>
        <PopoverTrigger
          asChild
          className="md:hidden ml-5"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <Button size={"icon"} variant="outline">
            <IoMdMenu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="md:hidden mt-3 ml-4 p-0 w-full h-fit">
          <Menubar className="flex flex-col items-start space-y-4 p-3 h-fit">
            <MenubarMenu>
              <span className="p-0">Phoenix Code Studio</span>
            </MenubarMenu>
            <div className="flex flex-col space-y-2">
              <MenubarMenu>
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/");
                  }}
                  className="mb-2.5 pl-3 h-fit text-sm md:text-md lg:text-xl"
                >
                  Home
                </a>
              </MenubarMenu>
              <MenubarMenu>
                <div className="flex flex-col gap-2 space-y-2 mb-2.5 ml-3 min-w-[12rem]">
                  {about.map((about, index) => (
                    <a
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(about.href);
                      }}
                      className="h-fit text-sm md:text-md lg:text-xl"
                    >
                      {about.title}
                    </a>
                  ))}
                </div>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Digtial Services
                  <FaChevronDown />
                </MenubarTrigger>
                <MenubarContent className="block md:hidden -mt-2 ml-9">
                  {serviceCategories.map((services, index) => (
                    <MenubarItem
                      key={`${services.title}-${index}`}
                      className="h-fit"
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(services.href);
                      }}
                    >
                      {services.title}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
              {allServices.map((serviceCategory, serviceIndex) => {
                const triggerLabel =
                  serviceCategory.name === "seo-optimized-content-creation"
                    ? "SEO Optimized Content Creation"
                    : capitalize(serviceCategory.name);
                return (
                  <MenubarMenu key={serviceIndex}>
                    <MenubarTrigger className="flex justify-between w-full">
                      {triggerLabel}
                      <FaChevronDown />
                    </MenubarTrigger>
                    <MenubarContent className="block md:hidden -mt-2 ml-9">
                      <MenubarItem
                        key={`${serviceCategory.short}-${serviceCategory.name}`}
                        className="h-fit"
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                      >
                        Overview
                      </MenubarItem>
                      {serviceCategory.info.sub.map(
                        (subServiceName, subIndex) => {
                          const subServiceData = subServiceDetails.find(
                            (detail) =>
                              detail.name === subServiceName &&
                              detail.category === serviceCategory.name
                          );
                          // 2) Return null if no match
                          if (!subServiceData) {
                            return null;
                          }
                          return (
                            <MenubarItem
                              key={`${subServiceName}-${subServiceData.category}-${subServiceData.name}-${subIndex}`}
                              className="h-fit"
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push(
                                  `/services/${subServiceData.category}/${subServiceData.name}`
                                );
                              }}
                            >
                              {subServiceData.info?.title ||
                                subServiceData.info?.name}
                            </MenubarItem>
                          );
                        }
                      )}
                    </MenubarContent>
                  </MenubarMenu>
                );
              })}
            </div>
          </Menubar>
        </PopoverContent>
      </Popover>
    </>
  );
}
