"use client";
import StarRating from "@/components/cards/Ratings";
import LoadingIndicator from "@/components/states/Loading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants/testimonials";
import { splitAndTrimQuotes } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsPage: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
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
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex justify-around shadow-lg hover:shadow-xl p-6 border-2 border-transparent dark:hover:border-border rounded-lg text-pretty"
            >
              <CardContent className="flex flex-col justify-around items-center">
                <div className="text-center">
                  <p className="mb-2 font-bold text-accent uppercase">
                    {testimonial.name}
                  </p>
                  <p className="mb-4 text-accent">{testimonial.position}</p>
                </div>
                <div>
                  {testimonial.rating && (
                    <StarRating rating={testimonial.rating} />
                  )}
                </div>
                <blockquote className="relative py-10 h-full italic">
                  <FaQuoteLeft className="top-0 absolute text-tertiary size-7" />
                  {splitAndTrimQuotes(testimonial.quote).map(
                    (paragraph, index) => (
                      <span key={index} className="flex mb-4 indent-6">
                        {paragraph}
                      </span>
                    )
                  )}
                  <FaQuoteRight className="right-8 bottom-6 absolute text-tertiary size-7" />
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
