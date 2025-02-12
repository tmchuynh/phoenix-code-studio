"use client";

import { SubServiceItem } from "@/lib/interfaces";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

export default function ServicePage() {
  // Retrieve dynamic route params via useParams() in a client component
  const { category, service } = useParams() as {
    category: string;
    service: string;
  };

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
        console.log("Fetched Service Data:", data);
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
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {serviceData?.info.name || service.replace(/-/g, " ")}
      </h1>
      <p className="mb-4">{serviceData?.info.info}</p>

      {serviceData?.info.pricingTiers && (
        <div className="mt-4">
          <ul className="list-none flex flex-col gap-4">
            {serviceData.info.pricingTiers.map((prices, index) => (
              <li key={index} className="flex items-center">
                {/* Render the icon if provided */}
                {serviceData.info.Icon && (
                  <IconDisplay Icon={serviceData.info.Icon} />
                )}
                <div>
                  <strong>{prices.name}:</strong> {prices.info}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

const IconDisplay: FC<{
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({ Icon }) => {
  return (
    <div>
      {/* Render the icon */}
      <Icon className="text-4xl text-accent-5 mx-auto my-5" />
    </div>
  );
};
