"use client";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import JoinUs from "@/components/JoinUs";
import LoadingIndicator from "@/components/Loading";
import ServiceHighlights from "@/components/ServiceHighlights";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import "swiper/css";

const WelcomePage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <main className="mx-auto py-6">
      <section className="mb-16 mx-auto w-11/12 text-center">
        <Image
          src={theme === "dark" ? "/images/logo_white.png" : "/images/logo.png"}
          alt="Phoenix Code Studio Logo"
          width={500}
          height={500}
          className={cn(
            "w-44 md:w-64 lg:w-80 rounded-t-md object-cover mx-auto mb-1"
          )}
        />
      </section>

      {/* Welcome Section */}
      <section className="my-16 mx-auto w-11/12 text-center">
        <h1>Welcome to Phoenix Code Studio</h1>
        <h2 className="inline-flex items-center gap-3">
          Turn Your Vision into Digital Excellence
        </h2>
        <p>
          Your vision is more than just an idea—it’s the foundation of something
          extraordinary. At Phoenix Code Studio, we merge strategic creativity,
          innovative technology, and cutting-edge design to craft transformative
          digital experiences that don’t just exist—they thrive. Whether you’re
          launching a brand, redefining your online presence, or creating a
          revolutionary digital platform, we bring your aspirations to life with
          custom, results-driven solutions.
        </p>
        <p>
          Our expertise spans high-performance web development, visually
          compelling UX/UI design, SEO optimization, and digital branding—all
          tailored to elevate user engagement, enhance online visibility, and
          accelerate business growth. With a focus on responsive design,
          seamless functionality, and data-driven strategies, we ensure that
          your brand doesn’t just compete—it leads. At Phoenix Code Studio, we
          don’t just build websites—we ignite possibilities, empower brands, and
          shape the future of digital success. Ready to make an impact? Let’s
          build something extraordinary together.
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
      <div className="px-12 mx-auto">
        <CallToAction />
      </div>

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
