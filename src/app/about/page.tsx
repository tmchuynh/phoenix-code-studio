import { SidebarSeparator } from "@/components/ui/sidebar";
import { FaHandshake, FaMedal } from "react-icons/fa";
import { GiGrowth, GiTechnoHeart } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";

const aboutUs = () => {
  return (
    <main className="w-11/12 mx-auto py-3">
      <div>
        <h1>About Us</h1>
        <p>
          At Crimson Lotus Creations, we blend cultural elegance with
          cutting-edge technology to create bespoke digital experiences.
          Inspired by the lotus flower—a symbol of growth, resilience, and
          beauty—we specialize in helping small businesses flourish in the
          digital world.
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
          Crimson Lotus Creations is here to empower your business with a
          digital presence that feels personal, professional, and inspiring.
          Let’s work together to transform your online presence and help your
          business bloom.
        </p>
      </div>
      <SidebarSeparator className="bg-secondary" />
      <div className="py-3">
        <h2>Mission Statement</h2>
        <p>
          At Crimson Lotus Creations, our mission is to empower small businesses
          by transforming their digital presence into a bespoke reflection of
          their unique brand identity. Rooted in the values of creativity,
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
            <MdBiotech
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Creativity and Innovation:{" "}
              </span>
              We leverage creativity and cutting-edge technology to craft
              impactful digital solutions that bring our clients’ visions to
              life.
            </div>
          </li>
          <li className="flex">
            <GiTechnoHeart
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Authenticity:{" "}
              </span>
              We create digital experiences that reflect the genuine identity
              and values of our clients.
            </div>
          </li>
          <li className="flex">
            <FaMedal
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Excellence:{" "}
              </span>
              We deliver exceptional, user-friendly solutions while striving for
              continuous growth and innovation.
            </div>
          </li>
          <li className="flex">
            <SiLevelsdotfyi
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Empowerment:{" "}
              </span>
              We equip small businesses with the tools and support needed to
              thrive in the digital space.
            </div>
          </li>
          <li className="flex">
            <FaHandshake
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Collaboration:{" "}
              </span>
              We prioritize open communication, working closely with clients to
              ensure their goals are at the heart of every project.
            </div>
          </li>
          <li className="flex">
            <GiGrowth
              className="flex-shrink-0 text-secondary mt-2 mr-3"
              style={{ fontSize: "24px" }}
            />
            <div>
              <span className="font-BonaNovaSC_Bold text-secondary">
                Community Impact:{" "}
              </span>
              We use our expertise to create meaningful digital experiences that
              help businesses grow and contribute to their communities.
            </div>
          </li>
        </ul>
      </div>
      <SidebarSeparator className="bg-secondary" />
      <div className="py-3">
        <h2>Vision Statement</h2>
        <p>
          At Crimson Lotus Creations, our vision is to revolutionize the way
          small businesses establish their digital presence. We strive to
          provide bespoke, impactful solutions that go beyond functionality,
          capturing the unique identity, values, and aspirations of every client
          we serve. By creating meaningful digital experiences, we aim to
          empower businesses to connect with their audiences, foster growth, and
          leave a lasting impact in an increasingly digital world.
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
