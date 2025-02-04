"use client";

import CallToAction from "@/components/CallToAction";
import EmphasizeText from "@/components/Highlighted";
import { Button } from "@/components/ui/button";
import { SidebarSeparator } from "@/components/ui/sidebar";
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
import { GrGrow } from "react-icons/gr";

const AboutUs = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      {/* About Us */}
      <section className="py-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          About Us
        </h1>
        <p>
          At Phoenix Code Studio, we merge cultural sophistication with
          cutting-edge technology to deliver bespoke digital experiences that
          stand out. Inspired by the Phoenix—a powerful symbol of rebirth,
          resilience, and transformation—we are committed to helping small
          businesses not only establish their presence in the digital world but
          also rise above their competition. Just as the Phoenix is reborn from
          the ashes, we aim to help your business transform and thrive in an
          ever-evolving online landscape. Our comprehensive services include{" "}
          <EmphasizeText>custom website development</EmphasizeText>,{" "}
          <EmphasizeText>brand revitalization</EmphasizeText>,{" "}
          <EmphasizeText>website redesigns</EmphasizeText>, and more all
          tailored to bring your unique vision to life. From designing visually
          stunning and highly functional websites to reimagining your brand
          identity, we focus on crafting solutions that resonate deeply with
          your audience. Whether you’re starting from scratch or seeking to
          refresh your existing digital presence, our goal is to translate your
          business’s core values into designs that inspire and engage.
        </p>

        <p>
          What sets Phoenix Code Studio apart is our unwavering dedication to
          excellence, creativity, and authenticity. We believe in more than just
          delivering websites; we create experiences that reflect your
          individuality and tell your story. By prioritizing modern design,
          intuitive functionality, and a personal touch, we ensure your online
          presence feels <EmphasizeText>approachable</EmphasizeText>,{" "}
          <EmphasizeText>professional</EmphasizeText>, and{" "}
          <EmphasizeText>impactful</EmphasizeText>. With a focus on
          collaboration and innovation, we work closely with you every step of
          the way to understand your business goals and translate them into a
          digital presence that drives results. At Phoenix Code Studio, we don’t
          just build websites; we build partnerships, empowering you to grow and
          succeed in the ever-evolving digital landscape.
        </p>

        <p>
          Let’s work together to transform your online presence into something
          truly remarkable. With Phoenix Code Studio by your side, your business
          has the tools to bloom and achieve its full potential in the digital
          world.
        </p>
        <Button
          onClick={() => router.push("/frequently-asked-questions")}
          className="mt-6"
        >
          Check Our Frequently Asked Questions
        </Button>
      </section>

      {/* Mission Statement */}
      <section className="py-3">
        <h2>Mission Statement</h2>
        <p>
          At Phoenix Code Studio, our mission is to empower small businesses by
          transforming their digital presence into a bespoke reflection of their
          unique brand identity. Rooted in the values of creativity,
          authenticity, and cultural sophistication, we craft modern,
          approachable web solutions that drive growth, foster meaningful
          connections, and enable businesses to thrive in today’s ever-changing
          digital landscape. We specialize in delivering innovative, custom
          digital experiences designed to inspire, empower, and create lasting
          value. By combining thoughtful design with cutting-edge technology, we
          ensure every solution is tailored to reflect the distinct goals,
          visions, and personality of each client. From seamless functionality
          to visually striking aesthetics, our work goes beyond mere usability,
          creating websites and platforms that tell your story and resonate with
          your audience.
        </p>

        <p>
          More than just delivering exceptional products, we are committed to
          fostering a community that values collaboration and supports our
          clients every step of the way. We believe in creating relationships
          that extend beyond the launch of a project, offering ongoing support
          and guidance to ensure long-term success. At Phoenix Code Studio, we
          take pride in understanding the unique needs of each client,
          translating them into digital experiences that are as functional as
          they are inspiring.
        </p>
        <p>
          Our passionate team of experts is dedicated to excellence, constantly
          pushing boundaries to deliver results that exceed expectations.
          Whether it's crafting a brand-new digital identity, reimagining an
          existing one, or building a robust platform to support business
          growth, we approach every project with creativity, precision, and a
          personal touch. At Phoenix Code Studio, we don’t just build
          websites—we build partnerships. Together, we can transform your
          digital presence into something truly extraordinary, ensuring that
          your business stands out and leaves a meaningful impact in an
          increasingly digital world.
        </p>
      </section>

      <SidebarSeparator className="bg-muted h-0.5" />
      <CallToAction />
      <SidebarSeparator className="bg-muted h-0.5" />

      {/* Core Values */}
      <section className="py-3">
        <h2>Core Values</h2>
        <ul className="flex flex-col gap-2">
          <li className="flex">
            <FaRegLightbulb
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Creativity and Innovation:{" "}
              </strong>
              We blend creativity with the latest technologies to deliver
              impactful digital solutions that bring our clients’ visions to
              life. By thinking outside the box and embracing new trends, we
              ensure that each project is unique and relevant.
            </div>
          </li>
          <li className="flex">
            <GrGrow
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Adaptability & Growth:{" "}
              </strong>
              Embracing new challenges is part of our DNA. We constantly adapt
              to the ever-changing digital landscape, ensuring that our
              solutions remain forward-thinking, flexible, and aligned with
              emerging trends and technologies.
            </div>
          </li>
          <li className="flex">
            <FaSeedling
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">Authenticity: </strong>
              We believe in creating digital experiences that are true to our
              clients’ identity and core values. Every solution is crafted with
              authenticity to reflect the unique voice of each brand and connect
              with their audience on a deeper level.
            </div>
          </li>
          <li className="flex">
            <FaStar
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">Excellence: </strong>
              We are committed to delivering exceptional, user-centric solutions
              that exceed expectations. Our dedication to continuous growth and
              innovation drives us to constantly improve and push the boundaries
              of what’s possible in web development and design.
            </div>
          </li>
          <li className="flex">
            <FaHandsHelping
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">Empowerment: </strong>
              We empower small businesses to thrive in the digital space. By
              providing the right tools, resources, and support, we help them
              grow and succeed in a competitive online marketplace, ensuring
              they can make the most of their digital presence.
            </div>
          </li>
          <li className="flex">
            <FaHandshake
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Collaboration & Communication:{" "}
              </strong>
              Open, transparent communication is key to success. We collaborate
              closely with our clients at every step of the process, ensuring
              their ideas and goals are central to every project, resulting in
              solutions that truly meet their needs.
            </div>
          </li>
          <li className="flex">
            <FaUsers
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">
                Community Impact:{" "}
              </strong>
              We are passionate about making a difference. Our work doesn’t just
              benefit our clients – we aim to create digital experiences that
              drive positive change in communities, helping businesses grow and
              contribute to the greater good.
            </div>
          </li>
          <li className="flex">
            <FaRecycle
              className="flex-shrink-0 text-accent-1 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <strong className="font-BonaNovaSC_Bold">Sustainability: </strong>
              We recognize the importance of creating digital solutions that not
              only serve today’s needs but also contribute to long-term
              sustainability. We strive to design and develop solutions that are
              scalable, eco-friendly, and future-proof, ensuring a better
              digital future for everyone.
            </div>
          </li>
        </ul>
      </section>

      {/* Vision Statement */}
      <section className="py-3">
        <h2>Vision Statement</h2>
        <p>
          At Phoenix Code Studio, our vision is to transform the way small
          businesses establish and grow their digital presence. We are dedicated
          to providing bespoke, impactful solutions that go far beyond
          functionality, capturing the unique identity, values, and aspirations
          of every client we serve. By crafting meaningful digital experiences,
          we empower businesses to connect with their audiences, foster growth,
          and leave a lasting impression in an increasingly digital world. Our
          ultimate goal is to become a trusted leader in digital
          transformation—pioneering a future where businesses of all sizes can
          leverage innovation to achieve their dreams. By combining dedication,
          expertise, and an unwavering passion for excellence, we are committed
          to helping small businesses reach their full potential and establish a
          meaningful presence in the digital landscape.
        </p>
        <p>
          We aspire to set a new standard in web development by seamlessly
          merging creativity, cultural sophistication, and state-of-the-art
          technology. Our focus extends beyond delivering visually stunning
          designs; we prioritize user-centered solutions that are intuitive,
          engaging, and tailored to the evolving needs of our clients. Each
          project is an opportunity to create digital experiences that inspire
          and engage. Central to our vision is the belief that every small
          business deserves the tools and opportunities to thrive online. We see
          ourselves as partners in their journey, collaborating to craft
          solutions that inspire trust, drive tangible results, and unlock new
          possibilities. Through this partnership, we aim to empower businesses
          to build deeper connections with their audience and achieve
          sustainable success.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
