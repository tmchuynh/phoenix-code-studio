"use client";

import CallToAction from "@/components/CallToAction";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { FAQs } from "@/lib/constants";
import { FC } from "react";
import RootLayout from "@/app/layout"; // Assuming RootLayout is imported

const FAQPage: FC = () => {
  return (
    <RootLayout
      title="Frequently Asked Questions - Phoenix Code Studio"
      description="Find answers to the most common questions about our services, products, and processes. Explore FAQs related to digital solutions, project workflows, and more."
    >
      <main className="w-10/12 md:w-11/12 mx-auto py-6">
        <DynamicBreadcrumb />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Frequently Asked Questions
        </h1>
        <p className="mt-4">
          Welcome to our FAQs page! Here, you’ll find answers to some of the
          most common questions about our services, products, and processes.
          Whether you’re exploring what we offer, looking for guidance, or need
          help with a specific issue, this resource is designed to provide quick
          and clear information. If you don’t see your question here, feel free
          to reach out — we’re always happy to assist!
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
    </RootLayout>
  );
};

export default FAQPage;
