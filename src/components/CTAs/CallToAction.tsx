import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const CallToAction = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section className="space-y-6 mx-auto px-4 py-9">
      <h1 className="text-3xl md:text-4xl">Ready to Get Started?</h1>
      <p className="mt-4">
        We’re excited to help you bring your digital vision to life! Whether you
        need a custom website design, a brand transformation, or a comprehensive
        digital strategy, we’re here to guide you through every step of the
        process.
      </p>
      <p>
        Let’s collaborate to create something extraordinary.{" "}
        <Button
          variant={"link"}
          onClick={() => router.push("/contact-us")}
          className="m-0 p-0 h-fit"
        >
          Contact us
        </Button>{" "}
        today to discuss your business goals and discover tailored digital
        solutions that deliver measurable results!
      </p>
      <Button
        className="my-3 w-1/2"
        variant={"accent"}
        onClick={navigateToContact}
      >
        Start Today!
      </Button>
    </section>
  );
};

export default CallToAction;
