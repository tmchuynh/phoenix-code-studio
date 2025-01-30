"use client";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";
import { FC } from "react";

const TestimonialsPage: FC = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Testimonials from Our Clients
      </h1>
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
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 md:w-11/12 lg:w-full mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 rounded-lg shadow-lg hover:shadow-xl text-center border-2 border-transparent dark:hover:border-border flex justify-around"
            >
              <CardContent className="flex flex-col justify-around items-center">
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg mx-auto mb-4"
                  />
                  <p className="font-semibold mb-2">{testimonial.name}</p>
                  <p className="text-accent-3 mb-4">{testimonial.position}</p>
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
