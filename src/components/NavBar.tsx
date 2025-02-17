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
import { about, serviceCategories, services } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ModeButton } from "./ModeButton";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { paymentPlans } from "@/lib/payment-plans";
import { allServices } from "@/lib/service-categories";
import { capitalize } from "@/lib/utils";
import { subServiceDetails } from "@/lib/sub-services";

const NavBar = () => {
  const router = useRouter();
  const [_, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menubar className="lg:hidden xl:flex h-full justify-between hidden mb-10 w-11/12 mx-auto">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center cursor-pointer xl:space-x-5 2xl:space-x-10">
          <MenubarMenu>
            <a
              onClick={() => router.push("/")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <div className="min-w-[12rem] flex gap-4 xl:space-x-5 2xl:space-x-10">
              {about.map((about, index) => (
                <a
                  key={index}
                  onClick={() => router.push(about.href)}
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
            <MenubarContent className="hidden md:block mt-3">
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 grid grid-cols-3 gap-2">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(service.href)}
                      className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72 rounded-lg"
                    >
                      <p className="text-tertiary font-semibold mb-0">
                        {service.title}
                      </p>
                      <small>{service.description}</small>
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              {services.map((service, index) => (
                <MenubarItem
                  key={index}
                  onClick={() => router.push(service.href)}
                  className="text-sm md:text-md lg:text-xl cursor-pointer"
                >
                  {service.title}
                </MenubarItem>
              ))}
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 grid grid-cols-3 gap-2">
                  <MenubarItem
                    onClick={() =>
                      router.push("/services/pricing/payment-plans")
                    }
                    className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72 rounded-lg"
                  >
                    <p className="text-tertiary font-semibold mb-0">Overview</p>
                    <small>
                      Browse through our variety of payment plans and choose the
                      one that best aligns with your needs and budget.
                    </small>
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() =>
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        )
                      }
                      className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72 rounded-lg"
                    >
                      <p className="text-tertiary font-semibold mb-0">
                        {plan.title}
                      </p>
                      <small>{plan.info.short}</small>
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
                  <MenubarSub key={serviceIndex}>
                    <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                      {triggerLabel}
                    </MenubarSubTrigger>

                    <MenubarSubContent className="mx-4 grid grid-cols-3 gap-2">
                      {serviceCategory.info.subServices.map(
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
                              key={subIndex}
                              onClick={() => {
                                router.push(
                                  `/services/${subServiceData.category}/${subServiceData.name}`
                                );
                              }}
                              className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72"
                            >
                              <p className="text-tertiary font-semibold mb-0">
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
              onClick={() => router.push("/contact-us")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>

      <Menubar className="md:flex xl:hidden h-full justify-between hidden mb-10 w-11/12 mx-auto">
        <MenubarMenu>
          <span className="px-3">Phoenix Code Studio</span>
        </MenubarMenu>
        <div className="flex items-center cursor-pointer">
          <MenubarMenu>
            <a
              onClick={() => router.push("/")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              About Us
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="hidden md:block mt-3">
              {about.map((service, index) => (
                <MenubarItem
                  key={index}
                  onClick={() => router.push(service.href)}
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
            <MenubarContent className="hidden md:block mt-3">
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => router.push(service.href)}
                      className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                    >
                      {service.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              {services.map((service, index) => (
                <MenubarItem
                  key={index}
                  onClick={() => router.push(service.href)}
                  className="text-sm md:text-md lg:text-xl cursor-pointer"
                >
                  {service.title}
                </MenubarItem>
              ))}
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() =>
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        )
                      }
                      className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                    >
                      {plan.title}
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
                  <MenubarSub key={serviceIndex}>
                    <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                      {triggerLabel}
                    </MenubarSubTrigger>

                    <MenubarSubContent className="mx-4 grid grid-cols-3 gap-2">
                      {serviceCategory.info.subServices.map(
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
                              key={subIndex}
                              onClick={() => {
                                router.push(
                                  `/services/${subServiceData.category}/${subServiceData.name}`
                                );
                              }}
                              className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72"
                            >
                              <p className="text-tertiary font-semibold mb-0">
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
              onClick={() => router.push("/contact-us")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
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
        <PopoverContent className="w-full ml-4 mt-3 h-fit p-0 md:hidden">
          <Menubar className="flex flex-col h-fit space-y-4 p-3 items-start">
            <MenubarMenu>
              <span className="p-0">Phoenix Code Studio</span>
            </MenubarMenu>
            <div className="flex flex-col space-y-2">
              <MenubarMenu>
                <a
                  onClick={() => router.push("/")}
                  className="text-sm md:text-md lg:text-xl pl-3 mb-2.5"
                >
                  Home
                </a>
              </MenubarMenu>
              <MenubarMenu>
                <div className="min-w-[12rem] flex flex-col ml-3 gap-2 mb-2.5 space-y-2">
                  {about.map((about, index) => (
                    <a
                      key={index}
                      onClick={() => {
                        router.push(about.href);
                        setIsMenuOpen(false);
                      }}
                      className="text-sm md:text-md lg:text-xl"
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
                <MenubarContent className="block md:hidden ml-9 -mt-2">
                  {serviceCategories.map((services, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        router.push(services.href);
                        setIsMenuOpen(false);
                      }}
                    >
                      {services.title}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <div className="min-w-[12rem] flex flex-col ml-3 gap-2 space-y-2 pt-2">
                  {services.map((about, index) => (
                    <a
                      key={index}
                      onClick={() => {
                        router.push(about.href);
                        setIsMenuOpen(false);
                      }}
                      className="text-sm md:text-md lg:text-xl cursor-pointer"
                    >
                      {about.title === "Overview"
                        ? "Services Overview"
                        : about.title}
                    </a>
                  ))}
                </div>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Payment Plans
                  <FaChevronDown />
                </MenubarTrigger>
                <MenubarContent className="block md:hidden ml-9 -mt-2">
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                        setIsMenuOpen(false);
                      }}
                    >
                      {plan.title}
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

                    <MenubarContent className="block md:hidden ml-9 -mt-2">
                      {serviceCategory.info.subServices.map(
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
                              key={subIndex}
                              onClick={() => {
                                router.push(
                                  `/services/${subServiceData.category}/${subServiceData.name}`
                                );
                              }}
                            >
                              <p className="text-tertiary font-semibold mb-0">
                                {subServiceData.info?.title ||
                                  subServiceData.info?.name}
                              </p>
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
};

export default NavBar;
