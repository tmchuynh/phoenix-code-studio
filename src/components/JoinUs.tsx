import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="py-16 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
          Come Be a Part of Our Team
        </h2>
        <p className="text-lg mb-4">
          Are you ready to take your career to the next level? At our company,
          we're searching for passionate, talented individuals who want to make
          a real impact in a dynamic and innovative environment. Whether you're
          a developer, designer, marketer, or someone who thrives on solving
          challenges, we have a place for you.
        </p>
        <p className="text-lg mb-4">
          By joining our team, you'll be part of a culture that values
          creativity, collaboration, and growth. We offer opportunities to work
          on exciting projects, learn new skills, and contribute to shaping the
          future of technology and business. Explore our open positions and
          discover how you can play a key role in our success while advancing
          your own career.
        </p>
        <p className="text-lg">
          Don’t just work—thrive. Come join a team where your ideas are valued,
          your contributions are recognized, and your career aspirations are
          supported. Let’s grow and achieve great things together.
        </p>
        <Button onClick={() => (window.location.href = "/careers")}>
          View Open Positions
        </Button>
      </div>
    </section>
  );
};

export default JoinUs;
