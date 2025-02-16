"use client";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { ServiceCategory } from "@/lib/interfaces";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

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
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1>{service?.name.replace(/-/g, " ")}</h1>
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

      {service?.info?.subServices?.length ? (
        service.info?.subServices.map((sub, index) => (
          <div className="py-1 flex" key={index}>
            <p className="group flex items-center gap-5">
              {sub
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-5 text-accent-2">
                <LuArrowBigRightDash />
              </span>
              <Button variant={"link"} className="no-underline hover:underline">
                Learn More
              </Button>
            </p>
          </div>
        ))
      ) : (
        <p>No sub-services found.</p>
      )}

      <CallToAction />
    </main>
  );
}
