"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { blogs, pastProjects, testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  FaDesktop,
  FaHandshake,
  FaHandsHelping,
  FaPen,
  FaRecycle,
  FaRegLightbulb,
  FaSearch,
  FaSeedling,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { GrGrow } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WelcomePage: FC = () => {
  const router = useRouter();
  const { open } = useSidebar();

  const navigateToServices = () => {
    router.push("/services");
  };

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  const navigateToPastProjects = () => {
    router.push("/past-projects");
  };

  const navigateToTestimonials = () => {
    router.push("/testimonials");
  };

  const navigateToBlogs = () => {
    router.push("/blog");
  };

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Welcome Section */}
      <section
        className={cn("my-16 w-full", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
        <h1 className="text-4xl font-bold text-primary">
          Welcome to Phoenix Code Studio!
        </h1>
        <p className="text-lg my-4">
          We're here to bring your ideas to life with our expert services in web
          development, content creation, and more.
        </p>
        <Button onClick={navigateToServices}>Explore Our Services</Button>
      </section>

      {/* Services Highlight Section */}
      <section
        className={cn("my-16 w-full", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          What We Do
        </h2>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8",
            {
              "md:grid-cols-1 lg:grid-cols-2": open,
            }
          )}
        >
          {/* Service 1 - Custom Website Design */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
            <FaDesktop className="text-4xl text-accent-1 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-primary mt-4">
              Custom Website Design
            </h3>
            <p className="text-center mt-4">
              Tailored websites that reflect your brand’s unique identity and
              engage your audience.
            </p>
          </div>

          {/* Service 2 - Content Creation */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
            <FaPen className="text-4xl text-accent-1 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-primary mt-4">
              Content Creation
            </h3>
            <p className="text-center mt-4">
              From blog posts to eBooks, we create compelling content that
              connects with your audience.
            </p>
          </div>

          {/* Service 3 - SEO Optimization */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
            <FaSearch className="text-4xl text-accent-1 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-primary mt-4">
              SEO Optimization
            </h3>
            <p className="text-center mt-4">
              Improve your online visibility and drive traffic with our expert
              SEO strategies.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className={cn("my-16 w-full", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Who We Are
        </h2>
        <p className="text-lg text-center max-w-4xl mx-auto mb-8">
          At Phoenix Code Studio, we are a passionate team of web developers,
          designers, and content creators. Our goal is to help businesses thrive
          by offering customized solutions, from high-quality websites to
          impactful marketing content. We work closely with each client to
          understand their needs, ensuring that our solutions deliver results
          that exceed expectations.
        </p>
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2",
            {
              "md:grid-cols-2 lg:grid-cols-3": !open,
            }
          )}
        >
          {/* Creativity & Innovation */}
          <div className="text-center">
            <FaRegLightbulb className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Creativity & Innovation</h3>
            <p className="text-md">
              We blend creativity with the latest technologies to deliver
              impactful digital solutions that bring our clients’ visions to
              life. By thinking outside the box and embracing new trends, we
              ensure that each project is unique and relevant.
            </p>
          </div>

          {/* Adaptability & Growth */}
          <div className="text-center">
            <GrGrow className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Adaptability & Growth</h3>
            <p className="text-md">
              Embracing new challenges is part of our DNA. We constantly adapt
              to the ever-changing digital landscape, ensuring that our
              solutions remain forward-thinking, flexible, and aligned with
              emerging trends and technologies.
            </p>
          </div>

          {/* Authenticity */}
          <div className="text-center">
            <FaSeedling className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Authenticity</h3>
            <p className="text-md">
              We believe in creating digital experiences that are true to our
              clients’ identity and core values. Every solution is crafted with
              authenticity to reflect the unique voice of each brand and connect
              with their audience on a deeper level.
            </p>
          </div>

          {/* Excellence */}
          <div className="text-center">
            <FaStar className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Excellence</h3>
            <p className="text-md">
              We are committed to delivering exceptional, user-centric solutions
              that exceed expectations. Our dedication to continuous growth and
              innovation drives us to constantly improve and push the boundaries
              of what’s possible in web development and design.
            </p>
          </div>

          {/* Empowerment */}
          <div className="text-center">
            <FaHandsHelping className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Empowerment</h3>
            <p className="text-md">
              We empower small businesses to thrive in the digital space. By
              providing the right tools, resources, and support, we help them
              grow and succeed in a competitive online marketplace, ensuring
              they can make the most of their digital presence.
            </p>
          </div>

          {/* Collaboration & Communication */}
          <div className="text-center">
            <FaHandshake className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">
              Collaboration & Communication
            </h3>
            <p className="text-md">
              Open, transparent communication is key to success. We collaborate
              closely with our clients at every step of the process, ensuring
              their ideas and goals are central to every project, resulting in
              solutions that truly meet their needs.
            </p>
          </div>

          {/* Community Impact */}
          <div className="text-center">
            <FaUsers className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Community Impact</h3>
            <p className="text-md">
              We are passionate about making a difference. Our work doesn’t just
              benefit our clients – we aim to create digital experiences that
              drive positive change in communities, helping businesses grow and
              contribute to the greater good.
            </p>
          </div>

          {/* Sustainability */}
          <div className="text-center">
            <FaRecycle className="text-6xl text-accent-1 mx-auto mb-4" />
            <h3 className="font-bold text-primary">Sustainability</h3>
            <p className="text-md">
              We recognize the importance of creating digital solutions that not
              only serve today’s needs but also contribute to long-term
              sustainability. We strive to design and develop solutions that are
              scalable, eco-friendly, and future-proof, ensuring a better
              digital future for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className={cn("my-16 w-full", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Featured Projects
        </h2>
        <div
          className={cn("flex flex-col lg:flex-row gap-8", {
            "lg:flex-col xl:flex-row": open,
          })}
        >
          {pastProjects.map((project, index) => (
            <div key={`${project.short.substring(4, 15)}`}>
              {project.featured && (
                <div className="rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground p-1">
                  <div className="p-4 rounded-lg">
                    <img
                      src={project.img}
                      alt={`${project.title} Image`}
                      className="rounded-lg w-full h-24 border object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-primary pt-1">
                    {project.title}
                  </h3>
                  <p className="text-center mt-2 text-balance">
                    {project.short}
                  </p>
                </div>
              )}
            </div>
          ))}
          {/* Project 1 */}
        </div>
        <div className="text-center mt-8">
          <Button onClick={navigateToPastProjects}>
            View Our Past Projects
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={cn("my-16 w-full", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
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
                <div
                  className={cn(
                    "p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col 2xl:flex-row-reverse flex-1 w-full",
                    {
                      "md:flex-row-reverse lg:flex-col w-10/12 md:w-full": open,
                    }
                  )}
                >
                  <div className="flex-1 flex 2xl:items-end">
                    <p className="text-lg italic">
                      <span>"</span>
                      {testimonial.quote}
                      <span>"</span>
                    </p>
                  </div>
                  <div
                    className={cn(
                      "py-1 mb-2 flex md:flex-col-reverse 2xl:pr-3 gap-3 justify-between items-end md:items-start mt-2 flex-1 w-full",
                      {
                        "md:justify-end md:pr-3 lg:pr-0": open,
                      }
                    )}
                  >
                    <div>
                      <p className="mt-4 font-bold text-primary mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-xs mb-0">{testimonial.position}</p>
                    </div>
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} Image`}
                      className={cn(
                        "rounded-full w-16 h-16 md:h-28 md:w-full md:rounded-lg border object-cover object-bottom shadow-sm",
                        {
                          "h-28 md:w-full md:h-42 md:rounded-lg": open,
                        }
                      )}
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

      {/* Featured Blogs Section */}
      <section
        className={cn("my-16 w-full", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Featured Blogs
        </h2>
        <div
          className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", {
            "md:grid-cols-1 xl:grid-cols-2": open,
          })}
        >
          {blogs.map((blog, index) => (
            <div key={`${blog.title}-${blog.date}`}>
              {blog.featured && (
                <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold text-center text-primary">
                      {blog.title}
                    </h3>
                    <h5 className="text-center text-xs">{blog.date}</h5>
                    <p className="text-center mt-4">{blog.excerpt}</p>
                  </div>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      router.push(blog.slug);
                    }}
                  >
                    Read More
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button onClick={navigateToBlogs}>Read Our Blogs</Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className={cn("w-full text-center", {
          "w-10/12 md:w-11/12 lg:w-full": open,
        })}
      >
        <h2 className="text-3xl font-semibold text-primary">
          Ready to Get Started?
        </h2>
        <p className="text-lg mt-4">
          We’re excited to help you with your next project. Get in touch with us
          to discuss how we can work together.
        </p>
        <Button onClick={navigateToContact}>Contact Us</Button>
      </section>
    </main>
  );
};

export default WelcomePage;
