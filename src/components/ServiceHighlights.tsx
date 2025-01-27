import { FaDesktop, FaPen, FaSearch } from "react-icons/fa";

const ServiceHighlights = () => {
  return (
    <section className="my-16 w-full">
      <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Service 1 - Custom Website Design */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaDesktop className="text-4xl text-accent-1 mx-auto" />
          <h3 className="text-xl md:text-2xl font-semibold text-center text-secondary mt-4">
            Custom Website Design
          </h3>
          <p className="text-center mt-4 md:text-lg">
            Tailored websites that reflect your brand’s unique identity and
            engage your audience.
          </p>
        </div>

        {/* Service 2 - Content Creation */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaPen className="text-4xl text-accent-1 mx-auto" />
          <h3 className="text-xl md:text-2xl font-semibold text-center text-secondary mt-4">
            Content Creation
          </h3>
          <p className="text-center mt-4 md:text-lg">
            From blog posts to eBooks, we create compelling content that
            connects with your audience.
          </p>
        </div>

        {/* Service 3 - SEO Optimization */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground">
          <FaSearch className="text-4xl text-accent-1 mx-auto" />
          <h3 className="text-xl md:text-2xl font-semibold text-center text-secondary mt-4">
            SEO Optimization
          </h3>
          <p className="text-center mt-4 md:text-lg">
            Improve your online visibility and drive traffic with our expert SEO
            strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
