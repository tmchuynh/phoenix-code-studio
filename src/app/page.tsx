"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaDesktop, FaPen, FaSearch } from "react-icons/fa";

const WelcomePage: FC = () => {
  const router = useRouter();

  const navigateToServices = () => {
    router.push("/services");
  };

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Welcome Section */}
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to Crimson Lotus Creations!
        </h1>
        <p className="text-lg my-4 text-gray-700">
          We're here to bring your ideas to life with our expert services in web
          development, content creation, and more.
        </p>
        <Button
          onClick={navigateToServices}
          className="mt-4 text-white bg-primary rounded-md hover:bg-primary-dark"
        >
          Explore Our Services
        </Button>
      </section>

      {/* Services Highlight Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - Custom Website Design */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaDesktop className="text-4xl text-accent-3 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-primary mt-4">
              Custom Website Design
            </h3>
            <p className="text-center text-gray-600 mt-4">
              Tailored websites that reflect your brand’s unique identity and
              engage your audience.
            </p>
          </div>

          {/* Service 2 - Content Creation */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaPen className="text-4xl text-accent-3 mx-auto" />
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
            <FaSearch className="text-4xl text-accent-3 mx-auto" />
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

      {/* Call to Action Section */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-semibold text-primary">
          Ready to Get Started?
        </h2>
        <p className="text-lg mt-4">
          We’re excited to help you with your next project. Get in touch with us
          to discuss how we can work together.
        </p>
        <Button
          variant="secondary"
          onClick={navigateToContact}
          className="mt-4 text-white bg-secondary rounded-md hover:bg-secondary-dark"
        >
          Contact Us
        </Button>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-16">
        <p>
          &copy; {new Date().getFullYear()} Crimson Lotus Creations. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
};

export default WelcomePage;
