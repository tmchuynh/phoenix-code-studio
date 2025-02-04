"use client";

import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import EmphasizeText from "@/components/Highlighted";
import JoinUs from "@/components/JoinUs";
import ServiceHighlights from "@/components/ServiceHighlights";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { GoRocket } from "react-icons/go";
import "swiper/css";

const WelcomePage: FC = () => {
  const router = useRouter();

  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <main className="mx-auto py-6">
      {/* Welcome Section */}
      <section className="my-16 mx-auto w-11/12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Welcome to Phoenix Code Studio
        </h1>
        <h2 className="inline-flex items-center gap-3">
          <GoRocket className="text-accent-1" />
          <GoRocket className="text-accent-1" />
          This Is Where Ideas Take Flight!
          <GoRocket className="text-accent-1" />
          <GoRocket className="text-accent-1" />
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl my-4">
          Your vision deserves more than just a blueprint—it deserves a
          transformation. At <EmphasizeText>Phoenix Code Studio</EmphasizeText>,
          we bring creativity, strategy, and cutting-edge technology together to
          craft digital experiences that leave a lasting impact. Whether you're
          launching a brand, enhancing your online presence, or creating
          something entirely new, we’re here to make it happen.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl my-4">
          From sleek, high-performing websites to engaging content and tailored
          digital solutions, we turn ideas into reality. Let’s build something
          extraordinary—together.
        </p>
        <Button
          className="w-2/3 md:w-1/2 my-2 py-3 text-lg font-semibold"
          onClick={navigateToServices}
        >
          Start Your Journey With Us
        </Button>
      </section>

      {/* Services Highlight Section */}
      <ServiceHighlights />

      <JoinUs />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Featured Blogs Section */}
      <FeaturedBlogs />
    </main>
  );
};

export default WelcomePage;
