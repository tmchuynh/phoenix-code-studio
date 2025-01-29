import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="py-16 w-10/12 mx-auto text-balance text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
        Come Be a Part of Our Team
      </h2>
      <p>
        Are you ready to take your career to the next level? At our company,
        we're searching for{" "}
        <span className="underline underline-offset-4 text-primary">
          passionate
        </span>
        ,{" "}
        <span className="underline underline-offset-4 text-primary">
          talented
        </span>{" "}
        individuals who want to make a real impact in a dynamic and innovative
        environment. Whether you're a developer, designer, marketer, or someone
        who thrives on solving challenges, we have a place for you. By joining
        our team, you'll be part of a culture that values{" "}
        <span className="underline underline-offset-4 text-primary">
          creativity
        </span>
        ,{" "}
        <span className="underline underline-offset-4 text-primary">
          collaboration
        </span>
        , and{" "}
        <span className="underline underline-offset-4 text-primary">
          growth
        </span>
        . We offer opportunities to work on exciting projects, learn new skills,
        and contribute to shaping the future of technology and business. Explore
        our open positions and discover how you can play a key role in our
        success while advancing your own career.
      </p>
      <p>
        Don’t just work —{" "}
        <span className="text-primary font-extrabold">THRIVE</span>. Come join a
        team where your ideas are valued, your contributions are recognized, and
        your career aspirations are supported. Let’s grow and achieve great
        things together.
      </p>
      <Button
        className="my-3 w-1/2"
        onClick={() => (window.location.href = "/careers")}
      >
        View Open Positions
      </Button>
    </section>
  );
};

export default JoinUs;
