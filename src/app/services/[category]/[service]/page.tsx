"use client";

import { SubServiceItem } from "@/lib/interfaces";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSmallScreen from "@/lib/useSmallScreen";
import useMediumScreen from "@/lib/useMediumScreen";
import { Button } from "@/components/ui/button";

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
  const [serviceData, setServiceData] = useState<SubServiceItem | null>(null);

  useEffect(() => {
    if (!category || !service) return;

    async function fetchServices() {
      try {
        const response = await fetch(`/api/services/${category}/${service}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }

        const data: SubServiceItem = await response.json();
        setServiceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, [category, service]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

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
          <h2>{serviceData?.info.pricingTierIntro.title}</h2>
          <p> {serviceData?.info.pricingTierIntro.text}</p>
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
