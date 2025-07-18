"use client";
import LoadingIndicator from "@/components/states/Loading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ServerIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCloud, FaLock } from "react-icons/fa";

export default function WelcomePage() {
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
    <div className="relative mx-auto sm:pt-5 md:pt-10 lg:pt-16 xl:pt-20 w-11/12 overflow-hidden">
      <div className="gap-7 grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <div>
            <p className="font-semibold text-md">Phoenix Code Studio</p>
            <h1>Turn Your Vision into Digital Excellence</h1>
            <p className="mt-6">
              Your vision is more than just an idea—it’s the foundation of
              something extraordinary. At Phoenix Code Studio, we merge
              strategic creativity, innovative technology, and cutting-edge
              design to craft transformative digital experiences that don’t just
              exist—they thrive. Whether you’re launching a brand, redefining
              your online presence, or creating a revolutionary digital
              platform, we bring your aspirations to life with custom,
              results-driven solutions.
            </p>
            <p className="mt-6">
              Our expertise spans high-performance web development, visually
              compelling UX/UI design, SEO optimization, and digital
              branding—all tailored to elevate user engagement, enhance online
              visibility, and accelerate business growth. With a focus on
              responsive design, seamless functionality, and data-driven
              strategies, we ensure that your brand doesn’t just compete—it
              leads. At Phoenix Code Studio, we don’t just build websites—we
              ignite possibilities, empower brands, and shape the future of
              digital success. Ready to make an impact? Let’s build something
              extraordinary together.
            </p>
          </div>

          <div className="gap-x-8 gap-y-16 grid grid-cols-1 mt-8 lg:mt-0 mx-auto lg:mx-0 max-w-5xl lg:max-w-none">
            <div className="lg:col-span-7 max-w-xl text-base/7">
              <ul role="list" className="space-y-8 mt-8 max-w-xl">
                <li className="flex gap-x-3">
                  <FaCloud
                    aria-hidden="true"
                    className="flex-none mt-1 size-5"
                  />
                  <span>
                    <strong className="font-semibold">
                      Scalable Corporate Solutions for Growth & Digital Success
                    </strong>{" "}
                    Our corporate digital solutions are tailored to help
                    businesses of all sizes improve online visibility,
                    streamline digital operations, and boost user engagement.
                    From custom web development and high-converting e-commerce
                    platforms to intuitive UX/UI design and data-driven digital
                    marketing strategies, we deliver SEO-optimized,
                    performance-oriented solutions aligned with your unique
                    business goals.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaLock
                    aria-hidden="true"
                    className="flex-none mt-1 size-5"
                  />
                  <span>
                    <strong className="font-semibold">
                      SEO-Optimized Content Creation Services That Elevate Your
                      Brand & Drive Results
                    </strong>{" "}
                    Our Content Creation Services are expertly designed to
                    enhance your online presence, drive organic traffic, and
                    captivate your audience with high-quality, SEO-optimized
                    content. We produce content that is strategically crafted,
                    audience-centric, and search engine-friendly, ensuring your
                    brand stands out in search results and resonates with
                    readers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="flex-none mt-1 size-5"
                  />
                  <span>
                    <strong className="font-semibold">
                      End-to-End Website Solutions for a High-Performing Digital
                      Presence
                    </strong>{" "}
                    With expertise in responsive design, e-commerce solutions,
                    SEO strategies, and UX/UI enhancements, we ensure your site
                    is visually striking, mobile-optimized, and search-engine
                    friendly. Our focus on fast-loading pages and intuitive
                    navigation guarantees a smooth user experience that enhances
                    your site’s performance and search rankings.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start justify-start lg:order-last h-full">
          <div>
            <p>
              We proudly serve a diverse range of industries, including
              e-commerce, healthcare, education, technology, and more. Whether
              you're looking for web design for healthcare, custom e-commerce
              websites, or branding services for startups, our team specializes
              in crafting industry-specific digital solutions that address your
              unique challenges and goals. We ensure that each solution is
              tailored to meet the specific needs of your industry, driving
              results and enhancing your online presence.
            </p>
            <Image
              src={
                theme === "dark" ? "/images/logo_white.png" : "/images/logo.png"
              }
              alt="Phoenix Code Studio Logo"
              width={500}
              height={500}
              className={cn(
                "mb-1 mx-auto rounded-t-md w-44 md:w-64 lg:w-80 object-cover"
              )}
            />
          </div>
          <div>
            <h3 className="mt-16">No website? No problem.</h3>
            <p className="mt-">
              We offer comprehensive branding services, including logo design,
              typography selection, color palette creation, and brand style
              guides to establish a cohesive and professional identity for your
              business. In addition to logo design, we create marketing
              materials such as business cards, brochures, flyers, social media
              graphics, and digital assets to ensure brand consistency across
              all platforms. Our branding process focuses on capturing the
              essence of your business, creating a strong visual identity, and
              making a lasting impression on your audience. Whether you’re
              launching a new brand or refreshing your existing one, we tailor
              our designs to reflect your values, mission, and target market,
              helping you build a recognizable and impactful presence.
            </p>
          </div>
          <Button className="my-2" onClick={navigateToServices}>
            Start Your Journey With Us
          </Button>
          <p className="mt-4">
            Unlock your business’s full potential with our all-embracing digital
            solutions. From cutting-edge web development that delivers
            high-performance websites to intuitive design that enhances user
            experience, we craft strategies that make an impact. Our expertise
            in content creation and digital marketing ensures your brand stands
            out, driving engagement, increasing visibility, and boosting
            conversions. Whether you're launching a new venture, reimagining
            your online presence, or expanding into new markets, we provide
            tailored solutions that align with your vision and set you apart in
            today’s competitive digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
