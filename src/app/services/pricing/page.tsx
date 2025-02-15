"use client";

import CallToAction from "@/components/CallToAction";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { allServices } from "@/lib/service-categories";
import { subServiceDetails } from "@/lib/sub-services";
import { capitalize, setSlug } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import useSmallScreen from "@/lib/useSmallScreen";

import { FC } from "react";

const PricingPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isSmallScreen = useSmallScreen();

  const navigateToCategory = (serviceCategory: string) => {
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}`);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Our Pricing and Service Tiers
      </h1>
      <p>
        Explore our flexible pricing options designed to suit a variety of needs
        and budgets. Whether you're looking for a basic package or a
        comprehensive solution, we offer service tiers that provide exceptional
        value and scalability. Choose the plan that aligns with your goals, and
        let us help you achieve success with tailored, high-quality services.
      </p>

      <section className="my-8">
        <SidebarSeparator className="bg-muted h-0.5" />
        <CallToAction />
        <SidebarSeparator className="bg-muted h-0.5" />
      </section>

      {/* Service 1: Website Services */}
      {allServices.map((service, index) => (
        <section className="my-8" key={index}>
          <div className="pb-3 flex flex-col">
            <h2 className="txt-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              {service.short}
            </h2>
            {service.info.description.map((info, SIndex) => (
              <p key={SIndex}>{info}</p>
            ))}
            <Button
              className="self-end w-1/4"
              variant={theme === "dark" ? "outline" : "accent"}
              size={isSmallScreen ? "sm" : "default"}
              onClick={() => navigateToCategory(service.name)}
            >
              View More Details
            </Button>
          </div>

          {service.info.subServices.map((subService, subIndex) => {
            const subServiceDetail = subServiceDetails.find(
              (item) => item.name === subService
            );

            if (subServiceDetail) {
              return (
                <div key={subIndex}>
                  <h3>
                    Pricing for{" "}
                    {capitalize(subServiceDetail.name.replace(/-/g, " "))}
                  </h3>
                  <ul>
                    {subServiceDetail.info.pricingTiers.map(
                      (pricing, pricingIndex) => (
                        <li key={pricingIndex}>
                          <strong>{pricing.name}: </strong>
                          {pricing.info}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </section>
      ))}
    </main>
  );
};

export default PricingPage;
