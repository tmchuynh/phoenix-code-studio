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
        <section className="my-16 mx-auto w-9/12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
            What Our Clients Say
          </h2>
          <Swiper spaceBetween={30} slidesPerView={1} className="h-full">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="p-6 mx-auto">
                {testimonial.featured && (
                  <div className="p-6 rounded-lg border-2 bg-card text-card-foreground">
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
            <Button variant={"tertiary"} onClick={navigateToTestimonials}>
              Read More Testimonials
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
