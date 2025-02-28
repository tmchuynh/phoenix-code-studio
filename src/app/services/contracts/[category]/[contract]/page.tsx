"use client";

import CannotFind from "@/components/CannotFind";
import LoadingIndicator from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { SubItem } from "@/lib/interfaces";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { formatName } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category, contract } = useParams() as {
    category: string;
    contract: string;
  };

  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contractDetail, setContractDetail] = useState<SubItem | null>(null);

  useEffect(() => {
    if (!category || !contract) return;

    /**
     * Fetches the contract services data from the API.
     *
     * This function makes an asynchronous request to the `/api/services/contracts/${category}/${contract}`
     * endpoint to retrieve the contract services data. It handles the response by checking if the request
     * was successful, parsing the JSON data, and updating the state with the contract details.
     * If an error occurs during the fetch operation, it sets the error state with the error message.
     * Finally, it sets the loading state to false after a short delay.
     *
     * @throws {Error} If the response is not ok, an error is thrown with the message "Services post not found".
     */
    async function fetchServices() {
      try {
        const response = await fetch(
          `/api/services/contracts/${category}/${contract}`
        );
        if (!response.ok) {
          throw new Error("Services post not found");
        }
        const data: SubItem = await response.json();
        setContractDetail(data);
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
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1>
        {contractDetail?.info.name && formatName(contractDetail?.info.name)}{" "}
        EXAMPLE
      </h1>

      <p className="mb-4">
        {isSmallScreen
          ? contractDetail?.info.short
          : isMediumScreen
          ? contractDetail?.info.details
          : contractDetail?.info.info}
      </p>

      {contractDetail?.details && (
        <div className="ml-5 md:ml-9 lg:ml-10">
          <ol className="list-roman space-y-3">
            {contractDetail?.details?.map((detail, detailIndex) => (
              <li key={detailIndex}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="pt-10">
        <h2>{contractDetail?.cta.title}</h2>
        <p>{contractDetail?.cta.intro && contractDetail?.cta.intro}</p>
        <p>
          {contractDetail?.cta.text && contractDetail?.cta.text}{" "}
          {contractDetail?.cta.afterButtonText &&
            contractDetail?.cta.afterButtonText}
        </p>

        <Button className="my-3" onClick={() => router.push("/contact-us")}>
          {contractDetail?.cta.button}
        </Button>
      </div>
    </main>
  );
}
