"use client";

import React, { FC, useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { FaChevronDown } from "react-icons/fa";
import { CollapsibleItemProps } from "@/lib/interfaces";
import { FAQs } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import router from "next/router";

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1>Frequently Asked Questions</h1>
      <div className="space-y-4 pt-5">
        {FAQs.map((faq, index) => (
          <CollapsibleItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="my-4">
          Ready to bring your ideas to life with professional wireframing and
          prototyping?{" "}
          <Button
            variant={"link"}
            onClick={() => {
              router.push("/contact");
            }}
            className="p-0 inline-flex m-0"
          >
            Contact us for a free consultation.
          </Button>
        </p>
      </section>
    </main>
  );
};

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="flex justify-between items-center w-full text-left rounded-md focus:outline-none focus:ring-2 focus:ring-secondary p-2">
        <span>{question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 rounded-md mt-2 border">
        <p>{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FAQPage;
