"use client";

import CannotFind from "@/components/CannotFind";
import LoadingIndicator from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/interfaces";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { formatName, setSlug } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contract, setContract] = useState<Category | null>(null);

  useEffect(() => {
    if (!category) return;

    async function fetchServices() {
      try {
        const response = await fetch(`/api/services/contracts/${category}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }
        const data = await response.json();
        setContract(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    }

    fetchServices();
  }, [category]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  const navigateToDetails = (contractName: string) => {
    const formattedContractName = setSlug(contractName);

    router.push(`/services/contracts/${category}/${formattedContractName}`);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1>{contract?.name && formatName(contract?.name)}</h1>
      <div className="mb-4">
        {" "}
        {isSmallScreen
          ? contract?.info.short
          : isMediumScreen
          ? contract?.info.detail
          : contract?.info.description.map((sentence, index) => {
              return <p key={index}>{sentence}</p>;
            })}
      </div>

      <h2>Discover What We Can Do For You</h2>
      <p>{contract?.info.intro}</p>

      {contract?.info?.sub?.length ? (
        contract.info?.sub.map((sub, index) => (
          <div className="py-1 flex" key={index}>
            <p className="group flex items-center gap-5">
              {sub
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-5 text-accent-2">
                <LuArrowBigRightDash />
              </span>
              <Button
                variant={"link"}
                className="no-underline hover:underline"
                onClick={() => navigateToDetails(sub)}
              >
                Learn More
              </Button>
            </p>
          </div>
        ))
      ) : (
        <p>No sub-services found.</p>
      )}
    </main>
  );
}
