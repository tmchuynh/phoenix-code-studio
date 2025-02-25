"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { FAQs } from "@/lib/constants";
import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import LoadingIndicator from "@/components/Loading";
import CallToAction from "@/components/CallToAction";

const FaqPage: FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-2xl font-bold">Welcome to Our FAQs Page!</h1>
      <p className="mt-4">
        Got questions? We’ve got answers! This page is your go-to resource for
        quick, clear information about our services, products, and processes.
        Whether you're exploring our offerings, seeking guidance, or
        troubleshooting an issue, you’ll find solutions right here.
      </p>
      <p className="mt-4">
        Can’t find what you’re looking for?{" "}
        <Button
          variant="link"
          onClick={() => router.push("/contact-us")}
          className="p-0 m-0 h-fit"
        >
          Reach out to us anytime
        </Button>
        - we’re happy to help!
      </p>
      <section className="mb-8">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((question, index) => (
            <AccordionItem value={`${index}`} key={index}>
              <AccordionTrigger className="text-start">
                {question.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <CallToAction />
    </main>
  );
};

export default FaqPage;
