"use client";
import LoadingIndicator from "@/components/states/Loading";
import { Button } from "@/components/ui/button";
import { allServices } from "@/lib/constants/services/service-categories";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { setSlug } from "@/lib/utils/format";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  /**
   * Navigates to the specified service category page.
   *
   * @param {string} serviceCategory - The name of the service category to navigate to.
   */
  const navigateToCategory = (serviceCategory: string) => {
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}`);
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      {/* Introduction Section */}
      <section className="mb-8">
        <h1>Digital Services by Phoenix Code Studio</h1>
        <p>
          Unlock your business’s full potential with our all-embracing digital
          solutions. From cutting-edge web development that delivers
          high-performance websites to intuitive design that enhances user
          experience, we craft strategies that make an impact. Our expertise in
          content creation and digital marketing ensures your brand stands out,
          driving engagement, increasing visibility, and boosting conversions.
          Whether you're launching a new venture, reimagining your online
          presence, or expanding into new markets, we provide tailored solutions
          that align with your vision and set you apart in today’s competitive
          digital landscape.
        </p>
      </section>

      {/* Company Services Section */}
      {allServices.map((service, index) => (
        <section className="my-20 pb-9" key={index}>
          <div className="flex flex-col pb-3">
            <h2 className="mb-6 font-semibold text-3xl text-center text-secondary">
              {service.title}
            </h2>

            {isSmallScreen ? (
              <p>{service.info.short}</p>
            ) : isMediumScreen ? (
              <p>{service.info.detail}</p>
            ) : (
              <>
                <p>{service.info.intro}</p>

                {service.info.description.map((info, infoIndex) => (
                  <p key={infoIndex}>{info}</p>
                ))}
              </>
            )}

            <div className="md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:px-24">
              <Button
                className="mt-6 w-full self-start"
                variant={theme === "dark" ? "accent" : "outline"}
                size={isSmallScreen ? "sm" : "default"}
                onClick={() => navigateToCategory(service.name)}
              >
                View More Details
              </Button>
            </div>
          </div>

          <Button
            onClick={() => router.push("/contact-us")}
            className="my-15 py-10 md:py-0 w-full text-wrap lg:text-lg"
          >
            Book a Consultation Today to Discuss {service.short}
          </Button>
        </section>
      ))}
    </main>
  );
};

export default ServicesPage;
