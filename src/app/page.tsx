"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaDesktop, FaPen, FaSearch } from "react-icons/fa";
import { FaRegLightbulb, FaUsers, FaAward } from "react-icons/fa";

const WelcomePage: FC = () => {
  const router = useRouter();

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
    router.push("/blogs");
  };

  return (
    <main className="w-11/12 mx-auto py-3">
      {/* Welcome Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to Phoenix Code Studio!
        </h1>
        <p className="text-lg my-4 text-gray-700">
          We're here to bring your ideas to life with our expert services in web
          development, content creation, and more.
        </p>
        <Button onClick={navigateToServices}>Explore Our Services</Button>
      </section>

      {/* Services Highlight Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - Custom Website Design */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Who We Are
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-8">
          At Phoenix Code Studio, we are a passionate team of web developers,
          designers, and content creators. Our goal is to help businesses thrive
          by offering customized solutions, from high-quality websites to
          impactful marketing content. We work closely with each client to
          understand their needs, ensuring that our solutions deliver results
          that exceed expectations.
        </p>
        <div className="text-center">
          <FaRegLightbulb className="text-6xl text-accent-1 mx-auto mb-4" />
          <p className="text-lg">
            Innovation drives us. We embrace new challenges and adapt quickly,
            ensuring that our solutions are always cutting-edge.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-200 p-8 rounded-lg mb-4">
              <img
                src="/project-image-1.jpg"
                alt="Project 1"
                className="rounded-lg w-full h-56 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-primary">
              Project 1
            </h3>
            <p className="text-center mt-4">
              A custom website for a local business that enhances customer
              engagement.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-200 p-8 rounded-lg mb-4">
              <img
                src="/project-image-2.jpg"
                alt="Project 2"
                className="rounded-lg w-full h-56 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-primary">
              Project 2
            </h3>
            <p className="text-center mt-4">
              A dynamic eCommerce platform designed for fast and secure
              transactions.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-200 p-8 rounded-lg mb-4">
              <img
                src="/project-image-3.jpg"
                alt="Project 3"
                className="rounded-lg w-full h-56 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-primary">
              Project 3
            </h3>
            <p className="text-center mt-4">
              An interactive blog platform designed to engage readers and foster
              a community.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="secondary" onClick={navigateToPastProjects}>
            View Our Past Projects
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-16 bg-gray-50 py-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <p className="text-lg italic text-gray-700">
              "Phoenix Code Studio exceeded our expectations. Our website has
              never looked better, and our online presence has grown
              exponentially!"
            </p>
            <p className="mt-4 font-bold text-primary">Jane Doe</p>
            <p className="text-sm text-gray-500">CEO, Example Corp</p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <p className="text-lg italic text-gray-700">
              "The team at Phoenix Code Studio really listened to our needs and
              delivered a site that has helped us connect with our customers
              better than ever before."
            </p>
            <p className="mt-4 font-bold text-primary">John Smith</p>
            <p className="text-sm text-gray-500">Founder, Tech Innovations</p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <p className="text-lg italic text-gray-700">
              "Their work on our brand strategy and rebranding was a
              game-changer. We saw a major boost in engagement and sales!"
            </p>
            <p className="mt-4 font-bold text-primary">Emily Johnson</p>
            <p className="text-sm text-gray-500">
              Marketing Director, Food Co.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="secondary" onClick={navigateToTestimonials}>
            Read More Testimonials
          </Button>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Featured Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog 1 */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-center text-primary">
              Blog Post 1
            </h3>
            <p className="text-center mt-4">
              A guide to modern web design principles and best practices for
              2023.
            </p>
          </div>

          {/* Blog 2 */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-center text-primary">
              Blog Post 2
            </h3>
            <p className="text-center mt-4">
              How SEO optimization can dramatically improve your online
              presence.
            </p>
          </div>

          {/* Blog 3 */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-center text-primary">
              Blog Post 3
            </h3>
            <p className="text-center mt-4">
              Why content creation is key to driving traffic and engagement.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="secondary" onClick={navigateToBlogs}>
            Read Our Blogs
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-primary">
          Ready to Get Started?
        </h2>
        <p className="text-lg mt-4">
          We’re excited to help you with your next project. Get in touch with us
          to discuss how we can work together.
        </p>
        <Button variant="secondary" onClick={navigateToContact}>
          Contact Us
        </Button>
      </section>
    </main>
  );
};

export default WelcomePage;
