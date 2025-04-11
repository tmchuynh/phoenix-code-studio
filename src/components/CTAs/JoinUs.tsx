import { Button } from "../ui/button";

const JoinUs = () => {
  return (
    <section className="space-y-7 mx-auto px-20 py-16 text-balance text-end">
      <h1 className="font-bold text-3xl text-primary md:text-4xl">
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
