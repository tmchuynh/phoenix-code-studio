import { SidebarSeparator } from "@/components/ui/sidebar";
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

const aboutUs = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <div>
        <h1>About Us</h1>
        <p>
          At Phoenix Code Studio, we blend cultural elegance with cutting-edge
          technology to create bespoke digital experiences. Inspired by the
          lotus flower—a symbol of growth, resilience, and beauty—we specialize
          in helping small businesses flourish in the digital world.
        </p>
        <p>
          We offer tailored web development services, including custom website
          creation, brand reimagining, and website makeovers, all designed to
          bring your vision to life. Our team is dedicated to crafting modern,
          approachable designs that reflect your unique brand identity and
          resonate with your audience.
        </p>
        <p>
          Rooted in the values of excellence, creativity, and authenticity,
          Phoenix Code Studio is here to empower your business with a digital
          presence that feels personal, professional, and inspiring. Let’s work
          together to transform your online presence and help your business
          bloom.
        </p>
      </div>
      <SidebarSeparator className="bg-secondary" />
      <div className="py-3">
        <h2>Mission Statement</h2>
        <p>
          At Phoenix Code Studio, our mission is to empower small businesses by
          transforming their digital presence into a bespoke reflection of their
          unique brand identity. Rooted in the values of creativity,
          authenticity, and cultural elegance, we craft modern and approachable
          web solutions that drive growth, foster connections, and help
          businesses thrive in an ever-evolving digital landscape.
        </p>
        <p>
          We are dedicated to delivering innovative, bespoke digital experiences
          that inspire, empower, and provide lasting value. Our focus is on
          creating solutions that are not only user-friendly but also tailored
          to reflect the distinct goals and visions of our clients.
        </p>
        <p>
          More than just delivering a product, we believe in building a
          community that values our clients’ experiences and supports them in
          achieving success. With a passionate team of experts committed to
          excellence, we strive to create exceptional digital experiences that
          leave a meaningful and lasting impact.
        </p>
      </div>
      <SidebarSeparator className="bg-secondary" />
      <div className="py-3">
        <h2>Core Values</h2>
        <ul className="flex flex-col gap-2">
          <li className="flex">
            <FaRegLightbulb
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Creativity and Innovation:{" "}
              </span>
              We blend creativity with the latest technologies to deliver
              impactful digital solutions that bring our clients’ visions to
              life. By thinking outside the box and embracing new trends, we
              ensure that each project is unique and relevant.
            </div>
          </li>
          <li className="flex">
            <GrGrow
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Adaptability & Growth:{" "}
              </span>
              Embracing new challenges is part of our DNA. We constantly adapt
              to the ever-changing digital landscape, ensuring that our
              solutions remain forward-thinking, flexible, and aligned with
              emerging trends and technologies.
            </div>
          </li>
          <li className="flex">
            <FaSeedling
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Authenticity:{" "}
              </span>
              We believe in creating digital experiences that are true to our
              clients’ identity and core values. Every solution is crafted with
              authenticity to reflect the unique voice of each brand and connect
              with their audience on a deeper level.
            </div>
          </li>
          <li className="flex">
            <FaStar
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Excellence:{" "}
              </span>
              We are committed to delivering exceptional, user-centric solutions
              that exceed expectations. Our dedication to continuous growth and
              innovation drives us to constantly improve and push the boundaries
              of what’s possible in web development and design.
            </div>
          </li>
          <li className="flex">
            <FaHandsHelping
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Empowerment:{" "}
              </span>
              We empower small businesses to thrive in the digital space. By
              providing the right tools, resources, and support, we help them
              grow and succeed in a competitive online marketplace, ensuring
              they can make the most of their digital presence.
            </div>
          </li>
          <li className="flex">
            <FaHandshake
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Collaboration & Communication:{" "}
              </span>
              Open, transparent communication is key to success. We collaborate
              closely with our clients at every step of the process, ensuring
              their ideas and goals are central to every project, resulting in
              solutions that truly meet their needs.
            </div>
          </li>
          <li className="flex">
            <FaUsers
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Community Impact:{" "}
              </span>
              We are passionate about making a difference. Our work doesn’t just
              benefit our clients – we aim to create digital experiences that
              drive positive change in communities, helping businesses grow and
              contribute to the greater good.
            </div>
          </li>
          <li className="flex">
            <FaRecycle
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Sustainability:{" "}
              </span>
              We recognize the importance of creating digital solutions that not
              only serve today’s needs but also contribute to long-term
              sustainability. We strive to design and develop solutions that are
              scalable, eco-friendly, and future-proof, ensuring a better
              digital future for everyone.
            </div>
          </li>
        </ul>
      </div>
      <SidebarSeparator className="bg-secondary" />
      <div className="py-3">
        <h2>Vision Statement</h2>
        <p>
          At Phoenix Code Studio, our vision is to revolutionize the way small
          businesses establish their digital presence. We strive to provide
          bespoke, impactful solutions that go beyond functionality, capturing
          the unique identity, values, and aspirations of every client we serve.
          By creating meaningful digital experiences, we aim to empower
          businesses to connect with their audiences, foster growth, and leave a
          lasting impact in an increasingly digital world.
        </p>
        <p>
          We aspire to set a new benchmark in web development by seamlessly
          blending creativity, cultural elegance, and cutting-edge technology.
          Our focus is not just on delivering visually appealing designs but on
          building user-centered solutions that are intuitive, engaging, and
          tailored to meet the evolving needs of our clients.
        </p>
        <p>
          At the heart of our vision is the belief that every small business
          deserves the opportunity to thrive online. We see ourselves as
          partners in their journey, working collaboratively to craft
          experiences that inspire trust, drive success, and open doors to new
          possibilities.
        </p>
        <p>
          Our ultimate goal is to become a trusted name in digital
          transformation—pioneering a more inclusive, innovative, and
          sustainable future for businesses of all sizes. Through dedication,
          expertise, and passion, we aim to empower small businesses to reach
          their full potential and make their mark in the digital landscape.
        </p>
      </div>
    </main>
  );
};

export default aboutUs;
