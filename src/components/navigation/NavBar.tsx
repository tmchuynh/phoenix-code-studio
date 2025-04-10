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
import { about, serviceCategories } from "@/lib/constants";
import { allContracts } from "@/lib/contract-categories";
import { paymentPlans } from "@/lib/payment-plans";
import { allServices } from "@/lib/service-categories";
import { contractExamples } from "@/lib/sub-contracts";
import { subServiceDetails } from "@/lib/sub-services";
import { capitalize } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ModeButton } from "../buttons/ModeButton";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
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
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Contract Templates & Examples
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/contracts");
                    }}
                    className="flex flex-col items-start rounded-lg w-96 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                  >
                    <p className="mb-0 font-semibold text-tertiary">Overview</p>
                    <small>
                      Explore our selection of contract templates and examples,
                      designed to suit a variety of business needs and
                      requirements.
                    </small>
                  </MenubarItem>
                  {allContracts.map((contractCategory, categoryIndex) => {
                    const contractDetails = contractExamples.find(
                      (item) =>
                        item.name === contractCategory.info.sub[categoryIndex]
                    );

                    if (contractDetails) {
                      return (
                        <MenubarSub
                          key={`${contractCategory.short}-${contractCategory.name}-${categoryIndex}`}
                        >
                          <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                            {contractCategory.title}
                          </MenubarSubTrigger>
                          <MenubarSubContent className="grid grid-cols-2 mx-4">
                            <MenubarItem
                              key={`${contractCategory.short}-${contractCategory.name}-${categoryIndex}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push(
                                  `/services/contracts/${contractCategory.name}`
                                );
                              }}
                              className="flex flex-col justify-center items-start w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                            >
                              <p className="mb-0 font-semibold text-tertiary">
                                Overview
                              </p>
                            </MenubarItem>
                            {contractCategory.info.sub.map(
                              (contract, contractIndex) => {
                                const contractDetail = contractExamples.find(
                                  (item) => item.name === contract
                                );
                                if (contractDetail) {
                                  return (
                                    <MenubarItem
                                      key={`${contractDetail.category}-${contractDetail.name}-${contractIndex}`}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        router.push(
                                          `/services/contracts/${contractDetail.category}/${contractDetail.name}`
                                        );
                                      }}
                                      className="flex flex-col justify-center items-start w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                                    >
                                      <p className="mb-0 font-semibold text-tertiary">
                                        {contractDetail.info?.title ||
                                          contractDetail.info?.name}
                                      </p>
                                    </MenubarItem>
                                  );
                                }
                                return null;
                              }
                            )}
                          </MenubarSubContent>
                        </MenubarSub>
                      );
                    }
                  })}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="gap-2 grid grid-cols-3 mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                    className="flex flex-col items-start rounded-lg w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                  >
                    <p className="mb-0 font-semibold text-tertiary">Overview</p>
                    <small>
                      Browse through our variety of payment plans and choose the
                      one that best aligns with your needs and budget.
                    </small>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing");
                    }}
                    className="flex flex-col items-start rounded-lg w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                  >
                    <p className="mb-0 font-semibold text-tertiary">
                      Service Tiers & Pricing
                    </p>
                    <small>
                      Compare our pricing options and service tiers to find the
                      best fit for your budget and requirements.
                    </small>
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={`${plan.name}-${index}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                      }}
                      className="flex flex-col items-start rounded-lg w-72 text-sm text-start md:text-md lg:text-xl cursor-pointer"
                    >
                      <p className="mb-0 font-semibold text-tertiary">
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
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                    className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                  >
                    Overview
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing");
                    }}
                    className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                  >
                    Service Tiers & Pricing
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={`${plan.name}-${index}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                      }}
                      className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
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
            <MenubarTrigger className="text-sm md:text-md lg:text-xl cursor-pointer">
              Contract Templates
              <FaChevronDown className="ml-3" />
            </MenubarTrigger>
            <MenubarContent className="md:block hidden mt-3 -ml-8 w-11/12">
              <MenubarItem
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/services/contracts");
                }}
                className="text-sm md:text-md lg:text-xl cursor-pointer"
              >
                Overview
              </MenubarItem>
              {allContracts.map((contractCategory, categoryIndex) => (
                <MenubarSub
                  key={`${contractCategory.short}-${contractCategory.name}-${categoryIndex}`}
                >
                  <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                    {contractCategory.title}
                  </MenubarSubTrigger>
                  <MenubarSubContent className="mx-4">
                    <MenubarItem
                      key={`${contractCategory.name}-${contractCategory.short}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/contracts/${contractCategory.name}`
                        );
                      }}
                      className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                    >
                      {contractCategory.short}s Overview
                    </MenubarItem>
                    {contractCategory.info.sub.map(
                      (contractDetail, detailIndex) => {
                        const details = contractExamples.find(
                          (item) => item.name === contractDetail
                        );
                        if (details) {
                          return (
                            <MenubarItem
                              key={`${details.category}-${details.name}-${detailIndex}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push(
                                  `/services/contracts/${contractCategory.name}/${details.name}`
                                );
                              }}
                              className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                            >
                              {details.info.title}
                            </MenubarItem>
                          );
                        }
                      }
                    )}
                  </MenubarSubContent>
                </MenubarSub>
              ))}
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
              <MenubarSub>
                <MenubarSubTrigger>
                  Contract Templates & Examples
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/contracts");
                    }}
                    className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                  >
                    Overview
                  </MenubarItem>
                  {allContracts.map((contractCategory, contractIndex) => (
                    <MenubarItem
                      key={`${contractCategory.short}-${contractCategory.name}-${contractIndex}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/contracts/${contractCategory.name}`
                        );
                      }}
                      className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                    >
                      {contractCategory.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="md:mr-9 w-full text-sm md:text-md lg:text-xl cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                    className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                  >
                    Overview
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing");
                    }}
                    className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
                  >
                    Service Tiers & Pricing
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={`${plan.name}-${index}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                      }}
                      className="justify-end text-end text-sm md:text-md lg:text-xl cursor-pointer"
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
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Flexible Payment Plans
                  <FaChevronDown />
                </MenubarTrigger>
                <MenubarContent className="block md:hidden -mt-2 ml-9">
                  <MenubarItem
                    className="h-fit"
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                  >
                    Overview
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing");
                    }}
                  >
                    Service Tiers & Pricing
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={`${plan.name}-${index}`}
                      className="h-fit"
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
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
