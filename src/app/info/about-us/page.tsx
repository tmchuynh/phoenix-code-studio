"use client";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaHandshake,
  FaHandsHelping,
  FaRecycle,
  FaRegLightbulb,
  FaSeedling,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { GrGrow } from "react-icons/gr";
import LoadingIndicator from "@/components/Loading";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* About Us */}
      <section className="pt-3 pb-7 items-center grid grid-cols-1 lg:grid-cols-7 lg:gap-x-7 gap-y-6">
        <div className="w-full col-span-2 lg:col-span-2 md:order-2">
          <Image
            src={
              theme === "dark" ? "/images/logo_white.png" : "/images/logo.png"
            }
            alt="Phoenix Code Studio Logo"
            width={500}
            height={500}
            className={cn(
              "w-44 md:w-64 lg:w-80 rounded-t-md object-cover mx-auto mb-1"
            )}
          />
        </div>
        <div className="col-span-3 lg:col-span-5">
          <h1>About Phoenix Code Studio</h1>
          <p>
            At Phoenix Code Studio, we seamlessly blend technological innovation
            with creative storytelling to craft exceptional digital experiences
            that elevate brands and set them apart. Inspired by the Phoenix—a
            timeless symbol of resilience, transformation, and limitless
            potential—we empower businesses to not just establish an online
            presence, but to rise, evolve, and thrive in the competitive digital
            landscape.
          </p>
          <p>
            We specialize in custom website development, brand revitalization,
            and website redesigns, tailoring every project to bring your unique
            vision to life. Whether you’re launching a brand-new venture or
            redefining your online identity, our mission is to translate your
            business’s core values into visually stunning, strategically
            designed, and highly engaging digital platforms. By combining
            intuitive functionality with modern aesthetics, we create solutions
            that not only captivate your audience but also drive results and
            build lasting connections.
          </p>
        </div>
      </section>

      <section className="pb-5">
        <h2>Why Choose Phoenix Code Studio?</h2>
        <p>
          What sets us apart is our commitment to excellence, authenticity, and
          innovation. We don’t just build websites—we craft meaningful digital
          experiences that reflect your brand’s essence and tell your unique
          story. Our approach is rooted in collaboration, ensuring that we fully
          understand your goals and transform them into a powerful online
          presence that fosters growth, credibility, and engagement.
        </p>
        <p>
          At Phoenix Code Studio, we prioritize user experience, strategic
          design, and cutting-edge technology to deliver solutions that feel
          approachable, professional, and high-impact. Our process is guided by
          data-driven insights and industry best practices, ensuring that your
          website isn’t just visually appealing—it’s optimized for performance,
          accessibility, and search engine visibility.
        </p>
        <h2>Your Digital Transformation Starts Here</h2>
        <p>
          Let’s work together to create an online presence that sets your
          business apart and fuels your success. With Phoenix Code Studio as
          your trusted digital partner, your brand has the tools to flourish,
          captivate audiences, and achieve its full potential in the digital
          world.
        </p>
        <p>
          Ready to take the next step?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 m-0 h-fit"
          >
            Contact us to discuss a tailored solution!
          </Button>
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-3">
        <h1>Our Mission at Phoenix Code Studio</h1>
        <p>
          At Phoenix Code Studio, we are dedicated to empowering small
          businesses by transforming their digital presence into a bespoke,
          authentic reflection of their brand identity. Rooted in creativity,
          innovation, and cultural sophistication, we craft modern,
          user-friendly web solutions that do more than just function—they
          captivate, connect, and drive meaningful growth. Our mission is to
          help businesses thrive in today’s fast-paced digital world by
          delivering custom, high-impact digital experiences that inspire,
          engage, and create lasting value.
        </p>
        <p>
          By seamlessly blending thoughtful design with cutting-edge technology,
          we ensure every solution is tailored to reflect the distinct goals,
          vision, and personality of each client. From visually striking
          aesthetics to seamless functionality, we go beyond usability to create
          immersive digital experiences that tell your story and leave a lasting
          impression.
        </p>
        <h2>More Than Just Websites—We Build Relationships</h2>
        <p>
          At Phoenix Code Studio, our commitment extends far beyond project
          delivery. We foster strong client relationships, ensuring continued
          support and strategic guidance long after launch. We believe in a
          collaborative approach, where your success is our success. Whether
          it’s crafting a new digital identity, enhancing an existing brand, or
          building a scalable platform, we approach every project with
          creativity, precision, and a personal touch.
        </p>
        <p>
          Our team is passionate about excellence, continuously pushing
          boundaries to exceed expectations. At Phoenix Code Studio, we don’t
          just build websites—we build strategic partnerships that empower
          businesses to stand out, grow, and make a lasting impact in an
          increasingly digital world.
        </p>
        <Button onClick={() => router.push("/contact-us")} className="my-6">
          Let’s create something extraordinary together.
        </Button>
      </section>

      {/* Core Values */}
      <section className="py-3">
        <h1>Core Values</h1>
        <p>
          At Phoenix Code Studio, our values shape everything we create. We
          believe in designing and developing digital experiences that are not
          only innovative but also meaningful, impactful, and purpose-driven. We
          don’t just build websites—we create meaningful digital experiences
          that inspire, connect, and drive success.
        </p>
        <ul className="p-0 grid gap-4 grid-cols-1 md:grid-cols-2">
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaRegLightbulb className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Creativity and Innovation:{" "}
              </strong>
              We combine cutting-edge technology with imaginative thinking to
              craft original, high-performing digital solutions. By staying
              ahead of trends and pushing creative boundaries, we bring your
              vision to life in ways that captivate and engage.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <GrGrow className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Adaptability & Growth:{" "}
              </strong>
              The digital landscape is ever-changing, and so are we. We embrace
              new challenges, emerging technologies, and evolving industry
              trends to ensure that our solutions remain scalable,
              forward-thinking, and effective in a dynamic online world.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaSeedling className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">Authenticity: </strong>
              Your brand deserves to stand out with originality. We craft
              genuine, meaningful digital experiences that truly reflect your
              brand’s unique voice, values, and identity, helping you build
              deeper connections with your audience.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaStar className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">Excellence: </strong>
              We hold ourselves to the highest standards in web design,
              development, and digital strategy. Our commitment to quality,
              precision, and user-focused experiences ensures that every project
              we deliver exceeds expectations.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaHandsHelping className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">Empowerment: </strong>
              We believe in helping small businesses succeed. Through expert
              guidance, tailored strategies, and innovative tools, we equip
              businesses with the resources they need to thrive and grow in
              today’s competitive digital space.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaHandshake className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Collaboration & Communication:{" "}
              </strong>
              We don’t just work for our clients—we work with them. Through
              transparent communication and a collaborative approach, we ensure
              that your ideas, goals, and feedback are at the core of every
              project, leading to results that truly align with your vision.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaUsers className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Community Impact:{" "}
              </strong>
              Our work extends beyond individual projects. We strive to create
              digital solutions that uplift businesses, strengthen communities,
              and contribute to positive change, fostering growth for everyone
              involved.
            </div>
          </li>
          <li className="flex mt-2 md:p-1 lg:flex-col lg:items-center lg:space-y-4">
            <FaRecycle className="flex-shrink-0 text-accent-1 mr-3 size-7 mt-1 md:mt-2 md:size-8 lg:size-24 lg:text-accent-4 lg:bg-muted lg:p-5 lg:rounded-full" />
            <div>
              <strong className="font-BonaNovaSC_Bold">Sustainability: </strong>
              We build future-proof, scalable digital solutions designed to
              adapt and grow with your business. By focusing on sustainable,
              eco-friendly practices, we ensure that our work has lasting value
              in an ever-evolving digital world.
            </div>
          </li>
        </ul>
      </section>

      {/* Vision Statement */}
      <section className="py-3">
        <h1>Our Vision</h1>
        <p>
          At Phoenix Code Studio, we envision a world where small businesses
          thrive through impactful digital experiences. We are committed to
          reshaping the digital landscape by providing tailored, strategic
          solutions that not only enhance online presence but also capture the
          heart and essence of each brand. Our goal is to empower businesses
          with the tools, innovation, and expertise needed to stand out, grow,
          and leave a lasting impression in an ever-evolving digital world. We
          strive to be more than just a web development agency; we aspire to be
          a trusted partner in digital transformation. By seamlessly blending
          creativity, cultural depth, and cutting-edge technology, we set a new
          standard in user-focused, results-driven design. Our solutions go
          beyond aesthetics—we create intuitive, engaging, and scalable
          platforms that drive real business impact.
        </p>
        <p>
          At the heart of our vision is the belief that every small business
          deserves the opportunity to succeed online. We are committed to
          removing barriers, providing affordable yet high-quality solutions,
          and ensuring that our clients have the resources, knowledge, and
          support to navigate the digital world with confidence. Through
          collaboration, innovation, and an unwavering passion for excellence,
          we aim to build lasting relationships with businesses, helping them
          establish a strong, meaningful, and influential digital presence. With
          Phoenix Code Studio, your brand doesn’t just exist online—it thrives,
          inspires, and leads.
        </p>
        <p>
          Ready to get started?{" "}
          <Button
            variant={"link"}
            onClick={() => router.push("/contact-us")}
            className="p-0 m-0 h-fit"
          >
            Contact us for a personalized consultation!
          </Button>
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
