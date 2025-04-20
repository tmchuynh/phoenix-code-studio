"use client";
import CallToAction from "@/components/CTAs/CallToAction";
import subServiceDetails from "@/lib/constants/services/sub-services";
import CannotFind from "@/components/states/CannotFind";
import LoadingIndicator from "@/components/states/Loading";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/interfaces";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { formatName, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };
  const { theme } = useTheme();
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<Category | null>(null);

  useEffect(() => {
    if (!category) return;

    /**
     * Fetches services data from the API based on the provided category.
     *
     * @async
     * @function fetchServices
     * @throws {Error} If the response is not ok or the services post is not found.
     * @returns {Promise<void>} A promise that resolves when the data is fetched and state is updated.
     */
    async function fetchServices(): Promise<void> {
      try {
        const response = await fetch(`/api/services/${category}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }

    fetchServices();
  }, [category]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  /**
   * Navigates to the details page of a specific service.
   *
   * @param {string} serviceName - The name of the service to navigate to.
   */
  const navigateToDetails = (serviceName: string) => {
    const formattedServiceName = setSlug(serviceName);

    router.push(`/services/${category}/${formattedServiceName}`);
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>{service?.name && formatName(service?.name)}</h1>
      <div className="mb-4">
        {" "}
        {isSmallScreen
          ? service?.info.short
          : isMediumScreen
          ? service?.info.detail
          : service?.info.description.map((sentence, index) => {
              return <p key={index}>{sentence}</p>;
            })}
      </div>

      <h2>Discover What We Can Do For You</h2>
      <p>{service?.info.intro}</p>

      <section>
        {service?.info?.sub.map((sub, index) => {
          const subServiceDetail = subServiceDetails.find(
            (item) => item.name === sub
          );

          if (subServiceDetail && subServiceDetail.info.pricingTiers) {
            return (
              <div className="lg:flex lg:flex-col my-4" key={index}>
                <h3>Pricing for {formatName(subServiceDetail.name)}</h3>
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
                <Button
                  className="mt-3 w-full md:w-1/2 lg:w-1/4 h-fit hover:underline no-underline lg:self-end"
                  variant={theme === "dark" ? "outline" : "accent"}
                  onClick={() => navigateToDetails(sub)}
                >
                  Learn More
                </Button>
              </div>
            );
          }
          return null;
        })}
      </section>

      <CallToAction />
    </main>
  );
}
