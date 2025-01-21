"use client";

import { testimonials } from "@/lib/constants";
import { FC } from "react";

const TestimonialsPage: FC = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">What Our Clients Say</h1>
      <p className="text-center text-lg my-4">
        Hear from our happy clients who have experienced the transformative
        power of our services.
      </p>

      {/* Displaying testimonials dynamically */}
      <section className="my-8">
        <div className="flex flex-wrap  gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="font-semibold text-xl mb-2">{testimonial.name}</p>
              <p className="text-lg text-gray-500 mb-4">
                {testimonial.position}
              </p>
              <blockquote className="italic text-lg ">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
