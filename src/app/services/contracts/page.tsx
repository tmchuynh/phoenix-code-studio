"use client";

import EmphasizeText from "@/components/Highlighted";
import LoadingIndicator from "@/components/Loading";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { allContracts } from "@/lib/contract-categories";
import { contractExamples } from "@/lib/sub-contracts";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const ExampleContractsPage: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1>Explore Our Contract Examples</h1>
      <p>
        Explore a variety of contract structures designed to meet different
        hiring needs, project scopes, and budgets. Whether you're seeking a
        short-term agreement, long-term partnership, or specialized project
        contract, our examples demonstrate the flexibility and customization
        available to suit your specific requirements. Each example highlights
        essential components like milestone-based payments, defined
        deliverables, and comprehensive service agreements—ensuring
        transparency, fairness, and smooth collaboration throughout the project.
        If your project requires a more tailored approach, we are ready to craft
        a customized agreement that aligns perfectly with your needs.
      </p>
      <p>
        Browse our contract examples below to find the right fit for your
        project. Need something more specific?{" "}
        <Button variant={"link"} className="p-0 m-0 h-fit">
          Contact us today
        </Button>{" "}
        for a personalized consultation. Our team will take the time to
        understand your objectives, challenges, and expectations, ensuring every
        detail is captured in the contract.
      </p>
      <p>
        From complex, multi-phase projects to one-off services with special
        conditions, we offer the expertise and flexibility to create a framework
        that supports your vision. With a custom-tailored agreement, you can
        move forward confidently, knowing your unique requirements are fully
        addressed. Reach out to us and let us help you create the perfect
        contract for your project.
      </p>

      {/* Company Contract */}
      {allContracts.map((contract, contractIndex) => (
        <section
          className="my-8 flex flex-col justify-between"
          key={contractIndex}
        >
          <div className="pb-4">
            <h2>{contract.title}</h2>
            <p>{contract.info.intro}</p>

            {contract.info.sub.map((contractDetail, detailIndex) => {
              const details = contractExamples.find(
                (item) => item.name == contractDetail
              );

              if (details) {
                return (
                  <div key={detailIndex}>
                    <h3>
                      <a
                        href={`/services/contracts/${details.category}/${details.name}`}
                        className="underline underline-offset-4 hover:no-underline"
                      >
                        {details.info.name}
                      </a>
                    </h3>
                    <p>{details.info.details}</p>
                  </div>
                );
              }
            })}
          </div>
          {contractIndex !== allContracts.length - 1 && <hr />}
        </section>
      ))}
    </main>
  );
};

export default ExampleContractsPage;
