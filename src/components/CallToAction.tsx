import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section className="mx-auto space-y-6 px-4 py-9">
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
          className="p-0 m-0 h-fit"
        >
          Contact us
        </Button>{" "}
        today to discuss your business goals and discover tailored digital
        solutions that deliver measurable results!
      </p>
      <Button
        className="w-1/2 my-3"
        variant={"accent"}
        onClick={navigateToContact}
      >
        Start Today!
      </Button>
    </section>
  );
};

export default CallToAction;
