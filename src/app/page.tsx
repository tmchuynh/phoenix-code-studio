"use client";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServiceHighlights from "@/components/ServiceHighlights";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { FC } from "react";
import "swiper/css";

const WelcomePage: FC = () => {
  const router = useRouter();

  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <main className="w-11/12 mx-auto py-6">
      {/* Welcome Section */}
      <section className="my-16 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Welcome to Phoenix Code Studio!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl my-4">
          We're here to bring your ideas to life with our expert services in web
          development, content creation, and more.
        </p>
        <Button onClick={navigateToServices}>Explore Our Services</Button>
      </section>

      {/* Services Highlight Section */}
      <ServiceHighlights />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action Section */}
      <SidebarSeparator className="bg-muted h-0.5" />
      <CallToAction />
      <SidebarSeparator className="bg-muted h-0.5" />

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
