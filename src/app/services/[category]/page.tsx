"use client";
import { Category } from "@/lib/interfaces";
import { subServiceDetails } from "@/lib/sub-services";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { formatName, setSlug } from "@/lib/utils";
import LoadingIndicator from "@/components/Loading";
import CannotFind from "@/components/CannotFind";
import { useTheme } from "next-themes";

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

    async function fetchServices() {
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

  const navigateToDetails = (serviceName: string) => {
    const formattedServiceName = setSlug(serviceName);

    router.push(`/services/${category}/${formattedServiceName}`);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
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
              <div className="my-4 lg:flex lg:flex-col" key={index}>
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
                  className="no-underline hover:underline w-full md:w-1/2 lg:w-1/4 lg:self-end h-fit mt-3"
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
