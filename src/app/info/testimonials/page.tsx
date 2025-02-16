"use client";
import StarRating from "@/components/Ratings";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";
import { formatQuotes } from "@/lib/utils";
import { FC } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsPage: FC = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1>Testimonials from Our Clients</h1>
      <p>
        Discover the stories of our satisfied clients who have experienced
        firsthand the transformative impact of our services. From achieving
        their business goals to elevating their brands, our clients share how
        our tailored solutions have made a meaningful difference. Their success
        is a testament to our commitment to delivering exceptional results and
        building lasting partnerships. Hear directly from those who have trusted
        us to bring their visions to life.
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
                  <p className="font-bold uppercase text-accent-3 mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-accent-1 mb-4">{testimonial.position}</p>
                </div>
                <div>
                  {testimonial.rating && (
                    <StarRating rating={testimonial.rating} />
                  )}
                </div>
                <blockquote className="italic relative h-full py-10">
                  <FaQuoteLeft className="absolute size-7 top-0 text-tertiary" />
                  {formatQuotes(testimonial.quote).map((paragraph, index) => (
                    <span key={index} className="mb-4 indent-6 flex">
                      {paragraph}
                    </span>
                  ))}
                  <FaQuoteRight className="absolute right-8 bottom-6 size-7 text-tertiary" />
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
