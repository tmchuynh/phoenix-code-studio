import { FaDesktop, FaPen, FaSearch } from "react-icons/fa";

const ServiceHighlights = () => {
  return (
    <section className="my-16 w-11/12 mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Service 1 - Custom Website Design */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaDesktop className="text-4xl text-accent-5 mx-auto" />

          <h3 className="font-semibold text-center text-secondary mt-4">
            Custom Website Design & Redesign
          </h3>

          <p className="text-center mt-4">
            Transform your online presence with custom-crafted websites that
            blend stunning UX/UI design, seamless functionality, and SEO
            optimization. Whether you're launching a new brand or refreshing an
            existing site, our tailored solutions ensure a visually compelling,
            high-performing, and user-friendly experience that drives engagement
            and growth.
          </p>
        </div>

        {/* Service 2 - Content Creation */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaPen className="text-4xl text-accent-5 mx-auto" />

          <h3 className="font-semibold text-center text-secondary mt-4">
            Content Creation
          </h3>

          <p className="text-center mt-4">
            Captivate your audience with high-impact, engaging content designed
            to inform, inspire, and convert. From SEO-optimized blog posts and
            newsletters to eBooks, technical documentation, and onboarding
            materials, we craft compelling narratives that strengthen your
            brand, enhance visibility, and drive meaningful connections. Let
            your content do the talking—and the selling!
          </p>
        </div>

        {/* Service 3 - SEO Optimization */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaSearch className="text-4xl text-accent-5 mx-auto" />

          <h3 className="font-semibold text-center text-secondary mt-4">
            Brand Rebranding & Storytelling
          </h3>

          <p className="text-center mt-4">
            Transform your brand into a powerful, memorable identity with
            strategic rebranding and storytelling that captivates and connects.
            We craft compelling narratives that resonate with your audience,
            build trust, and foster brand loyalty. Whether you’re refreshing
            your image or redefining your message, we help you create an
            authentic, impactful brand that stands out and keeps customers
            coming back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
