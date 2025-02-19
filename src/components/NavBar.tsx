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
import { allContracts } from "@/lib/contract-categories";
import { contractExamples } from "@/lib/sub-contracts";
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
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/");
              }}
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
            <MenubarContent className="hidden md:block mt-3">
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 grid grid-cols-3 gap-2">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(service.href);
                      }}
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
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Contract Templates & Examples
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/contracts");
                    }}
                    className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-96 rounded-lg"
                  >
                    <p className="text-tertiary font-semibold mb-0">Overview</p>
                    <small>
                      Explore our selection of contract templates and examples,
                      designed to suit a variety of business needs and
                      requirements.
                    </small>
                  </MenubarItem>
                  {allContracts.map((contractCategory, categoryIndex) => (
                    <MenubarSub key={categoryIndex}>
                      <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                        {contractCategory.title}
                      </MenubarSubTrigger>
                      <MenubarSubContent className="mx-4 grid grid-cols-2">
                        <MenubarItem
                          key={categoryIndex}
                          onClick={() => {
                            {
                              setIsMenuOpen(false);
                              router.push(
                                `/services/contracts/${contractCategory.name}`
                              );
                            }
                          }}
                          className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col justify-center w-72"
                        >
                          <p className="text-tertiary font-semibold mb-0">
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
                                <>
                                  <MenubarItem
                                    key={contractIndex}
                                    onClick={() => {
                                      {
                                        setIsMenuOpen(false);
                                        router.push(
                                          `/services/contracts/${contractDetail.category}/${contractDetail.name}`
                                        );
                                      }
                                    }}
                                    className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col justify-center w-72"
                                  >
                                    <p className="text-tertiary font-semibold mb-0">
                                      {contractDetail.info?.title ||
                                        contractDetail.info?.name}
                                    </p>
                                  </MenubarItem>
                                </>
                              );
                            }
                          }
                        )}
                      </MenubarSubContent>
                    </MenubarSub>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4 grid grid-cols-3 gap-2">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                    className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72 rounded-lg"
                  >
                    <p className="text-tertiary font-semibold mb-0">Overview</p>
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
                    className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72 rounded-lg"
                  >
                    <p className="text-tertiary font-semibold mb-0">
                      Service Tiers & Pricing
                    </p>
                    <small>
                      Compare our pricing options and service tiers to find the
                      best fit for your budget and requirements.
                    </small>
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                      }}
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
                      <MenubarItem
                        key={serviceIndex}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                        className="text-sm md:text-md lg:text-xl items-start text-start cursor-pointer flex flex-col w-72"
                      >
                        <p className="text-tertiary font-semibold mb-0">
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
                              key={subIndex}
                              onClick={() => {
                                {
                                  setIsMenuOpen(false);
                                  router.push(
                                    `/services/${subServiceData.category}/${subServiceData.name}`
                                  );
                                }
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
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact-us");
              }}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>
      <Menubar className="lg:flex xl:hidden h-full justify-between hidden mb-10 w-11/12 mx-auto">
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
            <MenubarContent className="hidden md:block mt-3 w-11/12 -ml-8">
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(service.href);
                      }}
                      className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                    >
                      {service.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                    className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                  >
                    Overview
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing");
                    }}
                    className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                  >
                    Service Tiers & Pricing
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                      }}
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
                    <MenubarSubContent className="mx-4">
                      <MenubarItem
                        key={serviceIndex}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                        className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
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
                            <>
                              <MenubarItem
                                key={subIndex}
                                onClick={() => {
                                  {
                                    setIsMenuOpen(false);
                                    router.push(
                                      `/services/${subServiceData.category}/${subServiceData.name}`
                                    );
                                  }
                                }}
                                className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                              >
                                {subServiceData.info?.title ||
                                  subServiceData.info?.name}
                              </MenubarItem>
                            </>
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
            <MenubarContent className="hidden md:block mt-3 w-11/12 -ml-8">
              <MenubarItem
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/services/contracts");
                }}
                className="text-sm md:text-md lg:text-xl cursor-pointer"
              >
                Overview
              </MenubarItem>
              {allContracts.map((contractCategory, contractIndex) => (
                <MenubarSub key={contractIndex}>
                  <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                    {contractCategory.title}
                  </MenubarSubTrigger>
                  <MenubarSubContent className="mx-4">
                    <MenubarItem
                      key={contractIndex}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/contracts/${contractCategory.name}`
                        );
                      }}
                      className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
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
                              key={detailIndex}
                              onClick={() => {
                                setIsMenuOpen(false);
                                router.push(
                                  `/services/contracts/${contractCategory.name}/${details.name}`
                                );
                              }}
                              className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
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
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>
      <Menubar className="md:flex lg:hidden h-full justify-between hidden mb-10 w-11/12 mx-auto">
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
            <MenubarContent className="hidden md:block mt-3 w-11/12 -ml-8">
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Digital Services
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  {serviceCategories.map((service, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(service.href);
                      }}
                      className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
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
                    className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                  >
                    Overview
                  </MenubarItem>
                  {allContracts.map((contractCategory, contractIndex) => (
                    <MenubarItem
                      key={contractIndex}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/contracts/${contractCategory.name}`
                        );
                      }}
                      className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                    >
                      {contractCategory.title}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger className="text-sm md:text-md lg:text-xl w-full md:mr-9 cursor-pointer">
                  Flexible Payment Plans
                </MenubarSubTrigger>
                <MenubarSubContent className="mx-4">
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing/payment-plans");
                    }}
                    className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                  >
                    Overview
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push("/services/pricing");
                    }}
                    className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                  >
                    Service Tiers & Pricing
                  </MenubarItem>
                  {paymentPlans.map((plan, index) => (
                    <MenubarItem
                      key={index}
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(
                          `/services/pricing/payment-plans/${plan.name}`
                        );
                      }}
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
                    <MenubarSubContent className="mx-4">
                      <MenubarItem
                        key={serviceIndex}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(`/services/${serviceCategory.name}`);
                        }}
                        className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
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
                            <>
                              <MenubarItem
                                key={subIndex}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  router.push(
                                    `/services/${subServiceData.category}/${subServiceData.name}`
                                  );
                                }}
                                className="text-sm md:text-md lg:text-xl justify-end text-end cursor-pointer"
                              >
                                {subServiceData.info?.title ||
                                  subServiceData.info?.name}
                              </MenubarItem>
                            </>
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
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/");
                  }}
                  className="text-sm md:text-md lg:text-xl pl-3 mb-2.5 h-fit"
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
                        setIsMenuOpen(false);
                        router.push(about.href);
                      }}
                      className="text-sm md:text-md lg:text-xl h-fit"
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
                <MenubarContent className="block md:hidden ml-9 -mt-2">
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
                      key={index}
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
                    <MenubarContent className="block md:hidden ml-9 -mt-2">
                      <MenubarItem
                        key={serviceIndex}
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
                              key={subIndex}
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
};
export default NavBar;
