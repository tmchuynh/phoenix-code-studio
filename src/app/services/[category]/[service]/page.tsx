"use client";

import { SubItem } from "@/lib/interfaces";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSmallScreen from "@/lib/useSmallScreen";
import useMediumScreen from "@/lib/useMediumScreen";
import { Button } from "@/components/ui/button";
import LoadingIndicator from "@/components/Loading";
import CannotFind from "@/components/CannotFind";

export default function ServicePage() {
  const router = useRouter();

  const { category, service } = useParams() as {
    category: string;
    service: string;
  };

  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [serviceData, setServiceData] = useState<SubItem | null>(null);

  useEffect(() => {
    if (!category || !service) return;

    /**
     * Fetches service data from the API based on the provided category and service.
     *
     * @async
     * @function fetchServices
     * @throws {Error} Throws an error if the service post is not found.
     * @returns {Promise<void>} A promise that resolves when the service data is fetched and state is updated.
     */
    async function fetchServices() {
      try {
        const response = await fetch(`/api/services/${category}/${service}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }

        const data: SubItem = await response.json();
        setServiceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }

    fetchServices();
  }, [category, service]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1>{serviceData?.info.name}</h1>
      <p className="mb-4">
        {isSmallScreen
          ? serviceData?.info.short
          : isMediumScreen
          ? serviceData?.info.details
          : serviceData?.info.info}
      </p>

      {serviceData?.details?.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2>{section.title}</h2>
          {section.intro &&
            section.intro.map((intro, introIndex) => (
              <p key={introIndex}>{intro}</p>
            ))}

          {section.lists && (
            <ul>
              {section.lists.map((list, listIndex) => (
                <li key={listIndex}>
                  <strong>{list.title ? `${list.title}:` : ""} </strong>
                  {list.description}
                  {list.info && (
                    <ul>
                      {list.info.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <strong>{item.title && item.title}: </strong>
                          {item.description && item.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {serviceData?.info.pricingTiers && (
        <div className="mt-4">
          <h2>{serviceData?.info.pricingTierIntro?.title}</h2>
          <p> {serviceData?.info.pricingTierIntro?.text}</p>
          <ul>
            {serviceData.info.pricingTiers.map((prices, index) => (
              <li key={index}>
                <div>
                  <strong>{prices.name}:</strong> {prices.info}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2>{serviceData?.cta.title}</h2>
        <p>{serviceData?.cta.intro && serviceData?.cta.intro}</p>
        <p>
          {serviceData?.cta.text && serviceData?.cta.text}{" "}
          {serviceData?.cta.afterButtonText && serviceData?.cta.afterButtonText}
        </p>

        <Button className="my-3" onClick={() => router.push("/contact-us")}>
          {serviceData?.cta.button}
        </Button>
      </div>
    </main>
  );
}
