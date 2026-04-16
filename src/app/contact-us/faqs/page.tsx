import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/lib/constants/frequently_asked_questions";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

export default function FAQs() {
  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <h1>Frequently Asked Questions</h1>
      <p>
        Find answers to common questions about our services, process, and
        pricing. If you don&apos;t find what you&apos;re looking for, feel free
        to contact us directly.
      </p>

      <div className="space-y-8 mt-8">
        {faqs.map((category: FAQCategory, categoryIndex: number) => (
          <div key={categoryIndex} className="space-y-4">
            <h2>{category.category}</h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq: FAQ, faqIndex: number) => (
                <AccordionItem
                  key={faqIndex}
                  value={`${categoryIndex}-${faqIndex}`}
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div>
        <h2>Still Have Questions?</h2>
        <p>
          If you didn&apos;t find the answer to your question here, please
          don&apos;t hesitate to contact us. We&apos;re always happy to provide
          more information and help you understand how we can assist with your
          project.
        </p>
      </div>
    </div>
  );
}
