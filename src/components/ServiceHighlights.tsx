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

          <h3 className="text-xl md:text-2xl font-semibold text-center text-secondary mt-4">
            Custom Website Design & Redesign
          </h3>

          <p className="text-center mt-4">
            Elevate your online presence with expertly crafted UX/UI design, SEO
            optimization, and custom website solutions tailored to your business
            needs.
          </p>
        </div>

        {/* Service 2 - Content Creation */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaPen className="text-4xl text-accent-5 mx-auto" />

          <h3 className="text-xl md:text-2xl font-semibold text-center text-secondary mt-4">
            Content Creation
          </h3>

          <p className="text-center mt-4">
            Engage your audience with compelling content—from blog posts and
            newsletters to eBooks, technical writing, and onboarding materials.
            We craft content that resonates.
          </p>
        </div>

        {/* Service 3 - SEO Optimization */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaSearch className="text-4xl text-accent-5 mx-auto" />

          <h3 className="text-xl md:text-2xl font-semibold text-center text-secondary mt-4">
            Brand Rebranding & Storytelling
          </h3>

          <p className="text-center mt-4">
            Elevate your brand with strategic rebranding and compelling
            storytelling. We help you connect with a wider audience, build
            lasting customer trust, and create a brand identity that keeps
            customers coming back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
