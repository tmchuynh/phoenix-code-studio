"use client";
import LoadingIndicator from "@/components/Loading";
import CannotFind from "@/components/states/CannotFind";
import { Category } from "@/lib/interfaces";
import { contractExamples } from "@/lib/sub-contracts";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { formatName } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contract, setContract] = useState<Category | null>(null);

  useEffect(() => {
    if (!category) return;

    /**
     * Fetches contract services data from the API.
     *
     * This function sends a GET request to the `/api/services/contracts/${category}` endpoint
     * to retrieve contract services data. If the request is successful, it updates the contract
     * state with the fetched data. If the request fails, it sets an error message.
     * Regardless of the outcome, it sets the loading state to false after a delay of 350ms.
     *
     * @async
     * @function fetchServices
     * @throws {Error} If the response is not ok, throws an error with the message "Services post not found".
     */
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
        }, 350);
      }
    }

    fetchServices();
  }, [category]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
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

      <section>
        {contract?.info.sub.map((sub, index) => {
          const contractDetails = contractExamples.find(
            (item) => item.name == sub
          );

          if (contractDetails) {
            return (
              <div key={index}>
                <h3>
                  <a
                    href={`/services/contracts/${contractDetails.category}/${contractDetails.name}`}
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    {contractDetails.info.title}
                  </a>
                </h3>
                <p>{contractDetails.info.details}</p>
              </div>
            );
          }
        })}
      </section>
    </main>
  );
}
