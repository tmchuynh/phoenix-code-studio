import { testimonials } from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

const Testimonials = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const navigateToTestimonials = () => {
    router.push("/testimonials");
  };

  return (
    <>
      {!isSmallScreen && (
        <section className="my-16 w-full">
          <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
            What Our Clients Say
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="p-6 mx-auto">
                {testimonial.featured && (
                  <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col 2xl:flex-row-reverse flex-1 w-full">
                    <div className="flex-1 flex 2xl:items-end">
                      <p className="text-lg italic">
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
                        <p className="mt-4 font-bold text-primary mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-xs mb-0">{testimonial.position}</p>
                      </div>
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} Image`}
                        className="rounded-full w-16 h-16 md:h-28 md:w-full md:rounded-lg border object-cover object-bottom shadow-sm"
                      />
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center mt-8">
            <Button onClick={navigateToTestimonials}>
              Read More Testimonials
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
