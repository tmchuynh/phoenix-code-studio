import { testimonials } from "@/lib/constants/testimonials";
import { Testimonial } from "@/lib/interfaces";
import useSmallScreen from "@/lib/useSmallScreen";
import { featuredArray } from "@/lib/utils/sort";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./cards/TestimonialCard";
import { Button } from "./ui/button";

const Testimonials = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToTestimonials = () => {
    router.push("/about-us/testimonials");
  };

  const featuredTestimonials: Array<Testimonial> = featuredArray(testimonials);

  return (
    <>
      {!isSmallScreen && (
        <section className="mx-auto my-16 w-10/12 md:w-11/12">
          <h2 className="text-center">Hear From Our Clients</h2>
          <div className="gap-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-9">
            {featuredTestimonials.map((testimonial, index) => {
              const nameSegments = testimonial.name.split(" ");
              const initials = nameSegments
                .map((segment) => segment.charAt(0).toUpperCase())
                .join("");
              return (
                testimonial.featured && (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    index={index}
                    initials={initials}
                  />
                )
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button
              variant={theme === "dark" ? "outline" : "tertiary"}
              className="my-3 w-7/12"
              onClick={navigateToTestimonials}
            >
              Read More Testimonials
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
