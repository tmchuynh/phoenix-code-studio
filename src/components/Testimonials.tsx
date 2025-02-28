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
        <section className="my-16 mx-auto w-9/12">
          <h2 className="text-center">Hear From Our Clients</h2>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={1}
          >
            {featuredTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="p-6 mx-auto">
                {testimonial.featured && (
                  <div className="p-6 rounded-lg border-2 bg-card text-card-foreground mx-10 mb-8">
                    <div className="flex-1 flex 2xl:items-end">
                      <p className="italic">
                        <span>"</span>
                        <span className="text-center mt-4">
                          {isSmallScreen
                            ? `${testimonial.quote.substring(0, 15)}...`
                            : testimonial.quote}
                        </span>
                        <span>"</span>
                      </p>
                    </div>
                    <div className="py-1 mb-2 flex md:flex-col-reverse 2xl:pr-3 gap-3 justify-between items-end md:items-start mt-2 flex-1 w-full">
                      <div>
                        <p className="mt-4 font-bold text-secondary mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-xs mb-0">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
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
