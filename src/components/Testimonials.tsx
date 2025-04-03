import { testimonials } from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Testimonial } from "@/lib/interfaces";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Testimonials = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();
  const { theme } = useTheme();

  const navigateToTestimonials = () => {
    router.push("/info/testimonials");
  };

  /**
   * Filters and sorts the testimonials to get the featured ones.
   *
   * This function performs the following steps:
   * 1. Filters the testimonials to include only those marked as featured.
   * 2. Sorts the filtered testimonials alphabetically by the name property.
   *
   * @constant
   * @type {Array<Testimonial>}
   * @returns {Array<Testimonial>} An array of featured testimonials sorted by name.
   */
  const featuredTestimonials: Array<Testimonial> = testimonials
    .filter((testimonial) => testimonial.featured === true)
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  return (
    <>
      {!isSmallScreen && (
        <section className="my-16 mx-auto w-10/12 md:w-11/12">
          <h2 className="text-center">Hear From Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-9">
            {featuredTestimonials.map((testimonial, index) => {
              const nameSegments = testimonial.name.split(" ");
              const initials = nameSegments
                .map((segment) => segment.charAt(0).toUpperCase())
                .join("");
              return (
                testimonial.featured && (
                  <>
                    <div key={index} className="flex flex-col w-full">
                      <figcaption className="flex items-center gap-x-6">
                        <Avatar>
                          <AvatarImage src="" alt="Profile Photo" />
                          <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="mt-4 font-bold text-secondary mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-sm mb-0">{testimonial.position}</p>
                        </div>
                      </figcaption>
                      <figure className="mt-10 flex flex-auto flex-col text-pretty">
                        <blockquote className="">
                          <p className="italic">
                            <span>"</span>
                            <span className="text-center mt-4">
                              {isSmallScreen
                                ? `${testimonial.quote.substring(0, 15)}...`
                                : testimonial.quote}
                            </span>
                            <span>"</span>
                          </p>
                        </blockquote>
                      </figure>
                    </div>
                  </>
                )
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button
              variant={theme === "dark" ? "outline" : "tertiary"}
              className="w-7/12 my-3"
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
