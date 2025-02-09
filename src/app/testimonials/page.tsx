"use client";
import StarRating from "@/components/Ratings";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";
import { formatQuote } from "@/lib/utils";
import { FC } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import RootLayout from "../layout";

const TestimonialsPage: FC = () => {
  return (
    <>
      <RootLayout
        title="Client Testimonials - Phoenix Code Studio"
        description="Read testimonials from our satisfied clients and learn how Phoenix Code Studio has helped businesses grow with exceptional web design, development, and digital marketing strategies."
      >
        <main className="w-10/12 md:w-11/12 mx-auto py-6">
          <DynamicBreadcrumb />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Real Success Stories
          </h1>
          <h2>How Our Clients Thrive with Our Solutions</h2>
          <p>
            Discover how our tailored digital solutions have transformed
            businesses, elevated brands, and helped clients achieve their goals.
            From boosting online visibility to enhancing customer engagement and
            increasing conversions, our clients share their journeys of success.
            Their testimonials reflect the exceptional results, strategic
            innovation, and lasting partnerships we build with every project.
            See firsthand how our expertise drives measurable growth and
            long-term impact.
          </p>

          {/* Displaying testimonials dynamically */}
          <section className="my-8">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-lg shadow-lg hover:shadow-xl text-pretty border-2 border-transparent dark:hover:border-border flex justify-around"
                >
                  <CardContent className="flex flex-col justify-around items-center">
                    <div className="text-center">
                      <p className="font-semibold mb-2">{testimonial.name}</p>
                      <p className="text-accent-3 mb-4">
                        {testimonial.position}
                      </p>
                    </div>
                    <div>
                      {testimonial.rating && (
                        <StarRating rating={testimonial.rating} />
                      )}
                    </div>
                    <blockquote className="italic relative h-full py-10">
                      <FaQuoteLeft className="absolute size-7 top-0 text-tertiary" />
                      {formatQuote(testimonial.quote).map(
                        (paragraph, index) => (
                          <span key={index} className="mb-4 indent-6 flex">
                            {paragraph}
                          </span>
                        )
                      )}
                      <FaQuoteRight className="absolute right-8 bottom-6 size-7 text-tertiary" />
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </RootLayout>
    </>
  );
};

export default TestimonialsPage;
