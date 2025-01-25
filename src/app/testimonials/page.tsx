"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FC } from "react";

const TestimonialsPage: FC = () => {
  const { open } = useSidebar();
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">What Our Clients Say</h1>
      <p className="text-center text-lg my-4">
        Hear from our happy clients who have experienced the transformative
        power of our services.
      </p>

      {/* Displaying testimonials dynamically */}
      <section className="my-8">
        <div
          className={cn(
            "gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 md:w-11/12 lg:w-full mx-auto",
            {
              "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:w-11/12 lg:w-11/12 xl:w-full":
                open,
            }
          )}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "p-6 rounded-lg shadow-lg text-center border-2 border-transparent hover:border-border flex justify-around",
                {
                  "": open,
                }
              )}
            >
              <CardContent className="flex flex-col justify-around items-center">
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg mx-auto mb-4"
                  />
                  <p className="font-semibold text-xl mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-lg text-gray-500 mb-4">
                    {testimonial.position}
                  </p>
                </div>
                <blockquote className="italic text-lg">
                  "{testimonial.quote}"
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
