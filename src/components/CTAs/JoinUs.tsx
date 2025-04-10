import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="py-16 px-20 mx-auto text-balance text-end space-y-7">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Join Our Team – Build the Future with Us
      </h1>
      <p>
        Are you ready to elevate your career and be part of something truly
        impactful? At Phoenix Code Studio, we’re seeking passionate, driven
        professionals who are eager to innovate, collaborate, and create
        cutting-edge digital solutions. Whether you specialize in development,
        design, marketing, or strategy, we have a place for you.
      </p>

      <p>
        Here, you’ll work on exciting, high-impact projects, expand your skill
        set, and contribute to shaping the future of technology and business. We
        foster a culture of creativity, growth, and teamwork, where your ideas
        are valued, and your potential is limitless. We believe in fostering
        talent, encouraging collaboration, and empowering our team to push
        boundaries. Here, your ideas matter, your skills grow, and your
        contributions make a difference.
      </p>

      <Button
        className="my-3 w-1/2"
        variant={"accent"}
        onClick={() => (window.location.href = "/info/career")}
      >
        View Open Positions
      </Button>
    </section>
  );
};

export default JoinUs;
