"use client";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import LoadingIndicator from "@/components/Loading";
import ServiceHighlights from "@/components/ServiceHighlights";
import Testimonials from "@/components/Testimonials";
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
    <main className="mx-auto py-6">
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-7">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div>
                <p className="text-base/7 font-semibold">Phoenix Code Studio</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl">
                  Turn Your Vision into Digital Excellence
                </h1>
                <p className="mt-6">
                  Your vision is more than just an idea—it’s the foundation of
                  something extraordinary. At Phoenix Code Studio, we merge
                  strategic creativity, innovative technology, and cutting-edge
                  design to craft transformative digital experiences that don’t
                  just exist—they thrive. Whether you’re launching a brand,
                  redefining your online presence, or creating a revolutionary
                  digital platform, we bring your aspirations to life with
                  custom, results-driven solutions.
                </p>
                <p className="mt-6">
                  Our expertise spans high-performance web development, visually
                  compelling UX/UI design, SEO optimization, and digital
                  branding—all tailored to elevate user engagement, enhance
                  online visibility, and accelerate business growth. With a
                  focus on responsive design, seamless functionality, and
                  data-driven strategies, we ensure that your brand doesn’t just
                  compete—it leads. At Phoenix Code Studio, we don’t just build
                  websites—we ignite possibilities, empower brands, and shape
                  the future of digital success. Ready to make an impact? Let’s
                  build something extraordinary together.
                </p>
              </div>

              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none">
                <div className="max-w-xl text-base/7 lg:col-span-7">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <ul role="list" className="mt-8 max-w-xl space-y-8">
                    <li className="flex gap-x-3">
                      <FaCloud
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none"
                      />
                      <span>
                        <strong className="font-semibold">
                          Push to deploy.
                        </strong>{" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <FaLock
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none"
                      />
                      <span>
                        <strong className="font-semibold ">
                          SSL certificates.
                        </strong>{" "}
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none"
                      />
                      <span>
                        <strong className="font-semibold ">
                          Database backups.
                        </strong>{" "}
                        Ac tincidunt sapien vehicula erat auctor pellentesque
                        rhoncus. Et magna sit morbi lobortis.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:order-last lg:col-span-5 flex flex-col justify-start items-start h-full">
              <div>
                <p>
                  We proudly serve a diverse range of industries, including
                  e-commerce, healthcare, education, technology, and more.
                  Whether you're looking for web design for healthcare, custom
                  e-commerce websites, or branding services for startups, our
                  team specializes in crafting industry-specific digital
                  solutions that address your unique challenges and goals. We
                  ensure that each solution is tailored to meet the specific
                  needs of your industry, driving results and enhancing your
                  online presence.
                </p>
                <Image
                  src={
                    theme === "dark"
                      ? "/images/logo_white.png"
                      : "/images/logo.png"
                  }
                  alt="Phoenix Code Studio Logo"
                  width={500}
                  height={500}
                  className={cn(
                    "w-44 md:w-64 lg:w-80 rounded-t-md object-cover mx-auto mb-1"
                  )}
                />
              </div>
              <div>
                <h2 className="mt-16 text-2xl font-bold tracking-tight ">
                  No website? No problem.
                </h2>
                <p className="mt-">
                  We offer comprehensive branding services, including logo
                  design, typography selection, color palette creation, and
                  brand style guides to establish a cohesive and professional
                  identity for your business. In addition to logo design, we
                  create marketing materials such as business cards, brochures,
                  flyers, social media graphics, and digital assets to ensure
                  brand consistency across all platforms. Our branding process
                  focuses on capturing the essence of your business, creating a
                  strong visual identity, and making a lasting impression on
                  your audience. Whether you’re launching a new brand or
                  refreshing your existing one, we tailor our designs to reflect
                  your values, mission, and target market, helping you build a
                  recognizable and impactful presence.
                </p>
              </div>
              <Button
                className="w-2/3 md:w-1/2 my-2 py-3 text-lg font-semibold"
                onClick={navigateToServices}
              >
                Start Your Journey With Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Highlight Section */}
      <ServiceHighlights />

      {/* Call to Action Section */}
      <div className="px-12 mx-auto">
        <CallToAction />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Featured Blogs Section */}
      <FeaturedBlogs />
    </main>
  );
}
