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
    <section className="my-16 w-11/12 mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-0 text-center">
        Who We Are
      </h2>
      <h3 className="text-center mb-4">
        Elevating Brands with Cutting-Edge Digital Solutions
      </h3>
      <p className="text-center mx-auto">
        At Phoenix Code Studio, we are more than just web developers, UX
        designers, and content creators—we are digital strategists committed to
        helping businesses dominate the online marketplace. Our expertise lies
        in custom web development, UX/UI design, SEO optimization, and content
        marketing, creating high-performance digital experiences that engage
        users and drive measurable results.
      </p>
      <p className="text-center mx-auto mb-8">
        We take a collaborative, data-driven approach, ensuring that every
        website, brand strategy, and digital solution is optimized for search
        engines, mobile responsiveness, and seamless user experience. Whether
        you need a SEO-optimized website, a conversion-driven eCommerce
        platform, or engaging content marketing, our solutions are tailored to
        boost online visibility, improve brand positioning, and maximize
        conversions. At Phoenix Code Studio, we don’t just build websites—we
        empower brands to lead, grow, and thrive in the ever-evolving digital
        landscape.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-7 w-full md:w-11/12 lg:w-full mx-auto">
        {/* Creativity & Innovation */}
        <div className="text-center">
          <FaRegLightbulb className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Creativity & Innovation</h3>
          <p>
            We combine imagination and technology to craft unique,
            forward-thinking digital solutions. By embracing emerging trends and
            pushing creative boundaries, we deliver impactful, future-ready
            experiences that set your brand apart.
          </p>
        </div>

        {/* Adaptability & Growth */}
        <div className="text-center">
          <GrGrow className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Adaptability & Growth</h3>
          <p>
            We thrive on change and innovation, continuously evolving to stay
            ahead in the digital landscape. Our solutions are flexible,
            future-proof, and aligned with emerging trends, ensuring long-term
            success.
          </p>
        </div>

        {/* Authenticity */}
        <div className="text-center">
          <FaSeedling className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Authenticity</h3>
          <p>
            We craft genuine digital experiences that reflect each brand’s
            unique identity and values. Our solutions build authentic
            connections with audiences, ensuring a lasting impact.
          </p>
        </div>

        {/* Excellence */}
        <div className="text-center">
          <FaStar className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Excellence</h3>
          <p>
            We deliver exceptional, user-focused solutions that go beyond
            expectations. Driven by innovation and continuous growth, we push
            boundaries to create cutting-edge web experiences.
          </p>
        </div>

        {/* Empowerment */}
        <div className="text-center">
          <FaHandsHelping className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Empowerment</h3>
          <p>
            We equip small businesses with the tools, resources, and support
            needed to thrive online. Our goal is to help them grow, compete, and
            succeed in the ever-evolving digital marketplace.
          </p>
        </div>

        {/* Collaboration & Communication */}
        <div className="text-center">
          <FaHandshake className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">
            Collaboration & Communication
          </h3>
          <p>
            Success starts with clear, open communication. We work closely with
            our clients, ensuring their ideas and goals shape every project,
            leading to tailored solutions that truly deliver results.
          </p>
        </div>

        {/* Community Impact */}
        <div className="text-center">
          <FaUsers className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Community Impact</h3>
          <p>
            We believe in using technology for positive change. Our work goes
            beyond serving clients—we create digital solutions that empower
            businesses, strengthen communities, and drive meaningful impact.
          </p>
        </div>

        {/* Sustainability */}
        <div className="text-center">
          <FaRecycle className="text-6xl text-accent-5 mx-auto mb-4" />
          <h3 className="font-bold text-secondary">Sustainability</h3>
          <p>
            We create scalable, eco-friendly, and future-proof digital solutions
            through efficient design, responsible development, and adaptable
            technology, ensuring long-term sustainability for businesses and
            communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
