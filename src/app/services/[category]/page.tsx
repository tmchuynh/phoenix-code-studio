"use client";

import { ServiceCategory } from "@/lib/interfaces";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<ServiceCategory | null>(null);

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
        setLoading(false);
      }
    }

    fetchServices();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {/* Convert hyphens in the category name to spaces for display */}
        {service?.name}
      </h1>
      <p className="mb-4">{service?.info?.description}</p>

      <h2 className="text-xl font-semibold">Sub-Services:</h2>
      <ul className="list-disc list-inside">
        {service?.info?.subServices?.length ? (
          service.info?.subServices.map((sub: string) => (
            <li key={sub}>
              {" "}
              {sub
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
            </li>
          ))
        ) : (
          <li>No sub-services found.</li>
        )}
      </ul>
    </main>
  );
}
