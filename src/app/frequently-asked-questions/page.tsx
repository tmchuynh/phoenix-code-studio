"use client";
import CallToAction from "@/components/CallToAction";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/lib/constants";
import { FC } from "react";

const FAQPage: FC = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Frequently Asked Questions
      </h1>
      <p className="mt-4">
        Welcome to our FAQs page! Here, you’ll find answers to some of the most
        common questions about our services, products, and processes. Whether
        you’re exploring what we offer, looking for guidance, or need help with
        a specific issue, this resource is designed to provide quick and clear
        information. If you don’t see your question here, feel free to reach out
        — we’re always happy to assist!
      </p>
      <section className="mb-8">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((question, index) => (
            <AccordionItem value={`${index}`}>
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <CallToAction />
    </main>
  );
};

export default FAQPage;
