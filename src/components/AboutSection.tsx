import { cn } from "@/lib/utils";
import {
  FaRegLightbulb,
  FaSeedling,
  FaStar,
  FaHandsHelping,
  FaHandshake,
  FaUsers,
  FaRecycle,
} from "react-icons/fa";
import { GrGrow } from "react-icons/gr";

const AboutSection = () => {
  return (
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
        understand their needs, ensuring that our solutions deliver results that
        exceed expectations.
      </p>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-7 w-full md:w-11/12 lg:w-full mx-auto",
          {
            "md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-full": !open,
          }
        )}
      >
        {/* Creativity & Innovation */}
        <div className="text-center">
          <FaRegLightbulb className="text-6xl text-accent-1 mx-auto mb-4" />
          <h3 className="font-bold text-primary">Creativity & Innovation</h3>
          <p className="text-md md:text-lg">
            We blend creativity with the latest technologies to deliver
            impactful digital solutions that bring our clients’ visions to life.
            By thinking outside the box and embracing new trends, we ensure that
            each project is unique and relevant.
          </p>
        </div>

        {/* Adaptability & Growth */}
        <div className="text-center">
          <GrGrow className="text-6xl text-accent-1 mx-auto mb-4" />
          <h3 className="font-bold text-primary">Adaptability & Growth</h3>
          <p className="text-md md:text-lg">
            Embracing new challenges is part of our DNA. We constantly adapt to
            the ever-changing digital landscape, ensuring that our solutions
            remain forward-thinking, flexible, and aligned with emerging trends
            and technologies.
          </p>
        </div>

        {/* Authenticity */}
        <div className="text-center">
          <FaSeedling className="text-6xl text-accent-1 mx-auto mb-4" />
          <h3 className="font-bold text-primary">Authenticity</h3>
          <p className="text-md md:text-lg">
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
          <p className="text-md md:text-lg">
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
          <p className="text-md md:text-lg">
            We empower small businesses to thrive in the digital space. By
            providing the right tools, resources, and support, we help them grow
            and succeed in a competitive online marketplace, ensuring they can
            make the most of their digital presence.
          </p>
        </div>

        {/* Collaboration & Communication */}
        <div className="text-center">
          <FaHandshake className="text-6xl text-accent-1 mx-auto mb-4" />
          <h3 className="font-bold text-primary">
            Collaboration & Communication
          </h3>
          <p className="text-md md:text-lg">
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
          <p className="text-md md:text-lg">
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
          <p className="text-md md:text-lg">
            We recognize the importance of creating digital solutions that not
            only serve today’s needs but also contribute to long-term
            sustainability. We strive to design and develop solutions that are
            scalable, eco-friendly, and future-proof, ensuring a better digital
            future for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
